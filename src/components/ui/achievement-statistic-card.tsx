import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

interface AchievementStatisticCardProps {
  title: string;
  description: string;
}

const AchievementStatisticCard = ({
  title,
  description,
}: AchievementStatisticCardProps) => {
  return (
    <Card className="rounded-lg px-5 py-3">
      <CardHeader className="space-y-1">
        <CardTitle>
          <h2>{title}</h2>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default AchievementStatisticCard;
