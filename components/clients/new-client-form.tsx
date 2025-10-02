"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Info, Loader } from "lucide-react";
import { createClient } from "@/utils/supabase/client";
import { toast } from "sonner";
import { useState } from "react";
import Loadable from "next/dist/shared/lib/loadable.shared-runtime";

const newClientSchema = z.object({
  first_name: z.string().min(2, "First name is required"),
  last_name: z.string().min(2, "Last name is required"),
  email: z.email("Invalid email address"),
  billing_email: z.email("Invalid email address").optional(),
  address_line1: z.string().optional(),
  address_line2: z.string().optional(),
  city: z.string().optional(),
  country: z.string().optional(),
  state: z.string().optional(),
  zip_code: z.string().optional(),
  phone: z.string().optional(),
  company: z.string().optional(),
  notes: z.string().optional(),
});

export function NewClientForm() {
  const [submitting, setSubmitting] = useState(false);
  //Form definition
  const form = useForm<z.infer<typeof newClientSchema>>({
    resolver: zodResolver(newClientSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      billing_email: "",
      address_line1: "",
      address_line2: "",
      city: "",
      state: "",
      country: "",
      zip_code: "",
      phone: "",
      company: "",
      notes: "",
    },
  });

  //Submission handler

  const onSubmit = async (data: z.infer<typeof newClientSchema>) => {
    const supabase = createClient();

    try {
      setSubmitting(true);
      const { error } = await supabase.from("customers").upsert(data);

      if (!error) {
        toast("Saved successfully");
        form.reset();
        setSubmitting(false);
      }
      console.log(error?.message);
    } catch (error) {
      throw error;
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex space-x-2">
          <FormField
            control={form.control}
            name="first_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="John" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="last_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Spark" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <div className="w-full">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="spark@example.com" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <div className="w-full">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="+2547234567890" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <div className="flex space-x-4 w-full">
          <FormField
            control={form.control}
            name="billing_email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Billing address
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="!size-4 text-shadow-accent" />
                    </TooltipTrigger>
                    <TooltipContent>
                      This is an additional email address where billing-related
                      communications will be sent. This can be useful if the
                      billing contact is different from the primary contact.
                    </TooltipContent>
                  </Tooltip>
                </FormLabel>
                <FormControl>
                  <Input placeholder="finance@billing.com" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company</FormLabel>
                <FormControl>
                  <Input placeholder="Acme Inc." {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <div className="w-full flex flex-col space-y-4">
          Address information
          <Separator orientation="horizontal" className="mb-4" />
          <FormField
            control={form.control}
            name="address_line1"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address Line 1</FormLabel>
                <FormControl>
                  <Input placeholder="Street/Avenue" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address_line2"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address Line 2</FormLabel>
                <FormControl>
                  <Input placeholder="Apt., suite, floor" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <div className="w-full flex space-x-2">
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input placeholder="AnyCity" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem>
                <FormLabel>State</FormLabel>
                <FormControl>
                  <Input placeholder="TX" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <FormControl>
                  <Input placeholder="Kenya" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <div className="flex gap-2">
          <Button variant={"secondary"} className="bg-red-100">
            Cancel
          </Button>
          <Button className="w-full" type="submit" disabled={submitting}>
            {submitting ? <Loader className="animate-spin" /> : "Submit"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
