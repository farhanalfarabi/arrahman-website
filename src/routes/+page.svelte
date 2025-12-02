<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Profile from '$lib/components/Profile.svelte';
	import Leaders from '$lib/components/Leaders.svelte';
	import Educators from '$lib/components/Educators.svelte';
	import Advantages from '$lib/components/Advantages.svelte';
	import VisionMission from '$lib/components/VisionMission.svelte';
	import Features from '$lib/components/Features.svelte';
	import Programs from '$lib/components/Programs.svelte';
	import Testimonials from '$lib/components/Testimonials.svelte';
	import CTA from '$lib/components/CTA.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Map from '$lib/components/Map.svelte';
</script>

<Navbar />
<main>
	<Hero />
	<Profile />
	<VisionMission />
	<Leaders />
	<Educators />
	<Advantages />
	<Features />
	<!-- <Programs /> -->
	<!-- <Testimonials /> -->
	<CTA />
 	<Map query="Tahfizh Baitul Qur'an Camba, Kab. Maros, Sulawesi Selatan" zoom={14} />
</main>
<Footer />
