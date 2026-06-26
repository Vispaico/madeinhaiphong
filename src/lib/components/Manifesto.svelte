<script>
  import { onMount, onDestroy } from "svelte";
  import gsap from "gsap";
  import ScrollTrigger from "gsap/ScrollTrigger";

  const paragraph =
    "The market rarely rewards the best company. It rewards the company people notice, remember, and trust. We help ambitious companies build that advantage through strategy, content, and presence designed to make you the obvious choice in your market.";
  const words = paragraph.split(" ");

  let manifestoRef = $state();
  let st = null;

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    const spans = manifestoRef.querySelectorAll(".word");

    // Use a single ScrollTrigger with a CSS-class-based approach instead
    // of animating 30+ individual color properties per frame via scrub
    st = ScrollTrigger.create({
      trigger: manifestoRef,
      start: "top 80%",
      end: "bottom 50%",
      onUpdate: (self) => {
        const progress = self.progress;
        // Only update every ~2% of progress to reduce repaints
        const index = Math.floor(progress * spans.length);
        if (index !== st._lastIndex) {
          st._lastIndex = index;
          for (let i = 0; i < spans.length; i++) {
            spans[i].style.color =
              i <= index ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.1)";
          }
        }
      },
    });
    st._lastIndex = -1;
  });

  onDestroy(() => {
    if (st) st.kill();
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
      <span
        class="word text-white/10 transition-colors duration-300 pointer-events-none"
        >{word}</span
      >
    {/each}
  </p>
</section>
