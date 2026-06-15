<script>
  let {
    title = "made in HAIPHONG — Premium Agency",
    description = "Be the company everyone knows.",
    url = "https://made-in-haiphong.com",
    image = "/static/made-in-haiphong-logo.webp",
  } = $props();
</script>

<svelte:head>
  <!-- Primary Meta Tags -->
  <title>{title}</title>
  <meta name="title" content={title} />
  <meta name="description" content={description} />
  <meta name="robots" content="index, follow" />
  <meta name="theme-color" content="#050505" />
  <meta name="author" content="vispaico" />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content={url} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={image} />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content={url} />
  <meta property="twitter:title" content={title} />
  <meta property="twitter:description" content={description} />
  <meta property="twitter:image" content={image} />
</svelte:head>
