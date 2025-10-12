<script>
	let open = false;
</script>

<nav
	class="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60"
>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<a href="/" class="flex items-center gap-2">
				<div class="grid h-9 w-9 place-items-center rounded-xl bg-brand-600 font-bold text-white">
					AR
				</div>
				<span class="text-lg font-[var(--font-display)] font-semibold tracking-tight">Arrahman</span
				>
			</a>
		<div class="hidden items-center gap-8 text-sm md:flex">
			<a href="/#beranda" class="text-muted transition-colors hover:text-foreground">Beranda</a>
			<a href="/#program" class="text-muted transition-colors hover:text-foreground">Program</a>
			<a href="/#fasilitas" class="text-muted transition-colors hover:text-foreground">Fasilitas</a
			>
			<a href="/#testimoni" class="text-muted transition-colors hover:text-foreground">Testimoni</a
			>
			<a href="/#kontak" class="text-muted transition-colors hover:text-foreground">Kontak</a>
			<a href="/galeri" class="text-muted transition-colors hover:text-foreground">Galeri</a>
			<a href="/#lokasi" class="text-muted transition-colors hover:text-foreground">Lokasi</a>
		</div>
		<div class="hidden md:block">
			<a href="/#daftar" class="btn">Pendaftaran</a>
		</div>
			<button
				class="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border md:hidden"
				aria-label="Buka menu"
				on:click={() => (open = !open)}
				type="button"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="h-5 w-5"
				>
					<path
						fill-rule="evenodd"
						d="M3.75 5.25a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 6a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 6a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Z"
						clip-rule="evenodd"
					/>
				</svg>
			</button>
		</div>
	</div>
	<!-- Overlay -->
	{#if open}
		<div 
			class="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden" 
			on:click={() => (open = false)}
			on:keydown={(e) => e.key === 'Escape' && (open = false)}
			role="button"
			tabindex="-1"
			aria-label="Tutup menu"
		></div>
	{/if}
	
	<!-- Sidebar Menu -->
	<div 
		class="fixed top-0 right-0 bottom-0 z-50 flex h-screen w-64 flex-col transform bg-white shadow-2xl transition-transform duration-300 ease-in-out md:hidden {open ? 'translate-x-0' : 'translate-x-full'}"
	>
		<div class="flex h-16 items-center justify-between border-b border-border px-4">
			<span class="text-lg font-[var(--font-display)] font-semibold">Menu</span>
			<button 
				on:click={() => (open = false)}
				class="inline-flex h-8 w-8 items-center justify-center rounded-lg hover:bg-surface"
				aria-label="Tutup menu"
				type="button"
			>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5">
					<path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd" />
				</svg>
			</button>
		</div>
		<nav class="flex flex-col gap-1 p-4 flex-1 overflow-y-auto">
			<a href="/#beranda" class="rounded-lg px-4 py-3 text-foreground hover:bg-surface" on:click={() => (open = false)}>Beranda</a>
			<a href="/#program" class="rounded-lg px-4 py-3 text-foreground hover:bg-surface" on:click={() => (open = false)}>Program</a>
			<a href="/#fasilitas" class="rounded-lg px-4 py-3 text-foreground hover:bg-surface" on:click={() => (open = false)}>Fasilitas</a>
			<a href="/#testimoni" class="rounded-lg px-4 py-3 text-foreground hover:bg-surface" on:click={() => (open = false)}>Testimoni</a>
			<a href="/#kontak" class="rounded-lg px-4 py-3 text-foreground hover:bg-surface" on:click={() => (open = false)}>Kontak</a>
			<a href="/galeri" class="rounded-lg px-4 py-3 text-foreground hover:bg-surface" on:click={() => (open = false)}>Galeri</a>
			<a href="/#lokasi" class="rounded-lg px-4 py-3 text-foreground hover:bg-surface" on:click={() => (open = false)}>Lokasi</a>
		</nav>
		<div class="p-4 border-t border-border">
			<a href="/#daftar" class="btn w-full" on:click={() => (open = false)}>Pendaftaran</a>
		</div>
	</div>
</nav>
