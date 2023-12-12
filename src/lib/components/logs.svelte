<script>
	import * as Table from '$lib/components/ui/table';
	import { onMount } from 'svelte';

	const url = 'https://winter-thunder-3785.fly.dev';

	let loaded = false;
	let logs = [];

	onMount(() => {
		const interval = setInterval(async () => {
			let res = await fetch(`${url}/log`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json'
				}
			});
			const data = await res.json();
			console.log(data);
			logs = [];
			for (let i = 0; i < data.length; i++) {
				logs.push({
					date: data[i].date,
					time: data[i].time,
					level: data[i].level.slice(1, -1),
					header: data[i].header,
					message: data[i].message,
					address: data[i].address,
					retention: data[i].retention
				});
			}
			loaded = true;
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
			<Table.Head>Origin</Table.Head>
			<Table.Head class="text-right">Retention</Table.Head>
		</Table.Row>
	</Table.Header>
	<Table.Body>
		{#if loaded}
			{#each logs as log}
				<Table.Row>
					<Table.Cell class="font-medium">{log.date} {log.time}</Table.Cell>
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
					<Table.Cell>{JSON.stringify(log.header)}{JSON.stringify(log.message)}</Table.Cell>
					<Table.Cell>{log.address}</Table.Cell>
					<Table.Cell class="text-right">{log.retention}</Table.Cell>
				</Table.Row>
			{/each}
		{:else}
			<Table.Row>
				<Table.Cell class="text-center">Loading...</Table.Cell>
			</Table.Row>
		{/if}
	</Table.Body>
</Table.Root>
