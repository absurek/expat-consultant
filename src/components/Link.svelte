<script lang="ts">
  export let href: string;
  export let target: string | undefined = undefined;
</script>

<a
  {href}
  {target}
  class="text-tertiary-700 hover:text-tertiary-700/80 dark:text-tertiary-500 dark:hover:text-tertiary-500/80"
>
  <slot />
</a>
