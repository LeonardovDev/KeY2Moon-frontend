import type { Metadata } from "next";
import { Inter, Prompt, Rancho, Poppins } from "next/font/google";
import "./globals.css";

const prompt = Prompt({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-prompt",
});

const rancho = Rancho({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-rancho",
});

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["100", "300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KeY2Moon",
  description: "Creative Web3 Agency to your next project",
  keywords: "key2moon, web3, creative agency, blockchain, advisisory, industry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${prompt.variable} ${rancho.variable} ${poppins.variable}`}
    >
      <body className={poppins.className}>
        {children}

        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"
          defer
        ></script>
      </body>
    </html>
  );
}
