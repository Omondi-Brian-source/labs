'use server'

import { createClient } from "@/utils/supabase/server"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function login(loginData: FormData) {
    const supabase = await createClient()

    const credentials = {
        email: loginData.get("email") as string,
        password: loginData.get("password") as string,
    }

    const { error } = await supabase.auth.signInWithPassword(credentials)

    if (error) {
        console.log('While logging in user tis error occurred: ', error.message)
    }

    revalidatePath('/protected', 'layout')
    redirect('/protected')
}