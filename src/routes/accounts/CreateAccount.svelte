<script lang="ts">
	import { createEventDispatcher, tick } from 'svelte';

	let isCreatingAccount = false;
	let inputRef: HTMLInputElement;

	export let accountName = '';
	const dispatch = createEventDispatcher();

	const handleClick = async () => {
		isCreatingAccount = true;
		await tick();
		inputRef?.focus();
	};
	const handleKeyPress = (event: KeyboardEvent) => {
		if (event.key === 'Enter') {
			dispatch('create', accountName);
		}
	};
</script>

{#if !isCreatingAccount}
	<button on:click={handleClick}>Create an account</button>
{:else}
	<label for="account-name">Account name</label>
	<input
		bind:this={inputRef}
		type="text"
		id="account-name"
		on:keypress={handleKeyPress}
		bind:value={accountName}
	/>
{/if}
