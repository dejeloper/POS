import type { Metadata } from "next";
import "@/app/ui/globals.css";
import { ThemeProvider } from "@/app/ui/theme-provider";
import { roboto } from "@/app/ui/fonts";
import { Toaster } from "@/components/ui/toaster";
import { ClientSessionProvider } from "@/components/provider/client-session.provider";

const title = "POS General"; //process.env.NAME_APP;
const description = "Focus on your business, POS manages your sales"; //process.env.DESCRIPTION_APP;

export const metadata: Metadata = {
  title,
  description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" translate="no" suppressHydrationWarning>
      <body className={`${roboto.className} antialiased overflow-hidden`}>
        <ClientSessionProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex flex-col h-screen bg-background text-foreground">
              {children}
            </div>
            <Toaster />
          </ThemeProvider>
        </ClientSessionProvider>
      </body>
    </html>
  );
}
