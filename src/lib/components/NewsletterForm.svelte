<script>
  import { onMount } from "svelte";

  let { onBack } = $props();

  let email = $state("");
  let hp = $state(""); // honeypot
  let status = $state("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    status = "sending";

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email, hp }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to subscribe");
      }

      status = "success";
    } catch {
      status = "idle";
    }
  };
</script>

<div class="p-6">
  <button
    onclick={onBack}
    class="text-[10px] font-mono text-white/40 hover:text-white uppercase tracking-wider transition-colors cursor-pointer mb-4"
  >
    &larr; Back
  </button>

  {#if status === "success"}
    <div class="text-center py-8">
      <h3 class="text-lg font-serif text-white">You're in!</h3>
      <p class="text-sm text-white/50 font-sans font-light mt-2">
        Thanks for subscribing. We'll send you occasional insights on WebGL, Svelte, and design engineering.
      </p>
    </div>
  {:else}
    <form onsubmit={handleSubmit} class="flex flex-col gap-4">
      <!-- honeypot: hidden from users, visible to bots -->
      <div aria-hidden="true" style="position:absolute;left:-9999px;opacity:0;height:0;pointer-events:none">
        <label for="ns-hp">Leave this empty</label>
        <input id="ns-hp" bind:value={hp} type="text" tabindex="-1" autocomplete="off" />
      </div>
      <div>
        <label for="ns-email" class="text-[10px] font-mono text-white/40 uppercase tracking-wider block mb-1.5"
          >Email</label
        >
        <input
          id="ns-email"
          bind:value={email}
          type="email"
          required
          placeholder="you@example.com"
          class="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-white/30"
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        class="w-full py-3 rounded-xl bg-white text-black text-sm font-sans font-medium hover:bg-[#a08300] hover:text-white transition-all duration-500 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Subscribing..." : "Subscribe"}
      </button>
    </form>
  {/if}
</div>
