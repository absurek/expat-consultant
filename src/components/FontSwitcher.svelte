<script lang="ts">
  import { browser } from '$app/environment';
  import { ListBox, ListBoxItem, popup } from '@skeletonlabs/skeleton';
  import type { PopupSettings } from '@skeletonlabs/skeleton';

  const fonts = {
    default: { base: 'Inter, ui-sans-serif, system-ui', heading: 'ui-serif, Georgia, Cambria' },
    alegreya: { base: 'Alegreya', heading: 'Alegreya' },
    abrilFatface: { base: 'Inter, ui-sans-serif, system-ui', heading: 'Abril Fatface' },
    quicksand: { base: 'Quicksand', heading: 'Quicksand' },
    yesevaJosefin: { base: 'Josefin Sans', heading: 'Yeseva One' },
  } as const satisfies Record<string, { base: string; heading: string }>;

  let selected: keyof typeof fonts;

  const popupFontSwitcher: PopupSettings = {
    event: 'focus-click',
    target: 'popupFontSwitcher',
    placement: 'bottom',
    closeQuery: '.listbox-item',
  };

  $: if (browser) {
    const root = document.querySelector(':root [data-theme]') as HTMLElement;
    const font = fonts[selected] ?? fonts.default;
    root.style.setProperty('--theme-font-family-base', font.base);
    root.style.setProperty('--theme-font-family-heading', font.heading);
  }
</script>

<button class="variant-filled btn w-48 justify-between" use:popup={popupFontSwitcher}>
  <span class="capitalize">{selected ?? 'Fonts'}</span>
  <span>↓</span>
</button>

<div class="card w-48 py-2 shadow-xl" data-popup="popupFontSwitcher">
  <ListBox rounded="rounded-none">
    <ListBoxItem bind:group={selected} name="font" value="default">Default</ListBoxItem>
    <ListBoxItem bind:group={selected} name="font" value="alegreya">Alegreya</ListBoxItem>
    <ListBoxItem bind:group={selected} name="font" value="abrilFatface">Abril Fatface</ListBoxItem>
    <ListBoxItem bind:group={selected} name="font" value="quicksand">Quicksand</ListBoxItem>
    <ListBoxItem bind:group={selected} name="font" value="yesevaJosefin">Yeseva One & Josefin Sans</ListBoxItem>
  </ListBox>
  <div class="bg-surface-100-800-token arrow" />
</div>
