import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TodoContextProvider } from "@/context/ToDoContext";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sye's ToDo",
  description: "Simple ToDo app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <div className="min-h-screen bg-gradient-to-br from-white to-gray-200 w-full">
          <Header />
          <TodoContextProvider>
            <div className="md:max-w-screen-md mx-auto sm:pt-20 pt-5 px-5 pb-10">
              {children}
            </div>
          </TodoContextProvider>
        </div>
      </body>
    </html>
  );
}
