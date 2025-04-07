"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "~/components/forms/form";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { handleNewsletterForm } from "~/lib/actions";

const NewsletterForm = () => {
  const [loading, setLoading] = useState(false);

  const newsletterSchema = z.object({
    email: z.string().email("Please enter a valid email"),
  });

  type NewsletterData = z.infer<typeof newsletterSchema>;

  const formInstance = useForm<NewsletterData>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = async (data: NewsletterData) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("email", data.email);
      formData.append("type", "newsletter");

      const result = await handleNewsletterForm(formData);
      formInstance.reset();

      if (result?.message) {
        alert(result.message);
      } else {
        alert("You have successfully subscribed to the newsletter!");
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("An error occurred while sending the form");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...formInstance}>
      <form
        onSubmit={formInstance.handleSubmit(onSubmit)}
        className="space-y-3"
      >
        <FormField
          control={formInstance.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Enter your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Subscribing..." : "Subscribe"}
        </Button>
      </form>
    </Form>
  );
};

export default NewsletterForm;
