<script>
  import { onMount } from "svelte";
  import Logofooter from "./logo_footer.svelte";
</script>

<footer
  id="contact"
  class="w-full bg-[#050505] text-white pt-32 pb-12 relative overflow-hidden border-t border-white/10 border-b-8 border-b-white/5"
>
  <!-- Multi-Column Links Section -->
  <div
    class="px-6 md:px-24 max-w-full mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-4 mb-24 z-10 relative"
  >
    <div class="col-span-1 md:col-span-1 flex flex-col gap-6">
      <Logofooter />
      <p class="text-[#d5d3c8] font-sans text-l leading-relaxed max-w-xs">
        Be the company everyone knows.
      </p>
    </div>

    <div class="col-span-1 flex flex-col gap-4">
      <h4
        class="font-mono text-xs uppercase tracking-widest text-[#a08300] mb-2"
      >
        Navigation
      </h4>
      <a
        href="/"
        class="text-white/60 hover:text-white font-sans text-sm transition-colors"
        >Home</a
      >
      <a
        href="services"
        class="text-white/60 hover:text-white font-sans text-sm transition-colors"
        >Services</a
      >
      <a
        href="#work"
        class="text-white/60 hover:text-white font-sans text-sm transition-colors"
        >Selected Works</a
      >
      <a
        href="#faq"
        class="text-white/60 hover:text-white font-sans text-sm transition-colors"
        >FAQ</a
      >
    </div>

    <div class="col-span-1 flex flex-col gap-4">
      <h4
        class="font-mono text-xs uppercase tracking-widest text-[#a08300] mb-2"
      >
        Socials
      </h4>
      <a
        href="https://www.youtube.com/@made_in_haiphong"
        target="_blank"
        rel="noopener noreferrer"
        class="text-white/60 hover:text-white font-sans text-sm transition-colors"
        >YouTube</a
      >
      <a
        href="https://www.instagram.com/p/B9115hZnuxv/"
        target="_blank"
        rel="noopener noreferrer"
        class="text-white/60 hover:text-white font-sans text-sm transition-colors"
        >Instagram</a
      >
      <a
        href="https://www.linkedin.com/company/made-in-haiphong"
        target="_blank"
        rel="noopener noreferrer"
        class="text-white/60 hover:text-white font-sans text-sm transition-colors"
        >LinkedIn</a
      >
      <a
        href="https://www.facebook.com/MadeInHaiphongCom/"
        target="_blank"
        rel="noopener noreferrer"
        class="text-white/60 hover:text-white font-sans text-sm transition-colors"
        >Facebook</a
      >
    </div>

    <div class="col-span-1 flex flex-col gap-4">
      <h4
        class="font-mono text-xs uppercase tracking-widest text-[#a08300] mb-2"
      >
        Newsletter
      </h4>
      <p class="text-white/40 font-sans text-sm">
        Join our newsletter for insights on WebGL, Svelte, and design
        engineering.
      </p>
      <div class="mt-2 flex w-full relative">
        <input
          type="email"
          placeholder="Enter your email"
          class="w-full bg-white/5 border border-white/10 rounded-full px-6 py-3 text-sm text-white focus:outline-none focus:border-white/40 transition-colors"
        />
        <button
          class="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-[#a08300] hover:text-white transition-colors"
        >
          &rarr;
        </button>
      </div>
    </div>
  </div>

  <!-- Copyright & Author Bar -->
  <div
    class="px-6 md:px-24 max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4 text-xs font-mono tracking-wider relative z-10"
  >
    <p class="text-white/30">
      &copy; {new Date().getFullYear()} made in HAIPHONG
    </p>

    <div class="flex flex-col md:flex-row items-center gap-4 md:gap-8">
      <div class="flex gap-6 text-white/30 md:flex">
        <a href="/privacy" class="hover:text-white/60 transition-colors"
          >Privacy Policy</a
        >
        <a href="/terms" class="hover:text-white/60 transition-colors"
          >Terms of Service</a
        >
      </div>
    </div>
  </div>

  <!-- Giant background glow -->
  <div
    class="absolute bottom-0 left-1/2 -translate-x-1/2 w-screen h-100 bg-[#a08300] opacity-5 blur-[200px] pointer-events-none"
  ></div>
</footer>
