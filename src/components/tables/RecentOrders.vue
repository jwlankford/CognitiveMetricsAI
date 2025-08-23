
<template>
	<div class="overflow-x-auto">
		<table class="min-w-full bg-white rounded-lg shadow">
			<thead>
				<tr>
					<th class="py-2 px-4 border-b">Order ID</th>
					<th class="py-2 px-4 border-b">Customer</th>
					<th class="py-2 px-4 border-b">Date</th>
					<th class="py-2 px-4 border-b">Amount</th>
					<th class="py-2 px-4 border-b">Status</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="order in orders" :key="order.id">
					<td class="py-2 px-4 border-b">{{ order.id }}</td>
					<td class="py-2 px-4 border-b">{{ order.customer }}</td>
					<td class="py-2 px-4 border-b">{{ order.date }}</td>
					<td class="py-2 px-4 border-b">${{ order.amount }}</td>
					<td class="py-2 px-4 border-b">
						<span :class="order.status === 'Completed' ? 'text-green-600' : 'text-yellow-600'">
							{{ order.status }}
						</span>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script setup>
const orders = [
	{ id: '1001', customer: 'Alice Smith', date: '2025-08-20', amount: 120.50, status: 'Completed' },
	{ id: '1002', customer: 'Bob Johnson', date: '2025-08-19', amount: 89.99, status: 'Pending' },
	{ id: '1003', customer: 'Carol Lee', date: '2025-08-18', amount: 45.00, status: 'Completed' },
	{ id: '1004', customer: 'David Kim', date: '2025-08-17', amount: 230.00, status: 'Completed' },
	{ id: '1005', customer: 'Eva Brown', date: '2025-08-16', amount: 67.25, status: 'Pending' },
];
</script>
