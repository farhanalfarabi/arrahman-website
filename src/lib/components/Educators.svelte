<script>
	import { Layers, Circle, MessageCircle } from 'lucide-svelte';
</script>

<section id="tenaga-pendidik" class="relative isolate overflow-hidden py-16 sm:py-24">
	<div class="absolute inset-0 -z-10 bg-gradient-to-b from-brand-50/60 via-background to-background"></div>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<!-- Header -->
		<div class="mx-auto max-w-3xl text-center mb-16">
			<span class="badge">Tenaga Pendidik</span>
			<h2 class="mt-3 text-2xl font-[var(--font-display)] font-bold tracking-tight sm:text-4xl">
				Tenaga Pendidik
			</h2>
			<p class="mt-4 text-base leading-relaxed text-muted sm:text-lg">
				Pondok Pesantren Tahfizh Baitul Qur'an Camba memiliki tenaga pendidik dan kependidikan
				yang mumpuni dengan latar belakang keilmuan yang kaya dan beragam, menjamin kualitas
				pendidikan yang holistik—menggabungkan keunggulan syariah, tahfizh, dan ilmu pengetahuan
				umum.
			</p>
		</div>

		<!-- Stats Overview -->
		<div class="mb-12 grid gap-6 sm:grid-cols-3">
			<div
				class="group relative overflow-hidden rounded-2xl border border-brand-200 bg-gradient-to-br from-brand-50 to-brand-100/50 p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
			>
				<div
					class="absolute right-0 top-0 -z-10 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full bg-brand-200/30 blur-2xl"
				></div>
				<div class="text-center">
					<div
						class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-md"
					>
						<Layers class="h-8 w-8" />
					</div>
					<p class="text-3xl font-bold text-brand-700">8</p>
					<p class="mt-2 text-sm font-medium text-foreground">Ahli Keislaman & Tahfizh</p>
				</div>
			</div>

			<div
				class="group relative overflow-hidden rounded-2xl border border-accent-200 bg-gradient-to-br from-accent-50 to-accent-100/50 p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
			>
				<div
					class="absolute right-0 top-0 -z-10 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full bg-accent-200/30 blur-2xl"
				></div>
				<div class="text-center">
					<div
						class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent-600 text-white shadow-md"
					>
						<Layers class="h-8 w-8" />
					</div>
					<p class="text-3xl font-bold text-accent-700">6</p>
					<p class="mt-2 text-sm font-medium text-foreground">Pendidik Umum & Sosial</p>
				</div>
			</div>

			<div
				class="group relative overflow-hidden rounded-2xl border border-brand-200 bg-gradient-to-br from-brand-50 to-brand-100/50 p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
			>
				<div
					class="absolute right-0 top-0 -z-10 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full bg-brand-200/30 blur-2xl"
				></div>
				<div class="text-center">
					<div
						class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-500 text-white shadow-md"
					>
						<Circle class="h-8 w-8" />
					</div>
					<p class="text-3xl font-bold text-brand-700">4</p>
					<p class="mt-2 text-sm font-medium text-foreground">Alumni Mentor</p>
				</div>
			</div>
		</div>

		<!-- Detailed Categories -->
		<div class="grid gap-8 lg:grid-cols-2">
			<!-- Bidang Keislaman -->
			<div
				class="group relative overflow-hidden rounded-3xl border border-brand-200 bg-gradient-to-br from-background via-brand-50/30 to-background p-8 shadow-lg transition-all hover:shadow-xl"
			>
				<div
					class="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-brand-200/20 blur-3xl"
				></div>
				<div class="relative">
					<div class="mb-6 flex items-center gap-4">
						<div
							class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-brand-700 text-white shadow-lg"
						>
							<Layers class="h-7 w-7" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-foreground">
								Bidang Keislaman, Hukum & Tahfizh
							</h3>
							<p class="mt-1 text-sm text-muted">Ahli dalam bidang syariah dan tahfizh</p>
						</div>
					</div>
					<div class="space-y-4">
						<div
							class="group/item rounded-xl border border-brand-200 bg-gradient-to-r from-brand-50 to-brand-100/50 p-5 transition-all hover:border-brand-300 hover:shadow-md"
						>
							<div class="flex items-start gap-4">
								<div
									class="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-600 text-white"
								>
									<span class="text-sm font-bold">7</span>
								</div>
								<div class="flex-1">
									<p class="font-semibold text-foreground">IAI Stiba Makassar</p>
									<p class="mt-1 text-sm text-muted">
										Jurusan Pendidikan Bahasa Arab dan Hukum
									</p>
								</div>
							</div>
						</div>
						<div
							class="group/item rounded-xl border border-brand-200 bg-gradient-to-r from-brand-50 to-brand-100/50 p-5 transition-all hover:border-brand-300 hover:shadow-md"
						>
							<div class="flex items-start gap-4">
								<div
									class="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-600 text-white"
								>
									<span class="text-sm font-bold">1</span>
								</div>
								<div class="flex-1">
									<p class="font-semibold text-foreground">
										Pesantren Da'i Ar-Rahman Qur'anic College Bogor
									</p>
									<p class="mt-1 text-sm text-muted">
										Pemegang sanad qira'ah hafs an ashim, Spesialisasi Tahfizh, Dakwah, dan
										leadership
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Bidang Pendidikan Umum -->
			<div
				class="group relative overflow-hidden rounded-3xl border border-accent-200 bg-gradient-to-br from-background via-accent-50/30 to-background p-8 shadow-lg transition-all hover:shadow-xl"
			>
				<div
					class="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-accent-200/20 blur-3xl"
				></div>
				<div class="relative">
					<div class="mb-6 flex items-center gap-4">
						<div
							class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-600 to-accent-700 text-white shadow-lg"
						>
							<Layers class="h-7 w-7" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-foreground">
								Pendidikan Umum & Sosial
							</h3>
							<p class="mt-1 text-sm text-muted">Pendidik profesional di bidang umum</p>
						</div>
					</div>
					<div class="space-y-4">
						<div
							class="group/item rounded-xl border border-accent-200 bg-gradient-to-r from-accent-50 to-accent-100/50 p-5 transition-all hover:border-accent-300 hover:shadow-md"
						>
							<div class="flex items-start gap-4">
								<div
									class="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-600 text-white"
								>
									<span class="text-sm font-bold">4</span>
								</div>
								<div class="flex-1">
									<p class="font-semibold text-foreground">Universitas Negeri Makassar</p>
								</div>
							</div>
						</div>
						<div
							class="group/item rounded-xl border border-accent-200 bg-gradient-to-r from-accent-50 to-accent-100/50 p-5 transition-all hover:border-accent-300 hover:shadow-md"
						>
							<div class="flex items-start gap-4">
								<div
									class="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-600 text-white"
								>
									<span class="text-sm font-bold">1</span>
								</div>
								<div class="flex-1">
									<p class="font-semibold text-foreground">UPRI Makassar</p>
								</div>
							</div>
						</div>
						<div
							class="group/item rounded-xl border border-accent-200 bg-gradient-to-r from-accent-50 to-accent-100/50 p-5 transition-all hover:border-accent-300 hover:shadow-md"
						>
							<div class="flex items-start gap-4">
								<div
									class="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-600 text-white"
								>
									<span class="text-sm font-bold">1</span>
								</div>
								<div class="flex-1">
									<p class="font-semibold text-foreground">Universitas Muslim Indonesia</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Penguatan Internal - Full Width -->
		<div class="mt-8">
			<div
				class="group relative overflow-hidden rounded-3xl border border-brand-200 bg-gradient-to-br from-brand-50 via-brand-100/50 to-brand-50 p-8 shadow-lg transition-all hover:shadow-xl sm:p-10"
			>
				<div
					class="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-brand-200/30 blur-3xl"
				></div>
				<div class="relative">
					<div class="mb-6 flex items-center gap-4">
						<div
							class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-600 text-white shadow-lg"
						>
							<Circle class="h-7 w-7" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-foreground">Penguatan Internal</h3>
							<p class="mt-1 text-sm text-muted">Mentor dari alumni pesantren</p>
						</div>
					</div>
					<div
						class="rounded-xl border border-brand-200 bg-gradient-to-r from-background to-brand-50/50 p-6 shadow-sm"
					>
						<div class="flex items-start gap-4">
							<div
								class="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white"
							>
								<span class="text-lg font-bold">4</span>
							</div>
							<div class="flex-1">
								<p class="font-semibold text-foreground">Alumni Pondok Pesantren</p>
								<p class="mt-2 text-muted leading-relaxed">
									Pondok Pesantren Tahfizh Baitul Qur'an Camba sendiri, yang berperan sebagai
									mentor, membawa semangat, pengalaman, dan pemahaman mendalam tentang visi
									pesantren.
								</p>
							</div>
						</div>
					</div>
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
					<MessageCircle class="mx-auto h-12 w-12 text-brand-600" />
					<p class="mt-6 text-base font-medium leading-relaxed text-foreground sm:text-xl">
						Komposisi ini menciptakan sinergi keilmuan yang ideal, memastikan santri menerima
						bimbingan terbaik dari ahli agama, pendidik profesional, dan role model internal.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

