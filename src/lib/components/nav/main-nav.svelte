<script lang="ts">
	import { goto } from '$app/navigation';
	import nav from '$lib/nav';
</script>

<nav
	class="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground"
>
	<button
		data-state={$nav === 'overview' ? 'active' : undefined}
		class="inline-flex items-center justify-center whitespace-nowrap rounded-sm mr-0.5 px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm [&:not([data-state='active'])]:hover:bg-background [&:not([data-state='active'])]:hover:text-foreground"
		on:click={() => {
			$nav = 'overview';
			goto('/');
		}}>Overview</button
	>
	<button
		data-state={$nav === 'analytics' ? 'active' : undefined}
		class="inline-flex items-center justify-center whitespace-nowrap rounded-sm mx-0.5 px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm [&:not([data-state='active'])]:hover:bg-background [&:not([data-state='active'])]:hover:text-foreground"
		on:click={() => {
			$nav = 'analytics';
			goto('/analytics');
		}}>Analytics</button
	>
	<button
		data-state={$nav === 'alerts' ? 'active' : undefined}
		class="inline-flex items-center justify-center whitespace-nowrap rounded-sm mx-0.5 px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm [&:not([data-state='active'])]:hover:bg-background [&:not([data-state='active'])]:hover:text-foreground"
		on:click={() => {
			$nav = 'alerts';
			goto('/alerts');
		}}>Alerts</button
	>
	<button
		data-state={$nav === 'policies' ? 'active' : undefined}
		class="inline-flex items-center justify-center whitespace-nowrap rounded-sm ml-0.5 px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm [&:not([data-state='active'])]:hover:bg-background [&:not([data-state='active'])]:hover:text-foreground"
		on:click={() => {
			$nav = 'policies';
			goto('/policies');
		}}>Policies</button
	>
</nav>
