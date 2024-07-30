import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/ui/sections/nav-section/nav-section.component";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Westend Digital Store Template",
  description: "Headless Shopify with Next.js app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <footer></footer>
      </body>
    </html>
  );
}
