<script>
  import { onMount, onDestroy } from "svelte";
  import gsap from "gsap";
  import ScrollTrigger from "gsap/ScrollTrigger";

  const services = [
    {
      number: "01",
      title: "Authority\u2122",
      desc: "Clarify your positioning, sharpen your message, and define why clients should choose you.",
      link: "/authority",
      button: "Explore Authority\u2122",
    },
    {
      number: "02",
      title: "Presence\u2122",
      desc: "Transform your website and brand into assets that build trust and generate opportunities.",
      link: "/presence",
      button: "Explore Presence\u2122",
    },
    {
      number: "03",
      title: "Influence\u2122",
      desc: "Turn expertise into authority through strategic content and thought leadership.",
      link: "/influence",
      button: "Explore Influence\u2122",
    },
    {
      number: "04",
      title: "Growth\u2122",
      desc: "A long-term partnership focused on visibility, demand generation, and sustainable growth.",
      link: "/growth",
      button: "Explore Growth\u2122",
    },
  ];

  let headlineRef = $state();
  let introRef = $state();
  let gridRef = $state();
  let ctaRef = $state();
  let triggers = [];

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    const createTrigger = (el, ref) => {
      if (el) {
        triggers.push(ref);
      }
    };

    if (headlineRef) {
      const st = gsap.fromTo(
        headlineRef,
        { y: 40, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: { trigger: headlineRef, start: "top 85%" },
        },
      );
      triggers.push(st.scrollTrigger);
    }

    if (introRef) {
      const st = gsap.fromTo(
        introRef,
        { y: 40, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: { trigger: introRef, start: "top 85%" },
        },
      );
      triggers.push(st.scrollTrigger);
    }

    const cards = gridRef?.querySelectorAll(".service-card");
    if (cards) {
      const st = gsap.fromTo(
        cards,
        { y: 60, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1,
          stagger: 0.12,
          ease: "expo.out",
          scrollTrigger: {
            trigger: gridRef,
            start: "top 80%",
          },
        },
      );
      triggers.push(st.scrollTrigger);
    }

    if (ctaRef) {
      const st = gsap.fromTo(
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
      triggers.push(st.scrollTrigger);
    }
  });

  onDestroy(() => {
    triggers.forEach((st) => {
      if (st) st.kill();
    });
    triggers = [];
  });
</script>

<section
  id="services"
  class="w-full bg-[#050505] text-white py-24 md:py-32 border-t border-white/5 relative z-10 overflow-hidden"
>
  <div
    class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-[#a08300] opacity-[0.02] blur-[200px] rounded-full pointer-events-none"
  ></div>

  <div class="max-w-7xl mx-auto px-6 md:px-12">
    <!-- Section Title -->
    <div bind:this={headlineRef} class="mb-8">
      <span class="text-xs font-mono text-white/30 uppercase tracking-widest"
        >Services</span
      >
    </div>

    <!-- Intro Copy -->
    <div bind:this={introRef} class="max-w-4xl mb-20 md:mb-28">
      <p
        class="text-3xl md:text-5xl lg:text-6xl font-serif leading-[1.05] tracking-tight text-white/90"
      >
        Most companies don't have a quality problem.
      </p>
      <p
        class="text-3xl md:text-5xl lg:text-6xl font-serif leading-[1.05] tracking-tight text-white/50 mt-4"
      >
        They have a visibility problem.
      </p>
      <p
        class="text-lg md:text-xl text-white/50 font-sans font-light leading-relaxed mt-10 max-w-3xl"
      >
        They do good work, deliver real value, but their market has no idea they
        exist. They struggle to articulate what makes them different. Their
        website says the same thing as every competitor. Their messaging doesn't
        convert. This is a visibility problem, not a capability problem, and
        visibility is exactly what we're built to solve.
      </p>
    </div>

    <!-- Service Cards -->
    <div
      bind:this={gridRef}
      class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 w-full"
    >
      {#each services as service, i}
        <a
          href={service.link}
          class="service-card group relative w-full min-h-[35vh] md:min-h-[42vh] rounded-3xl border border-white/8 bg-[#0A0A0A] p-8 md:p-12 flex flex-col justify-between cursor-pointer no-underline hover:bg-[#111] transition-colors duration-500"
        >
          <div
            class="absolute -top-32 -left-32 w-96 h-96 bg-[#a08300] opacity-[0.02] group-hover:opacity-[0.08] blur-[100px] rounded-full transition-opacity duration-700 pointer-events-none"
          ></div>

          <div class="relative z-10">
            <span
              class="text-xs font-mono text-white/50 uppercase tracking-widest"
              >{service.number}</span
            >
            <h3
              class="text-3xl md:text-5xl lg:text-6xl font-serif tracking-tight mt-3 text-white group-hover:text-[#a08300] transition-colors duration-500"
            >
              {service.title}
            </h3>
          </div>

          <div class="relative z-10 mt-auto pt-12">
            <p
              class="text-base md:text-lg text-white/50 font-sans font-light leading-relaxed max-w-md"
            >
              {service.desc}
            </p>
            <div
              class="mt-8 inline-flex items-center gap-3 text-xs font-mono text-white/40 uppercase tracking-widest group-hover:text-white transition-colors duration-500"
            >
              {service.button}
              <span
                class="w-6 h-px bg-white/40 group-hover:bg-white transition-all duration-500 inline-block"
              ></span>
            </div>
          </div>
        </a>
      {/each}
    </div>

    <!-- CTA -->
    <div bind:this={ctaRef} class="mt-28 md:mt-40 text-center relative">
      <h2
        class="text-4xl md:text-6xl lg:text-7xl font-serif leading-[0.9] tracking-tighter"
      >
        The market rarely rewards<br />
        <span class="italic text-white/40">the best company.</span>
      </h2>
      <p class="text-xl md:text-2xl text-white/60 font-serif mt-6">
        It rewards the company people notice, remember, and trust.
      </p>
      <a
        href="mailto:hello@madeinhaiphong.com"
        class="inline-block mt-12 px-10 py-5 bg-white text-black rounded-full font-sans font-medium text-lg hover:bg-[#a08300] hover:text-white transition-all duration-500 cursor-pointer"
      >
        Let's build it &rarr;
      </a>
    </div>
  </div>
</section>
