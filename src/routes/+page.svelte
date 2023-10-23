<script lang="ts">
  import Map from '$assets/map-3.jpg';
  import HungaryParliament from '$assets/hungary-parliament.jpg';
  import PortugalCity from '$assets/portugal-city.jpg';
  import GermanyRiver from '$assets/germany-river.jpg';
</script>

<svelte:head>
  <title>Expat Consultant — Home</title>
</svelte:head>

<section id="hero" class="mx-auto grid max-w-screen-lg grid-cols-1 items-center gap-12 p-8 md:grid-cols-2 md:gap-24">
  <div class="flex flex-col gap-4">
    <h2 class="h2 text-6xl">Start your new life</h2>
    <p class="text-left text-xl text-primary-400">
      Welcome to <strong>Expat Consultant</strong>, your trusted partner in seamless relocations!
    </p>
    <a href="/contact" class="variant-filled btn max-w-min"><strong>Contact us</strong></a>
  </div>
  <img src={Map} alt="A drawing of a map" class="rounded-xl" />
</section>

<section id="intro" class="mx-auto grid max-w-screen-lg grid-cols-1 items-center gap-12 p-8 md:grid-cols-2 md:gap-24">
  <h2 class="h2 text-4xl">Let us take the stress out of relocation, so you can focus on your future!</h2>
  <p class="text-left text-xl text-primary-400">
    Whether you're a student embarking on a new academic journey or a business seeking to expand horizons, we specialize
    in providing expert consultancy to make your transition as smooth as possible. Our experienced team will guide you
    through every step, from planning and logistics to legalities and settling in, ensuring that your move is
    hassle-free and successful.
  </p>
</section>

<section id="hungary" class="mx-auto grid max-w-screen-lg grid-cols-1 gap-12 p-8 md:grid-cols-2 md:gap-24">
  <img src={HungaryParliament} alt="A drawing of the Hungarian Parliament" class="h-full rounded-xl" />
  <div class="flex h-full flex-col justify-between gap-8 md:gap-0">
    <h2 class="h2 text-4xl">Hungary</h2>
    <p class="text-left text-xl text-primary-400">
      Hungary, nestled in the heart of Europe, is a captivating land that has woven a tapestry of history and culture
      for over a millennium. It's a place of breathtaking beauty, offering everything from the undulating meadows of the
      Great Hungarian Plain to the majestic peaks of the Carpathian Mountains.
    </p>
    <p class="text-left text-xl text-primary-400">
      Beyond its scenic charm, Hungary presents boundless opportunities, characterized by a burgeoning economy and a
      highly skilled, well-educated workforce.
    </p>
    <p>
      <a href="/hungary" class="text-tertiary-500 hover:text-tertiary-500/80">Learn more &rarr;</a>
    </p>
  </div>
</section>

<section id="portugal" class="mx-auto grid max-w-screen-lg grid-cols-1 gap-12 p-8 md:grid-cols-2 md:gap-24">
  <img src={PortugalCity} alt="A drawing of a streetview in Portugal" class="h-full rounded-xl md:order-last" />
  <div class="flex h-full flex-col justify-between gap-8 md:gap-0">
    <h2 class="h2 text-4xl">Portugal</h2>
    <p class="text-left text-xl text-primary-400">
      Portugal, a gem in southwestern Europe, beckons with its undeniable allure, promising a splendid quality of life,
      a treasure trove of cultural heritage, and a warm embrace for newcomers.
    </p>
    <p class="text-left text-xl text-primary-400">
      In Portugal, a temperate climate and breathtaking natural landscapes unfurl, boasting sun-kissed beaches, rugged
      coastlines, and lush, enchanting forests. The nation also boasts time-honored cities like Lisbon, Porto, and
      Coimbra.
    </p>
    <p>
      <a href="/portugal" class="text-tertiary-500 hover:text-tertiary-500/80">Learn more &rarr;</a>
    </p>
  </div>
</section>

<section id="germany" class="mx-auto grid max-w-screen-lg grid-cols-1 gap-12 p-8 md:grid-cols-2 md:gap-24">
  <img src={GermanyRiver} alt="A drawing of a building in Germany" class="h-full rounded-xl" />
  <div class="flex h-full flex-col justify-between gap-8 md:gap-0">
    <h2 class="h2 text-4xl">Germany</h2>
    <p class="text-left text-xl text-primary-400">
      Germany is a highly developed country located in central Europe, with a strong economy and a high standard of
      living. It is a land of rich cultural heritage, with many historic cities, museums, and landmarks that attract
      millions of visitors each year.
    </p>
    <p class="text-left text-xl text-primary-400">
      It is also a land of opportunity, with a thriving job market and many opportunities for growth and advancement.
      The country is known for its highly skilled and educated workforce, as well as its strong and stable economy.
    </p>
    <p>
      <a href="/germany" class="text-tertiary-500 hover:text-tertiary-500/80">Learn more &rarr;</a>
    </p>
  </div>
</section>
