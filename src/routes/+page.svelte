<script>
	import { DashboardPage } from '$lib/components/dashboard';
	import { onMount } from 'svelte';
	import nav from '$lib/nav';

	onMount(() => {
		$nav = 'overview';
	});
</script>

<DashboardPage />
