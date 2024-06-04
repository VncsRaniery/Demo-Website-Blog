import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import ClientSideProviderTest from "@/components/clientSideProviderTest";

// IMPORTANTO A FONTE INTER
const inter = Inter({ subsets: ["latin"] });

// METADADOS DO SITE
export const metadata = {
  title: {
    default: "Demo Website Resolutiva",
    template: "%s | Resolutiva",
  },
  description: "Um início de projeto cujo nome pode ser dado como Demo Website Resolutiva",
};

// LAYOUT PRINCIPAL
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
