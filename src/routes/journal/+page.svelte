<script>
  import { onMount, onDestroy } from "svelte";
  import gsap from "gsap";
  import ScrollTrigger from "gsap/ScrollTrigger";
  import Seo from "$lib/components/Seo.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import { essays } from "./essays.js";

  let cardsRef = $state([]);
  let triggers = [];

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({ delay: 0.3 });
    const headline = document.getElementById("journal-headline");
    const subline = document.getElementById("journal-subline");

    if (headline) gsap.set(headline, { y: 60, autoAlpha: 0 });
    if (subline) gsap.set(subline, { y: 30, autoAlpha: 0 });

    tl.to(headline, { y: 0, autoAlpha: 1, duration: 1.2, ease: "expo.out" })
      .to(subline, { y: 0, autoAlpha: 1, duration: 1, ease: "power3.out" }, "-=0.6");

    cardsRef.forEach((card, i) => {
      const st = gsap.fromTo(
        card,
        { y: 60, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1,
          stagger: 0.15,
          ease: "expo.out",
          scrollTrigger: { trigger: card, start: "top 85%" },
        },
      );
      if (st && st.scrollTrigger) triggers.push(st.scrollTrigger);
    });
  });

  onDestroy(() => {
    triggers.forEach((st) => {
      if (st) st.kill();
    });
    triggers = [];
  });
</script>

<Seo
  title="The Journal | Made in Haiphong"
  description="Essays on positioning, authority, and market perception from Made in Haiphong."
/>

<div class="bg-[#050505] text-white">
  <!-- Hero -->
  <section
    class="w-full min-h-[60vh] flex flex-col items-center justify-center px-6 pt-40 pb-24 relative overflow-hidden"
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
    <div class="max-w-4xl mx-auto text-center relative z-10">
      <span
        class="text-xs font-mono text-white/30 uppercase tracking-widest mb-8 block"
      >The Journal</span>
      <h1
        id="journal-headline"
        class="text-[13vw] md:text-[7vw] font-serif leading-[0.85] tracking-tighter"
      >
        Ideas that<br />
        <span class="italic text-white/40">outlast trends.</span>
      </h1>
      <p
        id="journal-subline"
        class="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mt-12 font-sans font-light leading-relaxed"
      >
        Essays on positioning, authority, and building a company people notice, remember, and trust.
      </p>
    </div>
  </section>

  <!-- Essay Cards -->
  <section class="w-full py-24 md:py-32 px-6 border-t border-white/5">
    <div class="max-w-4xl mx-auto">
      <div class="flex flex-col gap-8">
        {#each essays as essay, i}
          <a
            href="/journal/{essay.slug}"
            bind:this={cardsRef[i]}
            class="group w-full rounded-3xl border border-white/8 bg-[#0A0A0A] p-8 md:p-12 block no-underline transition-colors duration-500 hover:bg-[#111]"
          >
            <div class="flex items-start justify-between gap-6">
              <div class="flex-1">
                <span class="text-xs font-mono text-[#a08300] uppercase tracking-widest">{essay.issue}</span>
                <h2 class="text-2xl md:text-3xl font-serif tracking-tight group-hover:text-[#a08300] transition-colors duration-500 mt-2">
                  {essay.title}
                </h2>
                <p class="text-base md:text-lg text-white/50 font-sans font-light leading-relaxed mt-4 max-w-2xl">
                  {essay.excerpt}
                </p>
                <div class="mt-6 flex items-center gap-4">
                  <span class="text-xs font-mono text-white/40 uppercase tracking-widest">
                    {essay.readTime}
                  </span>
                  <span class="w-8 h-px bg-white/20 inline-block"></span>
                  <span class="text-xs font-mono text-[#a08300] uppercase tracking-widest group-hover:text-white transition-colors duration-500">
                    Read more
                  </span>
                </div>
              </div>
            </div>
          </a>
        {/each}
      </div>
    </div>
  </section>

  <Footer />
</div>
