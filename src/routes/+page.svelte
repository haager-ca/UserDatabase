<script>
	import { Route, Router } from 'svelte-navigator';
	import 'bootstrap/dist/css/bootstrap.min.css';
	import Navbar from './_components/Navbar.svelte';
	import Home from './_pages/Home.svelte';
	import AddData from './_pages/AddData.svelte';
	import EditData from './_pages/EditData.svelte';
	import DeleteData from './_pages/DeleteData.svelte';
</script>

<Router>
	<main>
		<div class="card m-3">
			<div class="card-body">
				<Navbar />
				<Route path="/">
					<Home />
				</Route>
				<Route path="addData">
					<h1 class="text-center">Daten hinzufügen</h1>
					<AddData />
				</Route>
				<Route path="editData">
					<h1 class="text-center">Daten bearbeiten</h1>
					<EditData />
				</Route>
				<Route path="deleteData">
					<h1 class="text-center">Daten löschen</h1>
					<DeleteData />
				</Route>
			</div>
		</div>
	</main>
</Router>
