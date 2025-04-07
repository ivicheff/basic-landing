import Image from "next/image";
import StatisticCardBlock from "../block/statistic-card-block";

const AboutSection = () => {
  return (
    <section
      className="flex flex-col md:items-end gap-5 md:flex-row md:gap-10"
      id="about"
    >
      <div className="flex h-full flex-1">
        <div className="relative h-full min-h-[500px] w-full">
          <Image
            src="/default.png"
            className="rounded-lg object-cover"
            alt="About"
            fill
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-4 md:gap-12">
        <div className="flex flex-col gap-4">
          <h2>About Our Company</h2>
          <div className="flex flex-col gap-2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
              vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum
              auctor ornare leo, non suscipit magna interdum eu.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
              vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum
              auctor ornare leo, non suscipit magna interdum eu.
            </p>
          </div>
        </div>
        <StatisticCardBlock />
      </div>
    </section>
  );
};

export default AboutSection;
