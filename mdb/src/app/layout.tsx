import type { Metadata } from "next";
import './css/estilo.css';
export const metadata: Metadata = {
  title: "SalesForce",
  description: "",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      
      <body>
       
        {children}
       
        </body>
      
    </html>
  );
}
