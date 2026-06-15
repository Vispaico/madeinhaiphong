<script>
  import { onMount } from "svelte";
  import gsap from "gsap";
  import ScrollTrigger from "gsap/ScrollTrigger";

  const paragraph =
    "The market rarely rewards the best company. It rewards the company people notice, remember, and trust. We help ambitious companies build that advantage through strategy, content, and presence designed to make you the obvious choice in your market.";
  const words = paragraph.split(" ");

  let manifestoRef = $state();

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    const spans = manifestoRef.querySelectorAll(".word");

    // Reveal words one by one as you scroll
    gsap.to(spans, {
      color: "rgba(255,255,255,1)", // Transitioning to pure white
      stagger: 0.1,
      ease: "none",
      scrollTrigger: {
        trigger: manifestoRef,
        start: "top 80%",
        end: "bottom 50%",
        scrub: 1,
      },
    });
  });
</script>

<section
  id="manifesto"
  class="w-full bg-[#050505] text-white py-32 md:py-48 px-6 md:px-24 flex flex-col items-center justify-center border-t border-white/5 relative"
>
  <span
    class="text-xs font-mono text-white/30 uppercase tracking-widest mb-16 text-center"
    >Manifesto</span
  >

  <p
    bind:this={manifestoRef}
    class="text-3xl md:text-5xl lg:text-6xl font-serif text-center max-w-5xl w-full flex flex-wrap justify-center gap-x-3 gap-y-2 md:gap-y-4"
  >
    {#each words as word}
      <!-- Words start muted and transition to white explicitly via GSAP for better contrast control -->
      <span
        class="word text-white/10 transition-colors duration-300 pointer-events-none"
        >{word}</span
      >
    {/each}
  </p>
</section>
