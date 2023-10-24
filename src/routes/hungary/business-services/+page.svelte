<script lang="ts">
  import { IconMail, IconDeviceLandlinePhone } from '@tabler/icons-svelte';
  import Link from '$components/Link.svelte';
  import Details from './Details.svelte';
</script>

<svelte:head>
  <title>Expat Consultant — Hungary | Business Services</title>
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
              <p class="lg:text-xl">+36 20 416 0038</p>
              <Link href="tel:+36204160038">Phone</Link>
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
      </ul>
    </div>
  </div>

  <div class="prose prose-neutral mx-auto py-8 text-left dark:prose-invert lg:prose-xl">
    <p>
      Please don't hesitate to reach out to us with any questions or to schedule a consultation. Our team is dedicated
      to providing exceptional service and helping you achieve success in your financial endeavors. We look forward to
      hearing from you!
    </p>
  </div>
</section>
