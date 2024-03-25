import type { Metadata } from "next";
import './c/estilo.css';
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
       
        {children}
       
        </body>
      
    </html>
  );
}
