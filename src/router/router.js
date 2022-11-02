import { createRouter, createWebHashHistory } from "vue-router";


const routes = [
    {
        path: '/',
        redirect: '/pokemon'
    },
    {
        path: '/pokemon',
        name: 'pokemon',
        component: () => import('../modulos/pokemon/layouts/PokemonLayout.vue'),
        children: [
            {
                path: 'home',
                name: 'pokemon-home',
                component: () => import('../modulos/pokemon/pages/ListPage')
            },
            {
                path: 'about',
                name: 'pokemon-about',
                component: () => import('../modulos/pokemon/pages/AboutPage')
            },
            {
                path: 'pokemonid/:id',
                name: 'pokemon-id',
                component: () => import('../modulos/pokemon/pages/PokemonPage'),
                props: (route) => {
                    const id = +route.params.id
                    return isNaN(id) ? { id: 1 } : { id }
                }
            },
            {
                path: '',
                name: 'pokemon-redirect',
                redirect: { name: 'pokemon-about' }
            }
        ]
    },
    {
        path: '/dbz',
        name: 'dbz',
        component: () => import('../modulos/dbz/Layouts/DragonBallLayout.vue'),
        children: [
            {
                path: 'characters',
                name: 'dbz-characters',
                component: () => import('../modulos/dbz/pages/Characters.vue')
            },
            {
                path: 'about',
                name: 'dbz-about',
                component: () => import('../modulos/dbz/pages/About.vue')
            },
            {
                path: '',
                name: 'dbz-redirect',
                redirect: { name: 'dbz-characters' }
            }
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        // component: () => import('../modulos/shared/pages/NoPageFound')
        redirect: '/home'
    },
]


const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router