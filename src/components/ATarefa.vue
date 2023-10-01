<template>
  <OBox>
    <div class="columns">
      <div class="column is-7">{{ tarefa.descricao  || "Tarefa sen descrição" }}</div>
      <div class="column">
        <OCronometro  :tempoEmSegundos="tarefa.duracaoEmSegundo"/>
      </div>
    </div>
  </Obox>
</template>

<script lang="ts">
import OBox from './OBox.vue'
import { defineComponent, PropType } from 'vue';
import OCronometro from './OCronometro.vue';
import ITarefa from '@/interfaces/ITarefa';

export default defineComponent({
  name: 'ATarefa',
  components: { OCronometro,
    OBox, 
  },
  props: {
    tarefa: {
      type: Object as PropType<ITarefa>,
      required: true
    }
  }
});
</script>

<style scoped>



</style>
