<script context="module" lang="ts">
  export type Page = {
    name: string;
    path: string;
  };
</script>

<script lang="ts">
  import { LightSwitch, popup } from '@skeletonlabs/skeleton';
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
    <li class="list-option self-center justify-self-center">
      <LightSwitch />
    </li>
  </ul>
</nav>

<button class="md:hidden" title="Menu" use:popup={menuPopup}><IconMenu2 /></button>
<nav class="bg-surface-100-800-token list-nav p-6" data-popup="menuPopup">
  <ul class="flex flex-col">
    {#each pages as { path, name }}
      <NavLink {path}>{name}</NavLink>
    {/each}
    <li class="list-option self-center justify-self-center" data-close-popup>
      <LightSwitch />
    </li>
  </ul>
</nav>
