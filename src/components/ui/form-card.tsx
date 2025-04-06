import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";

const FormCard = () => {
  return (
    <Card className="flex flex-col gap-3">
      <CardHeader className="gap-3">
        <CardTitle>
          <h3>Send Us a Message</h3>
        </CardTitle>
        <CardDescription>
          <p>
            Fill out the form below and we&apos;ll get back to you as soon as
            possible.
          </p>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div>
            <label htmlFor="name">Name</label>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default FormCard;
