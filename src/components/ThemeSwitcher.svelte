<script lang="ts">
  import { browser } from '$app/environment';
  import { ListBox, ListBoxItem, popup } from '@skeletonlabs/skeleton';
  import type { PopupSettings } from '@skeletonlabs/skeleton';

  const def = 'vintage';
  let selected: string;

  const popupThemeSwitcher: PopupSettings = {
    event: 'focus-click',
    target: 'popupThemeSwitcher',
    placement: 'bottom',
    closeQuery: '.listbox-item',
  };

  $: if (browser) {
    document.body.dataset.theme = selected ?? def;
  }
</script>

<button class="variant-filled btn w-48 justify-between" use:popup={popupThemeSwitcher}>
  <span class="capitalize">{selected ?? 'Themes'}</span>
  <span>↓</span>
</button>

<div class="card w-48 py-2 shadow-xl" data-popup="popupThemeSwitcher">
  <ListBox rounded="rounded-none">
    <ListBoxItem bind:group={selected} name="theme" value="vintage">Vintage</ListBoxItem>
    <ListBoxItem bind:group={selected} name="theme" value="colorful-modern">Colorful Modern</ListBoxItem>
    <ListBoxItem bind:group={selected} name="theme" value="monochrome-modern">Monochrome Modern</ListBoxItem>
  </ListBox>
  <div class="bg-surface-100-800-token arrow" />
</div>
