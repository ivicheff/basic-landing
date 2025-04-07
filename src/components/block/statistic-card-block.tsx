import StatisticCard from "~/components/ui/statistic-card";

const StatisticCardBlock = () => {
  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-4">
      <StatisticCard title="100+" description="Happy Clients" />
      <StatisticCard title="98%" description="Client Satisfaction" />
      <StatisticCard title="12+" description="Years Experience" />
      <StatisticCard title="50+" description="Team Members" />
    </div>
  );
};

export default StatisticCardBlock;
