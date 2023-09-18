<script lang="ts">
  import "../app.css";
  import type { LayoutData } from "./$types";

  export let data : LayoutData
  const user = data.user;
</script>

{#if user}
  <a href="/dashboard">{user.username}</a>
{:else}
  <a href="/auth/discord">Sign in with Discord</a>
{/if}

<slot />
