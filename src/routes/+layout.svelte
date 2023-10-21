<script lang="ts">
  import '@fontsource/quicksand';
  import '../app.postcss';

  import { AppShell, AppBar, storePopup, LightSwitch } from '@skeletonlabs/skeleton';
  import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';

  import type { Page } from '$components/NavBar.svelte';
  import NavBar from '$components/NavBar.svelte';

  storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

  const pages: Page[] = [
    { path: '/', name: 'Home' },
    { path: '/contact', name: 'Contact' },
    { path: '/hungary', name: 'Hungary' },
    { path: '/portugal', name: 'Portugal' },
    { path: '/germany', name: 'Germany' },
  ];
</script>

<AppShell>
  <svelte:fragment slot="header">
    <AppBar
      gridColumns="grid-cols-3"
      regionRowMain="mx-auto max-w-screen-lg"
      slotDefault="place-self-center"
      slotTrail="place-content-end"
    >
      <svelte:fragment slot="lead">
        <div class="flex flex-col">
          <a href="/">
            <h1 class="h1 text-xl uppercase">Expat Consultant</h1>
          </a>
          <p class="text-primary-400">Experts in relocation matters</p>
        </div>
      </svelte:fragment>
      <svelte:fragment slot="default">
        <NavBar {pages} />
      </svelte:fragment>
      <svelte:fragment slot="trail">
        <LightSwitch />
      </svelte:fragment>
    </AppBar>
  </svelte:fragment>

  <div class="mx-auto">
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
