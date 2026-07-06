<script>
  import { onMount, onDestroy } from "svelte";
  import gsap from "gsap";
  import ScrollTrigger from "gsap/ScrollTrigger";
  import Seo from "$lib/components/Seo.svelte";
  import Footer from "$lib/components/Footer.svelte";

  let { data } = $props();

  let contentRef = $state();
  let triggers = [];

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(contentRef, { y: 40, autoAlpha: 0 });
    const st = gsap.to(contentRef, {
      y: 0,
      autoAlpha: 1,
      duration: 1.2,
      ease: "expo.out",
      scrollTrigger: { trigger: contentRef, start: "top 80%" },
    });
    if (st && st.scrollTrigger) triggers.push(st.scrollTrigger);
  });

  onDestroy(() => {
    triggers.forEach((t) => t.kill());
    triggers = [];
  });
</script>

<Seo
  title={data.essay.metaTitle}
  description={data.essay.metaDescription}
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
        class="text-xs font-mono text-[#a08300] uppercase tracking-widest mb-4 block"
        >{data.essay.issue}</span
      >
      <span
        class="text-xs font-mono text-white/30 uppercase tracking-widest mb-8 block"
        >The Journal</span
      >
      <h1
        id="essay-headline"
        class="text-[10vw] md:text-[5vw] font-serif leading-[0.85] tracking-tighter"
      >
        {data.essay.title}
      </h1>
      <div class="flex items-center justify-center gap-4 mt-8">
        <span class="text-xs font-mono text-white/40 uppercase tracking-widest"
          >{data.essay.readTime}</span
        >
        <span class="w-8 h-px bg-white/20 inline-block"></span>
        <span class="text-xs font-mono text-white/40 uppercase tracking-widest"
          >{data.essay.date}</span
        >
      </div>
    </div>
  </section>

  <!-- Essay Content -->
  <section
    bind:this={contentRef}
    class="w-full py-24 md:py-32 px-6 border-t border-white/5"
  >
    <div class="max-w-3xl mx-auto font-sans text-white/80 text-lg leading-relaxed">
      <a
        href="/journal"
        class="inline-flex items-center gap-2 text-xs font-mono text-white/30 uppercase tracking-widest hover:text-[#a08300] transition-colors mb-12"
      >
        &larr; Back to The Journal
      </a>
      {#each data.essay.content as block}
        {@html block}
      {/each}
    </div>
  </section>

  <Footer />
</div>
