<script>
	import { Sparkles, Users, Layers, Circle, Mic, Video, HelpCircle, Star } from 'lucide-svelte';
</script>

<section id="keunggulan" class="relative isolate overflow-hidden py-16 sm:py-24">
	<div class="absolute inset-0 -z-10 bg-gradient-to-b from-background via-brand-50/40 to-background"></div>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<!-- Header -->
		<div class="mx-auto max-w-3xl text-center mb-16">
			<span class="badge">Keunggulan</span>
			<h2 class="mt-3 text-2xl font-[var(--font-display)] font-bold tracking-tight sm:text-4xl">
				Keunggulan
			</h2>
		</div>

		<div class="mx-auto max-w-5xl">
			<!-- Main Content Card -->
			<div
				class="mb-12 rounded-3xl border border-border bg-background/80 p-8 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-background/70 sm:p-10"
			>
				<div class="prose prose-slate max-w-none">
					<p class="text-foreground leading-relaxed mb-6 text-base sm:text-lg">
						Pondok Pesantren Tahfizh Baitul Qur'an Camba menyelenggarakan pendidikan formal yang
						sah secara hukum dan terjamin legalitasnya, dengan kewenangan penuh untuk menerbitkan
						ijazah resmi setara SMP dan SMA. Kualitas ini ditopang oleh tenaga pendidik yang sangat
						mumpuni, hasil perpaduan asatiz dan ustazaat yang ahli di bidang syariah dan Tahfizh
						(lulusan IAI Stiba dan Pesantren Da'i Ar-Rahman Qur'anic College Bogor yang bersanad)
						dengan pendidik profesional umum (lulusan UNM, UMI, dan UPRI).
					</p>
					<p class="text-foreground leading-relaxed text-base sm:text-lg">
						Komposisi tim pengajar ini menjamin santri menerima kurikulum holistik yang menggabungkan
						keunggulan ilmu agama, Tahfizh, dan pengetahuan umum.
					</p>
				</div>
			</div>

			<!-- Highlight Features Grid -->
			<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
				<!-- Legalitas -->
				<div
					class="group relative overflow-hidden rounded-2xl border border-brand-200 bg-gradient-to-br from-brand-50 to-brand-100/50 p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
				>
					<div
						class="absolute right-0 top-0 -z-10 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full bg-brand-200/30 blur-2xl"
					></div>
					<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600 text-white shadow-md">
						<Sparkles class="h-6 w-6" />
					</div>
					<h3 class="mb-2 text-lg font-semibold text-foreground">Legalitas Terjamin</h3>
					<p class="text-sm leading-relaxed text-muted">
						Pendidikan formal yang sah secara hukum dengan kewenangan penuh menerbitkan ijazah resmi
						setara SMP dan SMA
					</p>
				</div>

				<!-- Tenaga Pendidik -->
				<div
					class="group relative overflow-hidden rounded-2xl border border-brand-200 bg-gradient-to-br from-brand-50 to-brand-100/50 p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
				>
					<div
						class="absolute right-0 top-0 -z-10 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full bg-brand-200/30 blur-2xl"
					></div>
					<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600 text-white shadow-md">
						<Users class="h-6 w-6" />
					</div>
					<h3 class="mb-2 text-lg font-semibold text-foreground">Tenaga Pendidik Mumpuni</h3>
					<p class="text-sm leading-relaxed text-muted">
						Perpaduan asatiz ahli syariah & Tahfizh (bersanad) dengan pendidik profesional umum
					</p>
				</div>

				<!-- Kurikulum Holistik -->
				<div
					class="group relative overflow-hidden rounded-2xl border border-brand-200 bg-gradient-to-br from-brand-50 to-brand-100/50 p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
				>
					<div
						class="absolute right-0 top-0 -z-10 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full bg-brand-200/30 blur-2xl"
					></div>
					<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600 text-white shadow-md">
						<Layers class="h-6 w-6" />
					</div>
					<h3 class="mb-2 text-lg font-semibold text-foreground">Kurikulum Holistik</h3>
					<p class="text-sm leading-relaxed text-muted">
						Menggabungkan keunggulan ilmu agama, Tahfizh, dan pengetahuan umum dalam satu kesatuan
					</p>
				</div>
			</div>

			<!-- Character Building Section -->
			<div
				class="mb-12 rounded-3xl border border-accent-200 bg-gradient-to-br from-accent-50 via-accent-100/30 to-background p-8 shadow-lg sm:p-10"
			>
				<div class="mb-6 flex items-center gap-4">
					<div
						class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-600 to-accent-700 text-white shadow-lg"
					>
						<Circle class="h-7 w-7" />
					</div>
					<div>
						<h3 class="text-xl font-bold text-foreground sm:text-2xl">Pembentukan Karakter & Kemampuan Praktis</h3>
						<p class="mt-1 text-sm text-muted">Fokus utama pesantren</p>
					</div>
				</div>
				<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					<div
						class="rounded-xl border border-accent-200 bg-gradient-to-br from-background to-accent-50/50 p-5"
					>
						<div class="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent-600 text-white">
							<Users class="h-5 w-5" />
						</div>
						<h4 class="mb-2 font-semibold text-foreground">Leadership</h4>
						<p class="text-sm text-muted">Pelatihan kepemimpinan untuk membentuk karakter pemimpin</p>
					</div>
					<div
						class="rounded-xl border border-accent-200 bg-gradient-to-br from-background to-accent-50/50 p-5"
					>
						<div class="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent-600 text-white">
							<Video class="h-5 w-5" />
						</div>
						<h4 class="mb-2 font-semibold text-foreground">Manajemen Dakwah</h4>
						<p class="text-sm text-muted">Keterampilan mengelola dan menyelenggarakan dakwah</p>
					</div>
					<div
						class="rounded-xl border border-accent-200 bg-gradient-to-br from-background to-accent-50/50 p-5"
					>
						<div class="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent-600 text-white">
							<Mic class="h-5 w-5" />
						</div>
						<h4 class="mb-2 font-semibold text-foreground">Berpidato Multibahasa</h4>
						<p class="text-sm text-muted">Kemampuan berpidato dalam Bahasa Arab dan Inggris</p>
					</div>
				</div>
			</div>

			<!-- Support System -->
			<div
				class="rounded-3xl border border-brand-200 bg-gradient-to-br from-brand-50 via-brand-100/30 to-background p-8 shadow-lg sm:p-10"
			>
				<div class="grid gap-8 lg:grid-cols-2">
					<div>
						<div class="mb-6 flex items-center gap-4">
							<div
								class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-brand-700 text-white shadow-lg"
							>
								<HelpCircle class="h-7 w-7" />
							</div>
							<div>
								<h3 class="text-xl font-bold text-foreground">Layanan Bimbingan Konseling</h3>
								<p class="mt-1 text-sm text-muted">Dukungan intensif untuk perkembangan santri</p>
							</div>
						</div>
						<p class="text-muted leading-relaxed">
							Layanan BK yang intensif memastikan setiap santri mendapatkan pendampingan optimal
							dalam proses pembelajaran dan pengembangan diri.
						</p>
					</div>
					<div>
						<div class="mb-6 flex items-center gap-4">
							<div
								class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-brand-700 text-white shadow-lg"
							>
								<Users class="h-7 w-7" />
							</div>
							<div>
								<h3 class="text-xl font-bold text-foreground">Lingkungan Belajar Suportif</h3>
								<p class="mt-1 text-sm text-muted">Sinergi erat antara semua pihak</p>
							</div>
						</div>
						<p class="text-muted leading-relaxed">
							Lingkungan belajar yang suportif dengan sinergi erat antara pengasuh, asatiz, dan wali
							santri menciptakan ekosistem pendidikan yang optimal.
						</p>
					</div>
				</div>
			</div>

			<!-- Closing Statement -->
			<div class="mt-12">
				<div
					class="relative overflow-hidden rounded-3xl border border-brand-300 bg-gradient-to-br from-brand-100/50 via-brand-50 to-background p-8 text-center shadow-md sm:p-10"
				>
					<div
						class="absolute left-1/2 top-0 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-200/20 blur-3xl"
					></div>
					<div class="relative">
						<Star class="mx-auto h-12 w-12 text-brand-600" />
						<p class="mt-6 text-base font-medium leading-relaxed text-foreground sm:text-xl">
							Jaminan ini memastikan lulusan Pondok Pesantren Tahfizh Baitul Qur'an Camba tidak
							hanya hafal Al-Qur'an, tetapi juga memiliki akhlak mulia dan kesiapan untuk menjawab
							tantangan zaman.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

