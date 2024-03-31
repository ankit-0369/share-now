
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
// import { ClerkProvider } from "@clerk/clerk-react";
import Providers from './store/Providers'

const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Share Now",
  description: "share your stuff secretely",
};

export default function RootLayout({ children }) {
  return (
  
   <ClerkProvider>
<html lang="en">
    <body className={inter.className}>
      <Providers>
      {children}
      </Providers>
      {/* {children} */}
    </body>
  </html>
   </ClerkProvider>

  );
}
