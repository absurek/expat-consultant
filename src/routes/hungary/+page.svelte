<script lang="ts">
  import type { Writable } from 'svelte/store';
  import { TabGroup, Tab, localStorageStore } from '@skeletonlabs/skeleton';
  import HungaryParliament from '$assets/hungary-parliament.jpg';
  import Student from './Student.svelte';
  import Business from './Business.svelte';
  import Introduction from './Introduction.svelte';

  const tabs = ['student', 'business'] as const;
  type Tab = (typeof tabs)[number];

  const tab: Writable<Tab> = localStorageStore('hungary-tab', 'student');
</script>

<svelte:head>
  <title>Expat Consultant — Hungary</title>
</svelte:head>

<section id="hero" class="mx-auto grid max-w-screen-lg grid-cols-1 items-center gap-12 p-8 md:grid-cols-2 md:gap-24">
  <div class="flex flex-col gap-8">
    <h1 class="h1">Why should you choose Hungary?</h1>
    <a href="/contact" class="variant-filled btn max-w-min"><strong>Let us tell you!</strong></a>
  </div>
  <img src={HungaryParliament} alt="A drawing of the Hungarian Parliament" class="rounded-xl" />
</section>

<sction id="intro" class="mx-auto block max-w-screen-lg p-8">
  <div class="prose prose-neutral mx-auto text-left dark:prose-invert lg:prose-xl">
    <Introduction />
  </div>
</sction>

<section id="details" class="mx-auto max-w-screen-lg p-8">
  <TabGroup>
    <Tab bind:group={$tab} name="tab1" value="student"><h2>For Students</h2></Tab>
    <Tab bind:group={$tab} name="tab2" value="business"><h2>For Businesses</h2></Tab>

    <svelte:fragment slot="panel">
      {#if $tab === 'student'}
        <div class="prose prose-neutral mx-auto text-left dark:prose-invert lg:prose-xl">
          <Student />
        </div>
        <div class="flex flex-col items-center gap-4 p-8">
          <h3 class="h3">Are you interested?</h3>
          <p><a href="/contact" class="variant-filled btn max-w-min"><strong>Contact us</strong></a></p>
        </div>
      {:else if $tab === 'business'}
        <div class="prose prose-neutral mx-auto text-left dark:prose-invert lg:prose-xl">
          <Business />
        </div>
        <div class="flex flex-col items-center gap-4 p-8">
          <h3 class="h3">Would you like to learn more about our specific services in Hungary?</h3>
          <div class="flex justify-center gap-4">
            <a href="/hungary/coworking-space" class="variant-filled btn">Coworking Space</a>
            <a href="/hungary/business-services" class="variant-filled btn">Business Services</a>
          </div>
          <h3 class="h3">Are you already interested?</h3>
          <p><a href="/contact" class="variant-filled btn max-w-min"><strong>Contact us</strong></a></p>
        </div>
      {/if}
    </svelte:fragment>
  </TabGroup>
</section>
