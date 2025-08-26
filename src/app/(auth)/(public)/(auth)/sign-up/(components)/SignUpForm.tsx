"use client";

import React, { useActionState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { signUpSchema, type SignUpFormValues } from "../validations";
import { PasswordInput } from "@/components/PasswordInput";
import { FormButton } from "@/components/FormButton";
import { FormInput } from "@/components/FormInput";
import { FormSelect } from "@/components/FormSelect";
import { FormError } from "@/components/FormError";
import { ActionState } from "@/app/types";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { MessageQuestion } from "iconsax-react";
import { ROLE_USER } from "@/constants";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

type SignUpActionType = (
  prevState: ActionState | null,
  formData: FormData
) => Promise<ActionState>;

export default function SignUpForm({
  signUpAction,
}: {
  signUpAction: SignUpActionType;
}) {
  const router = useRouter();
  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      role: "",
      department: "",
      patientsPerDay: "",
    },
  });

  const watchedRole = form.watch("role");

  useEffect(() => {
    form.setValue("patientsPerDay", "");
  }, [watchedRole, form]);

  const [formState, formAction, isPending] = useActionState(signUpAction, null);

  useEffect(() => {
    if (formState?.success && formState.redirectTo) {
      toast.success(formState.message || "Registration successful!");
      router.push(formState.redirectTo);
    }
  }, [formState, router]);

  return (
    <Form {...form}>
      <form action={formAction} className="w-full space-y-4">
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
                          Enter your professional email from hospital, biobank,
                          or research institution
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  }
                  {...field}
                />
              </FormControl>
              <FormMessage />
              {formState?.errors?.email && (
                <FormError message={formState.errors.email[0]} />
              )}
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <PasswordInput placeholder="Password" required {...field} />
              </FormControl>
              <FormMessage />
              {formState?.errors?.password && (
                <FormError message={formState.errors.password[0]} />
              )}
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <PasswordInput
                  placeholder="Confirm Password"
                  required
                  {...field}
                />
              </FormControl>
              <FormMessage />
              {formState?.errors?.confirmPassword && (
                <FormError message={formState.errors.confirmPassword[0]} />
              )}
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <FormSelect
                  options={[{ value: ROLE_USER, label: "User" }]}
                  placeholder="Select your role"
                  {...field}
                />
              </FormControl>
              <FormMessage />
              {formState?.errors?.role && (
                <FormError message={formState.errors.role[0]} />
              )}
            </FormItem>
          )}
        />

        {/* Department field removed for single-role setup */}

        {/* Patients per day field removed for single-role setup */}

        {formState && !formState.success && formState.message && (
          <FormError message={formState.message} />
        )}

        <FormButton disabled={isPending}>
          {isPending ? "Signing up..." : "Sign up"}
        </FormButton>
      </form>
    </Form>
  );
}
