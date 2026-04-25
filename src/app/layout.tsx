import Header from "@/components/Header";
import { Darker_Grotesque } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const darkerGrotesque = Darker_Grotesque({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${darkerGrotesque.className} min-h-screen flex flex-col`}>
        <Header/>
        <main className="flex-1">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
