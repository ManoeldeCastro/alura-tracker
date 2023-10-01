<template>
  <main class="columns is-gapless is-multiline" :class="{'modo-escuro': modoEscuroAtivo}">
    <div class="column is-one-quarter">
      <BarraLateral @aoTemaAlterado="trocarTema"/>
    </div>
    <div class="column is-three-quarter conteudo">
      <OFormulario @aoSalvarTarefa="salvarTarefa"/>
      <div class="lista">
      <ATarefa v-for="(tarefa, i) in tarefas" :key="i"  :tarefa="tarefa"/>
    </div>
    <OBox v-if="tarefas.length === 0">
      Você não esta muito produtivo hoje 😴
    </OBox>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';
import OFormulario from './components/OFormulario.vue';
import ATarefa from './components/ATarefa.vue';
import ITarefa from './interfaces/ITarefa';
import OBox from './components/OBox.vue';


export default defineComponent({
    name: 'App',
    components: {
    BarraLateral,
    OFormulario,
    ATarefa,
    OBox
},
  data(){
    return {
      tarefas: [] as ITarefa[],
      modoEscuroAtivo: false
  }
},
methods: {
  salvarTarefa(tarefa: ITarefa){
    this.tarefas.push(tarefa)
  },
  trocarTema (modoEscuroAtivo : boolean){
    this.modoEscuroAtivo = !modoEscuroAtivo
  }
}
});
</script>

<style>
  .lista{
    padding: 1.25rem;
  }
  main {
    --bg-primario : #fff;
    --texto-primario: #000;
  }
  main.modo-escuro {
    --bg-primario : #2b2d42;
    --texto-primario: #ddd;
  }
  .conteudo {
    background-color: var(--bg-primario);
    color: var(--texto-primario)
  
  }

</style>
