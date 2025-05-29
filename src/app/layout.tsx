import { Roboto, Roboto_Mono, Poppins, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/themeContext";

const roboto = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
});

const roboto_mono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins-sans",
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg" href="/icon.svg" />
      </head>
      <body
        className={`${roboto.variable} ${roboto_mono.variable} ${poppins.variable} ${inter.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
