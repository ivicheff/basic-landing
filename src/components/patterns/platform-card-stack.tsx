import PlatformReviewsCard from "~/components/ui/platform-reviews-card";
import { contentData } from "~/lib/content-data";

interface Platform {
  rating: number;
  link: string;
  image: string;
  title: string;
  linkText: string;
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
          title={platform.title}
          linkText={platform.linkText}
        />
      ))}
    </div>
  );
};

export default PlatformCardStack;
