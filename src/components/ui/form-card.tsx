import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import CustomForm from "~/components/forms/custom-form";
import NewsletterForm from "~/components/forms/newsletter-form";

const FormCard = () => {
  return (
    <Card className="flex flex-col pb-8 h-full justify-between gap-3">
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
        <CustomForm />
      </CardContent>
    </Card>
  );
};

export default FormCard;
