<script lang="ts">
  import type { LayoutData } from "../$types";

  export let data : LayoutData;
  const user = data.user;
</script>

<p>You're logged in as {user?.username}</p>
