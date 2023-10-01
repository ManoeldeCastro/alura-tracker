<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <BarraLateral/>
    </div>
    <div class="column is-three-quarter">
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
      tarefas: [] as ITarefa[]
  }
},
methods: {
  salvarTarefa(tarefa: ITarefa){
    this.tarefas.push(tarefa)
  }
}
});
</script>

<style>
  .lista{
    padding: 1.25rem;
  }

</style>
