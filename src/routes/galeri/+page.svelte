<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import GalleryCard from '$lib/components/GalleryCard.svelte';
	import YearGallery from '$lib/components/YearGallery.svelte';
	import { page } from '$app/stores';

	const siteUrl = 'https://baitulqurancamba.com';
	const siteName = 'Baitul Quran Camba';

	// Structured data untuk halaman galeri
	const gallerySchema = JSON.stringify(
		{
			'@context': 'https://schema.org',
			'@type': 'ImageGallery',
			name: 'Galeri Santri - Pondok Pesantren Tahfizh Baitul Qur\'an Camba',
			description:
				'Dokumentasi kegiatan santri Pondok Pesantren Tahfizh Baitul Qur\'an Camba termasuk fasilitas, program unggulan, ekstrakurikuler, dan aktivitas santri.',
			url: `${siteUrl}/galeri`,
			mainEntityOfPage: {
				'@type': 'WebPage',
				'@id': `${siteUrl}/galeri`
			},
			publisher: {
				'@type': 'EducationalOrganization',
				name: siteName
			}
		},
		null,
		2
	).replace(/</g, '\\u003c');

	// Import semua gambar dari folder pondok
	import masjidImg from '$lib/assets/pondok/masjid.jpg';
	import masjid2Img from '$lib/assets/pondok/masjid-2.jpg';
	import kelasImg from '$lib/assets/pondok/kelas.jpg';
	import suasanaKelasImg from '$lib/assets/pondok/suasana-kelas.jpg';
	import suasanaKelas2Img from '$lib/assets/pondok/suasana-kelas-2.jpg';
	import asramaImg from '$lib/assets/pondok/asrama.jpg';
	import rumahTamuImg from '$lib/assets/pondok/rumah-tamu.jpg';
	import rumahTamu2Img from '$lib/assets/pondok/rumah-tamu-2.jpg';
	import kantorImg from '$lib/assets/pondok/kantor.jpg';
	import toiletImg from '$lib/assets/pondok/toilet.jpg';
	import uksImg from '$lib/assets/pondok/uks.jpg';
	import gazeboImg from '$lib/assets/pondok/gazebo.jpg';
	import halaqahTahfidzImg from '$lib/assets/pondok/halaqah-tahfidz.jpg';
	import halaqahTahfidz2Img from '$lib/assets/pondok/halaqah-tahfidz-2.jpg';
	import tarbiahImg from '$lib/assets/pondok/tarbiah.jpg';
	import tarbiah2Img from '$lib/assets/pondok/tarbiah-2.jpg';
	import taklimKitabKuningImg from '$lib/assets/pondok/taklim-kitab-kuning.jpg';
	import taklimKitabKuning2Img from '$lib/assets/pondok/taklim-kitab-kuning-2.jpg';
	import taklimKitabKuning3Img from '$lib/assets/pondok/taklim-kitab-kuning-3.jpg';
	import pidato3BahasaImg from '$lib/assets/pondok/pidato-3-bahasa.jpg';
	import leadershipImg from '$lib/assets/pondok/leadership.jpg';
	import leadership2Img from '$lib/assets/pondok/leadership-2.jpg';
	import leadership3Img from '$lib/assets/pondok/leadership-3.jpg';
	import eskulKeterampilanDakwahImg from '$lib/assets/pondok/eskul-keterampilan-dakwah.jpg';
	import eskulFutsalImg from '$lib/assets/pondok/eskul-futsal.jpg';
	import eskulVollyImg from '$lib/assets/pondok/eskul-volly.jpg';
	import eskulTakrawImg from '$lib/assets/pondok/eskul-takraw.jpg';
	import eskulTakraw2Img from '$lib/assets/pondok/eskul-takraw-2.jpg';
	import upacaraImg from '$lib/assets/pondok/upacara.jpg';
	import upacara2Img from '$lib/assets/pondok/upacara-2.jpg';

	// Import gambar dari galeri-2025
	import galeri2025_1 from '$lib/assets/pondok/galeri-2025/1.jpg';
	import galeri2025_2 from '$lib/assets/pondok/galeri-2025/2.jpg';
	import galeri2025_3 from '$lib/assets/pondok/galeri-2025/3.jpg';
	import galeri2025_4 from '$lib/assets/pondok/galeri-2025/4.jpg';
	import galeri2025_5 from '$lib/assets/pondok/galeri-2025/5.jpg';
	import galeri2025_6 from '$lib/assets/pondok/galeri-2025/6.jpg';
	import galeri2025_7 from '$lib/assets/pondok/galeri-2025/7.jpg';
	import galeri2025_8 from '$lib/assets/pondok/galeri-2025/8.jpg';
	import galeri2025_9 from '$lib/assets/pondok/galeri-2025/9.jpg';
	import galeri2025_10 from '$lib/assets/pondok/galeri-2025/10.jpg';
	import galeri2025_11 from '$lib/assets/pondok/galeri-2025/11.jpg';
	import galeri2025_12 from '$lib/assets/pondok/galeri-2025/12.jpg';
	import galeri2025_13 from '$lib/assets/pondok/galeri-2025/IMG-20250319-WA0132.jpg';

	const photos = [
		// Fasilitas
		{
			src: masjidImg,
			alt: 'Masjid Pondok Pesantren Tahfizh Baitul Qur\'an Camba',
			name: 'Masjid',
			caption: 'Pusat kegiatan ibadah santri.'
		},
		{
			src: masjid2Img,
			alt: 'Masjid Pondok Pesantren Tahfizh Baitul Qur\'an Camba',
			name: 'Masjid',
			caption: 'Tampak depan masjid.'
		},
		{
			src: kelasImg,
			alt: 'Ruang Kelas Pondok Pesantren Tahfizh Baitul Qur\'an Camba',
			name: 'Ruang Kelas',
			caption: 'Fasilitas ruang kelas yang nyaman.'
		},
		{
			src: suasanaKelasImg,
			alt: 'Suasana Kelas Pondok Pesantren Tahfizh Baitul Qur\'an Camba',
			name: 'Suasana Kelas',
			caption: 'Kegiatan belajar mengajar di kelas.'
		},
		{
			src: suasanaKelas2Img,
			alt: 'Suasana Kelas Pondok Pesantren Tahfizh Baitul Qur\'an Camba',
			name: 'Suasana Kelas',
			caption: 'Aktivitas pembelajaran santri.'
		},
		{
			src: asramaImg,
			alt: 'Asrama Pondok Pesantren Tahfizh Baitul Qur\'an Camba',
			name: 'Asrama',
			caption: 'Lingkungan asri dan bersih.'
		},
		{
			src: rumahTamuImg,
			alt: 'Rumah Tamu Pondok Pesantren Tahfizh Baitul Qur\'an Camba',
			name: 'Rumah Tamu',
			caption: 'Fasilitas untuk menerima tamu.'
		},
		{
			src: rumahTamu2Img,
			alt: 'Rumah Tamu Pondok Pesantren Tahfizh Baitul Qur\'an Camba',
			name: 'Rumah Tamu',
			caption: 'Tempat menerima kunjungan wali santri.'
		},
		{
			src: kantorImg,
			alt: 'Kantor Pondok Pesantren Tahfizh Baitul Qur\'an Camba',
			name: 'Kantor',
			caption: 'Ruang administrasi pesantren.'
		},
		{
			src: toiletImg,
			alt: 'Toilet Pondok Pesantren Tahfizh Baitul Qur\'an Camba',
			name: 'Toilet',
			caption: 'Fasilitas sanitasi yang bersih.'
		},
		{
			src: uksImg,
			alt: 'UKS Pondok Pesantren Tahfizh Baitul Qur\'an Camba',
			name: 'UKS',
			caption: 'Unit Kesehatan Santri.'
		},
		{
			src: gazeboImg,
			alt: 'Gazebo Pondok Pesantren Tahfizh Baitul Qur\'an Camba',
			name: 'Gazebo',
			caption: 'Area rekreasi dan diskusi santri.'
		},
		// Program Unggulan - Tahfizh
		{
			src: halaqahTahfidzImg,
			alt: 'Halaqah Tahfizh Pondok Pesantren Tahfizh Baitul Qur\'an Camba',
			name: 'Halaqah Tahfizh',
			caption: 'Kegiatan setoran dan murajaah Al-Qur\'an.'
		},
		{
			src: halaqahTahfidz2Img,
			alt: 'Halaqah Tahfizh Pondok Pesantren Tahfizh Baitul Qur\'an Camba',
			name: 'Halaqah Tahfizh',
			caption: 'Pembelajaran tahfizh dengan metode halaqah.'
		},
		// Program Unggulan - Tarbiyah Islamiyah
		{
			src: tarbiahImg,
			alt: 'Tarbiyah Islamiyah Pondok Pesantren Tahfizh Baitul Qur\'an Camba',
			name: 'Tarbiyah Islamiyah',
			caption: 'Pembinaan karakter dan akhlak santri.'
		},
		{
			src: tarbiah2Img,
			alt: 'Tarbiyah Islamiyah Pondok Pesantren Tahfizh Baitul Qur\'an Camba',
			name: 'Tarbiyah Islamiyah',
			caption: 'Kegiatan pembinaan keislaman.'
		},
		// Program Unggulan - Taklim Kitab Kuning
		{
			src: taklimKitabKuningImg,
			alt: 'Taklim Kitab Kuning Pondok Pesantren Tahfizh Baitul Qur\'an Camba',
			name: 'Taklim Kitab Kuning',
			caption: 'Pembelajaran kitab kuning klasik.'
		},
		{
			src: taklimKitabKuning2Img,
			alt: 'Taklim Kitab Kuning Pondok Pesantren Tahfizh Baitul Qur\'an Camba',
			name: 'Taklim Kitab Kuning',
			caption: 'Kajian kitab kuning bersama ustadz.'
		},
		{
			src: taklimKitabKuning3Img,
			alt: 'Taklim Kitab Kuning Pondok Pesantren Tahfizh Baitul Qur\'an Camba',
			name: 'Taklim Kitab Kuning',
			caption: 'Diskusi dan tanya jawab kitab kuning.'
		},
		// Program Unggulan - Pidato 3 Bahasa
		{
			src: pidato3BahasaImg,
			alt: 'Pidato 3 Bahasa Pondok Pesantren Tahfizh Baitul Qur\'an Camba',
			name: 'Pidato 3 Bahasa',
			caption: 'Latihan pidato dalam Bahasa Arab, Inggris, dan Indonesia.'
		},
		// Program Unggulan - Leadership
		{
			src: leadershipImg,
			alt: 'Leadership Pondok Pesantren Tahfizh Baitul Qur\'an Camba',
			name: 'Leadership',
			caption: 'Pelatihan kepemimpinan santri.'
		},
		{
			src: leadership2Img,
			alt: 'Leadership Pondok Pesantren Tahfizh Baitul Qur\'an Camba',
			name: 'Leadership',
			caption: 'Pembinaan jiwa kepemimpinan.'
		},
		{
			src: leadership3Img,
			alt: 'Leadership Pondok Pesantren Tahfizh Baitul Qur\'an Camba',
			name: 'Leadership',
			caption: 'Kegiatan kepemimpinan santri.'
		},
		// Program Unggulan - Keterampilan Dakwah
		{
			src: eskulKeterampilanDakwahImg,
			alt: 'Keterampilan Dakwah Pondok Pesantren Tahfizh Baitul Qur\'an Camba',
			name: 'Keterampilan Dakwah',
			caption: 'Pelatihan kemampuan dakwah santri.'
		},
		// Ekstrakurikuler - Olahraga
		{
			src: eskulFutsalImg,
			alt: 'Ekstrakurikuler Futsal Pondok Pesantren Tahfizh Baitul Qur\'an Camba',
			name: 'Ekstrakurikuler Futsal',
			caption: 'Kegiatan ekstrakurikuler futsal.'
		},
		{
			src: eskulVollyImg,
			alt: 'Ekstrakurikuler Volly Pondok Pesantren Tahfizh Baitul Qur\'an Camba',
			name: 'Ekstrakurikuler Volly',
			caption: 'Kegiatan ekstrakurikuler volly.'
		},
		{
			src: eskulTakrawImg,
			alt: 'Ekstrakurikuler Takraw Pondok Pesantren Tahfizh Baitul Qur\'an Camba',
			name: 'Ekstrakurikuler Takraw',
			caption: 'Kegiatan ekstrakurikuler takraw.'
		},
		{
			src: eskulTakraw2Img,
			alt: 'Ekstrakurikuler Takraw Pondok Pesantren Tahfizh Baitul Qur\'an Camba',
			name: 'Ekstrakurikuler Takraw',
			caption: 'Latihan ekstrakurikuler takraw.'
		},
		// Kegiatan - Upacara
		{
			src: upacaraImg,
			alt: 'Upacara Pondok Pesantren Tahfizh Baitul Qur\'an Camba',
			name: 'Upacara',
			caption: 'Kegiatan upacara bendera.'
		},
		{
			src: upacara2Img,
			alt: 'Upacara Pondok Pesantren Tahfizh Baitul Qur\'an Camba',
			name: 'Upacara',
			caption: 'Upacara rutin pesantren.'
		}
	];

	const yearGalleries = [
		{
			year: '2025',
			photos: [
				galeri2025_1,
				galeri2025_2,
				galeri2025_3,
				galeri2025_4,
				galeri2025_5,
				galeri2025_6,
				galeri2025_7,
				galeri2025_8,
				galeri2025_9,
				galeri2025_10,
				galeri2025_11,
				galeri2025_12,
				galeri2025_13
			]
		},
	];
</script>

<svelte:head>
	{@html `<script type="application/ld+json">${gallerySchema}</script>`}
</svelte:head>

<Navbar />

<section class="py-14 sm:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<header class="mx-auto max-w-2xl text-center">
			<h1 class="text-2xl font-[var(--font-display)] font-bold tracking-tight sm:text-4xl">
				Galeri Santri
			</h1>
			<p class="mt-3 text-muted">Dokumentasi kegiatan santri Pondok Pesantren Tahfizh Baitul Qur'an Camba.</p>
		</header>
		<div class="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
			{#each photos as p}
				<GalleryCard {...p} />
			{/each}
		</div>
	</div>
</section>

{#each yearGalleries as g}
	<YearGallery year={g.year} photos={g.photos} />
{/each}

<Footer />
