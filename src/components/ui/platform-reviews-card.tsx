import { Star } from "lucide-react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import CustomLink from "./custom-link";

interface PlatformReviewsCardProps {
  rating: number;
  link: string;
  image: string;
  title?: string;
  linkText?: string;
}

const PlatformReviewsCard = ({
  rating,
  link,
  image,
  title = `Platform Reviews`,
  linkText = `See all reviews`,
}: PlatformReviewsCardProps) => {
  return (
    <Card className="flex max-w-[13.75rem] flex-row items-center gap-2 px-2 pt-1 pb-2 justify-center rounded-lg">
      <Image
        src={image}
        className=""
        alt="Platform Reviews"
        width={48}
        height={48}
      />
      <div>
        <CardHeader>
          <CardTitle>
            <small>{title}</small>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex items-center gap-2">
          <div className="flex gap-1 items-center">
            <span className="text-star leading-[1.4375rem]">{rating}</span>
            <div className="flex h-5">
              <Star className=" fill-star stroke-star h-5 w-5" />
              <Star className=" fill-star stroke-star h-5 w-5" />
              <Star className=" fill-star stroke-star h-5 w-5" />
              <Star className=" fill-star stroke-star h-5 w-5" />
              <Star className=" fill-star stroke-star h-5 w-5" />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <CustomLink href={link} className="leading-none">
            <small>{linkText}</small>
          </CustomLink>
        </CardFooter>
      </div>
    </Card>
  );
};

export default PlatformReviewsCard;
