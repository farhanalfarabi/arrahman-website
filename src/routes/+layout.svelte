<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	const siteUrl = 'https://baitulqurancamba.com';
	const siteName = 'Baitul Quran Camba';
	const title = `${siteName} | Pondok Pesantren Arrahman`;
	const description =
		'Pondok Pesantren Arrahman Baitul Quran Camba di Maros yang fokus membina hafiz-hafizah Al-Qur’an, pendidikan adab, dan kepemimpinan santri.';
	const keywords =
		'pondok pesantren, pesantren tahfidz, baitul quran camba, pondok arrahman, santri maros, sekolah islam, tahfidzul quran';
	const author = 'Baitul Quran Camba';
	const socialImage = `${siteUrl}/logo.png`;

	const schemaJson = JSON.stringify(
		{
			'@context': 'https://schema.org',
			'@type': 'EducationalOrganization',
			name: siteName,
			alternateName: 'Pondok Pesantren Arrahman',
			url: siteUrl,
			logo: socialImage,
			description,
			email: 'info@baitulqurancamba.com',
			telephone: '+62-812-3456-7890',
			address: {
				'@type': 'PostalAddress',
				streetAddress: 'Jl. Poros Camba, Baju Bodoa',
				addressLocality: 'Maros',
				addressRegion: 'Sulawesi Selatan',
				postalCode: '90552',
				addressCountry: 'ID'
			},
			sameAs: [
				'https://baitulqurancamba.com',
				'https://www.facebook.com/baitulqurancamba',
				'https://www.instagram.com/baitulqurancamba'
			]
		},
		null,
		2
	).replace(/</g, '\\u003c');

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="canonical" href={siteUrl} />
	<meta name="description" content={description} />
	<meta name="keywords" content={keywords} />
	<meta name="author" content={author} />
	<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="id_ID" />
	<meta property="og:site_name" content={siteName} />
	<meta property="og:url" content={siteUrl} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={socialImage} />
	<meta property="og:image:alt" content={`Logo ${siteName}`} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={socialImage} />
	<meta name="twitter:image:alt" content={`Logo ${siteName}`} />
	{@html `<script type="application/ld+json">${schemaJson}</script>`}
</svelte:head>

{@render children?.()}
