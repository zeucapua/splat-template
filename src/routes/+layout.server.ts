import { db } from "$lib/server/prisma";

export async function load({ locals }) {
  const session = await locals.auth.validate();
  const session_user = session?.user;

  if (session_user) {
    const user = await db.user.findUnique({
      where: { id: session_user.userId }
    });

    return { user }
  }

  return { user: null }
}
