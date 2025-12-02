<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { page } from '$app/stores';

	const siteUrl = 'https://baitulqurancamba.com';
	const siteName = 'Baitul Quran Camba';
	
	// Default SEO values
	const defaultTitle = `${siteName} | Pondok Pesantren Tahfizh Baitul Qur'an Camba`;
	const defaultDescription =
		`Pondok Pesantren Tahfizh Baitul Qur'an Camba di Maros yang fokus membina hafiz-hafizah Al-Qur'an, pendidikan adab, dan kepemimpinan santri.`;
	const defaultKeywords =
		'pondok pesantren, pesantren tahfidz, baitul quran camba, pondok pesantren camba, santri maros, sekolah islam, tahfidzul quran';
	const author = `Baitul Qur'an Camba`;
	const socialImage = `${siteUrl}/logo.png`;

	// Get page-specific SEO data using $derived for Svelte 5 runes mode
	const currentPath = $derived($page.url.pathname);
	const pageTitle = $derived($page.data?.title || defaultTitle);
	const pageDescription = $derived($page.data?.description || defaultDescription);
	const pageKeywords = $derived($page.data?.keywords || defaultKeywords);
	const currentUrl = $derived(`${siteUrl}${currentPath === '/' ? '' : currentPath}`);
	const pageImage = $derived($page.data?.image || socialImage);

	// Structured data dengan informasi yang benar dari footer
	const schemaJson = JSON.stringify(
		{
			'@context': 'https://schema.org',
			'@type': 'EducationalOrganization',
			name: siteName,
			alternateName: `Pondok Pesantren Tahfizh Baitul Qur'an Camba`,
			url: siteUrl,
			logo: {
				'@type': 'ImageObject',
				url: socialImage,
				width: 512,
				height: 512
			},
			description: defaultDescription,
			email: 'ponpestahfizhbaitulqurancamba@gmail.com',
			telephone: '+62-821-2488-0061',
			address: {
				'@type': 'PostalAddress',
				streetAddress: 'Jumpulu, Link. Mallisu, Kelurahan Cempaniga, Kecamatan Camba',
				addressLocality: 'Maros',
				addressRegion: 'Sulawesi Selatan',
				addressCountry: 'ID'
			},
			sameAs: [
				'https://baitulqurancamba.com',
				'https://www.facebook.com/baitulqurancambaofficial',
				'https://www.instagram.com/baitulqurancambaofficial'
			]
		},
		null,
		2
	).replace(/</g, '\\u003c');

	let { children } = $props();
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<link rel="icon" href={favicon} />
	<link rel="icon" type="image/png" href="/logo.png" />
	<link rel="apple-touch-icon" href="/logo.png" />
	<link rel="canonical" href={currentUrl} />
	<meta name="description" content={pageDescription} />
	<meta name="keywords" content={pageKeywords} />
	<meta name="author" content={author} />
	<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="id_ID" />
	<meta property="og:site_name" content={siteName} />
	<meta property="og:url" content={currentUrl} />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:description" content={pageDescription} />
	<meta property="og:image" content={pageImage} />
	<meta property="og:image:alt" content={`${siteName} - ${pageTitle}`} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:type" content="image/png" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={pageTitle} />
	<meta name="twitter:description" content={pageDescription} />
	<meta name="twitter:image" content={pageImage} />
	<meta name="twitter:image:alt" content={`${siteName} - ${pageTitle}`} />
	{@html `<script type="application/ld+json">${schemaJson}</script>`}
</svelte:head>

{@render children?.()}
