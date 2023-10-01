<template>
  <div class="box formulario">
    <div class="columns">
      <div
        class="column is-8"
        role="form"
        aria-label="Formulário para criação de nova tarefa"
      >
        <input
          type="text"
          class="input"
          placeholder="Qual tarefa você deseja iniciar?"
          v-model="descricao"
        />
      </div>
      <div class="column">
        <OTemporizador @ao-temporizador-finalizado="finalizarTarefa"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import OTemporizador from './OTemporizador.vue'

export default defineComponent({
  name: 'OFormulario',
  emits: ['aoSalvarTarefa'],
  components: {
    OTemporizador,
  },
  data(){
    return  {
      descricao: ''
    }
  },
  methods: {
    finalizarTarefa(tempoDecorridos: number) : void{
      this.$emit('aoSalvarTarefa', {
        duracaoEmSegundo: tempoDecorridos,
        descricao: this.descricao
      })
    }
  }
});
</script>
<style>
.formulario {
  background-color: var(--bg-primario);
  color: var(--texto-primario)
}
</style>
