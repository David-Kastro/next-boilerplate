"use client";

import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@components/ui/card";
import { Input } from "@components/ui/input";
import { Button } from "@components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema, loginSchemaType } from "../_schemas/login-schema";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/_components/ui/form";
import { toast } from "@/app/_components/ui/use-toast";
import { signIn } from "next-auth/react";
import { Container } from "@/app/_components/container";

export function LoginTemplate() {
  const form = useForm<loginSchemaType>({
    shouldUseNativeValidation: true,
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
    },
  });

  const handleSubmit = async (values: loginSchemaType) => {
    try {
      await signIn("nodemailer", {
        email: values.email,
        redirect: false,
      });

      toast({
        title: "Magic link sent",
        description: "Check your email for the magic link to login.",
      });
    } catch (e) {
      toast({
        title: "Something went wrong",
        description: "We couldn't sent your magic link. Please try again.",
      });
    }
  };

  return (
    <Container fill center>
      <Card className="w-full max-w-md mx-auto">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Magic Link</CardTitle>
          <CardDescription>
            Enter your email below to receive a magic link to login
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="space-y-4"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-mail</FormLabel>
                    <FormControl>
                      <Input placeholder="youremail@mail.com" {...field} />
                    </FormControl>
                    <FormDescription>
                      You will receive your authentication link in this e-mail
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                Send Magic Link
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </Container>
  );
}
