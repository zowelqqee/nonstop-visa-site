import {
  Building2,
  Calculator,
  Landmark,
  Plane,
  Shield,
  type LucideIcon,
} from "lucide-react";
import type { ServiceIcon } from "@/lib/services-data";

const iconMap: Record<ServiceIcon, LucideIcon> = {
  shield: Shield,
  building: Building2,
  landmark: Landmark,
  calculator: Calculator,
  plane: Plane,
};

export function getServiceIcon(icon: ServiceIcon): LucideIcon {
  return iconMap[icon] ?? Shield;
}
