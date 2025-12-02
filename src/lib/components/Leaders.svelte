<script>
	import { User } from 'lucide-svelte';
	import ikhwanImg from '$lib/assets/ikhwan.png';
	import akhwatImg from '$lib/assets/akhwat.png';
	
	const leaders = [
		{
			name: 'Ardiansyah, S.Pd.',
			position: 'Pimpinan Umum Pondok Ikhwan dan Akhwat',
			photo: ikhwanImg
		},
		{
			name: 'Muhammad Abdurrahman',
			position: 'Penanggung Jawab Pesantren Ikhwan',
			photo: ikhwanImg
		},
		{
			name: 'Aisyah Abdurrahman',
			position: 'Penanggung Jawab Pesantren Akhwat',
			photo: akhwatImg
		},
		{
			name: 'Ridwan, S.Pd.I',
			position: 'Kepala Sekolah Ulya',
			photo: ikhwanImg
		},
		{
			name: 'Sumarni, S.Pd.',
			position: 'Kepala Sekolah Wustha',
			photo: akhwatImg
		}
	];
</script>

<section id="tokoh" class="relative isolate overflow-hidden py-16 sm:py-20">
	<div class="absolute inset-0 -z-10 bg-gradient-to-b from-background via-brand-50/40 to-background"></div>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center mb-12">
			<span class="badge">Tokoh</span>
			<h2 class="mt-3 text-2xl font-[var(--font-display)] font-bold tracking-tight sm:text-4xl">
				Profil Tokoh Pondok Pesantren Tahfizh Baitul Qur'an Camba
			</h2>
		</div>

		<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
			{#each leaders as leader}
				<article
					class="group relative overflow-hidden rounded-2xl border border-border bg-background p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
				>
					<!-- Photo Section -->
					<div class="relative mb-6">
						<div
							class="mx-auto aspect-square w-48 overflow-hidden rounded-full border-4 border-brand-200 bg-gradient-to-br from-brand-100 to-brand-200 shadow-md"
						>
							{#if leader.photo}
								<img
									src={leader.photo}
									alt={leader.name}
									class="h-full w-full object-cover transition-transform group-hover:scale-105"
									loading="lazy"
								/>
							{:else}
								<div
									class="flex h-full w-full items-center justify-center bg-gradient-to-br from-brand-100 to-brand-200"
								>
									<User class="h-16 w-16 text-brand-400" />
								</div>
							{/if}
						</div>
						<!-- Decorative circle -->
						<div
							class="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-brand-200/20 blur-xl"
						></div>
					</div>

					<!-- Content Section -->
					<div class="text-center">
						<h3 class="text-lg font-semibold text-foreground sm:text-xl">{leader.name}</h3>
						<div class="mt-2 flex items-center justify-center">
							<div class="h-px w-12 bg-brand-300"></div>
						</div>
						<p class="mt-3 text-sm leading-relaxed text-muted">{leader.position}</p>
					</div>

					<!-- Hover effect overlay -->
					<div
						class="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-brand-50/0 to-brand-50/0 opacity-0 transition-opacity group-hover:opacity-100"
					></div>
				</article>
			{/each}
		</div>
	</div>
</section>

