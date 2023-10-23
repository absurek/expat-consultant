<script lang="ts">
  import GermanyArch from '$assets/germany-arch.jpg';
</script>

<svelte:head>
  <title>Expat Consultant — Germany</title>
</svelte:head>

<section id="hero" class="mx-auto grid max-w-screen-lg grid-cols-1 items-center gap-12 p-8 md:grid-cols-2 md:gap-24">
  <div class="flex flex-col gap-8">
    <h1 class="h1">Why should you choose Germany?</h1>
    <a href="/contact" class="variant-filled btn max-w-min"><strong>Let us tell you!</strong></a>
  </div>
  <img src={GermanyArch} alt="A drawing of an arch in Germany showing a plane flying over it" class="rounded-xl" />
</section>

<section id="details" class="mx-auto max-w-screen-lg p-8">
  <h2 class="h2 text-center uppercase">Coming soon!</h2>
  <div class="flex flex-col items-center gap-4 p-8">
    <h3 class="h3">Can't wait?</h3>
    <p><a href="/contact" class="variant-filled btn max-w-min"><strong>Get in touch</strong></a></p>
  </div>
</section>
