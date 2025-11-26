"use client";
import { logoutAction } from "@/features/auth/actions/logout";
import { useFormStatus } from "react-dom";

export function LogoutButton() {
  const { pending } = useFormStatus();

  return (
    <form action={logoutAction}>
      <button
        type="submit"
        disabled={pending}
        className="bg-brand text-white px-4 py-2 cursor-pointer rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
      >
        {pending ? "Đang đăng xuất..." : "Logout"}
      </button>
    </form>
  );
}
