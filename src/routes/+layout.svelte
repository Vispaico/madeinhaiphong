<script>
    import { onMount } from "svelte";
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    import Lenis from "lenis";
    import "lenis/dist/lenis.css";
    import "./layout.css";
    import favicon from "$lib/assets/favicon.svg";
    import Header from "$lib/components/header.svelte";
    import Cursor from "$lib/components/Cursor.svelte";
    import ContactModal from "$lib/components/ContactModal.svelte";
    import { isContactModalOpen, openContactModal, closeContactModal } from "$lib/stores/contactModal.svelte.js";
    import { afterNavigate, beforeNavigate } from "$app/navigation";

    let { children } = $props();

    let lenis;

    beforeNavigate(() => {
        // Stop Lenis smooth scroll during navigation to prevent scroll fighting
        if (lenis) lenis.stop();
    });

    afterNavigate(() => {
        // Force native scroll to top first (handles the initial flash)
        window.scrollTo(0, 0);
        // Then tell Lenis to reset, with a tiny delay so the DOM is settled
        requestAnimationFrame(() => {
            if (lenis) {
                lenis.scrollTo(0, { immediate: true });
                lenis.start();
                ScrollTrigger.refresh();
            }
        });
    });

    onMount(() => {
        gsap.registerPlugin(ScrollTrigger);

        lenis = new Lenis({
            autoRaf: false,
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: "vertical",
            gestureDirection: "vertical",
            smooth: true,
            smoothTouch: false,
            touchMultiplier: 2,
        });

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        lenis.on("scroll", ScrollTrigger.update);

        // Rewrite mailto hrefs to prevent "mailto:..." appearing on status bar
        const rewriteMailtoLinks = () => {
            document.querySelectorAll('a[href^="mailto:"]').forEach((link) => {
                if (!link.dataset.contactModalBound) {
                    link.dataset.contactModalBound = "true";
                    link.dataset.contactHref = link.getAttribute("href");
                    link.setAttribute("href", "#");
                }
            });
        };
        rewriteMailtoLinks();
        const observer = new MutationObserver(rewriteMailtoLinks);
        observer.observe(document.body, { childList: true, subtree: true });

        // Intercept clicks on mailto-originated links using the data attribute
        const handleClick = (e) => {
            const link = e.target.closest("a");
            if (link && link.dataset.contactModalBound === "true") {
                e.preventDefault();
                openContactModal();
            }
        };
        document.addEventListener("click", handleClick);

        return () => {
            lenis.destroy();
            gsap.ticker.remove(lenis.raf);
            document.removeEventListener("click", handleClick);
            observer.disconnect();
        };
    });
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
        href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600&display=swap"
        rel="stylesheet"
    />
</svelte:head>

<Cursor />
<Header />

<main class="app-wrapper">
    {@render children()}
</main>

<ContactModal isOpen={$isContactModalOpen} onclose={closeContactModal} />
