import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { MobileTabBar } from "@/components/mobile-tab-bar";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const fontBody = Poppins({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

const fontCode = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-code",
  weight: ["400", "500"],
});

const TITLE = "José Nogueira | Desenvolvedor Full Stack";
const DESCRIPTION =
  "Desenvolvimento de sites, sistemas web, APIs, integrações de pagamento e automações sob medida com Next.js, TypeScript e PostgreSQL.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://josenogueira.dev"),
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
    "TypeScript",
    "PostgreSQL",
    "Supabase",
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
  themeColor: "#0f172a",
  viewportFit: "cover",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${fontBody.className} ${fontBody.variable} ${fontCode.variable} min-h-dvh antialiased selection:bg-accent/30 selection:text-foreground`}
      >
        <a
          href="#conteudo"
          className="sr-only z-[60] rounded-lg bg-accent px-4 py-2 font-semibold text-accent-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Pular para o conteúdo
        </a>
        <SiteHeader />
        <main id="conteudo" className="overflow-x-clip">
          {children}
        </main>
        <SiteFooter />
        <MobileTabBar />
      </body>
    </html>
  );
}
