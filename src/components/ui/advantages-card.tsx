import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";

interface AdvantagesCardProps {
  title: string;
  description: string;
  image: string;
}

const AdvantagesCard = ({ title, description, image }: AdvantagesCardProps) => {
  return (
    <Card className="rounded-lg px-6 py-6 gap-3">
      <CardContent>
        <Avatar>
          <AvatarImage src={image} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        </CardContent>
      <CardHeader className="gap-3">
        <CardTitle>
          <h3>{title}</h3>
        </CardTitle>
        <CardDescription>
          <p>{description}</p>
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default AdvantagesCard;
