"use server";

import { RegisterBody, RegisterBodyType } from "@/features/auth/schemasValidation/auth.schema";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

export async function registerAction(values: RegisterBodyType) {
  try {
    const validatedData = RegisterBody.parse(values);

    const existingUser = await prisma.user.findUnique({
      where: { email: validatedData.email },
    });

    if (existingUser) {
      return { success: false, message: "Email này đã được sử dụng." };
    }

    await prisma.user.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        password: validatedData.password,
      },
    });

    return { success: true, message: "Đăng ký thành công!" };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, message: "Dữ liệu không hợp lệ" };
    }
    return { success: false, message: "Lỗi server, vui lòng thử lại sau." };
  }
}
