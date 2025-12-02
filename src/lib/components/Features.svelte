<script>
	import masjidImg from '$lib/assets/pondok/masjid.jpg';
	import kelasImg from '$lib/assets/pondok/kelas.jpg';
	import asramaImg from '$lib/assets/pondok/asrama.jpg';
	import rumahTamuImg from '$lib/assets/pondok/rumah-tamu.jpg';
	import kantorImg from '$lib/assets/pondok/kantor.jpg';
	import toiletImg from '$lib/assets/pondok/toilet.jpg';
	import uksImg from '$lib/assets/pondok/uks.jpg';
	import halaqahTahfidzImg from '$lib/assets/pondok/halaqah-tahfidz.jpg';
	import eskulFutsalImg from '$lib/assets/pondok/eskul-futsal.jpg';

	const features = [
		{
			title: 'Masjid',
			img: masjidImg,
			alt: 'Masjid'
		},
		{
			title: 'Kelas',
			img: kelasImg,
			alt: 'Kelas'
		},
		{
			title: 'Asrama',
			img: asramaImg,
			alt: 'Asrama'
		},
		{
			title: 'Rumah Tamu',
			img: rumahTamuImg,
			alt: 'Rumah Tamu'
		},
		{
			title: 'Kantor',
			img: kantorImg,
			alt: 'Kantor'
		},
		{
			title: 'WC',
			img: toiletImg,
			alt: 'WC'
		},

		{
			title: 'UKS',
			img: uksImg,
			alt: 'UKS'
		},
		{
			title: 'Program Unggulan',
			subtitle: 'Tahfizh, Tahsin, Tarbiyah Islamiyah, Keterampilan Dakwah, Pidato 3 Bahasa, Taklim Kitab Kuning, Leadership (Kepemimpinan)',
			img: halaqahTahfidzImg,
			alt: 'Program Unggulan'
		},
		{
			title: 'Ekstrakurikuler',
			subtitle: 'Volly, Futsal, Bulu Tangkis, Takraw, Tenis Meja, Desain Grafis',
			img: eskulFutsalImg,
			alt: 'Ekstrakurikuler'
		}
	];
</script>

<section id="fasilitas" class="py-16 sm:py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<span class="badge">Fasilitas</span>
			<h2 class="mt-3 text-2xl font-[var(--font-display)] font-bold tracking-tight sm:text-4xl">
				Fasilitas dan Keunggulan
			</h2>
		</div>
		<div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each features as f}
				<article
					class="group relative overflow-hidden rounded-2xl border border-border bg-background p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
				>
					{#if f.img}
						<div class="aspect-[16/9] overflow-hidden rounded-xl">
							<img
								src={f.img}
								alt={f.alt || f.title}
								class="h-full w-full object-cover transition-transform group-hover:scale-105"
								loading="lazy"
							/>
						</div>
					{/if}
					
					<h3 class="mt-4 text-lg font-semibold text-foreground">{f.title}</h3>
					{#if f.subtitle}
						<p class="mt-2 text-sm text-muted leading-relaxed">{f.subtitle}</p>
					{/if}
				</article>
			{/each}
		</div>
	</div>
</section>
