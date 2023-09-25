<script lang="ts">
	import { Activity, CreditCard, Users } from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { Overview, Logs } from '.';
	import AvatarFallback from '../ui/avatar/avatar-fallback.svelte';
	import { getAllContexts } from 'svelte';
</script>

<div>
	<div class="flex items-center justify-between space-y-2 mb-4">
		<h2 class="text-3xl font-bold tracking-tight">Dashboard</h2>
	</div>
	<div class="grid gap-4 md:grid-cols-1 lg:grid-cols-5">
		<div class="grid gap-4 grid-cols-2 col-span-2">
			<Card.Root>
				<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
					<Card.Title class="text-sm font-medium">Daily Events</Card.Title>
					<Activity class="h-4 w-4 text-muted-foreground" />
				</Card.Header>
				<Card.Content>
					<div><span class="text-2xl font-bold">45,231</span> / hour</div>
					<p class="mt-1 text-xs text-muted-foreground">+20.1% from last month</p>
				</Card.Content>
			</Card.Root>
			<Card.Root>
				<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
					<Card.Title class="text-sm font-medium">Subscriptions</Card.Title>
					<Users class="h-4 w-4 text-muted-foreground" />
				</Card.Header>
				<Card.Content>
					<div class="text-2xl font-bold">+2350</div>
					<p class="text-xs text-muted-foreground">+180.1% from last month</p>
				</Card.Content>
			</Card.Root>
			<Card.Root>
				<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
					<Card.Title class="text-sm font-medium">Sales</Card.Title>
					<CreditCard class="h-4 w-4 text-muted-foreground" />
				</Card.Header>
				<Card.Content>
					<div class="text-2xl font-bold">+12,234</div>
					<p class="text-xs text-muted-foreground">+19% from last month</p>
				</Card.Content>
			</Card.Root>
			<Card.Root>
				<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
					<Card.Title class="text-sm font-medium">Active Now</Card.Title>
					<Activity class="h-4 w-4 text-muted-foreground" />
				</Card.Header>
				<Card.Content>
					<div class="text-2xl font-bold">+573</div>
					<p class="text-xs text-muted-foreground">+201 since last hour</p>
				</Card.Content>
			</Card.Root>
		</div>
		<Card.Root class="col-span-3">
			<Card.Header>
				<Card.Title>Bi-weekly Overview</Card.Title>
			</Card.Header>
			<Card.Content>
				<Overview />
			</Card.Content>
		</Card.Root>
	</div>
	<Card.Root class="mt-4">
		<Card.Header>
			<Card.Title>
				<div class="flex flex-row items-center space-x-2">
					<span class="mr-auto">Real Time Log</span>
					<Button size="sm">See all</Button>
				</div>
			</Card.Title>
		</Card.Header>
		<Card.Content>
			<Logs />
		</Card.Content>
	</Card.Root>
</div>
