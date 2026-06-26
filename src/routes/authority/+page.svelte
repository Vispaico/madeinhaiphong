<script>
  import { onMount, onDestroy } from "svelte";
  import gsap from "gsap";
  import ScrollTrigger from "gsap/ScrollTrigger";
  import Seo from "$lib/components/Seo.svelte";
  import Deliverables from "$lib/components/Deliverables.svelte";
  import Footer from "$lib/components/Footer.svelte";

  let problemRef = $state();
  let outcomeRef = $state();
  let ctaRef = $state();
  let rightForMeRef = $state();
  let pricingRef = $state();
  let whatWeDoItems = $state([]);

  let triggers = [];

  const offerings = [
    {
      title: "Market Analysis",
      desc: "Deep research into your competitive landscape to identify gaps, opportunities, and positioning vectors.",
    },
    {
      title: "Competitor Analysis",
      desc: "Systematic evaluation of how competitors communicate their value and where they leave room for differentiation.",
    },
    {
      title: "Positioning Strategy",
      desc: "A defensible market position that makes your value clear, distinct, and memorable to the right audience.",
    },
    {
      title: "Customer Research",
      desc: "Structured discovery into what your clients truly value, how they decide, and what makes them choose.",
    },
    {
      title: "Messaging Architecture",
      desc: "A hierarchical framework of messages that communicate your value consistently across every touchpoint.",
    },
    {
      title: "Value Proposition Design",
      desc: "A precise articulation of the outcomes you deliver and why those outcomes matter to your clients.",
    },
    {
      title: "Brand Narrative Development",
      desc: "The story behind your company that makes it credible, distinctive, and memorable over time.",
    },
    {
      title: "Service Packaging",
      desc: "Structuring your offerings so their value is obvious, easy to compare, and simple to buy.",
    },
    {
      title: "Website Messaging Blueprint",
      desc: "A page-by-page messaging guide that ensures every word on your site builds authority and trust.",
    },
  ];

  const deliverables = [
    "Competitive Landscape Report",
    "Positioning Matrix",
    "Messaging Architecture Document",
    "Value Proposition Canvas",
    "Brand Narrative Framework",
    "Service Packaging Structure",
    "Website Messaging Blueprint",
  ];

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({ delay: 0.3 });
    const headline = document.getElementById("hero-headline");
    const subline = document.getElementById("hero-subline");
    const tag = document.getElementById("hero-tag");

    gsap.set(tag, { y: 20, autoAlpha: 0 });
    gsap.set(headline, { y: 60, autoAlpha: 0 });
    gsap.set(subline, { y: 30, autoAlpha: 0 });

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

    const sections = [problemRef, outcomeRef, ctaRef, rightForMeRef, pricingRef];
    sections.forEach((el) => {
      if (!el) return;
      const st = gsap.fromTo(
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
      if (st && st.scrollTrigger) triggers.push(st.scrollTrigger);
    });

    whatWeDoItems.forEach((item, i) => {
      const st = gsap.fromTo(
        item,
        { y: 30, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          stagger: 0.05,
          ease: "power3.out",
          scrollTrigger: { trigger: item, start: "top 90%" },
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
  title="Brand Positioning & Messaging Strategy | Authority"
  description="Clarify your market position, sharpen your message, and create the strategic foundation for sustainable growth."
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
        >Authority</span
      >
      <div class="flex items-center justify-center gap-3 mb-6">
        <span
          class="text-[10px] font-mono text-[#a08300] uppercase tracking-widest border border-[#a08300]/30 rounded-full px-2.5 py-0.5"
          >Most clients start here</span
        >
      </div>
      <h1
        id="hero-headline"
        class="text-[13vw] md:text-[7vw] font-serif leading-[0.85] tracking-tighter"
      >
        Become impossible<br />
        <span class="italic text-white/40">to misunderstand.</span>
      </h1>
      <p
        id="hero-subline"
        class="text-lg md:text-xl text-white/50 max-w-3xl mx-auto mt-12 font-sans font-light leading-relaxed"
      >
        If your market cannot clearly understand your value, it cannot choose
        you. Authority is the strategic foundation that makes every other
        investment more effective.
      </p>
    </div>
  </section>

  <!-- Problem -->
  <section
    bind:this={problemRef}
    class="w-full py-24 md:py-32 px-6 border-t border-white/5"
  >
    <div class="max-w-4xl mx-auto">
      <span
        class="text-xs font-mono text-white/50 uppercase tracking-widest mb-12 block reveal"
        >The Problem</span
      >
      <p
        class="text-2xl md:text-3xl font-serif text-white/70 leading-relaxed reveal"
      >
        Most companies struggle because their positioning is unclear, their
        messaging is generic, their differentiation is weak, and their
        competitors all sound identical.
      </p>
      <p
        class="text-lg md:text-xl text-white/50 font-sans font-light leading-relaxed mt-12 reveal"
      >
        When a prospect cannot immediately grasp what makes you different and
        why it matters, they move on to someone who makes it obvious. The cost
        of unclear positioning is invisible but enormous.
      </p>
    </div>
  </section>

  <!-- Is This Right For Me? -->
  <section
    bind:this={rightForMeRef}
    class="w-full py-24 md:py-32 px-6 border-t border-white/5">
    <div class="max-w-4xl mx-auto">
      <span
        class="text-xs font-mono text-white/50 uppercase tracking-widest mb-12 block reveal"
        >Is This Right For Me?</span
      >
      <h2
        class="text-4xl md:text-5xl lg:text-6xl font-serif leading-[0.9] tracking-tighter reveal"
      >
        Authority&trade; is for you if...
      </h2>
      <div class="mt-16 space-y-8 reveal">
        {#each [
          "You're excellent at what you do, but struggle to explain it clearly to the right people",
          "You're entering a new market or expanding your client profile",
          "You're investing in a website, content, or campaigns and want them to actually work",
        ] as item, i}
          <div class="flex items-start gap-5">
            <span class="w-6 h-6 rounded-full border border-[#a08300]/40 flex items-center justify-center shrink-0 mt-0.5">
              <span class="w-2 h-2 bg-[#a08300] rounded-full"></span>
            </span>
            <p class="text-lg md:text-xl text-white/80 font-sans font-light leading-relaxed">{item}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- What We Do -->
  <section class="w-full py-24 md:py-32 px-6 border-t border-white/5">
    <div class="max-w-7xl mx-auto">
      <span
        class="text-xs font-mono text-white/50 uppercase tracking-widest mb-16 block"
      >
        The Work</span
      >
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {#each offerings as offering, i}
          <div
            bind:this={whatWeDoItems[i]}
            class="p-8 rounded-2xl border border-white/6 bg-[#0A0A0A] hover:border-white/20 transition-colors duration-500"
          >
            <span class="text-3xl font-serif text-[#a08300]/60 block mb-4"
              >0{i + 1}</span
            >
            <h3 class="text-2xl font-serif text-white mb-3">
              {offering.title}
            </h3>
            <p
              class="text-lg text-white/60 font-sans font-light leading-relaxed"
            >
              {offering.desc}
            </p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <Deliverables items={deliverables} />

  <!-- Outcome -->
  <section
    bind:this={outcomeRef}
    class="w-full py-24 md:py-32 px-6 border-t border-white/5 relative overflow-hidden"
  >
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-[#a08300] opacity-[0.02] blur-[200px] rounded-full pointer-events-none"
    ></div>
    <div class="max-w-4xl mx-auto text-center relative z-10">
      <span
        class="text-xs font-mono text-white/50 uppercase tracking-widest mb-8 block reveal"
        >The Outcome</span
      >
      <h2
        class="text-4xl md:text-6xl lg:text-7xl font-serif leading-[0.9] tracking-tighter reveal"
      >
        Clarity creates<br />
        <span class="italic text-white/40">authority.</span>
      </h2>
      <p
        class="text-lg md:text-xl text-white/50 font-sans font-light leading-relaxed mt-8 max-w-3xl mx-auto reveal"
      >
        When your positioning is precise, every marketing investment works
        harder. Your website converts better. Your content resonates deeper.
        Your sales conversations are shorter. And your market begins to see you
        as the obvious choice rather than one of many.
      </p>
    </div>
  </section>

  <!-- Pricing -->
  <section
    bind:this={pricingRef}
    class="w-full py-24 md:py-32 px-6 border-t border-white/5">
    <div class="max-w-4xl mx-auto">
      <span
        class="text-xs font-mono text-white/50 uppercase tracking-widest mb-8 block reveal"
        >Investment</span
      >
      <h2
        class="text-5xl md:text-7xl font-serif leading-[0.9] tracking-tighter reveal"
      >
        Starting at $6,500
      </h2>
      <p
        class="text-lg md:text-xl text-white/50 font-sans font-light leading-relaxed mt-8 max-w-3xl reveal"
      >
        Most engagements fall between $6,500 and $15,000 depending on
        organisation size, the number of stakeholders, and the complexity of the
        market. Every scope is built around your specific situation.
      </p>
      <div class="mt-12 p-8 rounded-2xl border border-white/6 bg-[#0A0A0A] reveal">
        <p class="text-base text-white/60 font-sans font-light leading-relaxed">
          Smaller consultancies and solo experts typically engage at $6,500.
          Established firms with multiple service lines and stakeholder groups
          typically fall between $10,000 and $15,000.
        </p>
      </div>
      <div class="mt-10 reveal">
        <a
          href="mailto:hello@madeinhaiphong.com"
          class="inline-block px-8 py-4 bg-white text-black rounded-full font-sans font-medium hover:bg-[#a08300] hover:text-white transition-all duration-500"
        >
          Let's scope your engagement &rarr;
        </a>
      </div>
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
        >Authority</span
      >
      <h1
        id="hero-headline"
        class="text-[13vw] md:text-[7vw] font-serif leading-[0.85] tracking-tighter"
      >
        Become impossible<br />
        <span class="italic text-white/40">to misunderstand.</span>
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
