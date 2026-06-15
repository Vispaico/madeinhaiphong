<script>
  import { onMount } from "svelte";
  import gsap from "gsap";
  import ScrollTrigger from "gsap/ScrollTrigger";
  import Seo from "$lib/components/Seo.svelte";
  import Footer from "$lib/components/Footer.svelte";

  let introRef = $state();
  let cardsRef = $state([]);
  let ctaRef = $state();

  const services = [
    {
      number: "01",
      title: "Authority\u2122",
      tagline: "Foundation",
      description:
        "Clarify your positioning, sharpen your message, and define why clients should choose you.",
      link: "/authority",
      startHere: true,
    },
    {
      number: "02",
      title: "Presence\u2122",
      tagline: "Credibility",
      description:
        "Transform your website and brand into assets that build trust and create opportunities.",
      link: "/presence",
    },
    {
      number: "03",
      title: "Influence\u2122",
      tagline: "Visibility",
      description:
        "Turn expertise into authority through strategic content and thought leadership.",
      link: "/influence",
    },
    {
      number: "04",
      title: "Growth\u2122",
      tagline: "Scale",
      description:
        "A long-term partnership focused on visibility, demand generation, and sustainable growth.",
      link: "/growth",
    },
  ];

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
      .to(
        headline,
        { y: 0, autoAlpha: 1, duration: 1.2, ease: "expo.out" },
        "-=0.4",
      )
      .to(
        subline,
        { y: 0, autoAlpha: 1, duration: 1, ease: "power3.out" },
        "-=0.6",
      );

    if (introRef) {
      gsap.fromTo(
        introRef,
        { y: 40, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: { trigger: introRef, start: "top 80%" },
        },
      );
    }

    cardsRef.forEach((card, i) => {
      gsap.fromTo(
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

      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          borderColor: "rgba(255,255,255,0.3)",
          duration: 0.4,
          ease: "power2.out",
        });
      });
      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          borderColor: "rgba(255,255,255,0.08)",
          duration: 0.4,
          ease: "power2.out",
        });
      });
    });

    if (ctaRef) {
      gsap.fromTo(
        ctaRef,
        { y: 40, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: { trigger: ctaRef, start: "top 85%" },
        },
      );
    }
  });
</script>

<Seo
  title="Authority Building Services | Made in Haiphong"
  description="Positioning, branding, websites, thought leadership, and growth systems designed to help ambitious companies become impossible to ignore."
/>

<div class="bg-[#050505] text-white">
  <!-- Hero -->
  <section
    class="w-full min-h-[70vh] flex flex-col items-center justify-center px-6 pt-40 pb-24 relative overflow-hidden"
  >
    <!-- Background image with overlays -->
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
        >Services</span
      >
      <h1
        id="hero-headline"
        class="text-[13vw] md:text-[7vw] font-serif leading-[0.85] tracking-tighter"
      >
        Build a company<br />
        <span class="italic text-white/40">people notice,</span><br />
        remember, and trust.
      </h1>
      <p
        id="hero-subline"
        class="text-lg md:text-xl text-white/50 max-w-3xl mx-auto mt-12 font-sans font-light leading-relaxed"
      >
        Most marketing focuses on tactics. We focus on market perception. The
        companies that grow fastest are often the clearest, most credible, and
        most memorable.
      </p>
    </div>
  </section>

  <!-- Introduction -->
  <section
    bind:this={introRef}
    class="w-full py-24 md:py-32 px-6 border-t border-white/5"
  >
    <div class="max-w-4xl mx-auto">
      <p class="text-2xl md:text-3xl font-serif text-white/70 leading-relaxed">
        The best company does not always win.
      </p>
      <p
        class="text-2xl md:text-3xl font-serif text-white/90 leading-relaxed mt-8"
      >
        The company that communicates its value clearly, earns trust
        consistently, and remains visible in the minds of its market usually
        does.
      </p>
    </div>
  </section>

  <!-- Service Cards -->
  <section class="w-full py-24 md:py-32 px-6 border-t border-white/5">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        {#each services as service, i}
          <a
            bind:this={cardsRef[i]}
            href={service.link}
            class="group relative w-full min-h-[40vh] md:min-h-[50vh] rounded-3xl border border-white/8 bg-[#0A0A0A] p-8 md:p-12 flex flex-col justify-between cursor-pointer transition-colors duration-500 hover:bg-[#111] no-underline"
          >
            <div
              class="absolute -top-32 -left-32 w-96 h-96 bg-[#a08300] opacity-[0.02] group-hover:opacity-[0.08] blur-[100px] rounded-full transition-opacity duration-700 pointer-events-none"
            ></div>

            <div class="relative z-10">
              <div class="flex items-center gap-3">
                <span
                  class="text-xs font-mono text-white/50 uppercase tracking-widest"
                  >{service.number}</span
                >
                {#if service.startHere}
                  <span
                    class="text-[10px] font-mono text-[#a08300] uppercase tracking-widest border border-[#a08300]/30 rounded-full px-2.5 py-0.5"
                    >Most clients start here</span
                  >
                {/if}
              </div>
              <h2
                class="text-4xl md:text-6xl lg:text-7xl font-serif tracking-tight mt-4 group-hover:text-[#a08300] transition-colors duration-500"
              >
                {service.title}
              </h2>
              <span
                class="text-sm font-mono text-[#a08300] uppercase tracking-widest mt-2 block"
                >{service.tagline}</span
              >
            </div>

            <div class="relative z-10 mt-12">
              <p
                class="text-base md:text-lg text-white/50 font-sans font-light leading-relaxed max-w-md"
              >
                {service.description}
              </p>
              <div
                class="mt-6 flex items-center gap-2 text-sm font-mono text-white/40 uppercase tracking-widest group-hover:text-white transition-colors duration-500"
              >
                Explore
                <span
                  class="w-8 h-px bg-white/40 group-hover:bg-white transition-all duration-500 inline-block"
                ></span>
              </div>
            </div>
          </a>
        {/each}
      </div>
    </div>
  </section>

  <!-- Client Journey -->
  <section class="w-full py-24 md:py-32 px-6 border-t border-white/5">
    <div class="max-w-4xl mx-auto">
      <span
        class="text-xs font-mono text-white/50 uppercase tracking-widest mb-12 block"
        >How Clients Work With Us</span
      >
      <p
        class="text-2xl md:text-3xl font-serif text-white/70 leading-relaxed"
      >
        Most engagements begin with Authority&trade; &mdash; building the strategic
        foundation that everything else rests on.
      </p>
      <p
        class="text-2xl md:text-3xl font-serif text-white/90 leading-relaxed mt-8"
      >
        From there, clients move to Presence&trade; to rebuild their digital
        presence around the new positioning. Influence&trade; compounds visibility
        over time. Growth&trade; is for those who want a long-term strategic
        partner for the full picture.
      </p>
    </div>
  </section>

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
        >Services</span
      >
      <h1
        id="hero-headline"
        class="text-[13vw] md:text-[7vw] font-serif leading-[0.85] tracking-tighter"
      >
        The market rarely rewards<br />
        <span class="italic text-white/40">the best company.</span>
      </h1>
      <p class="text-xl md:text-2xl text-white/60 font-serif mt-8">
        It rewards the company people notice, remember, and trust.
      </p>
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
