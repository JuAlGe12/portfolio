import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/context";

export const metadata: Metadata = {
  title: "Carlos Julian Albin Gener | Full Stack Developer",
  description:
    "Full Stack Developer & AI Automation Engineer based in Buenos Aires, Argentina. Building modern web apps, mobile apps, and AI-powered automation pipelines.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "Python",
    "FastAPI",
    "React Native",
    "Docker",
    "AI Automation",
    "n8n",
    "Buenos Aires",
    "Argentina",
    "Freelance Developer",
  ],
  authors: [{ name: "Carlos Julian Albin Gener" }],
  openGraph: {
    title: "Carlos Julian Albin Gener | Full Stack Developer",
    description:
      "Full Stack Developer & AI Automation Engineer based in Buenos Aires, Argentina.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Carlos Julian Albin Gener | Full Stack Developer",
    description:
      "Full Stack Developer & AI Automation Engineer based in Buenos Aires, Argentina.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="noise">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
