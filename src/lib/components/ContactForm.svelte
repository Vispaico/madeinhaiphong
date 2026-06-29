<script>
  let { onBack } = $props();

  let name = $state("");
  let email = $state("");
  let message = $state("");
  let status = $state("idle"); // idle | sending | success | error
  let errorMsg = $state("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    status = "sending";
    errorMsg = "";

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to send");
      }

      status = "success";
    } catch (err) {
      status = "error";
      errorMsg = err.message;
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
      <h3 class="text-lg font-serif text-white">Message sent!</h3>
      <p class="text-sm text-white/50 font-sans font-light mt-2">
        Thanks for reaching out. We'll get back to you as soon as possible.
      </p>
    </div>
  {:else}
    <form onsubmit={handleSubmit} class="flex flex-col gap-4">
      <div>
        <label for="cf-name" class="text-[10px] font-mono text-white/40 uppercase tracking-wider block mb-1.5"
          >Name</label
        >
        <input
          id="cf-name"
          bind:value={name}
          type="text"
          required
          placeholder="Your name"
          class="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-white/30"
        />
      </div>
      <div>
        <label for="cf-email" class="text-[10px] font-mono text-white/40 uppercase tracking-wider block mb-1.5"
          >Email</label
        >
        <input
          id="cf-email"
          bind:value={email}
          type="email"
          required
          placeholder="you@example.com"
          class="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-white/30"
        />
      </div>
      <div>
        <label for="cf-message" class="text-[10px] font-mono text-white/40 uppercase tracking-wider block mb-1.5"
          >Message</label
        >
        <textarea
          id="cf-message"
          bind:value={message}
          required
          rows="4"
          placeholder="How can we help?"
          class="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-white/30 resize-none"
        ></textarea>
      </div>

      {#if status === "error"}
        <p class="text-sm text-red-400 font-sans">{errorMsg}</p>
      {/if}

      <button
        type="submit"
        disabled={status === "sending"}
        class="w-full py-3 rounded-xl bg-white text-black text-sm font-sans font-medium hover:bg-[#a08300] hover:text-white transition-all duration-500 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
    </form>
  {/if}
</div>
