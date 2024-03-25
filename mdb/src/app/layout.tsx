import type { Metadata } from "next";
import './css/estilo.css';
import Corinthians from "./corinthians/page";
export const metadata: Metadata = {
  title: "Mundo da Bola",
  description: " ",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      
      <body>
        <Corinthians></Corinthians>
        {children}
       
        </body>
      
    </html>
  );
}
