<script>
  import { onMount } from "svelte";
  import gsap from "gsap";
  import ScrollTrigger from "gsap/ScrollTrigger";
  import Seo from "$lib/components/Seo.svelte";
  import Footer from "$lib/components/Footer.svelte";

  let introRef = $state();
  let journeyRef = $state();
  let cardsRef = $state([]);
  let howRef = $state();
  let returnRef = $state();
  let ctaRef = $state();

  const services = [
    {
      name: "Authority\u2122",
      label: "Foundation",
      price: "$6,500",
      timeframe: "2\u20134 weeks",
      description:
        "Clarify your positioning, sharpen your message, and build the strategic foundation that makes every other investment more effective. Most clients start here.",
      link: "/authority",
    },
    {
      name: "Presence\u2122",
      label: "Credibility",
      price: "$12,500",
      timeframe: "4\u201310 weeks",
      description:
        "A complete rebuild of your digital presence \u2014 strategy, copy, design, and implementation \u2014 built around your positioning to convert the right visitors into clients.",
      link: "/presence",
    },
    {
      name: "Influence\u2122",
      label: "Visibility",
      price: "$3,000/month",
      timeframe: "Ongoing",
      description:
        "Ongoing content and thought leadership strategy that compounds over time. We build the presence your market sees between conversations, so when they\u2019re ready to buy, your name is already there.",
      link: "/influence",
    },
    {
      name: "Growth\u2122",
      label: "Scale",
      price: "$7,500/month",
      timeframe: "Ongoing",
      description:
        "A long-term strategic partnership. We oversee your positioning, presence, visibility, and demand generation as a unified engine for growth. For companies ready for a partner, not a vendor.",
      link: "/growth",
    },
  ];

  const steps = [
    "Initial call to understand your situation and goals",
    "Scoping and proposal aligned to your specific needs",
    "A clear statement of work before anything begins",
    "Payment structured around milestones, not upfront demands",
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

    const sections = [
      introRef,
      journeyRef,
      howRef,
      returnRef,
      ctaRef,
    ];
    sections.forEach((el) => {
      if (!el) return;
      gsap.fromTo(
        el.querySelectorAll(".reveal"),
        { y: 40, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1.2,
          stagger: 0.1,
          ease: "expo.out",
          scrollTrigger: { trigger: el, start: "top 80%" },
        },
      );
    });

    cardsRef.forEach((card, i) => {
      if (!card) return;
      gsap.fromTo(
        card,
        { y: 60, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          delay: i * 0.1,
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
  });
</script>

<Seo
  title="Pricing & Engagements | Made in Haiphong"
  description="Premium strategic engagements for ambitious companies. Transparent starting prices for Authority, Presence, Influence, and Growth."
/>

<div class="bg-[#050505] text-white">
  <!-- Hero -->
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
        >Investment</span
      >
      <h1
        id="hero-headline"
        class="text-[13vw] md:text-[7vw] font-serif leading-[0.85] tracking-tighter"
      >
        The most expensive thing<br />
        <span class="italic text-white/40">is a market that doesn't</span
        ><br />
        know you exist.
      </h1>
      <p
        id="hero-subline"
        class="text-lg md:text-xl text-white/50 max-w-3xl mx-auto mt-12 font-sans font-light leading-relaxed"
      >
        Our engagements are structured to deliver disproportionate return. Not
        because we're cheap &mdash; because the right positioning, presence, and
        visibility changes what your business can command.
      </p>
    </div>
  </section>

  <!-- Client Journey -->
  <section
    bind:this={journeyRef}
    class="w-full py-24 md:py-32 px-6 border-t border-white/5"
  >
    <div class="max-w-5xl mx-auto text-center">
      <span
        class="text-xs font-mono text-white/50 uppercase tracking-widest mb-8 block reveal"
        >The Client Journey</span
      >
      <p
        class="text-2xl md:text-3xl font-serif text-white/70 leading-relaxed reveal"
      >
        Most clients move through a natural progression. Start with the
        foundation, build the presence, sustain the visibility, scale with a
        partner.
      </p>
      <div class="mt-16 flex flex-col md:flex-row items-center justify-center gap-6 reveal">
        {#each [
          { name: "Authority\u2122", role: "Foundation" },
          { name: "Presence\u2122", role: "Credibility" },
          { name: "Influence\u2122", role: "Visibility" },
          { name: "Growth\u2122", role: "Scale" },
        ] as item, i}
          <div class="flex flex-col md:flex-row items-center gap-6">
            <div class="text-center">
              <span class="text-xl md:text-2xl font-serif text-white">{item.name}</span>
              <span class="block text-sm font-mono text-[#a08300] uppercase tracking-widest mt-1">{item.role}</span>
            </div>
            {#if i < 3}
              <span class="text-white/20 text-2xl hidden md:inline">&rarr;</span>
            {/if}
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- The Engagements -->
  <section class="w-full py-24 md:py-32 px-6 border-t border-white/5">
    <div class="max-w-7xl mx-auto">
      <span class="text-xs font-mono text-white/50 uppercase tracking-widest mb-16 block"
        >The Engagements</span
      >
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        {#each services as service, i}
          <div
            bind:this={cardsRef[i]}
            class="group relative w-full rounded-3xl border border-white/8 bg-[#0A0A0A] p-8 md:p-12 flex flex-col cursor-pointer transition-colors duration-500 hover:bg-[#111]"
          >
            <div
              class="absolute -top-32 -left-32 w-96 h-96 bg-[#a08300] opacity-[0.02] group-hover:opacity-[0.08] blur-[100px] rounded-full transition-opacity duration-700 pointer-events-none"
            ></div>

            <div class="relative z-10 flex-1">
              <div class="flex items-start justify-between gap-4">
                <div>
                  <h2 class="text-4xl md:text-5xl font-serif tracking-tight text-white group-hover:text-[#a08300] transition-colors duration-500">
                    {service.name}
                  </h2>
                  <span class="text-sm font-mono text-[#a08300] uppercase tracking-widest mt-2 block"
                    >{service.label}</span
                  >
                </div>
                <div class="text-right shrink-0">
                  <span class="text-3xl md:text-4xl font-serif text-white block leading-none">{service.price}</span>
                  <span class="text-xs font-mono text-white/40 uppercase tracking-widest mt-1 block"
                    >{service.timeframe}</span
                  >
                </div>
              </div>

              <p class="text-base md:text-lg text-white/50 font-sans font-light leading-relaxed mt-8 max-w-lg">
                {service.description}
              </p>
            </div>

            <div class="relative z-10 mt-10 flex items-center gap-4">
              <a
                href={service.link}
                class="px-6 py-3 border border-white/20 text-white text-sm font-mono uppercase tracking-widest rounded-full hover:bg-white hover:text-black transition-all duration-500"
              >
                Learn more
              </a>
              <a
                href="mailto:hello@madeinhaiphong.com"
                class="px-6 py-3 bg-white text-black text-sm font-mono uppercase tracking-widest rounded-full hover:bg-[#a08300] hover:text-white transition-all duration-500"
              >
                Let's talk
              </a>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- How Engagements Work -->
  <section
    bind:this={howRef}
    class="w-full py-24 md:py-32 px-6 border-t border-white/5"
  >
    <div class="max-w-4xl mx-auto">
      <span
        class="text-xs font-mono text-white/50 uppercase tracking-widest mb-12 block reveal"
        >How Engagements Work</span
      >
      <p
        class="text-2xl md:text-3xl font-serif text-white/70 leading-relaxed reveal"
      >
        Every engagement begins with a conversation. There are no fixed packages
        &mdash; we scope each project to the problem that needs solving and the
        outcome that matters to you.
      </p>
      <div class="mt-16 space-y-6 reveal">
        {#each steps as step, i}
          <div class="flex items-start gap-6">
            <span class="text-[#a08300] font-mono text-xs tracking-widest mt-1 shrink-0 w-8"
              >{String(i + 1).padStart(2, "0")}</span
            >
            <p class="text-lg md:text-xl text-white/60 font-sans font-light leading-relaxed">
              {step}
            </p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Return Framing -->
  <section
    bind:this={returnRef}
    class="w-full py-24 md:py-32 px-6 border-t border-white/5 relative overflow-hidden"
  >
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-[#a08300] opacity-[0.02] blur-[200px] rounded-full pointer-events-none"
    ></div>
    <div class="max-w-4xl mx-auto text-center relative z-10">
      <span
        class="text-xs font-mono text-white/50 uppercase tracking-widest mb-8 block reveal"
        >The Return</span
      >
      <h2
        class="text-3xl md:text-5xl font-serif leading-[1.1] tracking-tighter reveal"
      >
        The question isn't whether you can afford to work with us.
        <span class="italic text-white/40">The question is what it costs not to.</span>
      </h2>
      <p
        class="text-lg md:text-xl text-white/50 font-sans font-light leading-relaxed mt-8 reveal"
      >
        A typical client engagement journey &mdash; Authority&trade; + Presence&trade; + six
        months of Influence&trade; &mdash; represents an investment of approximately
        $37,000. A single enterprise client won as a result of better
        positioning, a stronger website, and consistent visibility will often be
        worth multiples of that in year one alone.
      </p>
    </div>
  </section>

  <!-- CTA -->
  <section
    bind:this={ctaRef}
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
    <div class="max-w-5xl mx-auto text-center relative z-10">
      <p class="text-2xl md:text-3xl font-serif text-white/80 leading-relaxed max-w-3xl reveal">
        If you're ready to become the company your market chooses, let's start with a conversation.
      </p>
      <a
        href="mailto:hello@madeinhaiphong.com"
        class="inline-block mt-12 px-10 py-5 bg-white text-black rounded-full font-sans font-medium text-lg hover:bg-[#a08300] hover:text-white transition-all duration-500 cursor-pointer"
      >
        Let's build it &rarr;
      </a>
    </div>
  </section>

  <Footer />
</div>
