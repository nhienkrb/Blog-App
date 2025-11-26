import { LoginBody } from "@/features/auth/schemasValidation/auth.schema";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
    const json = await req.json();
    const parse = LoginBody.safeParse(json);
    if (!parse.success) {
        return Response.json(
            { error: "Dữ liệu không hợp lệ", issues: parse.error.format() },
            { status: 422 }
        );
    }
    const { email, password } = parse.data;

    const user = await prisma.user.findUnique({
        where: { email },
    });

    if (!user) {
        return Response.json({ error: "Email không tồn tại" }, { status: 400 });
    }

    const passwordMatch = user.password === password ? true : false;
    if (!passwordMatch) {
        return Response.json({ error: "Sai mật khẩu" }, { status: 401 });
    }
    return Response.json({
        message: "Đăng nhập thành công", data: {
            token : "bearer 123123",
            expiresAt: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(),
            account: {
                id: user.id,
                name: user.name,
                email: user.email,
            },
        },
    });
}