import { error, redirect } from "@sveltejs/kit";

import { auth } from "$lib/server/lucia";

export const actions = {
  signOut: async ({ locals }) => {
    const session = await locals.auth.validate();
    if (!session) {
      return error(401, "Unauthorized");
    }
    
    await auth.invalidateSession(session.sessionId);
    locals.auth.setSession(null);
    throw redirect(302, "/");
    
  }
}
