<script>
	export let year = '';
	export let photos = [];
</script>

<section class="py-10">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		{#if year}
			<h2 class="text-xl font-semibold">{year}</h2>
		{/if}
		<div class="mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			{#each photos as src}
				<figure class="overflow-hidden rounded-xl border border-border">
					<img src={src} alt={`Dokumentasi ${year}`} class="h-40 w-full object-cover sm:h-48" loading="lazy" />
				</figure>
			{/each}
		</div>
	</div>
</section>


