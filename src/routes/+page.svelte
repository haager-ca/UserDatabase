<script>
	import 'bootstrap/dist/css/bootstrap.min.css';

  function redirektToDelete() {
    window.location.href = "/DeleteData"
  }

  function redirektToEdit() {
    window.location.href = "/EditData"
  }

  function redirektToAdd() {
    window.location.href = "/AddData"
  }
</script>

	<main>
		<div class="card m-3">
			<div class="card-body text-center">
        <h1 class="text-center">Die genaueste Datenbank</h1>
        <p>Diese Web-Application ist dazu da die verschiedensten Informationen zu speichern.</p>
        <p>Sie können:</p>

        <button on:click={redirektToAdd} class="m-1 btn btn-outline-success">Daten hinzufügen</button>
        <button on:click={redirektToEdit} class="m-1 btn btn-outline-primary">Daten bearbeiten</button>
        <button on:click={redirektToDelete} class="m-1 btn btn-outline-danger">Daten löschen</button>

        <p class="m-1">Genau zu diesem Zeitpunkt umfasst die Datenbank ... Daten!!!</p>
        <p>Sie können auch oben in der Navbar die verschiedenen Seiten ansteueren.</p>
        <p>Außerdem gibt es oben rechts eine Suchleiste inder sie die verschiedensten Datensätze suchen können.</p>
        <p><strong>!!!Achten sie immer auf eine korrekte Schreibweise, da sie sonnst entweder falsche Daten bekommen oder einspeichern!!!</strong></p>
			</div>
		</div>
	</main>
