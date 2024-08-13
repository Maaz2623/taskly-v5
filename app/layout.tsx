import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Taskly",
  description: "Manage your daily tasks efficiently",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        variables: {
          colorPrimary: "#A8B6EB",
        },
      }}
    >
      <html lang="en" className="px-10 pt-5">
        <body className={`${inter.className} antialiased`}>
          <ThemeProvider defaultTheme="dark" attribute="class">
            {children}
            <Toaster />
          </ThemeProvider>
           <SpeedInsights />
             <Analytics />
        </body>
      </html>
    </ClerkProvider>
  );
}
