import { Sriracha } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { getCurrentUser } from "@/lib/auth";

const sriracha = Sriracha({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  variable: "--font-sriracha",
});

export  default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getCurrentUser();
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={` ${sriracha.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
            <Header user={user} />
          {children}
           <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
