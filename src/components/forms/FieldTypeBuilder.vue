<template>
    <Checkbox v-if="fieldType === 1"></Checkbox>
    <Dropdown v-else-if="fieldType === 2"></Dropdown>
    <Radio v-else-if="fieldType === 3"></Radio>
</template>

<script setup lang="ts">
import { watchEffect } from 'vue';
import Checkbox from './field-types/Checkbox.vue';
import Dropdown from './field-types/Dropdown.vue';
import Radio from './field-types/Radio.vue';

const props = defineProps({
    fieldType: Number
})

</script>