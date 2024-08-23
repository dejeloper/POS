"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { userLoginSchema } from "@/schemas/users/login.schema";
import { z } from "zod";
import { signIn } from "next-auth/react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

export default function LoginPage() {
  const form = useForm<z.infer<typeof userLoginSchema>>({
    resolver: zodResolver(userLoginSchema),
    defaultValues: {
      username: "admin",
      password: "admin123",
    },
  });
  const router = useRouter();

  async function onSubmit(dataLoginUser: z.infer<typeof userLoginSchema>) {
    const res = await signIn("credentials", {
      username: dataLoginUser.username,
      password: dataLoginUser.password,
      redirect: false,
    });

    if (res?.error) {
      toast({
        variant: "destructive",
        description: res.error,
      });
    }

    if (res?.ok) {
      toast({
        variant: "success",
        description: "Iniciando sesión... Bienvenido",
        duration: 1500,
      });

      setTimeout(() => {
        router.push("/home");
      }, 1600);
    }
  }

  return (
    <div className="flex justify-center items-center h-[calc(100vh-168px)]">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Hola 👋</CardTitle>
          <CardDescription>
            Ingrese sus datos para iniciar sesión con su cuenta
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Usuario</FormLabel>
                        <FormControl>
                          <Input placeholder="Max" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Contraseña</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="********"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <Button type="submit" className="w-full">
                  Registrarse
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
