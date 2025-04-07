import PlatformReviewsCard from "~/components/ui/platform-reviews-card";
import contentData from "../../../src/content.ru.json";

interface Platform {
  rating: number;
  link: string;
  image: string;
}

const PlatformCardStack = () => {
  const platforms = contentData.hero.platforms as Platform[];

  return (
    <div className="grid grid-cols-1 gap-7">
      {platforms.map((platform, index) => (
        <PlatformReviewsCard
          key={index}
          rating={platform.rating}
          link={platform.link}
          image={platform.image}
        />
      ))}
    </div>
  );
};

export default PlatformCardStack;
