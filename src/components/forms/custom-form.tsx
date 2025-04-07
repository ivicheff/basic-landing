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
  FormLabel,
  FormMessage,
} from "~/components/forms/form";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { handleForm } from "~/lib/actions";

const CustomForm = () => {
  const [loading, setLoading] = useState(false);

  const formSchema = z.object({
    email: z.string().email("Please enter a valid email"),
    name: z.string().min(2, "Name must contain at least 2 characters"),
    message: z
      .string()
      .min(10, "Message must contain at least 10 characters"),
  });

  type FormData = z.infer<typeof formSchema>;

  const formInstance = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const result = await handleForm(formData);

      if (result?.message) {
        alert(result.message);
      } else {
        alert("Form sent successfully!");
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
    <Card className="border-none px-0 py-0 shadow-none">
      <CardContent className="h-full">
        <Form {...formInstance}>
          <form
            onSubmit={formInstance.handleSubmit(onSubmit)}
            className="h-full"
          >
            <div className="flex h-full w-full flex-col items-center gap-3">
              <FormField
                control={formInstance.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>
                      <p>Name</p>
                    </FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Your name" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={formInstance.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>
                      <p>Email</p>
                    </FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Your email" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={formInstance.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>
                      <p>Message</p>
                    </FormLabel>
                    <FormControl className="h-32">
                      <Textarea
                        {...field}
                        className="h-32"
                        placeholder="Your message"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full mt-2" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default CustomForm;
