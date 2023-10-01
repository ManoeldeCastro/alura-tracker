import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Tarefas from '../views/Tarefas.vue';
import Projetos from '../views/Projetos.vue';

const rotas: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'tarefas',
    components: Tarefas,
  },
  {
    path: '/projetos',
    name: 'trojetos',
    components: Projetos
  },
];

const roteador = createRouter({
  history: createWebHashHistory(),
  routes: rotas,
});

export default roteador;
