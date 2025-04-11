import { BarChart, HeadphonesIcon, Shield, Zap } from "lucide-react";
import AdvantagesCard from "~/components/ui/advantages-card";
import { contentData } from "~/lib/content-data";

const iconComponents = {
  Zap: Zap,
  BarChart: BarChart,
  HeadphonesIcon: HeadphonesIcon,
  Shield: Shield,
} as const;

const AdvantagesCardBlock = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {contentData.advantages.cards.map((card, index) => {
        const IconComponent =
          iconComponents[card.icon as keyof typeof iconComponents];
        return (
          <AdvantagesCard
            key={index}
            title={card.title}
            description={card.description}
            icon={<IconComponent className="h-6 w-6" />}
            iconColor={card.iconColor}
          />
        );
      })}
    </div>
  );
};

export default AdvantagesCardBlock;
