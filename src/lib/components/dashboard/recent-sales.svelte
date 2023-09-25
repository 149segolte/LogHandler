<script>
	import * as Table from '$lib/components/ui/table';
	import { onMount } from 'svelte';

	const url = 'https://flowing-teal-terribly.ngrok-free.app';

	let logs = [];

	onMount(() => {
		const interval = setInterval(async () => {
			let res = await fetch(`${url}/log`);
			const data = await res.json();
			console.log(data);
			logs = data.logs;
		}, 5000);

		return () => clearInterval(interval);
	});
</script>

<Table.Root>
	<Table.Header class="border-2 rounded-lg">
		<Table.Row class="border-0 bg-neutral-100 hover:bg-neutral-100 text-neutral-600">
			<Table.Head class="w-[240px]">Request Time</Table.Head>
			<Table.Head class="w-[100px]">Level</Table.Head>
			<Table.Head>Log</Table.Head>
			<Table.Head class="text-right">Origin</Table.Head>
		</Table.Row>
	</Table.Header>
	<Table.Body>
		{#each logs as log}
			<Table.Row>
				<Table.Cell class="font-medium">{log.time}</Table.Cell>
				<Table.Cell class="font-medium">
					{#if log.level === 'INFO'}
						<span class="text-green-500">{log.level}</span>
					{:else if log.level === 'WARN'}
						<span class="text-yellow-500">{log.level}</span>
					{:else if log.level === 'ERROR'}
						<span class="text-red-500">{log.level}</span>
					{:else}
						<span class="text-blue-500">{log.level}</span>
					{/if}
				</Table.Cell>
				<Table.Cell>{JSON.stringify(log.headers)}{JSON.stringify(log.log)}</Table.Cell>
				<Table.Cell class="text-right">{log.headers['x-forwarded-for']}</Table.Cell>
			</Table.Row>
		{/each}
	</Table.Body>
</Table.Root>
