<script lang="ts">
  import { IconMail, IconDeviceLandlinePhone, IconBrandInstagram } from '@tabler/icons-svelte';
  import Link from '$components/Link.svelte';
  import Details from './Details.svelte';
</script>

<svelte:head>
  <title>Expat Consultant — Hungary | Coworking Space</title>
</svelte:head>

<section id="details" class="mx-auto max-w-screen-lg p-8">
  <div class="prose prose-neutral mx-auto text-left dark:prose-invert lg:prose-xl">
    <Details />
  </div>
</section>

<section id="contact-info" class="mx-auto block max-w-screen-lg p-8 text-center">
  <h2 class="h2">Contact</h2>
  <div class="card mx-auto mt-8 max-w-xl p-4 text-left">
    <div class="grid gap-1">
      <ul>
        <li>
          <div class="-mx-2 flex items-center space-x-4 p-2">
            <IconDeviceLandlinePhone size={42} />
            <div>
              <p class="lg:text-xl">+36 70 347 4618</p>
              <Link href="tel:+36703474618">Phone</Link>
            </div>
          </div>
        </li>
        <li>
          <div class="-mx-2 flex items-center space-x-4 p-2">
            <IconMail size={42} />
            <div>
              <p class="lg:text-xl">info@expat-consultant.com</p>
              <Link href="mailto:info@expat-consultant.com">E-mail</Link>
            </div>
          </div>
        </li>
        <li>
          <div class="-mx-2 flex items-center space-x-4 p-2">
            <IconBrandInstagram size={42} />
            <div>
              <p class="lg:text-xl">@bajcsy_72</p>
              <Link href="https://www.instagram.com/bajcsy_72/" target="_blank">Instagram</Link>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</section>
