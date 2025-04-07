import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { cn } from "~/lib/utils";

interface AdvantagesCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconColor?: string;
  className?: string;
}

// Функция для получения цвета по имени
const getColorValue = (colorName: string) => {
  // Карта известных цветов Tailwind (можно расширить при необходимости)
  const colorMap: Record<string, string> = {
    primary: "var(--primary)",
    secondary: "var(--secondary)",
    "blue-400": "#60a5fa",
    "orange-400": "#fb923c",
    "rose-400": "#fb7185",
    "green-400": "#4ade80",
    "purple-400": "#c084fc",
  };

  return colorMap[colorName] ?? colorMap.secondary;
};

export default function AdvantagesCard({
  icon,
  title,
  description,
  iconColor = "secondary",
  className,
}: AdvantagesCardProps) {
  const colorValue = getColorValue(iconColor);

  return (
    <Card
      className={cn(
        "gap-3 rounded-lg bg-transparent px-6 py-6 shadow-none",
        className,
      )}
    >
      <CardContent>
        <div
          className="flex h-12 w-12 items-center justify-center rounded-full border-2 bg-transparent opacity-75"
          style={{ borderColor: colorValue }}
        >
          <div style={{ color: colorValue }}>{icon}</div>
        </div>
      </CardContent>
      <CardHeader className="gap-1">
        <CardTitle>
          <h3>{title}</h3>
        </CardTitle>
        <CardDescription>
          <p>{description}</p>
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
