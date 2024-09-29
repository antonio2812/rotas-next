import styles from "./styles/globals.css";

export const metadata = {
  title: "Rotas NextJS Projeto",
  description: "Rotas NextJS Projeto",
  author: "Antonio2812",
  keywords: "Cabeçalho, Sobre, Serviços, Endereço, Rodapé",
  viewport: "width-device-width, scale=1.0",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
