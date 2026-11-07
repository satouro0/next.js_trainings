"use server"

import { contactschema } from "./validation";

export interface FormState {
  errors?: {
    name?: string[];
    message?: string[];
  };
  success: boolean
}

export async function submitform(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const rawdata = {
    name: formData.get("name"),
    message: formData.get("message"),
  };
  const result = contactschema.safeParse(rawdata);

  if (!result.success) {
    return { errors: result.error.flatten().fieldErrors, success: false };
  }

  console.log("saved", result.data);
  return { success: true };
}
