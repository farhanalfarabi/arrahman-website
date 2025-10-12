<script>
	const features = [
		{
			title: 'Asrama Nyaman',
			desc: 'Kamar bersih, aman, dan terpisah putra-putri.',
			img: 'https://picsum.photos/seed/asrama/800/600',
			alt: 'Asrama pondok',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" class='h-6 w-6' viewBox='0 0 24 24' fill='currentColor'><path d='M3 10.5V21h6v-5h6v5h6V10.5L12 3 3 10.5z'/></svg>`
		},
		{
			title: 'Masjid & Tahfidz',
			desc: 'Pembinaan ibadah dan hafalan Al-Qur’an terstruktur.',
			img: 'https://picsum.photos/seed/masjid/800/600',
			alt: 'Masjid pondok',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" class='h-6 w-6' viewBox='0 0 24 24' fill='currentColor'><path d='M12 2l7 6v12H5V8l7-6z'/></svg>`
		},
		{
			title: 'Perpustakaan',
			desc: 'Literatur keislaman dan umum untuk menunjang belajar.',
			img: 'https://picsum.photos/seed/perpustakaan/800/600',
			alt: 'Perpustakaan pondok',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" class='h-6 w-6' viewBox='0 0 24 24' fill='currentColor'><path d='M4 5h16v14H4zM6 7v10h12V7z'/></svg>`
		},
		{
			title: 'Laboratorium',
			desc: 'Praktikum sains dan komputer modern.',
			img: 'https://picsum.photos/seed/lab/800/600',
			alt: 'Laboratorium',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" class='h-6 w-6' viewBox='0 0 24 24' fill='currentColor'><path d='M6 2h12v2H6zM9 4h6l1 8-4 6-4-6 1-8z'/></svg>`
		},
		{
			title: 'Ekstrakurikuler',
			desc: 'Pramuka, bahasa, olahraga, seni hadrah, dan lainnya.',
			img: 'https://picsum.photos/seed/ekskul/800/600',
			alt: 'Kegiatan ekstrakurikuler',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" class='h-6 w-6' viewBox='0 0 24 24' fill='currentColor'><path d='M12 2a5 5 0 100 10 5 5 0 000-10zM2 22a10 10 0 0120 0H2z'/></svg>`
		},
		{
			title: 'Bimbingan Karakter',
			desc: 'Pendampingan akhlak dan adab keseharian santri.',
			img: 'https://picsum.photos/seed/karakter/800/600',
			alt: 'Pendampingan karakter',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" class='h-6 w-6' viewBox='0 0 24 24' fill='currentColor'><path d='M12 12l8-6v12l-8-6zM4 6h2v12H4z'/></svg>`
		}
	];
</script>

<section id="fasilitas" class="py-16 sm:py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="text-3xl font-[var(--font-display)] font-bold tracking-tight sm:text-4xl">
				Fasilitas & Keunggulan
			</h2>
			<p class="mt-3 text-muted">
				Lingkungan belajar yang mendukung pengembangan ilmu dan akhlak santri.
			</p>
		</div>
		<div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each features as f}
				<article class="rounded-2xl border border-border bg-background p-6 shadow-sm">
					{#if f.img}
						<div class="aspect-[16/9] overflow-hidden rounded-xl">
							<img
								src={f.img}
								alt={f.alt || f.title}
								class="h-full w-full object-cover"
								loading="lazy"
							/>
						</div>
					{/if}
					
					<h3 class="mt-4 text-lg font-semibold">{f.title}</h3>
					<p class="mt-2 text-sm text-muted">{f.desc}</p>
				</article>
			{/each}
		</div>
	</div>
</section>
