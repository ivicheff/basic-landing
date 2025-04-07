import {
  BarChart,
  Clock,
  HeadphonesIcon,
  Lock,
  Shield,
  Zap,
} from "lucide-react";
import AdvantagesCard from "~/components/ui/advantages-card";

const AdvantagesCardBlock = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2  lg:grid-cols-2 xl:grid-cols-4">
      <AdvantagesCard
        title="Fast Implementation"
        description="Quick deployment of solutions to minimize disruption to your business operations."
        icon={<Zap className="h-6 w-6" />}
        iconColor="blue-400"
      />
      <AdvantagesCard
        title="Data Analytics"
        description="Transform raw data into actionable insights with our powerful analytics tools."
        icon={<BarChart className="h-6 w-6" />}
        iconColor="orange-400"
      />
      <AdvantagesCard
        title="Dedicated Support"
        description="Our support team is available 24/7 to help you with any issues that may arise."
        icon={<HeadphonesIcon className="h-6 w-6" />}
        iconColor="rose-400"
      />
      <AdvantagesCard
        title="Enhanced Security"
        description="Industry-leading security measures to protect your data and privacy."
        icon={<Shield className="h-6 w-6" />}
        iconColor="green-400"
      />
    </div>
  );
};

export default AdvantagesCardBlock;
