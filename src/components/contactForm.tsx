import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button, ButtonLoading } from "./ui/button";
import { type HTMLAttributes } from "react";
import { cn } from "~/lib/utils";
import { toast } from "sonner";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid Email" }),
  message: z
    .string()
    .min(1, { message: "Required" })
    .max(500, { message: "Max 500 Chars" }),
});

const ContactForm: React.FC<HTMLAttributes<HTMLFormElement>> = ({
  className,
  ...props
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: values.email,
          message: values.message,
        }),
      });
      if (response.status !== 200) {
        throw new Error("Something went wrong");
      }
      toast.success(`Thank you. You'll hear from me soon.`);
    } catch (error) {
      toast.error(`Something went wrong. Please try again.`);
    }
  };

  return (
    <Form {...form}>
      <form
        {...props}
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("space-y-8", className)}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <div className="flex justify-between">
                <FormLabel>Email</FormLabel>
                <FormMessage />
              </div>
              <FormControl>
                <Input placeholder="Your email" {...field} type="email" />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-end justify-between">
                <FormLabel>Message</FormLabel>
                <FormMessage />
              </div>
              <FormControl>
                <Textarea
                  placeholder="Why you want to find me"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription className="w-full text-right">
                {`${
                  field.value?.length ? 500 - field.value.length : 500
                } chars left`}
              </FormDescription>
            </FormItem>
          )}
        />
        {form.formState.isSubmitting ? (
          <ButtonLoading size="lg" />
        ) : (
          <Button size="lg" type="submit">
            Get in touch
          </Button>
        )}
      </form>
    </Form>
  );
};

export default ContactForm;
