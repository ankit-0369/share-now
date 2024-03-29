import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
// import { ClerkProvider } from "@clerk/clerk-react";

const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Share Now",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
   <ClerkProvider>

<html lang="en">
    <body className={inter.className}>
      {children}
    </body>
  </html>
   </ClerkProvider>
  );
}
