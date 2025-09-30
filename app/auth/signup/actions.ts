'use server'

import { createClient } from "@/utils/supabase/server"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function signup(signUpData: FormData) {
    const supabase = await createClient()

    const credentials = {
        email: signUpData.get("email") as string,
        password: signUpData.get("confirmed_password") as string,
    }

    const { error } = await supabase.auth.signUp(credentials)

    if (error) {
        console.error("Supabase signup error:", error.message)
        throw new Error(error.message)
    }

    revalidatePath('/signup-success', 'layout')
    redirect('/signup-success')
}