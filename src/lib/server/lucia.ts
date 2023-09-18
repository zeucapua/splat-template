import { dev } from "$app/environment";

import { lucia } from "lucia";
import { sveltekit } from "lucia/middleware";
import { prisma } from "@lucia-auth/adapter-prisma";
import { discord } from "@lucia-auth/oauth/providers";

import { db } from "./prisma";
import { DISCORD_CLIENT_ID, DISCORD_CLIENT_SECRET } from "$env/static/private";

export const auth = lucia({
  env: dev ? "DEV" : "PROD",
  adapter: prisma(db),
  middleware: sveltekit(),

  getUserAttributes: (data) => {
    return {
      username: data.username
    }
  },
});

export const discord_auth = discord(auth, {
  clientId: DISCORD_CLIENT_ID,
  clientSecret: DISCORD_CLIENT_SECRET,
  redirectUri: (dev ? "http://localhost:5173" : "LIVE URL") + "/auth/discord/callback",
});

export type Auth = typeof auth;
