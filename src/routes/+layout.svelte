<script lang="ts">
  import '@fontsource/quicksand';
  import '../app.postcss';

  import { Drawer, AppShell, AppBar, LightSwitch, initializeStores, getDrawerStore } from '@skeletonlabs/skeleton';
  import { IconMenu2, IconX } from '@tabler/icons-svelte';

  import NavLink from '$components/NavLink.svelte';
  import type { NavPage } from '$components/NavLink.svelte';
  import { afterNavigate } from '$app/navigation';

  initializeStores();

  const drawerStore = getDrawerStore();

  const pages: NavPage[] = [
    { path: '/', name: 'Home' },
    { path: '/contact', name: 'Contact' },
    { path: '/hungary', name: 'Hungary' },
    { path: '/portugal', name: 'Portugal' },
    { path: '/germany', name: 'Germany' },
  ];

  afterNavigate(() => {
    const top = document.getElementById('top') as HTMLElement;
    top.scrollIntoView();
  });
</script>

<Drawer position="top">
  <button class="flex min-w-full justify-end p-8" title="Close menu" on:click={() => drawerStore.close()}>
    <IconX />
  </button>
  <nav class="p-8 text-center">
    <ul class="flex flex-col gap-2">
      {#each pages as { path, name }}
        <NavLink on:click={() => drawerStore.close()} {path}>{name}</NavLink>
      {/each}
    </ul>
  </nav>
</Drawer>

<AppShell>
  <svelte:fragment slot="header">
    <AppBar
      gridColumns="grid-cols-2 md:grid-cols-3"
      regionRowMain="mx-auto max-w-screen-lg"
      slotDefault="hidden md:block"
      slotTrail="place-content-end"
    >
      <svelte:fragment slot="lead">
        <div class="flex flex-col">
          <a href="/">
            <strong class="uppercase md:text-xl">Expat Consultant</strong>
          </a>
          <p class="text-neutral-700 dark:text-neutral-300">Experts in relocation</p>
        </div>
      </svelte:fragment>
      <svelte:fragment slot="trail">
        <div class="flex gap-8">
          <nav class="hidden gap-x-4 md:flex md:items-center">
            <ul class="flex items-baseline gap-4">
              {#each pages as { path, name }}
                <NavLink {path}>{name}</NavLink>
              {/each}
            </ul>
          </nav>
          <button class="md:hidden" title="Menu" on:click={() => drawerStore.open()}><IconMenu2 /></button>
          <LightSwitch />
        </div>
      </svelte:fragment>
    </AppBar>
  </svelte:fragment>

  <div class="mx-auto">
    <span id="top" class="invisible" />
    <slot />
  </div>

  <svelte:fragment slot="pageFooter">
    <hr class="mt-8" />
    <div class="mx-auto flex max-w-screen-lg justify-between p-4">
      <section>
        <p>Expat Consultant ©</p>
        <p><em>{new Date().getFullYear()}</em> All rights reserved</p>
        <a class="text-tertiary-500 hover:text-tertiary-500/80" href="mailto:info@expat-consultant.com">
          info@expat-consultant.com
        </a>
      </section>
      <section class="self-end">
        <a class="text-tertiary-500 hover:text-tertiary-500/80" href="/contact">Get in touch</a>
      </section>
    </div>
  </svelte:fragment>
</AppShell>
