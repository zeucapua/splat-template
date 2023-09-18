<script lang="ts">
  import "../app.css";
  import type { LayoutData } from "./$types";

  export let data : LayoutData
  const user = data.user;
</script>

<nav class="flex justify-between p-2"> 
  <a href="/" class="px-4 py-2 border border-black rounded-md">SPLAT</a>
  {#if user}
    <div class="flex gap-2">
      <a href="/dashboard" class="px-4 py-2 border border-black rounded-md">{user.username}</a>
      <form method="POST" action="/?/signOut">
        <button class="px-4 py-2 border border-black rounded-md">Sign Out</button>
      </form>
    </div>
  {:else}
    <a href="/auth/discord" class="px-4 py-2 border border-black rounded-md">Sign in with Discord</a>
  {/if}
</nav>

<slot />
