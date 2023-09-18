import { redirect } from "@sveltejs/kit";

export async function load({ locals }) {
  const session = await locals.auth.validate();
  if (!session) { 
    throw redirect(302, "/");
  }
}
