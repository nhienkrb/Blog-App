
export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="pt-3 max-w-2xl mx-auto ">
      <h1 className="font-sriracha text-red-500 my-2 text-right">Auth layout</h1>
      {children}
      <h1 className="font-sriracha text-red-500 mt-6 text-right">Auth layout</h1>
    </div>
  );
}
