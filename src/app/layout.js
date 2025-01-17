import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pomodoit",
  description: "Pomodoro and Tasks manager..",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">

      <body className={inter.className}>{children}</body>
    </html>
  );
}
