import type { Account } from './types';

const db = new Map<string, Account>();

export const getAllAccounts = () => {
	const accounts: Account[] = [];
	db.forEach((account) => accounts.push(account));
	return accounts;
};

export const getAccount = (accountId: string) => {
	return db.get(accountId);
};

export const createAccount = (data: Omit<Account, 'id'>) => {
	const newId = crypto.randomUUID();
	db.set(newId, { id: newId, ...data });
};

export const deleteAccount = (accountId: string) => {
	db.delete(accountId);
};
