<script>
	export let src = '';
	export let alt = '';
	export let name = '';
	export let caption = '';
</script>

<article class="overflow-hidden rounded-2xl border border-border bg-background shadow-sm">
	{#if src}
		<img {src} {alt} class="h-48 w-full object-cover sm:h-56 md:h-52 lg:h-56" loading="lazy" />
	{:else}
		<div
			class="h-48 w-full bg-gradient-to-br from-brand-50 to-accent-50 sm:h-56 md:h-52 lg:h-56"
		></div>
	{/if}
	<div class="p-4">
		{#if name}
			<h3 class="text-sm font-medium">{name}</h3>
		{/if}
		{#if caption}
			<p class="mt-1 text-xs text-muted">{caption}</p>
		{/if}
	</div>
</article>
