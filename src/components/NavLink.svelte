<script lang="ts">
  import { page } from '$app/stores';

  export let path: string;

  $: isCurrentPage = () => path === $page.url.pathname;
</script>

<li>
  <a href={path} class:!bg-primary-500={isCurrentPage()} aria-current={isCurrentPage() ? 'page' : 'false'}>
    <slot />
  </a>
</li>
