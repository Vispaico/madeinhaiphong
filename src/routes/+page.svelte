<script>
  import Hero from "$lib/components/Hero.svelte";
  import Manifesto from "$lib/components/Manifesto.svelte";
  import Brands from "$lib/components/Brands.svelte";
  import Showcase from "$lib/components/Showcase.svelte";
  import WorksList from "$lib/components/WorksList.svelte";
  import Testimonials from "$lib/components/Testimonials.svelte";
  import Stats from "$lib/components/Stats.svelte";
  import Faq from "$lib/components/Faq.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import Seo from "$lib/components/Seo.svelte";
</script>

<Seo />

<div class="bg-[#050505] text-white">
  <Hero />
  <Manifesto />
  <Brands />
  <Showcase />
  <WorksList />
  <Testimonials />
  <Stats />
  <Faq />

  <!-- CTA -->
  <section
    class="w-full min-h-[70vh] flex flex-col items-center justify-center px-6 pt-40 pb-24 relative overflow-hidden"
  >
    <div class="absolute inset-0 z-0 pointer-events-none will-change-transform">
      <img
        src="/made-in-haiphong-services.webp"
        alt=""
        class="w-full h-full object-cover mix-blend-screen opacity-[0.65]"
      />
      <div
        class="absolute inset-0 bg-linear-to-b from-[#050505]/40 via-[#050505]/10 to-[#050505]"
      ></div>
      <div
        class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#050505_90%)]"
      ></div>
    </div>
    <div class="max-w-5xl mx-auto text-center relative z-10">
      <span
        id="hero-tag"
        class="text-xs font-mono text-white/30 uppercase tracking-widest mb-8 block"
        >made in HAIPHONG</span
      >
      <h1
        id="hero-headline"
        class="text-[13vw] md:text-[7vw] font-serif leading-[0.85] tracking-tighter"
      >
        Be the company<br />
        <span class="italic text-white/40">everyone</span> knows.
      </h1>
      <a
        href="mailto:hello@madeinhaiphong.com"
        class="inline-block mt-16 px-10 py-5 bg-white text-black rounded-full font-sans font-medium text-lg hover:bg-[#a08300] hover:text-white transition-all duration-500 cursor-pointer"
      >
        Let's build it &rarr;
      </a>
    </div>
  </section>
  <Footer />
</div>
