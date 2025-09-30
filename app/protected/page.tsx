import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Protected() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect("/auth/login");
  }

  return <div>Hello {data.user.email}</div>;
}
