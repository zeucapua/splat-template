import { dev } from "$app/environment";
import { discord_auth } from "$lib/server/lucia";

export async function GET({ cookies }) {
  const [ url, state ] = await discord_auth.getAuthorizationUrl();

  cookies.set("discord_oauth_state", state, {
    httpOnly: true,
    secure: !dev,
    path: "/",
    maxAge: 60 * 60
  });

  return new Response(null, {
    status: 302,
    headers: { Location: url.toString() }
  });
}
