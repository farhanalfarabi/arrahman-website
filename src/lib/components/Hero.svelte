<script>
	import Logo from '$lib/assets/logo.png';
</script>
<section id="beranda" class="relative isolate overflow-hidden">
	<div
		class="absolute inset-0 -z-10 bg-gradient-to-b from-brand-50 via-background to-background"
	></div>
	<div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-28">
		<div class="grid items-center gap-10 lg:grid-cols-2">
			<div class="text-center lg:text-left">
				<div class="badge sm:mb-4">Pondok Pesantren</div>
				<img src={Logo} alt="Logo Arrahman" class="mx-auto  w-56 sm:w-64 md:w-72 max-w-full h-auto lg:hidden" />

				<h1
					class="text-4xl font-[var(--font-display)] font-bold tracking-tight sm:text-5xl lg:text-6xl"
				>
					Arrahman
				</h1>
				<p class="mx-auto mt-4 max-w-prose text-lg text-muted lg:mx-0">
					Mencetak generasi berilmu, berakhlak mulia, dan siap mengabdi untuk umat.
				</p>
				<div class="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
					<a href="#daftar" class="btn">Daftar Sekarang</a>
					<a href="#program" class="btn-outline">Lihat Program</a>
				</div>
				<div
					class="mt-8 flex items-center justify-center gap-6 text-sm text-muted lg:justify-start"
				>
					<div class="flex items-center gap-2">
						<span class="h-2 w-2 rounded-full bg-brand-500"></span> Asrama Nyaman
					</div>
					<div class="flex items-center gap-2">
						<span class="h-2 w-2 rounded-full bg-brand-500"></span> Kurikulum Terpadu
					</div>
					<div class="flex items-center gap-2">
						<span class="h-2 w-2 rounded-full bg-brand-500"></span> Pengajar Berpengalaman
					</div>
				</div>
			</div>
			<div class="relative hidden lg:block">
				<div
					class="aspect-[4/3] rounded-2xl border border-border bg-gradient-to-br from-brand-400/20 to-accent-400/20 shadow-sm"
				>
					<img src={Logo} alt="Logo Arrahman" class="h-full w-full object-contain p-6" />
			</div>
				<!-- Ganti div di atas dengan <img> bila ada aset hero -->
			</div>
		</div>
	</div>
</section>
