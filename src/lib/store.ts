import { writable } from 'svelte/store';

// Theme store
export const theme = writable<'light' | 'dark'>('light');

// Mobile menu state
export const mobileMenuOpen = writable<boolean>(false);

// Project filter state
export const activeFilter = writable<string>('all');