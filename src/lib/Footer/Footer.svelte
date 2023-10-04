<script>
	import { onMount } from 'svelte';

	export let name = '';

	let currentDate = new Date();

	$: footerContent = `Welcome, ${name}`;

	onMount(() => {
		const interval = setInterval(() => {
			currentDate = new Date();
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<footer>
	<div class="footer-div">
		<div class="content-block">
			<p>{currentDate.toLocaleString()}</p>
		</div>
		<div class="content-block">
			<p class="name">{footerContent}</p>
			<a href="">Terms and conditions</a>
			<a href=""> About us</a>
			<a href="">Privacy Policy</a>
		</div>
	</div>
</footer>

<style>
	.footer-div {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		gap: 16px;
	}

	.content-block {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		gap: 16px;
	}

	.name {
		font-weight: 700;
	}

	a {
		display: inline-block;
	}
</style>
