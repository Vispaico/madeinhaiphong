<script>
  import X from "@lucide/svelte/icons/x";
  import Mail from "@lucide/svelte/icons/mail";
  import MessageSquare from "@lucide/svelte/icons/message-square";
  import Send from "@lucide/svelte/icons/send";
  import Newspaper from "@lucide/svelte/icons/newspaper";
  import ContactForm from "./ContactForm.svelte";
  import NewsletterForm from "./NewsletterForm.svelte";

  let { isOpen = false, onclose } = $props();

  let overlayRef = $state();
  let view = $state("main"); // main | contact | newsletter

  const close = () => {
    view = "main";
    if (onclose) onclose();
  };

  const contactOptions = [
    {
      name: "WhatsApp",
      icon: Send,
      action: () => {
        window.open(
          "https://wa.me/0084936166892?text=Hi%20Made%20in%20Haiphong!%20I'd%20like%20to%20learn%20more%20about%20your%20services.",
          "_blank",
          "noopener,noreferrer",
        );
        close();
      },
    },
    {
      name: "Email",
      icon: Mail,
      action: () => {
        window.open(
          "mailto:hello@made-in-haiphong.com?subject=Website%20inquiry",
          "_blank",
          "noopener,noreferrer",
        );
        close();
      },
    },
    {
      name: "Contact Form",
      icon: MessageSquare,
      action: () => {
        view = "contact";
      },
    },
    {
      name: "Newsletter",
      icon: Newspaper,
      action: () => {
        view = "newsletter";
      },
    },
  ];

  $effect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  });

  $effect(() => {
    if (!isOpen) {
      view = "main";
    }
  });
</script>

<div
  role="dialog"
  aria-modal="true"
  aria-label="Contact us"
  tabindex="-1"
  bind:this={overlayRef}
  class="fixed inset-0 z-50 flex items-center justify-center p-4"
  class:hidden={!isOpen}
  style="background: rgba(5,5,5,0.65); backdrop-filter: blur(6px);"
  onclick={(e) => { if (e.target === overlayRef) close(); }}
  onkeydown={(e) => { if (e.key === "Escape") close(); }}
>
  <div
    role="document"
    class="w-full max-w-sm rounded-2xl border border-white/8 bg-[#0A0A0A] shadow-2xl overflow-hidden"
  >
    {#if view === "main"}
      <div class="relative px-6 pt-6 pb-4 border-b border-white/8">
        <button
          onclick={close}
          class="absolute right-5 top-5 text-white/40 hover:text-white transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X class="w-4 h-4" />
        </button>
        <span class="text-[10px] font-mono text-white/30 uppercase tracking-[0.12em]"
          >Contact</span
        >
        <h2 class="mt-2 text-xl font-serif text-white">Get in Touch</h2>
        <p class="mt-1 text-sm text-white/50 font-sans font-light">
          Choose your preferred contact method
        </p>
        <div class="mt-4 rounded-xl border border-white/8 bg-[#050505] px-4 py-3 text-sm text-white/50 font-sans">
          <span class="flex items-center gap-2">
            <Mail class="w-3.5 h-3.5 text-white/30 shrink-0" />
            <span class="text-white/80 text-xs">hello@made-in-haiphong.com</span>
          </span>
        </div>
      </div>

      <div class="p-6">
        <div class="flex flex-col gap-2.5">
          {#each contactOptions as option}
            <button
              onclick={option.action}
              class="flex items-center gap-4 rounded-xl border border-white/8 bg-[#050505] px-5 py-3.5 cursor-pointer transition-colors hover:border-white/20 hover:bg-[#0F0F0F] w-full text-left"
            >
              <div class="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                <option.icon class="w-4 h-4 text-white/80" />
              </div>
              <div class="flex-1 min-w-0">
                <span class="text-sm font-sans font-medium text-white">{option.name}</span>
              </div>
              <span class="text-white/20 text-sm">&rarr;</span>
            </button>
          {/each}
        </div>

        <div class="mt-6 pt-4 border-t border-white/8">
          <p class="text-center text-[10px] text-white/30 font-mono uppercase tracking-wider">
            Made in Haiphong
          </p>
        </div>
      </div>
    {/if}

    {#if view === "contact"}
      <ContactForm onBack={() => { view = "main"; }} />
    {/if}

    {#if view === "newsletter"}
      <NewsletterForm onBack={() => { view = "main"; }} />
    {/if}
  </div>
</div>
