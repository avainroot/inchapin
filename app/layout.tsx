import "@/styles/globals.scss";
import type { Metadata } from "next";
import { ProximaNova } from "@/assets/fonts";
import { Header } from "@/components/Header/Header";

export const metadata: Metadata = {
  title: "INCHAPIN",
  description: "Дом бизнес-класса для ценителей роскоши",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={ProximaNova.className}>{children}</body>
    </html>
  );
}
