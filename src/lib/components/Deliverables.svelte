<script>
  import { onMount } from "svelte";
  import gsap from "gsap";
  import ScrollTrigger from "gsap/ScrollTrigger";

  let { items = [] } = $props();
  let sectionRef = $state();
  let cardRefs = $state([]);

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      sectionRef.querySelectorAll(".reveal"),
      { y: 40, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1.2,
        stagger: 0.1,
        ease: "expo.out",
        scrollTrigger: { trigger: sectionRef, start: "top 80%" },
      },
    );

    cardRefs.forEach((card, i) => {
      if (!card) return;
      gsap.fromTo(
        card,
        { y: 30, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          delay: i * 0.05,
          ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 90%" },
        },
      );
    });
  });
</script>

<section
  bind:this={sectionRef}
  class="w-full py-24 md:py-32 px-6 border-t border-white/5"
>
  <div class="max-w-7xl mx-auto">
    <span
      class="text-xs font-mono text-white/50 uppercase tracking-widest mb-16 block reveal"
      >Deliverables</span
    >

    <div class="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/6 rounded-3xl overflow-hidden">
      {#each items as item, i}
        <div
          bind:this={cardRefs[i]}
          class="relative bg-[#0A0A0A] p-8 md:p-10 group hover:bg-[#111] transition-colors duration-500"
        >
          <div
            class="absolute -top-24 -right-24 w-48 h-48 bg-[#a08300] opacity-0 group-hover:opacity-[0.04] blur-[80px] rounded-full transition-opacity duration-700 pointer-events-none"
          ></div>

          <div class="relative z-10 flex items-start gap-5">
            <span
              class="text-[#a08300] font-mono text-xs tracking-widest mt-1 shrink-0 w-8"
            >{String(i + 1).padStart(2, "0")}</span>
            <div>
              <h3 class="text-xl md:text-2xl font-serif text-white group-hover:text-[#a08300] transition-colors duration-500">
                {item}
              </h3>
              <div
                class="mt-4 w-8 h-px bg-white/10 group-hover:bg-[#a08300]/60 transition-colors duration-500"
              ></div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
