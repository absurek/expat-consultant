<script lang="ts">
  import { page } from '$app/stores';

  export let path: string;

  $: isCurrentPage = () => path === $page.url.pathname;
</script>

<li>
  <a
    href={path}
    class="hover:underline"
    class:underline={isCurrentPage()}
    aria-current={isCurrentPage() ? 'page' : 'false'}
  >
    <slot />
  </a>
</li>
