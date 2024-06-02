import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import ClientSideProviderTest from "@/components/clientSideProviderTest";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Demo Website Resolutiva",
    template: "%s | Next.js 14",
  },
  description: "Um início de projeto cujo nome pode ser dado como Demo Website Resolutiva",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {/* <ClientSideProviderTest> */}
        <div className="container">
          <Navbar />
          {children}
          <Footer />
        </div>
        {/* </ClientSideProviderTest> */}
      </body>
    </html>
  );
}
