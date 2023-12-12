<script>
	import '../app.postcss';
	import { Bell, GanttChart } from 'lucide-svelte';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { MainNav, UserNav } from '$lib/components/nav';
</script>

<div class="flex flex-col w-full h-full">
	<div class="border-b">
		<div class="flex h-16 items-center px-4">
			<div class="flex items-center space-x-4 mr-4">
				<div class="flex items-center space-x-2">
					<span class="text-xl font-bold">LogHandler</span>
				</div>
			</div>
			<MainNav />
			<div class="ml-auto flex items-center space-x-4">
				<DropdownMenu.Root positioning={{ placement: 'bottom-end' }}>
					<DropdownMenu.Trigger><Bell size="20" /></DropdownMenu.Trigger>
					<DropdownMenu.Content class="w-80">
						<DropdownMenu.Group>
							<DropdownMenu.Label>Notifications</DropdownMenu.Label>
							<DropdownMenu.Separator />
							<a href="#">
								<DropdownMenu.Item>
									<div class="flex flex-row">
										<GanttChart />
										<div class="flex flex-col ml-2">
											<div class="text-sm font-medium">New project added</div>
											<div class="text-xs text-muted-foreground">2 days ago</div>
										</div>
									</div>
								</DropdownMenu.Item>
							</a>
							<a href="#">
								<DropdownMenu.Item>
									<div class="flex flex-row">
										<GanttChart />
										<div class="flex flex-col ml-2">
											<div class="text-sm font-medium">New project added</div>
											<div class="text-xs text-muted-foreground">2 days ago</div>
										</div>
									</div>
								</DropdownMenu.Item>
							</a>
						</DropdownMenu.Group>
					</DropdownMenu.Content>
				</DropdownMenu.Root>
				<UserNav />
			</div>
		</div>
	</div>
	<div class="flex flex-col h-full 1 space-y-4 p-8 pt-4">
		<slot />
	</div>
</div>
