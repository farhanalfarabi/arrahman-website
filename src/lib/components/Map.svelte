<script>
	export let query = 'Pondok Pesantren Tahfizh Baitul Qur\'an Camba';
	export let zoom = 15;
	const src = `https://maps.google.com/maps?q=${encodeURIComponent(query)}&t=&z=${zoom}&ie=UTF8&iwloc=&output=embed`;
</script>

<section id="lokasi" class="py-16 sm:py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="text-3xl font-[var(--font-display)] font-bold tracking-tight sm:text-4xl">
				Lokasi Pondok
			</h2>
			<p class="mt-3 text-muted">Temukan lokasi Pondok Pesantren Tahfizh Baitul Qur'an Camba pada peta di bawah ini.</p>
		</div>
		<div class="mt-8 overflow-hidden rounded-2xl border border-border shadow-sm">
			<div class="aspect-[16/9]">
				<iframe
					title="Lokasi Pondok Pesantren Tahfizh Baitul Qur'an Camba"
					src={src}
					width="100%"
					height="100%"
					style="border:0"
					allowfullscreen=""
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
					class="h-full w-full"
				></iframe>
			</div>
		</div>
		<p class="mt-4 text-center text-sm text-muted">
			Jika peta tidak tampil, buka melalui
			<a
				href={`https://maps.google.com/?q=${encodeURIComponent(query)}`}
				target="_blank"
				rel="noopener noreferrer"
				class="underline hover:text-foreground"
			>
				Google Maps
			</a>.
		</p>
	</div>
</section>


