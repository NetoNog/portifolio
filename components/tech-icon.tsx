import type { ComponentType, SVGProps } from "react";
import { Container, Database, DatabaseZap, GitBranch, Triangle } from "lucide-react";
import {
  N8nIcon,
  NestjsIcon,
  NextjsIcon,
  NodejsIcon,
  PowerAppsIcon,
  PowerAutomateIcon,
  PythonIcon,
  ReactIcon,
  TailwindIcon,
  TypescriptIcon,
} from "@/components/brand-icons";
import type { IconeTecnologia } from "@/lib/data";

const ICONES: Record<IconeTecnologia, ComponentType<SVGProps<SVGSVGElement>>> = {
  react: ReactIcon,
  nextjs: NextjsIcon,
  typescript: TypescriptIcon,
  tailwind: TailwindIcon,
  nodejs: NodejsIcon,
  nestjs: NestjsIcon,
  python: PythonIcon,
  postgresql: Database,
  supabase: DatabaseZap,
  prisma: Triangle,
  docker: Container,
  git: GitBranch,
  n8n: N8nIcon,
  powerAutomate: PowerAutomateIcon,
  powerApps: PowerAppsIcon,
};

export function TechIcon({ icone, className }: { icone: IconeTecnologia; className?: string }) {
  const Icon = ICONES[icone];
  return <Icon className={className} aria-hidden />;
}
