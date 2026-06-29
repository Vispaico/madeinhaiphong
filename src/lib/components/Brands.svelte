<script>
  const brands = [
    "Vispaico",
    "RiverCity",
    "Turtelli",
    "Vispea",
    "Vercel",
    "Stripe",
    "Coolify",
    "LiteLLM",
    "Vispaico",
    "RiverCity",
    "Turtelli",
    "Vispea",
    "Vercel",
    "Stripe",
    "Coolify",
    "LiteLLM",
  ];
</script>

<section
  class="w-full bg-[#050505] py-16 md:py-24 overflow-hidden flex flex-col items-center justify-center border-t border-white/5 relative"
>
  <div
    class="absolute inset-y-0 left-0 w-32 md:w-80 bg-linear-to-r from-[#050505] to-transparent z-10 pointer-events-none"
  ></div>
  <div
    class="absolute inset-y-0 right-0 w-32 md:w-80 bg-linear-to-l from-[#050505] to-transparent z-10 pointer-events-none"
  ></div>

  <p
    class="text-xs font-mono text-white/30 uppercase tracking-widest mb-10 text-center relative z-20"
  >
    Partners & Clients
  </p>

  <div class="flex overflow-hidden w-full relative z-0">
    <div
      class="flex whitespace-nowrap will-change-transform w-fit marquee-track"
    >
      <div class="flex gap-16 md:gap-32 px-8 md:px-16 items-center">
        {#each brands as brand}
          <div
            class="text-2xl md:text-4xl font-serif text-white/30 hover:text-white transition-colors duration-700 cursor-pointer select-none"
          >
            {brand}
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  .marquee-track {
    animation: marquee 25s linear infinite;
  }

  @keyframes marquee {
    from {
      translate: 0 0;
    }
    to {
      translate: -49.9% 0;
    }
  }
</style>
