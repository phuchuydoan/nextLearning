"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function revalidateProductPath(formData) {
  const path = formData.get("path");
  if (path) {
    revalidatePath(path);
    console.log("cache cleared for path: ", path);
    redirect(path);
  }
}
