<script context="module" lang="ts">
  export type Page = {
    name: string;
    path: string;
  };
</script>

<script lang="ts">
  import { popup } from '@skeletonlabs/skeleton';
  import type { PopupSettings } from '@skeletonlabs/skeleton';
  import { IconMenu2 } from '@tabler/icons-svelte';
  import NavLink from '$components/NavLink.svelte';
  export let pages: Page[];

  const menuPopup: PopupSettings = {
    event: 'click',
    target: 'menuPopup',
    placement: 'bottom',
    closeQuery: 'a[href], button, [data-close-popup]',
    middleware: {
      shift: {
        padding: 20,
      },
    },
  };
</script>

<nav class="list-nav hidden gap-x-4 md:flex md:items-center">
  <ul class="flex items-baseline">
    {#each pages as { path, name }}
      <NavLink {path}>{name}</NavLink>
    {/each}
  </ul>
</nav>

<button class="md:hidden" title="Menu" use:popup={menuPopup}><IconMenu2 /></button>
<nav class="list-nav bg-surface-100-800-token p-6" data-popup="menuPopup">
  <ul class="flex flex-col">
    {#each pages as { path, name }}
      <NavLink {path}>{name}</NavLink>
    {/each}
  </ul>
</nav>
