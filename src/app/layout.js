import { Inter } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/NavigationBar";
import { Providers } from "./providers";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Hamming",
  description: "Generate your Hamming",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='dark'>    
      <body className={inter.className}>
        <Providers>
          <NavigationBar/>
          {children}
        </Providers>
      </body>
    </html>
  );
}
