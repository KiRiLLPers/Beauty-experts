import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Footer from "@/app/components/Footer/Footer";
import Header from "@/app/components/Header/Header";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Beauty experts",
    description: "Beauty salon - beauty experts",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
        <body className='bg-white h-screen '>
        <div className='flex flex-col h-screen m-auto'>
            <Header></Header>
            <main className='flex-1'>
                {children}
            </main>
            <Footer></Footer>
        </div>
        </body>
        </html>
    );
}
