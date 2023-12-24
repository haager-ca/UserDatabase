<main>
	<div class="card m-3">
		<div class="card-body">
			<h1 class="text-center">Daten einfügen</h1>
			<div class="row m-3">
				<div class="col-5">
					<h4 class="text-center">Allgemeine Daten zu Person</h4>
					<div class="input-group">
						<span class="input-group-text">First and last name</span>
						<input type="text" id="InputFirstname" aria-label="First name" class="form-control" />
						<input type="text" id="InputLastname" aria-label="Last name" class="form-control" />
					</div>
					<div class="mt-3">
						<label for="InputEmail1" class="form-label">Email address (optional)</label>
						<input type="email" class="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="max.mustermann@gmail.com"/>
					</div>
                    <div class="mt-3">
						<label for="Birthday" class="form-label">Geburtsdatum</label>
						<input type="date" class="form-control" id="InputBirthday" aria-describedby="emailHelp"/>
					</div>
                    <div class="mt-3">
						<label for="exampleInputEmail1" class="form-label">Email address (optional)</label>
						<input type="email" class="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="max.mustermann@gmail.com"/>
					</div>
				</div>
                <div class="col-1"></div>
				<div class="col-6">
					<h4 class="text-center">Beschreibung der Person (Stichpunkte)</h4>
                    <div class="form-floating">
                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" style="height: 140px"></textarea>
                        <label for="floatingTextarea">Beschreibung</label>
                      </div>
                      <div class="form-floating">
                        <textarea class="mt-3 form-control" placeholder="Leave a comment here" id="floatingTextarea" style="height: 140px"></textarea>
                        <label for="floatingTextarea">Eigenschaften</label>
                      </div>
				</div>
			</div>
		</div>
	</div>
</main>
