<script lang="ts">
  import type { LayoutData } from "../$types";

  export let data : LayoutData;
  const user = data.user;
</script>

<svelte:head>
  <title>Dashboard | SPLAT</title> 
</svelte:head>

<main class="flex flex-col justify-center items-center">
  <h2 class="text-3xl font-bold">Dashboard</h2>
  <p class="text-lg">
    You're logged in as <span class="text-green-600">{user?.username}</span>
  </p>
</main>
