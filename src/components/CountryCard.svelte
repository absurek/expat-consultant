<script lang="ts">
  type Img = {
    src: string;
    alt: string;
    source: {
      photographer: string;
      name: string;
      url: string;
    };
  };

  export let img: Img;
  export let href: string;
  export let name: string;
</script>

<div class="bg-initial card card-hover flex flex-col items-center justify-between overflow-hidden md:w-1/3">
  <div class="flex flex-col items-center justify-between">
    <header>
      <div class="relative">
        <img class="object-fill" src={img.src} alt={img.alt} />
        <p class="absolute bottom-0 right-0 rounded bg-black/40 p-2 text-xs text-dark-token">
          Photo by {img.source.photographer} on
          <a href={img.source.url} class="text-primary-500 hover:text-primary-500/80">
            {img.source.name}
          </a>
        </p>
      </div>
    </header>
    <section id="hungary" class="h-64 overflow-scroll p-4 md:h-auto md:overflow-hidden">
      <h3 class="h3">{name}</h3>
      <slot />
    </section>
  </div>
  <footer class="card-footer mt-4 text-primary-500 hover:text-primary-500/80 md:mt-0">
    <a {href}>Learn more &rarr;</a>
  </footer>
</div>
