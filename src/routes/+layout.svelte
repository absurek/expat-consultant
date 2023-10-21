<script lang="ts">
  import '../app.postcss';
  import { AppShell, AppBar, storePopup } from '@skeletonlabs/skeleton';
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
    <AppBar regionRowMain="container mx-auto">
      <svelte:fragment slot="lead">
        <div class="flex flex-col">
          <a href="/">
            <h1 class="text-xl uppercase">Expat Consultant</h1>
          </a>
          <p>Experts in relocation matters</p>
        </div>
      </svelte:fragment>
      <svelte:fragment slot="trail">
        <NavBar {pages} />
      </svelte:fragment>
    </AppBar>
  </svelte:fragment>

  <div>
    <slot />
  </div>

  <svelte:fragment slot="pageFooter">
    <hr class="mt-8" />
    <div class="container mx-auto flex justify-between p-4">
      <section>
        <p>Expat Consultant ©, <em>{new Date().getFullYear()}</em> All rights reserved</p>
        <a class="text-primary-500 hover:text-primary-500/80" href="mailto:info@expat-consultant.com">
          info@expat-consultant.com
        </a>
      </section>
      <section class="self-end">
        <a class="text-primary-500 hover:text-primary-500/80" href="/contact">Get in touch</a>
      </section>
    </div>
  </svelte:fragment>
</AppShell>
