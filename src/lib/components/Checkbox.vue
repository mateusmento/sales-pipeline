<script lang="ts" setup>
import { ref } from 'vue';
import IconChecked from '../icons/IconChecked.vue';

const checked = ref(false);
</script>

<template>
  <div class="checkbox" :class="{ checked }" @click="checked = !checked">
    <IconChecked />
  </div>
</template>

<style scoped>
.checkbox {
  display: flex;
  padding: 3px 2px;
  border-radius: 5px;
  align-self: center;
  border: 2px solid #cbd5e0;
  background: #fff;
}

.checkbox.checked {
  background: #2462d1;
  border-color: #2462d1;
}
</style>
