<template>
	<div class="checkbox m-1 mb-4 mt-4 p-2">
		<label for="radioDescription" id="radioConfiguration" class="form-label text-primary fw-bold">
			Radio Configuration
        </label>
		<input
			id="radioDescription"
			name="radioConfiguration"
			type="text"
			class="form-control"
			placeholder="Description"
		/>
		<div class="form-check mt-2">
			<input
				id="radioExample"
				name="radio"
				type="radio"
				class="form-check-input"
			/>
            <label for="radioExample" class="form-check-label text-secondary">* Add a radio description</label>
		</div>

		<button class="btn btn-success mt-4">Add radio</button>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped>

.checkbox {
    border: grey dotted 2px;
}
</style>
