<script>
  import Seo from "$lib/components/Seo.svelte";
  import Footer from "$lib/components/Footer.svelte";

  const sections = [
    {
      title: "1. Introduction",
      content:
        "Made in Haiphong ('we', 'us', or 'our') respects your privacy and is committed to protecting the personal data you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage our services.",
    },
    {
      title: "2. Information We Collect",
      content:
        "We may collect personal information you voluntarily provide to us, including your name, email address, phone number, company name, job title, and any other details you share when filling out forms, subscribing to our newsletter, or communicating with us. We also automatically collect certain technical data such as IP address, browser type, device information, and usage patterns through cookies and similar technologies.",
    },
    {
      title: "3. How We Use Your Information",
      content:
        "We use your information to respond to your inquiries, provide our services, send relevant communications about our work and insights, improve our website and services, and comply with legal obligations. We may also use anonymised data for internal analysis and service improvement.",
    },
    {
      title: "4. Communications & Marketing",
      content:
        "With your consent, we may send you emails about our services, insights, case studies, and industry perspectives. You can opt out of marketing communications at any time by clicking the unsubscribe link in any email or by contacting us directly. We do not sell or rent your personal information to third parties for their marketing purposes.",
    },
    {
      title: "5. Data Sharing & Disclosure",
      content:
        "We do not sell your personal data. We may share your information with trusted third-party service providers who assist us in operating our website, conducting our business, or serving you, provided they agree to keep your information confidential. We may also disclose information if required by law or to protect our rights.",
    },
    {
      title: "6. Data Security",
      content:
        "We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.",
    },
    {
      title: "7. Data Retention",
      content:
        "We retain your personal data only as long as necessary to fulfil the purposes for which it was collected, or as required by applicable law. When no longer needed, your data will be securely deleted or anonymised.",
    },
    {
      title: "8. Your Rights",
      content:
        "Depending on your location, you may have the right to access, correct, delete, or port your personal data, as well as the right to restrict or object to certain processing activities. To exercise these rights, please contact us using the information below. We will respond to your request within applicable legal timeframes.",
    },
    {
      title: "9. Cookies",
      content:
        "Our website may use cookies and similar tracking technologies to enhance your experience, analyse traffic, and understand where our visitors come from. You can control cookie preferences through your browser settings. Disabling certain cookies may affect the functionality of our website.",
    },
    {
      title: "10. Third-Party Links",
      content:
        "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any third-party sites you visit.",
    },
    {
      title: "11. Changes to This Policy",
      content:
        "We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated policy on this page with a revised date. Your continued use of our website after changes constitutes acceptance of the updated policy.",
    },
    {
      title: "12. Contact",
      content:
        "If you have questions about this Privacy Policy or wish to exercise your data rights, please contact us at privacy@madeinhaiphong.com.",
    },
  ];
</script>

<Seo
  title="Privacy Policy | Made in Haiphong"
  description="Privacy Policy for Made in Haiphong, a premium authority-building agency."
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
        Privacy<br />
        <span class="italic text-white/40">Policy</span>
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
    bind:this={ctaRef}
    class="w-full py-32 md:py-48 px-6 border-t border-white/5 relative overflow-hidden"
  >
    <div
      class="absolute bottom-0 left-1/2 -translate-x-1/2 w-screen h-100 bg-[#a08300] opacity-[0.03] blur-[200px] pointer-events-none"
    ></div>
    <div class="max-w-4xl mx-auto text-center relative z-10">
      <h2
        class="text-5xl md:text-7xl lg:text-8xl font-serif leading-[0.9] tracking-tighter"
      >
        The market rarely rewards<br />
        <span class="italic text-white/40">the best company.</span>
      </h2>
      <p class="text-xl md:text-2xl text-white/60 font-serif mt-8">
        It rewards the company people notice, remember, and trust.
      </p>
      <a
        href="mailto:hello@madeinhaiphong.com"
        class="inline-block mt-16 px-10 py-5 bg-white text-black rounded-full font-sans font-medium text-lg hover:bg-[#a08300] hover:text-white transition-all duration-500 cursor-pointer"
      >
        Book a Strategy Call
      </a>
    </div>
  </section>

  <Footer />
</div>
