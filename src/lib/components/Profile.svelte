<script>
	import { Calendar, Star, Layers } from 'lucide-svelte';
</script>

<section id="profil" class="relative isolate overflow-hidden py-16 sm:py-20">
	<div class="absolute inset-0 -z-10 bg-gradient-to-b from-brand-50/60 via-background to-background"></div>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-5xl">
			<div class="text-center mb-12">
				<span class="badge">Profil</span>
				<h2 class="mt-3 text-2xl font-[var(--font-display)] font-bold tracking-tight sm:text-4xl">
					Profil Pondok Pesantren Tahfizh Baitul Qur'an Camba
				</h2>
			</div>

			<!-- Highlight Cards -->
			<div class="mb-8 grid gap-6 sm:grid-cols-2">
				<div
					class="group relative overflow-hidden rounded-2xl border border-brand-200 bg-gradient-to-br from-brand-50 to-brand-100/50 p-6 shadow-sm transition-all hover:shadow-md"
				>
					<div class="absolute right-0 top-0 -z-10 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full bg-brand-200/30 blur-2xl"></div>
					<div class="flex items-start gap-4">
						<div
							class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white shadow-sm"
						>
							<Calendar class="h-6 w-6" />
						</div>
						<div>
							<h3 class="text-base font-semibold text-foreground sm:text-lg">Berdiri Sejak</h3>
							<p class="mt-1 text-xl font-bold text-brand-700 sm:text-2xl">2016</p>
							<p class="mt-1 text-sm text-muted">Lebih dari 8 tahun mengabdi untuk negara</p>
						</div>
					</div>
				</div>

				<div
					class="group relative overflow-hidden rounded-2xl border border-brand-200 bg-gradient-to-br from-brand-50 to-brand-100/50 p-6 shadow-sm transition-all hover:shadow-md"
				>
					<div class="absolute right-0 top-0 -z-10 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full bg-brand-200/30 blur-2xl"></div>
					<div class="flex items-start gap-4">
						<div
							class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white shadow-sm"
						>
							<Star class="h-6 w-6" />
						</div>
						<div>
							<h3 class="text-base font-semibold text-foreground sm:text-lg">Durasi Pembelajaran</h3>
							<p class="mt-1 text-xl font-bold text-brand-700 sm:text-2xl">3 + 3 Tahun</p>
							<p class="mt-1 text-sm text-muted">Tingkat Wustha & Ulya</p>
						</div>
					</div>
				</div>
			</div>

			<!-- Main Content Card -->
			<div
				class="rounded-3xl border border-border bg-background/80 p-6 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-background/70 sm:p-10"
			>
				<div class="space-y-6">
					<div class="relative">
						<div
							class="absolute left-0 top-0 h-full w-1 rounded-full bg-gradient-to-b from-brand-500 to-brand-700"
						></div>
						<div class="pl-6">
							<p class="text-foreground leading-relaxed">
								Pondok Pesantren Tahfizh Baitul Qur'an Camba adalah lembaga pendidikan untuk
								siswa lulusan sekolah dasar (SD) dan sekolah menengah pertama (SMP) yang sudah
								resmi memiliki izin operasional sekolah dan memperoleh kewenangan untuk
								menerbitkan surat keterangan pendidikan resmi seperti ijazah.
							</p>
						</div>
					</div>

					<div class="relative">
						<div
							class="absolute left-0 top-0 h-full w-1 rounded-full bg-gradient-to-b from-brand-500 to-brand-700"
						></div>
						<div class="pl-6">
							<p class="text-foreground leading-relaxed">
								Berdiri sejak tahun 2016, Pondok Pesantren Tahfizh Baitul Qur'an Camba
								berlandaskan Al-Qur'an dan As-Sunnah, dengan fokus mencetak generasi muhaffizh
								dan muballigh yang tidak hanya menguasai ilmu agama, tetapi juga mujahid yang
								mengamalkan dan menyebarkan nilai-nilai Islam dalam kehidupan sehari-hari.
							</p>
						</div>
					</div>

					<!-- Program Highlights -->
					<div
						class="rounded-2xl border border-brand-200 bg-gradient-to-br from-brand-50/50 to-background p-6 sm:p-8"
					>
						<h3 class="mb-4 flex items-center gap-2 text-xl font-semibold text-foreground">
							<Layers class="h-6 w-6 text-brand-600" />
							Kurikulum Program
						</h3>
						<div class="grid gap-3 sm:grid-cols-2">
							<div class="flex items-start gap-2">
								<span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500"></span>
								<span class="text-muted">Tahfizh, Tahsin, Tajwid</span>
							</div>
							<div class="flex items-start gap-2">
								<span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500"></span>
								<span class="text-muted">Pelatihan Muballigh</span>
							</div>
							<div class="flex items-start gap-2">
								<span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500"></span>
								<span class="text-muted">Manajemen/Keterampilan Dakwah</span>
							</div>
							<div class="flex items-start gap-2">
								<span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500"></span>
								<span class="text-muted">Pengembangan Karakter</span>
							</div>
							<div class="flex items-start gap-2">
								<span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500"></span>
								<span class="text-muted">Sanadisasi Al-Qur'an dan Hadits</span>
							</div>
							<div class="flex items-start gap-2">
								<span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500"></span>
								<span class="text-muted">Leadership</span>
							</div>
							<div class="flex items-start gap-2">
								<span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500"></span>
								<span class="text-muted">Berpidato Bahasa Arab & Inggris</span>
							</div>
							<div class="flex items-start gap-2">
								<span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500"></span>
								<span class="text-muted">Dirosah Islamiyah</span>
							</div>
							<div class="flex items-start gap-2">
								<span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500"></span>
								<span class="text-muted">Kurikulum Pemerintah</span>
							</div>
						</div>
					</div>

					<div class="relative">
						<div
							class="absolute left-0 top-0 h-full w-1 rounded-full bg-gradient-to-b from-brand-500 to-brand-700"
						></div>
						<div class="pl-6">
							<p class="text-foreground leading-relaxed">
								Dengan dukungan penuh dari pengasuh, asatiz, serta orang tua dan wali santri,
								pesantren ini terus berkembang, mencetak santri yang siap menghadapi tantangan
								zaman dan berkontribusi luas dalam masyarakat.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

