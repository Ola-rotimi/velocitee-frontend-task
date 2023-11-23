import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./component/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "VE Blog",
  description: "Blog Along",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
