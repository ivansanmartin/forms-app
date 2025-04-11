<template>
	<div class="checkbox m-1 mb-4 mt-4 p-2">
		<label for="checkboxDescription" class="form-label text-primary fw-bold">
			Checkbox Configuration
		</label>
		<input
			id="checkboxDescription"
			name="label"
			type="text"
			class="form-control"
			placeholder="Description"
		/>
		<div class="form-check mt-2">
			<input
				id="checkboxExample"
				name="checkboxExample"
				type="checkbox"
				class="form-check-input"
			/>
            <label for="checkboxExample" class="form-check-label text-secondary">* Add a checkbox description</label>
		</div>

		<button class="btn btn-success mt-4">Add checkbox</button>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped>

.checkbox {
    border: grey dotted 2px;
}
</style>
