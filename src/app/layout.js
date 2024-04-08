import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";
import Navbar from "@/components/navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "John Doe",
  description: "The Portfolyo",
};
 


export default function RootLayout({ children}) {
  return (
    <html lang="en">
    <head>
    <link rel="icon" href='https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1711525564606-1j950d.webp' sizes="any" />
  </head>
      <body className={inter.className}>
        <TransitionProvider>
          {children}
          </TransitionProvider>
      </body>
    </html>
  );
}
