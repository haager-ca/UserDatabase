<script>
	import { ActionData } from './$types';
	export let form: ActionData;
</script>

<main>
	<div class="card m-3">
		<div class="card-body">
			<h1 class="text-center">Daten einfügen</h1>
			<div class="row m-3">
				<form method="post">
					<div class="col-5">
						<h4 class="text-center">Allgemeine Daten zu Person</h4>
						<div class="input-group">
							<span class="input-group-text">First and last name</span>
							<input type="text" name ="FirstName" id="InputFirstname" aria-label="First name" class="form-control" />
							<input type="text" name ="LastName" id="InputLastname" aria-label="Last name" class="form-control" />
						</div>
						<div class="mt-3">
							<label for="InputEmail1" class="form-label">Email address (optional)</label>
							<input
								name ="Email"
								type="email"
								class="form-control"
								id="InputEmail"
								aria-describedby="emailHelp"
								placeholder="max.mustermann@gmail.com"
							/>
						</div>
						<div class="mt-3">
							<label for="Birthday" class="form-label">Geburtsdatum</label>
							<input
								name="BirthDate"
								type="date"
								class="form-control"
								id="InputBirthday"
								aria-describedby="emailHelp"
							/>
						</div>
						<div class="mt-3">
							<label for="InputAdress" class="form-label">Addresse (optional)</label>
							<input
								name="Adress"
								type="adress"
								class="form-control"
								id="InputEmail"
								placeholder="Musterstraße 17"
							/>
						</div>
						<!--stadt-->
						<!--postleitzahl-->
						<!--bundesland-->
						<!--Land-->
						<!--Familienmitglieder-->
						<!--Beziehungen-->
						<!--IQ-->
						<!--Freunde-->
						<!--Famielienstand (Reich/Arm)-->
						<!--Immobilien-->
					</div>
					<div class="col-1"></div>
					<div class="col-6">
						<h4 class="text-center">Beschreibung der Person (Stichpunkte)</h4>
						<div class="form-floating">
							<textarea
								class="form-control"
								placeholder=""
								id="floatingTextarea"
								style="height: 140px"
							></textarea>
							<label for="floatingTextarea">Beschreibung</label>
						</div>
						<div class="form-floating">
							<textarea
								class="mt-3 form-control"
								placeholder=""
								id="floatingTextarea"
								style="height: 140px"
							></textarea>
							<label for="floatingTextarea">Eigenschaften</label>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</main>
