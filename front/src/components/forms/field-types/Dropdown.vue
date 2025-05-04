<template>
	<div class="checkbox m-1 mb-4 mt-4 p-2">
		<p for="dropdownDescription" class="form-label text-primary fw-bold">
			Dropdown Configuration
		</p>
		<input
			id="dropdownDescription"
			name="label"
			type="text"
			class="form-control"
			placeholder="Description"
		/>
		<div class="form-check mt-2">
			<select
				id="selectExample"
				name="selectExample"
				class="form-select"
			>
				<option selected disabled>Add an option</option>
			</select>
		</div>

		<button class="btn btn-success mt-4">Add option</button>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped>
.checkbox {
	border: grey dotted 2px;
}
</style>
