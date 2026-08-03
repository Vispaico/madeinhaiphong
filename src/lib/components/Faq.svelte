<script>
  import Plus from "@lucide/svelte/icons/plus";
  import Minus from "@lucide/svelte/icons/minus";
  import { slide } from "svelte/transition";

  const faqs = [
    {
      q: "How long does it take to see results?",
      a: "That depends on the engagement.\n\nA strategic positioning project can usually be completed within 2–4 weeks.\n\nWebsite redesigns, AI integration, and authority platforms typically launch within 4–8 weeks.\n\nLead generation, SEO, and authority-building are long-term growth systems that usually begin producing measurable results within 2–6 months and continue improving over time.\n\nOur goal isn't short-term spikes—it's building a growth engine that keeps generating opportunities.",
    },
    {
      q: "How does engagement typically begin?",
      a: "Most companies start with a Growth Audit.\n\nWe review your positioning, website, messaging, visibility, and sales process to identify what's preventing your company from attracting more of the right clients.\n\nFrom there, we create a roadmap that may include positioning, website improvements, AI implementation, authority building, lead generation, or ongoing growth support—depending on what will have the greatest business impact.",
    },
    {
      q: "Why isn't our website generating leads?",
      a: "For most B2B companies, the problem isn't traffic—it's trust.\n\nPotential clients visit your website to answer one question: \"Can this company solve my problem better than everyone else?\"\n\nIf your positioning is unclear, your messaging is generic, or your expertise isn't obvious within the first few seconds, visitors leave without contacting you.\n\nA high-performing B2B website isn't a digital brochure. It's a business development tool that builds credibility, answers objections, and gives buyers confidence to start a conversation.\n\nThat's what we build.",
    },
    {
      q: "Can AI actually help our business?",
      a: "Yes—but probably not in the way most companies have been told.\n\nAI isn't a replacement for your team. It's a way to make your business more efficient, more responsive, and more scalable.\n\nWe help companies use AI where it creates measurable business value: automating repetitive work, improving customer communication, generating content, supporting sales, and giving employees instant access to company knowledge.\n\nOur focus isn't chasing AI trends. It's implementing practical AI that saves time, improves decisions, and supports growth.",
    },
    {
      q: "How do we help you stand out from competitors?",
      a: 'Most competitors look the same because they say the same things.\n\n"We deliver quality."\n"We\'re customer focused."\n"We have years of experience."\n\nNone of those statements help buyers choose between companies.\n\nWe help identify what genuinely makes your business different, then build that into your positioning, messaging, website, content, and digital presence.\n\nThe goal isn\'t to be louder than your competitors.\n\nIt\'s to become the obvious choice.',
    },
    {
      q: "How much should a B2B website cost?",
      a: "The better question is:\n\nHow much business should your website generate?\n\nA website is an investment, not an expense.\n\nA professionally positioned website that consistently generates qualified enquiries often delivers a return far beyond its initial cost.\n\nEvery business has different requirements, so we don't offer one-size-fits-all packages. After understanding your goals, we'll recommend the solution that delivers the greatest commercial impact—not simply the largest project.",
    },
    {
      q: "Do you work with manufacturers and industrial companies?",
      a: "Yes.\n\nMany of our clients operate in industries where technical expertise is high but marketing has never been a priority.\n\nWe understand complex B2B businesses, long sales cycles, technical products, and relationship-driven buying decisions.\n\nWhether you're a manufacturer, engineering company, industrial supplier, exporter, logistics provider, construction firm, consultancy, or B2B software company, our role is the same:\n\nHelp your market understand the value you already deliver.",
    },
    {
      q: "Can you help if we already have a marketing team?",
      a: "Absolutely.\n\nWe're not here to replace your marketing team.\n\nWe're here to give them a stronger strategic foundation.\n\nMany companies already have talented marketers, designers, or external agencies. What they're often missing is clear positioning, stronger messaging, a better website, or a long-term authority strategy.\n\nWe frequently work alongside internal teams, providing the strategy, systems, and direction that make everyone's work more effective.",
    },
    {
      q: "What results should we realistically expect?",
      a: "Every business is different, so we never promise overnight growth.\n\nWhat we do promise is a structured approach that improves how your company is perceived by the market.\n\nClients typically see clearer positioning, stronger messaging, increased credibility, more qualified enquiries, better conversion rates, and a more consistent flow of opportunities over time.\n\nOur objective isn't more marketing activity.\n\nIt's sustainable business growth.",
    },
    {
      q: "How does your Growth Audit work?",
      a: "Every engagement begins with understanding your business.\n\nDuring the Growth Audit, we review your positioning, website, messaging, visibility, customer journey, and digital presence to identify the biggest opportunities for growth.\n\nYou'll receive practical recommendations—not a generic report or a sales presentation.\n\nIf we believe we can help, we'll present a clear roadmap with priorities, timelines, and expected outcomes.\n\nIf we're not the right fit, we'll tell you that too.\n\nBecause the right strategy is more valuable than selling the wrong project.",
    },
  ];

  let activeIndex = $state(null);

  function toggle(index) {
    if (activeIndex === index) {
      activeIndex = null;
    } else {
      activeIndex = index;
    }
  }
</script>

<section
  id="faq"
  class="w-full bg-[#050505] text-white py-32 border-t border-white/10 relative overflow-hidden"
>
  <div
    class="absolute top-0 right-0 w-125 h-125 bg-[#3B82F6] opacity-5 blur-[150px] rounded-full pointer-events-none"
  ></div>

  <div
    class="px-6 md:px-24 max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16 relative z-10"
  >
    <!-- Left Side: Title -->
    <div class="w-full md:w-1/3">
      <span
        class="text-sm font-mono text-white/50 uppercase tracking-widest mb-6 block"
        >Common Questions</span
      >
      <h2 class="text-4xl md:text-5xl font-serif leading-tight">
        Questions <br />
        <span class="italic text-white/40">Decision-Makers Ask</span>
      </h2>
      <p class="text-white/50 mt-6 font-sans font-light">
        Answers to the most common questions regarding our process, technology
        stack, and partnership models.
      </p>

      <a
        href="/faq"
        class="inline-flex items-center gap-2 mt-8 text-sm font-mono text-white/80 uppercase hover:text-white transition-colors group"
      >
        View all Questions
        <span
          class="w-8 h-px bg-white transform origin-left transition-transform duration-300 group-hover:scale-x-150"
        ></span>
      </a>
    </div>

    <!-- Right Side: Accordion -->
    <div class="w-full md:w-2/3 flex flex-col">
      {#each faqs as item, index}
        <button
          class="w-full border-b border-white/10 py-8 text-left flex flex-col cursor-pointer group"
          onclick={() => toggle(index)}
          aria-expanded={activeIndex === index}
        >
          <div class="w-full flex justify-between items-center">
            <span
              class="text-2xl md:text-3xl font-serif text-white/80 group-hover:text-white transition-colors duration-300"
            >
              {item.q}
            </span>

            <div
              class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transform transition-transform duration-500 group-hover:bg-white/10"
            >
              {#if activeIndex === index}
                <Minus class="w-5 h-5 text-white" />
              {:else}
                <Plus class="w-5 h-5 text-white" />
              {/if}
            </div>
          </div>

          {#if activeIndex === index}
            <div
              transition:slide={{
                duration: 400,
                easing: (t) => --t * t * t + 1,
              }}
              class="overflow-hidden"
            >
              <p
                class="pt-6 text-lg text-white/50 font-sans font-light leading-relaxed max-w-2xl whitespace-pre-line"
              >
                {item.a}
              </p>
            </div>
          {/if}
        </button>
      {/each}
    </div>
  </div>
</section>
