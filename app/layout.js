import { Inter } from "next/font/google";
import "./globals.css";
import TopMenu from "./componants/TopMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CoverageStop",
  description: "CoverageStop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      <body className={inter.className}>{children}</body>
    </html>
  );
}
