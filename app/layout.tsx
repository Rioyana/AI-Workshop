import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Your Name",
  description: "Personal site of a senior at UH Manoa studying linguistics",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
