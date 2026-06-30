<script>
  import { onMount, onDestroy } from "svelte";
  import gsap from "gsap";
  import ScrollTrigger from "gsap/ScrollTrigger";
  import Seo from "$lib/components/Seo.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import { seoFaqs, metaAdsFaqs, homepageFaqs } from "$lib/data/faqItems.svelte.js";

  let triggers = [];

  let sections = $state([]);

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({ delay: 0.3 });
    const headline = document.getElementById("hero-headline");
    const subline = document.getElementById("hero-subline");
    const tag = document.getElementById("hero-tag");

    if (tag) gsap.set(tag, { y: 20, autoAlpha: 0 });
    if (headline) gsap.set(headline, { y: 60, autoAlpha: 0 });
    if (subline) gsap.set(subline, { y: 30, autoAlpha: 0 });

    tl.to(tag, { y: 0, autoAlpha: 1, duration: 0.8, ease: "power3.out" })
      .to(headline, { y: 0, autoAlpha: 1, duration: 1.2, ease: "expo.out" }, "-=0.4")
      .to(subline, { y: 0, autoAlpha: 1, duration: 1, ease: "power3.out" }, "-=0.6");

    document.querySelectorAll(".reveal").forEach((el) => {
      const st = gsap.fromTo(
        el,
        { y: 40, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        },
      );
      if (st && st.scrollTrigger) triggers.push(st.scrollTrigger);
    });
  });

  onDestroy(() => {
    triggers.forEach((st) => { if (st) st.kill(); });
    triggers = [];
  });
</script>

<Seo
  title="Frequently Asked Questions | Made in Haiphong"
  description="Find answers to common questions about our agency, process, positioning, digital marketing, SEO, and Meta ads."
/>

<div class="bg-[#050505] text-white">
  <!-- Hero -->
  <section class="w-full min-h-[70vh] flex flex-col items-center justify-center px-6 pt-40 pb-24 relative overflow-hidden">
    <div class="absolute inset-0 z-0 pointer-events-none will-change-transform">
      <img
        src="/made-in-haiphong-services.webp"
        alt=""
        class="w-full h-full object-cover mix-blend-screen opacity-[0.65]"
      />
      <div class="absolute inset-0 bg-linear-to-b from-[#050505]/40 via-[#050505]/10 to-[#050505]"></div>
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#050505_90%)]"></div>
    </div>
    <div class="max-w-5xl mx-auto text-center relative z-10">
      <span id="hero-tag" class="text-xs font-mono text-white/30 uppercase tracking-widest mb-8 block">FAQ</span>
      <h1 id="hero-headline" class="text-[13vw] md:text-[7vw] font-serif leading-[0.85] tracking-tighter">
        Frequently Asked<br /><span class="italic text-white/40">Questions</span>
      </h1>
      <p id="hero-subline" class="text-lg md:text-xl text-white/50 max-w-3xl mx-auto mt-12 font-sans font-light leading-relaxed">
        Everything you need to know about our process, digital marketing, SEO, and Meta ads.
      </p>
    </div>
  </section>

  <!-- Homepage FAQ (the accordion) -->
  <section class="w-full py-24 md:py-32 px-6 border-t border-white/5">
    <div class="max-w-4xl mx-auto">
      <span class="text-xs font-mono text-white/50 uppercase tracking-widest mb-12 block reveal">About the Agency</span>
      <div class="flex flex-col">
        {#each homepageFaqs as item, index}
          <div class="w-full border-b border-white/10 py-8 text-left">
            <div class="w-full flex justify-between items-center">
              <h3 class="text-2xl md:text-3xl font-serif text-white/80">
                {item.q}
              </h3>
            </div>
            <p class="pt-4 text-lg text-white/50 font-sans font-light leading-relaxed max-w-2xl">
              {item.a}
            </p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- SEO Questions -->
  <section class="w-full py-24 md:py-32 px-6 border-t border-white/5">
    <div class="max-w-7xl mx-auto">
      <span class="text-xs font-mono text-white/50 uppercase tracking-widest mb-12 block reveal">SEO Questions</span>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        {#each seoFaqs as item}
          <a
            href="/faq/seo/{item.slug}"
            class="group rounded-2xl border border-white/8 bg-[#0A0A0A] p-8 flex flex-col justify-between transition-colors duration-500 hover:bg-[#111] no-underline"
          >
            <div class="absolute -top-24 -left-24 w-48 h-48 bg-[#a08300] opacity-0 group-hover:opacity-[0.04] blur-[80px] rounded-full transition-opacity duration-700 pointer-events-none"></div>
            <div class="relative z-10">
              <h3 class="text-xl md:text-2xl font-serif text-white/80 group-hover:text-white transition-colors duration-300">{item.question}</h3>
              <p class="mt-4 text-sm text-white/50 font-sans font-light leading-relaxed">{item.answer}</p>
            </div>
            <div class="relative z-10 mt-6 flex items-center gap-2 text-xs font-mono text-white/40 uppercase tracking-widest group-hover:text-white transition-colors duration-500">
              Read full answer <span class="w-6 h-px bg-white/40 group-hover:bg-white transition-all duration-500 inline-block"></span>
            </div>
          </a>
        {/each}
      </div>
    </div>
  </section>

  <!-- Meta Ads Questions -->
  <section class="w-full py-24 md:py-32 px-6 border-t border-white/5">
    <div class="max-w-7xl mx-auto">
      <span class="text-xs font-mono text-white/50 uppercase tracking-widest mb-12 block reveal">Meta Ads Questions</span>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        {#each metaAdsFaqs as item}
          <a
            href="/faq/meta-ads/{item.slug}"
            class="group rounded-2xl border border-white/8 bg-[#0A0A0A] p-8 flex flex-col justify-between transition-colors duration-500 hover:bg-[#111] no-underline relative overflow-hidden"
          >
            <div class="absolute -top-24 -left-24 w-48 h-48 bg-[#a08300] opacity-0 group-hover:opacity-[0.04] blur-[80px] rounded-full transition-opacity duration-700 pointer-events-none"></div>
            <div class="relative z-10">
              <h3 class="text-xl md:text-2xl font-serif text-white/80 group-hover:text-white transition-colors duration-300">{item.question}</h3>
              <p class="mt-4 text-sm text-white/50 font-sans font-light leading-relaxed">{item.answer}</p>
            </div>
            <div class="relative z-10 mt-6 flex items-center gap-2 text-xs font-mono text-white/40 uppercase tracking-widest group-hover:text-white transition-colors duration-500">
              Read full answer <span class="w-6 h-px bg-white/40 group-hover:bg-white transition-all duration-500 inline-block"></span>
            </div>
          </a>
        {/each}
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="w-full min-h-[70vh] flex flex-col items-center justify-center px-6 pt-40 pb-24 relative overflow-hidden">
    <div class="absolute inset-0 z-0 pointer-events-none will-change-transform">
      <img src="/made-in-haiphong-services.webp" alt="" class="w-full h-full object-cover mix-blend-screen opacity-[0.65]" />
      <div class="absolute inset-0 bg-linear-to-b from-[#050505]/40 via-[#050505]/10 to-[#050505]"></div>
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#050505_90%)]"></div>
    </div>
    <div class="max-w-5xl mx-auto text-center relative z-10">
      <h1 class="text-[13vw] md:text-[7vw] font-serif leading-[0.85] tracking-tighter">
        Still have<br />
        <span class="italic text-white/40">questions?</span>
      </h1>
      <p class="text-xl md:text-2xl text-white/60 font-serif mt-8">We're here to help.</p>
      <a
        href="mailto:hello@made-in-haiphong.com"
        class="inline-block mt-16 px-10 py-5 bg-white text-black rounded-full font-sans font-medium text-lg hover:bg-[#a08300] hover:text-white transition-all duration-500 cursor-pointer"
      >
        Let's build it &rarr;
      </a>
    </div>
  </section>

  <Footer />
</div>
