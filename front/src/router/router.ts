import { createWebHistory, createRouter } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import FormMetricsView from "@/views/FormMetricsView.vue";
import MetricsView from "@/views/MetricsView.vue";
import CreateFormView from "@/views/CreateFormView.vue";

const routes = [
    { path: "/", component: HomeView },
    { path: "/create-form", component: CreateFormView },
    { path: "/form-metrics", component: FormMetricsView },
    { path: "/metrics", component: MetricsView}

]

export const router = createRouter({
    history: createWebHistory(),
    routes
})