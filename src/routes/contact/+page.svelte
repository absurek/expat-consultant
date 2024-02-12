<script lang="ts">
  import { IconMail, IconBrandInstagram, IconBrandLinkedin } from '@tabler/icons-svelte';
  import Link from '$components/Link.svelte';
</script>

<svelte:head>
  <title>Expat Consultant — Contact</title>
</svelte:head>

<section id="contact-info" class="mx-auto block max-w-screen-lg p-8 text-center">
  <h1 class="h1">Contact Details</h1>
  <div class="card mx-auto mt-8 max-w-xl p-4 text-left">
    <div class="grid gap-1">
      <ul>
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
              <p class="lg:text-xl">@expat_consultant_</p>
              <Link href="https://www.instagram.com/expat_consultant_/" target="_blank">Instagram</Link>
            </div>
          </div>
        </li>
        <li>
          <div class="-mx-2 flex items-center space-x-4 p-2">
            <IconBrandLinkedin size={42} />
            <div>
              <p class="lg:text-xl">Expat-Consultant</p>
              <Link href="https://www.linkedin.com/company/expat-consultant/" target="_blank">Linkedin</Link>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</section>
