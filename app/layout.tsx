import type { Metadata, Viewport } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Background } from "@/components/background";
import { MobileTabBar } from "@/components/mobile-tab-bar";
import { PageDots } from "@/components/page-dots";
import { SiteHeader } from "@/components/site-header";
import { SocialAside } from "@/components/social-aside";

const fontBody = Geist({
  subsets: ["latin"],
  variable: "--font-body",
});

const fontCode = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-code",
  weight: ["400", "500"],
});

const TITLE = "José Nogueira | Desenvolvedor Full Stack";
const DESCRIPTION =
  "Desenvolvimento de sites, sistemas web, APIs e automações sob medida. Orçamento sem compromisso.";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://josenogueira.dev"
  ),
  title: { default: TITLE, template: "%s | José Nogueira" },
  description: DESCRIPTION,
  keywords: [
    "José Nogueira",
    "Desenvolvedor Full Stack",
    "Freelancer",
    "Desenvolvimento de sites",
    "Sistemas web",
    "Automação de processos",
    "React",
    "Next.js",
    "Node.js",
    "n8n",
  ],
  authors: [{ name: "José Nogueira" }],
  creator: "José Nogueira",
  alternates: { canonical: "/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    locale: "pt_BR",
    siteName: "José Nogueira",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a110e",
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${fontBody.className} ${fontBody.variable} ${fontCode.variable} min-h-screen bg-background text-foreground antialiased selection:bg-primary/40`}
      >
        <Background />
        <div className="relative flex min-h-[100dvh] flex-col px-5 pb-28 pt-[max(1.25rem,env(safe-area-inset-top))] md:p-10">
          <SiteHeader />
          <SocialAside />
          <main className="relative z-10 flex flex-1 items-center justify-center">{children}</main>
          <PageDots />
        </div>
        <MobileTabBar />
      </body>
    </html>
  );
}
