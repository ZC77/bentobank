<script>
	import Footer from '$lib/Footer/Footer.svelte';
</script>

<nav>
	<a href="/">Home</a>
	<a href="/accounts">Accounts</a>
</nav>

<slot />

<Footer data="Welcome, Brian. J Reed" />
