<script lang="ts">
	import { accounts } from '$lib/store';
	import CreateAccount from './CreateAccount.svelte';

	let name = '';
	export let data;

	const handleCreate = (event: CustomEvent<string>) => {
		accounts.update(() => [...$accounts, { id: crypto.randomUUID(), name: event.detail }]);
		console.log(event.detail);
	};

	console.log(data);
</script>

<h1>Your Accounts</h1>

<div class="account-list">
	{#each $accounts as account}
		<a href={`/accounts/${account.name}`}>{account.name}</a>
	{/each}
</div>

<CreateAccount bind:accountName={name} on:create={handleCreate} />

<style>
	.account-list {
		display: flex;
		gap: 8px;
		padding: 0 16px 16px 0px;
	}
</style>
