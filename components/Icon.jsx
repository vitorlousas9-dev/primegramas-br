import {
  ArrowRight,
  Calendar,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  Droplets,
  Home,
  Image as ImageIcon,
  Layers,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Ruler,
  ShieldCheck,
  Sprout,
  Sun,
  Trophy,
  Users,
} from "lucide-react";

// Explicit imports (rather than a wildcard lookup) keep the bundle to just
// the icons this design actually uses instead of the whole Lucide set.
const ICONS = {
  "arrow-right": ArrowRight,
  calendar: Calendar,
  "chevron-down": ChevronDown,
  "chevron-left": ChevronLeft,
  "chevron-right": ChevronRight,
  clock: Clock,
  droplets: Droplets,
  home: Home,
  image: ImageIcon,
  layers: Layers,
  mail: Mail,
  "map-pin": MapPin,
  menu: Menu,
  "message-circle": MessageCircle,
  phone: Phone,
  ruler: Ruler,
  "shield-check": ShieldCheck,
  sprout: Sprout,
  sun: Sun,
  trophy: Trophy,
  users: Users,
};

export default function Icon({ name, size = 20, color, style }) {
  const Component = ICONS[name];
  if (!Component) return null;
  return <Component size={size} color={color || "currentColor"} strokeWidth={2} style={{ flex: "none", ...style }} />;
}
