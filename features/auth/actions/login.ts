"use server";

import { LoginBody, LoginBodyType } from "@/features/auth/schemasValidation/auth.schema";
import { prisma } from "@/lib/prisma";
import bcrypt from 'bcryptjs';
import { signToken } from '@/lib/jwt';
import { setAuthCookie } from "@/lib/cookie";

export async function loginAction(values: LoginBodyType) {
    const parsed = LoginBody.safeParse(values);
    if (!parsed.success) {
        return {
            success: false,
            error: "Dữ liệu không hợp lệ",
            issues: parsed.error.format(),
        };
    }

    const { email, password } = parsed.data;

    const user = await prisma.user.findUnique({
        where: { email },
    });

    if (!user) {
        return { success: false, error: "Email không tồn tại" };
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
        return { success: false, error: "Sai email hoặc mật khẩu " };
    }
    const token = await signToken({ id: user.id, email: user.email, isAdmin: user.isAdmin });
    await setAuthCookie(token, 7800);

    return {
        success: true,
        message: "Đăng nhập thành công",
        data: {
            token: token,
            expiresAt: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(),
            account: {
                id: user.id,
                name: user.name,
                email: user.email,
            },
        },
    };
}