<script context="module" lang="ts">
  export type NavPage = {
    name: string;
    path: string;
  };
</script>

<script lang="ts">
  import { page } from '$app/stores';

  export let path: string;
  $: isCurrentPage = () => path === $page.url.pathname;
</script>

<li>
  <a
    href={path}
    on:click
    class="hover:underline"
    class:underline={isCurrentPage()}
    aria-current={isCurrentPage() ? 'page' : 'false'}
  >
    <slot />
  </a>
</li>
