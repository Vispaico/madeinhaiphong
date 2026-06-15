<script>
  import Seo from "$lib/components/Seo.svelte";
  import Footer from "$lib/components/Footer.svelte";

  const sections = [
    {
      title: "1. Introduction",
      content:
        "These Terms of Service govern your use of the website and services provided by Made in Haiphong. By accessing our website or engaging our services, you agree to be bound by these terms. If you do not agree with any part of these terms, you should not use our website or services.",
    },
    {
      title: "2. Services",
      content:
        "Made in Haiphong provides branding, positioning, website development, content strategy, thought leadership, and growth consulting services. The specific scope, deliverables, timeline, and fees for each engagement will be outlined in a separate agreement signed by both parties. All services are provided on an as-available basis, and we reserve the right to refuse service to any person or entity.",
    },
    {
      title: "3. Intellectual Property",
      content:
        "Upon full payment for services, all intellectual property rights to the deliverables created specifically for your engagement transfer to you. Made in Haiphong retains the right to display completed work in our portfolio, case studies, and marketing materials unless otherwise agreed in writing. We retain ownership of all tools, frameworks, methodologies, and pre-existing materials used in the delivery of our services.",
    },
    {
      title: "4. Client Responsibilities",
      content:
        "You agree to provide timely access to information, resources, and decision-makers necessary for the successful completion of our engagement. Delays caused by late feedback, missing information, or internal approvals may affect project timelines and are not the responsibility of Made in Haiphong.",
    },
    {
      title: "5. Fees & Payment",
      content:
        "Fees are outlined in your engagement agreement. Invoices are due within the payment terms specified in that agreement. Late payments may result in a pause of services and additional fees. All fees are exclusive of applicable taxes, which will be added to invoices where required by law.",
    },
    {
      title: "6. Confidentiality",
      content:
        "Both parties agree to maintain the confidentiality of all proprietary information shared during the engagement. This includes business strategies, financial data, customer information, and any materials marked as confidential. This obligation survives the termination of our agreement.",
    },
    {
      title: "7. Limitation of Liability",
      content:
        "Made in Haiphong's liability for any claim arising from our services is limited to the total fees paid for the specific engagement giving rise to the claim. We are not liable for any indirect, incidental, or consequential damages, including lost revenue, lost profits, or loss of data, even if advised of the possibility of such damages.",
    },
    {
      title: "8. Termination",
      content:
        "Either party may terminate an engagement with written notice as specified in your agreement. Upon termination, you are responsible for payment for all work completed up to the date of termination. Provisions regarding confidentiality, intellectual property, and limitation of liability survive termination.",
    },
    {
      title: "9. Website Use",
      content:
        "Our website is provided for informational purposes. You may not reproduce, distribute, modify, or create derivative works from our website content without prior written consent. We reserve the right to modify or discontinue our website at any time without notice.",
    },
    {
      title: "10. Governing Law",
      content:
        "These terms are governed by the laws of Vietnam. Any disputes arising from these terms or our services shall be resolved through good-faith negotiations first, and if unresolved, through binding arbitration in Haiphong, Vietnam.",
    },
  ];
</script>

<Seo
  title="Terms of Service | Made in Haiphong"
  description="Terms of Service for Made in Haiphong, a premium authority-building agency."
/>

<div class="bg-[#050505] text-white min-h-screen">
  <!-- Hero -->
  <section class="w-full pt-40 pb-16 md:pb-24 px-6 relative overflow-hidden">
    <div class="absolute inset-0 z-0 pointer-events-none will-change-transform">
      <img
        src="/made-in-haiphong-services.webp"
        alt=""
        class="w-full h-full object-cover mix-blend-screen opacity-[0.65]"
      />
      <div
        class="absolute inset-0 bg-linear-to-b from-[#050505]/40 via-[#050505]/10 to-[#050505]"
      ></div>
      <div
        class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#050505_90%)]"
      ></div>
    </div>
    <div class="max-w-4xl mx-auto relative z-10">
      <span
        class="text-xs font-mono text-white/30 uppercase tracking-widest mb-8 block"
        >Legal</span
      >
      <h1
        class="text-[10vw] md:text-[6vw] font-serif leading-[0.9] tracking-tighter"
      >
        Terms of<br />
        <span class="italic text-white/40">Service</span>
      </h1>
      <p
        class="text-lg text-white/50 font-sans font-light leading-relaxed mt-8 max-w-2xl"
      >
        Last updated: {new Date().toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
      </p>
    </div>
  </section>

  <!-- Content -->
  <section class="w-full py-16 md:py-24 px-6 border-t border-white/5">
    <div class="max-w-4xl mx-auto">
      <div class="flex flex-col gap-16">
        {#each sections as section}
          <div>
            <h2 class="text-2xl md:text-3xl font-serif text-white mb-4">
              {section.title}
            </h2>
            <p
              class="text-base md:text-lg text-white/50 font-sans font-light leading-relaxed"
            >
              {section.content}
            </p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section
    class="w-full min-h-[70vh] flex flex-col items-center justify-center px-6 pt-40 pb-24 relative overflow-hidden"
  >
    <div class="absolute inset-0 z-0 pointer-events-none will-change-transform">
      <img
        src="/made-in-haiphong-services.webp"
        alt=""
        class="w-full h-full object-cover mix-blend-screen opacity-[0.65]"
      />
      <div
        class="absolute inset-0 bg-linear-to-b from-[#050505]/40 via-[#050505]/10 to-[#050505]"
      ></div>
      <div
        class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#050505_90%)]"
      ></div>
    </div>
    <div class="max-w-5xl mx-auto text-center relative z-10">
      <span
        id="hero-tag"
        class="text-xs font-mono text-white/30 uppercase tracking-widest mb-8 block"
        >Authority</span
      >
      <h1
        id="hero-headline"
        class="text-[13vw] md:text-[7vw] font-serif leading-[0.85] tracking-tighter"
      >
        The market rarely rewards<br />
        <span class="italic text-white/40">the best company.</span>
      </h1>
      <p class="text-xl md:text-2xl text-white/60 font-serif mt-8">
        It rewards the company people notice, remember, and trust.
      </p>
      <a
        href="mailto:hello@madeinhaiphong.com"
        class="inline-block mt-16 px-10 py-5 bg-white text-black rounded-full font-sans font-medium text-lg hover:bg-[#a08300] hover:text-white transition-all duration-500 cursor-pointer"
      >
        Let's have a chat
      </a>
    </div>
  </section>

  <Footer />
</div>
