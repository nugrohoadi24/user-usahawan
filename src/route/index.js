import Vue from "vue"
import VueRouter from "vue-router"
import Dashboard from "../components/Dashboard.vue"
import Pelapor from "../components/Laporan/Pelapor.vue"
import Terlapor from "../components/Laporan/Terlapor.vue"
import Pemohon from "../components/Permohonan/Pemohon.vue"
import Termohon from "../components/Permohonan/Termohon.vue"

Vue.use(VueRouter)
const routes = [{
        path: "/",
        name: "Dasboard",
        component: Dashboard
    },
    {
        path: "/pelapor",
        name: "Pelapor",
        component: Pelapor
    },
    {
        path: "/terlapor",
        name: "Terlapor",
        component: Terlapor
    },
    {
        path: "/pemohon",
        name: "Pemohon",
        component: Pemohon
    },
    {
        path: "/termohon",
        name: "Termohon",
        component: Termohon
    },
]

const router = new VueRouter({
    routes
})

export default router