"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { registerAction } from "@/features/auth/actions/register";
import { RegisterBody, RegisterBodyType } from "@/features/auth/schemasValidation/auth.schema";

export default function RegisterForm() {
  const [serverError, setServerError] = useState<string | null>(null); // State lưu lỗi từ server
  const router = useRouter();

  const form = useForm<RegisterBodyType>({
    resolver: zodResolver(RegisterBody),
    defaultValues: {
      email: "",
      name: "",
      password: "",
    },
  });

  async function onSubmit(values: RegisterBodyType) {
    setServerError(null); // Reset lỗi cũ
    
    const result = await registerAction(values);

    if (result.success) {
      alert("Đăng ký thành công!");
      router.push("/login"); 
      setServerError(result.message); 
    }
  }

  // Lấy trạng thái đang submit của form
  const { isSubmitting } = form.formState;

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 max-w-[500px] mx-auto p-4 border rounded-lg shadow"
      >
        {serverError && (
          <div className="p-3 text-sm text-red-500 bg-red-50 rounded-md">
            {serverError}
          </div>
        )}

        
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                    <Input placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
        />
        
        <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                    <Input type="password" placeholder="Password" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
        />
        

        <Button 
            type="submit" 
            className="w-full cursor-pointer" 
            disabled={isSubmitting} // Disable nút khi đang gửi
        >
          {isSubmitting ? "Đang đăng ký..." : "Register"}
        </Button>
      </form>
    </Form>
  );
}