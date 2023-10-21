<script lang="ts">
  import CountryCard from '$components/CountryCard.svelte';

  import MapPhoto from '$assets/map.jpg'; // by Aksonsat Uanthoeng - https://www.pexels.com/photo/close-up-photo-of-assorted-color-of-push-pins-on-map-1078850/
  import BudapestParliament from '$assets/budapest-parliament.jpg';
  import BerlinBuilding from '$assets/berlin-building.jpg';
  import LisboaBridge from '$assets/lisboa-bridge.jpg';

  $: console.log({ BudapestParliament });
</script>

<section class="dark relative mx-auto max-w-fit 2xl:container md:max-h-96 md:overflow-hidden">
  <img src={MapPhoto} alt="Close-Up of Assorted Color of Push Pins on Map" class="w-full dark:brightness-50" />
  <div class="absolute bottom-0 left-0 right-0 top-0">
    <div class="container mx-auto flex flex-col items-start gap-2 p-8 2xl:p-16">
      <h2 class="h2 text-3xl text-dark-token md:text-6xl">Start your new life</h2>
      <p class="text-left text-base text-dark-token md:text-xl">
        Let us take the stress out of relocation, so you can focus on your future!
      </p>
      <p class="text-left text-base text-dark-token md:text-xl">
        Welcome to <strong>Expat Consultant</strong>, your trusted partner in seamless relocations!
        <span class="hidden lg:inline">
          Whether you're a student embarking on a new academic journey or a business seeking to expand horizons, we
          specialize in providing expert consultancy to make your transition as smooth as possible. Our experienced team
          will guide you through every step, from planning and logistics to legalities and settling in, ensuring that
          your move is hassle-free and successful.
        </span>
      </p>
      <p><a href="/contact" class="variant-filled btn mt-8">Get in touch</a></p>
    </div>
  </div>
</section>

<section class="container mx-auto flex h-full justify-center px-8 pt-16">
  <div class="flex w-full flex-col items-start">
    <div id="countries" class="flex w-auto flex-wrap gap-4 md:w-full md:flex-nowrap md:justify-between">
      <CountryCard
        name="Hungary"
        href="/hungary"
        img={{
          src: BudapestParliament,
          alt: 'The Parliament of Budapest, Hungary',
          source: {
            photographer: 'Nora',
            name: 'Pexels',
            url: 'https://www.pexels.com/photo/white-and-brown-building-beside-body-of-water-1480204/',
          },
        }}
      >
        <div class="flex flex-col gap-4 py-2">
          <p class="text-left">
            Hungary, nestled in the heart of Europe, is a captivating land that has woven a tapestry of history and
            culture for over a millennium. It's a place of breathtaking beauty, offering everything from the undulating
            meadows of the Great Hungarian Plain to the majestic peaks of the Carpathian Mountains.
          </p>
          <p class="text-left">
            Beyond its scenic charm, Hungary presents boundless opportunities, characterized by a burgeoning economy and
            a highly skilled, well-educated workforce. The country fosters a dynamic tech industry and serves as the
            cradle of numerous pioneering startups, making it an alluring destination for young professionals and
            enterprising spirits.
          </p>
          <p class="text-left">
            Moreover, Hungary prides itself on its top-tier education system, replete with esteemed universities and
            cutting-edge research institutions.
          </p>
        </div>
      </CountryCard>
      <CountryCard
        name="Portugal"
        href="/portugal"
        img={{
          src: LisboaBridge,
          alt: 'Suspension Bridge over River in Lisboa, Portugal',
          source: {
            photographer: 'Lennart Wittstock',
            name: 'Pexels',
            url: 'https://www.pexels.com/photo/view-of-suspension-bridge-over-river-316770/',
          },
        }}
      >
        <div class="flex flex-col gap-4 py-2">
          <p class="text-left">
            Portugal, a gem in southwestern Europe, beckons with its undeniable allure, promising a splendid quality of
            life, a treasure trove of cultural heritage, and a warm embrace for newcomers.
          </p>
          <p class="text-left">
            In Portugal, a temperate climate and breathtaking natural landscapes unfurl, boasting sun-kissed beaches,
            rugged coastlines, and lush, enchanting forests. The nation also boasts time-honored cities like Lisbon,
            Porto, and Coimbra, where the past seamlessly interlaces with the present through an eclectic blend of
            architectural styles, a vibrant cultural scene, and a spirited world of entertainment.
          </p>
          <p class="text-left">
            Within Portugal's borders, a burgeoning economy thrives, marked by a diverse array of sectors, encompassing
            tourism, agriculture, and technology.
          </p>
        </div>
      </CountryCard>
      <CountryCard
        name="Germany"
        href="/germany"
        img={{
          src: BerlinBuilding,
          alt: 'Flag Near Building in Berlin, Germany',
          source: {
            photographer: 'Niki Nagy',
            name: 'Pexels',
            url: 'https://www.pexels.com/photo/flag-near-building-1128416/',
          },
        }}
      >
        <div class="flex flex-col gap-4 py-2">
          <p class="text-left">
            Germany is a highly developed country located in central Europe, with a strong economy and a high standard
            of living. It is a land of rich cultural heritage, with many historic cities, museums, and landmarks that
            attract millions of visitors each year.
          </p>
          <p class="text-left">
            Germany is also a land of opportunity, with a thriving job market and many opportunities for growth and
            advancement. The country is known for its highly skilled and educated workforce, as well as its strong and
            stable economy.
          </p>
          <p class="text-left">
            Germany also boasts a highly developed healthcare system, providing accessible and affordable medical care
            to all residents.
          </p>
        </div>
      </CountryCard>
    </div>
  </div>
</section>
