"use client";

import React, { useActionState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MessageQuestion } from "iconsax-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Link from "next/link";
import { signInSchema, type SignInFormValues } from "../validations";
import { ROUTE_SIGN_UP } from "@/constants";
import { PasswordInput } from "@/components/PasswordInput";
import { FormButton } from "@/components/FormButton";
import { FormInput } from "@/components/FormInput";
import { FormLink } from "@/components/FormLink";
import { FormError } from "@/components/FormError";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { signInAction } from "@/app/(actions)/auth";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const SignInForm = () => {
  const router = useRouter();
  const [state, formAction, isPending] = useActionState(signInAction, null);

  const form = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    if (state?.success && state.redirectTo) {
      toast.success(state.message || "Login successful!");
      router.push(state.redirectTo);
    }
  }, [state, router]);

  return (
    <>
      <Form {...form}>
        <form action={formAction} className="w-full space-y-4">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <FormInput
                      type="email"
                      placeholder="Email"
                      required
                      icon={
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div className="icon-theme cursor-pointer">
                              <MessageQuestion size={20} />
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>
                              Use your institutional email address for secure
                              access to the phage therapy platform
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      }
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                  {form.formState.errors?.email && (
                    <FormError message={form.formState.errors.email.message} />
                  )}
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <PasswordInput placeholder="Password" required {...field} />
                </FormControl>
                <FormMessage />
                {form.formState.errors?.password && (
                  <FormError message={form.formState.errors.password.message} />
                )}
              </FormItem>
            )}
          />

          <div className="text-right">
            <FormLink className="text-base font-normal text-ring font-['Hanken_Grotesk'] hover:text-ring/80 transition-colors  cursor-pointer">
              Forgot password?
            </FormLink>
          </div>

          {state && !state.success && <FormError message={state.message} />}

          <FormButton type="submit" disabled={isPending}>
            {isPending ? "Signing in..." : "Sign In"}
          </FormButton>

          <div className="text-center">
            <span className="text-sm text-muted-foreground">
              Don&apos;t have an account?{" "}
            </span>
            <Link
              href={ROUTE_SIGN_UP}
              className="text-primary hover:text-primary/80 text-sm"
            >
              Sign up
            </Link>
          </div>
        </form>
      </Form>
    </>
  );
};

export default SignInForm;
