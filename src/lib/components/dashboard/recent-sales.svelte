<script lang="ts">
	import * as Table from '$lib/components/ui/table';

	const logs = [
		{
			time: '2023-09-24T08:18:33.274150Z',
			level: 'INFO',
			headers: {
				host: 'flowing-teal-terribly.ngrok-free.app',
				'user-agent': 'PostmanRuntime/7.33.0',
				'content-length': '68',
				accept: '*/*',
				'accept-encoding': 'gzip, deflate, br',
				'cache-control': 'no-cache',
				'content-type': 'application/json',
				'postman-token': '8c4d1268-6e8c-4f60-afb4-0cc0375ff0b5',
				'x-forwarded-for': '54.86.50.139',
				'x-forwarded-proto': 'https'
			},
			log: { button: 4, message: 'testing', type: 'c++' }
		},
		{
			time: '2023-09-24T08:18:33.274150Z',
			level: 'INFO',
			headers: {
				host: 'flowing-teal-terribly.ngrok-free.app',
				'user-agent': 'PostmanRuntime/7.33.0',
				'content-length': '68',
				accept: '*/*',
				'accept-encoding': 'gzip, deflate, br',
				'cache-control': 'no-cache',
				'content-type': 'application/json',
				'postman-token': '8c4d1268-6e8c-4f60-afb4-0cc0375ff0b5',
				'x-forwarded-for': '54.86.50.139',
				'x-forwarded-proto': 'https'
			},
			log: { button: 4, message: 'testing', type: 'c++' }
		},
		{
			time: '2023-09-24T08:18:33.274150Z',
			level: 'DEBUG',
			headers: {
				host: 'flowing-teal-terribly.ngrok-free.app',
				'user-agent': 'PostmanRuntime/7.33.0',
				'content-length': '68',
				accept: '*/*',
				'accept-encoding': 'gzip, deflate, br',
				'cache-control': 'no-cache',
				'content-type': 'application/json',
				'postman-token': '8c4d1268-6e8c-4f60-afb4-0cc0375ff0b5',
				'x-forwarded-for': '54.86.50.139',
				'x-forwarded-proto': 'https'
			},
			log: { button: 4, message: 'testing', type: 'c++' }
		},
		{
			time: '2023-09-24T08:18:33.274150Z',
			level: 'ERROR',
			headers: {
				host: 'flowing-teal-terribly.ngrok-free.app',
				'user-agent': 'PostmanRuntime/7.33.0',
				'content-length': '68',
				accept: '*/*',
				'accept-encoding': 'gzip, deflate, br',
				'cache-control': 'no-cache',
				'content-type': 'application/json',
				'postman-token': '8c4d1268-6e8c-4f60-afb4-0cc0375ff0b5',
				'x-forwarded-for': '54.86.50.139',
				'x-forwarded-proto': 'https'
			},
			log: { button: 4, message: 'testing', type: 'c++' }
		}
	];
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

