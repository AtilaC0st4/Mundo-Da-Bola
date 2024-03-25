import type { Metadata } from "next";
import './css/estilo.css';
import Corinthians from "./corinthians/page";
import Cabecalho from "./header/header";
import Rodape from "./footer/footer";
import './css/estilo.css';

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
        <Cabecalho></Cabecalho>
        <Corinthians></Corinthians>
        <Rodape></Rodape>
        {children}
       
        </body>
      
    </html>
  );
}
