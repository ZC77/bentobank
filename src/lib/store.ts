import { writable } from 'svelte/store';
import type { Account } from './types';

export const accounts = writable<Account[]>([
	{ id: '123', name: 'Everyday' },
	{ id: '123', name: 'Transactions' }
]);
