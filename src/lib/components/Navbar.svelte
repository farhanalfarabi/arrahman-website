<script>
	import Logo from '$lib/assets/logo.png';
	import { Menu, X } from 'lucide-svelte';
	import { onMount } from 'svelte';
	
	let open = false;
	let scrollY = 0;
	
	// Mencegah scroll body saat menu terbuka
	$: {
		if (typeof document !== 'undefined') {
			if (open) {
				// Simpan posisi scroll saat ini
				scrollY = window.scrollY;
				// Lock body scroll dengan fixed position
				document.body.style.position = 'fixed';
				document.body.style.top = `-${scrollY}px`;
				document.body.style.width = '100%';
				document.body.style.overflow = 'hidden';
			} else {
				// Restore body scroll
				document.body.style.position = '';
				document.body.style.top = '';
				document.body.style.width = '';
				document.body.style.overflow = '';
				// Restore scroll position
				window.scrollTo(0, scrollY);
			}
		}
	}
	
	onMount(() => {
		return () => {
			// Cleanup saat komponen di-unmount
			if (typeof document !== 'undefined') {
				document.body.style.position = '';
				document.body.style.top = '';
				document.body.style.width = '';
				document.body.style.overflow = '';
			}
		};
	});
</script>

<nav
	class="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60"
>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<a href="/" class="flex items-center gap-2">
				<img src={Logo} alt="Logo Baitul Qur'an Camba" class="h-9 w-9 object-contain" />
				<span class="text-base font-[var(--font-display)] font-semibold tracking-tight sm:text-lg">Baitul Qur'an Camba</span
				>
			</a>
		<div class="hidden items-center gap-8 text-sm md:flex">
			<a href="/#beranda" class="text-muted transition-colors hover:text-foreground">Beranda</a>
			<a href="/#profil" class="text-muted transition-colors hover:text-foreground">Profil</a>
			<a href="/#fasilitas" class="text-muted transition-colors hover:text-foreground">Fasilitas</a>
			<a href="/galeri" class="text-muted transition-colors hover:text-foreground">Galeri</a>
			<a href="/#lokasi" class="text-muted transition-colors hover:text-foreground">Lokasi</a>
		</div>
		<div class="hidden md:block">
			<a href="https://forms.gle/wBK7PpPYVe6uyJqSA" target="_blank" rel="noopener noreferrer" class="btn">Pendaftaran</a>
		</div>
			<button
				class="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border md:hidden"
				aria-label="Buka menu"
				on:click={() => (open = !open)}
				type="button"
			>
				<Menu class="h-5 w-5" />
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
	{#if open}
		<div 
			class="fixed top-0 right-0 bottom-0 z-[60] flex w-64 max-w-[85vw] flex-col bg-white shadow-2xl transition-transform duration-300 ease-in-out md:hidden"
			style="height: 100vh; height: 100dvh; overflow-y: auto; overflow-x: hidden; -webkit-overflow-scrolling: touch;"
		>
			<div class="flex h-16 shrink-0 items-center justify-between border-b border-border px-4">
				<span class="text-base font-[var(--font-display)] font-semibold sm:text-lg">Menu</span>
				<button 
					on:click={() => (open = false)}
					class="inline-flex h-8 w-8 items-center justify-center rounded-lg hover:bg-surface"
					aria-label="Tutup menu"
					type="button"
				>
					<X class="h-5 w-5" />
				</button>
			</div>
			<nav class="flex flex-1 flex-col gap-1 overflow-y-auto p-4 min-h-0">
				<a href="/#beranda" class="rounded-lg px-4 py-3 text-foreground hover:bg-surface" on:click={() => (open = false)}>Beranda</a>
				<a href="/#profil" class="rounded-lg px-4 py-3 text-foreground hover:bg-surface" on:click={() => (open = false)}>Profil</a>
				<a href="/#fasilitas" class="rounded-lg px-4 py-3 text-foreground hover:bg-surface" on:click={() => (open = false)}>Fasilitas</a>
				<a href="/galeri" class="rounded-lg px-4 py-3 text-foreground hover:bg-surface" on:click={() => (open = false)}>Galeri</a>
				<a href="/#lokasi" class="rounded-lg px-4 py-3 text-foreground hover:bg-surface" on:click={() => (open = false)}>Lokasi</a>
			</nav>
			<div class="shrink-0 border-t border-border p-4">
				<a href="https://forms.gle/wBK7PpPYVe6uyJqSA" target="_blank" rel="noopener noreferrer" class="btn w-full" on:click={() => (open = false)}>Pendaftaran</a>
			</div>
		</div>
	{/if}
</nav>
