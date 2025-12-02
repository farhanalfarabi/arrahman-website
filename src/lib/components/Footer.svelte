<script>
	import { MapPin, MessageCircle, Mail, Instagram, Facebook } from 'lucide-svelte';
	import Logo from '$lib/assets/logo.png';
</script>

<footer id="kontak" class="border-t border-border bg-background">
	<div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
		<div class="grid gap-8 md:grid-cols-4">
			<div class="md:col-span-2">
				<div class="flex items-center gap-2">
					<img src={Logo} alt="Logo Baitul Qur'an Camba" class="h-9 w-9 object-contain" />
					<span class="text-base font-[var(--font-display)] font-semibold tracking-tight sm:text-lg"
						>Baitul Qur'an Camba</span
					>
				</div>
				<p class="mt-3 max-w-prose text-sm text-muted">
					Pondok Pesantren Tahfizh Baitul Qur'an Camba berkomitmen membina santri berilmu dan berakhlak mulia melalui
					pendidikan terpadu.
				</p>
			</div>
			<div class="md:col-span-2">
				<h3 class="text-sm font-semibold">Kontak</h3>
				<ul class="mt-3 space-y-2 text-sm text-muted">
					<li class="flex items-start gap-2">
						<MapPin class="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
						<span>
							Jumpulu, Link. Mallisu, Kelurahan Cempaniga, Kecamatan Camba, Kabupaten Maros,
							Sulawesi Selatan, Indonesia
						</span>
					</li>
					<li class="flex items-center gap-2">
						<MessageCircle class="h-4 w-4 shrink-0 text-brand-600" />
						<a href="https://wa.me/6282124880061" target="_blank" rel="noopener noreferrer" class="hover:text-foreground">082124880061</a>
					</li>
					<li class="flex items-center gap-2">
						<Mail class="h-4 w-4 shrink-0 text-brand-600" />
						<a
							href="mailto:ponpestahfizhbaitulqurancamba@gmail.com"
							class="hover:text-foreground"
						>
							ponpestahfizhbaitulqurancamba@gmail.com
						</a>
					</li>
					<li class="flex items-center gap-2">
						<Instagram class="h-4 w-4 shrink-0 text-brand-600" />
						<a
							href="https://instagram.com/baitulqurancambaofficial"
							target="_blank"
							rel="noopener noreferrer"
							class="hover:text-foreground"
						>
							@baitulqurancambaofficial
						</a>
					</li>
					<li class="flex items-center gap-2">
						<Facebook class="h-4 w-4 shrink-0 text-brand-600" />
						<a
							href="https://facebook.com/baitulqurancambaofficial"
							target="_blank"
							rel="noopener noreferrer"
							class="hover:text-foreground"
						>
							@baitulqurancambaofficial
						</a>
					</li>
				</ul>
			</div>
		</div>
		<div
			class="mt-10 flex flex-col items-center justify-between gap-3 text-xs text-muted sm:flex-row"
		>
			<p>&copy; {new Date().getFullYear()} Baitul Qur'an Camba.</p>
		</div>
	</div>
</footer>
