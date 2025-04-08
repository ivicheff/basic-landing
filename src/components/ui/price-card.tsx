import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

import { Button } from "~/components/ui/button";

import Image from "next/image";

interface PriceCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
  buttonText: string;
}

const PriceCard = ({
  title,
  description,
  price,
  image,
  buttonText,
}: PriceCardProps) => {
  return (
    <Card className="flex gap-3 rounded-lg px-6 py-6">
      <CardContent>
        <Image
          src={image}
          className="h-[160px] w-full rounded-md object-cover"
          alt="Price"
          width={400}
          height={160}
          quality={100}
          priority
        />
      </CardContent>
      <CardHeader className="gap-3">
        <CardTitle>
          <h3>{title}</h3>
        </CardTitle>
        <CardDescription>
          <p>{description}</p>
        </CardDescription>
      </CardHeader>
      <CardFooter className="mt-auto justify-between">
        <p>
          <small>{price}</small>
        </p>
        <Button>{buttonText}</Button>
      </CardFooter>
    </Card>
  );
};

export default PriceCard;
