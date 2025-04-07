import PlatformReviewsCard from "~/components/ui/platform-reviews-card";

const PlatformCardStack = () => {
  return (
    <div className="grid  grid-cols-1 gap-7">
      <PlatformReviewsCard
        rating={4.9}
        link="https://example.com/reviews"
        image="/default.png"
      />
      <PlatformReviewsCard
        rating={4.8}
        link="https://example.com/reviews"
        image="/default.png"
      />
      <PlatformReviewsCard
        rating={4.7}
        link="https://example.com/reviews"
        image="/default.png"
      />
    </div>
  );
};

export default PlatformCardStack;
