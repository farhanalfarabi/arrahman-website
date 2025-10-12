<script>
	const testimonies = [
		{
			name: 'Ummu Najwa',
			role: 'Wali Santri',
			text: 'Anak saya menjadi lebih disiplin dan rajin beribadah.',
			avatar: 'https://i.pravatar.cc/80?img=5'
		},
		{
			name: 'Ahmad Fauzi',
			role: 'Alumni',
			text: 'Lingkungan belajar kondusif dan para ustadz membimbing dengan sabar.',
			avatar: 'https://i.pravatar.cc/80?img=12'
		},
		{
			name: 'Siti Rahma',
			role: 'Wali Santri',
			text: 'Fasilitas lengkap, program tahfidznya terstruktur.',
			avatar: 'https://i.pravatar.cc/80?img=31'
		}
	];
</script>

<section id="testimoni" class="py-16 sm:py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="text-3xl font-[var(--font-display)] font-bold tracking-tight sm:text-4xl">
				Apa Kata Mereka
			</h2>
			<p class="mt-3 text-muted">Cerita dari wali santri dan alumni.</p>
		</div>
		<div class="mt-10 grid gap-6 md:grid-cols-3">
			{#each testimonies as t}
				<figure class="rounded-2xl border border-border bg-background p-6 shadow-sm">
					<blockquote class="text-sm text-muted">“{t.text}”</blockquote>
					<figcaption class="mt-4 flex items-center gap-3">
						{#if t.avatar}
							<img
								src={t.avatar}
								alt={t.name}
								class="h-10 w-10 rounded-full object-cover"
								loading="lazy"
							/>
						{:else}
							<div class="h-10 w-10 rounded-full bg-brand-200"></div>
						{/if}
						<div>
							<div class="text-sm font-medium">{t.name}</div>
							<div class="text-xs text-muted">{t.role}</div>
						</div>
					</figcaption>
				</figure>
			{/each}
		</div>
	</div>
</section>
