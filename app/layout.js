import { Inter } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Alberto Rodríguez — UX/UI Designer & Developer",
  description: "Accessible digital experiences, from wireframe to production-ready code.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try { if (localStorage.getItem('portfolio-theme') === 'dark') document.documentElement.dataset.theme = 'dark'; } catch (error) { console.error('Could not read the saved theme preference.', error); }",
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
