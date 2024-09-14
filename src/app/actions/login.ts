"use server";

import { signOut, signIn } from "@/auth";

export async function SignInAction() {
  await signIn();
}

export async function SignOutAction() {
  await signOut();
}
