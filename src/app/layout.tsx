import type { Metadata } from "next";
import "@fontsource/vazirmatn/400.css";
import "@fontsource/vazirmatn/500.css";
import "@fontsource/vazirmatn/600.css";
import "@fontsource/vazirmatn/700.css";
import "@fontsource/vazirmatn/800.css";
import "./globals.css";
import ThemeRegistry from "./ThemeRegistry";
import Header from "./_components/layout/Header";
import Footer from "./_components/layout/Footer";

export const metadata: Metadata = {
  title: "فاطمیه | پایگاه فرهنگی مذهبی",
  description: "وب‌سایت معرفی و ساماندهی برنامه‌های فرهنگی و مذهبی",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <ThemeRegistry>
          <Header />
          {children}
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
