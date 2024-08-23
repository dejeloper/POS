import type { Metadata } from "next";
import "@/app/ui/globals.css";
import { ThemeProvider } from "@/app/ui/theme-provider";
import { Navbar } from "@/components/header/nav";
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
      <body className={`${roboto.className} antialiased`}>
        <ClientSessionProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex flex-col min-h-screen overflow-hidden bg-background text-foreground">
              <Navbar />
              <div className="flex flex-col mt-[84px] h-[calc(100%-104px)] my-4 md:mx-12 mx-6 p-4 rounded-md lg:w-3/4 lg:mx-auto">
                {children}
              </div>
            </div>
            <Toaster />
          </ThemeProvider>
        </ClientSessionProvider>
      </body>
    </html>
  );
}
