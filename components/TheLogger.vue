<template>
  <div class="the-logger">
    <div v-if="!session" class="the-logger__create-session">
      <h2>Logger en tiempo real</h2>
      <p>Creá una sesión para comenzar a loguear</p>
      <button @click="handleCreateNewSession">Crear sesión</button>
    </div>
    <div v-if="logs.length > 0" class="the-logger__logs-wrapper" data-simplebar>
      <div v-for="log in logs" class="the-logger__log">
        <span class="the-logger__log__date-time">{{ log.lastLogDateTime }}</span>
        <span class="the-logger__log__content">{{ log.lastLogContent }}</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import 'simplebar';
import 'simplebar/dist/simplebar.css';
import { createSession, setLogsListener } from '~~/services/logs.service';
import { ref } from 'vue'

type log = {
  lastLogContent: string;
  lastLogDateTime: string;
}

const session = ref<string | undefined>(undefined)
const logs = ref<log[]>([])

async function handleCreateNewSession() {
  session.value = await createSession();
  console.log(session.value)
  setLogsListener(session.value, (data: log) => {
    logs.value.push(data);
  })
}

</script>
<style lang="scss" scoped>
.the-logger {
  width: 80%;
  height: 80%;
  background: #222;
  border-radius: 8px;
  box-shadow: 0px 10px 10px -5px #111;
  font-family: monospace;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  &__create-session {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #fff;
    button {
      border: none;
      margin-top: 1rem;
      padding: 0.5rem 1rem;
      background: #fff;
      color: #111;
      border-radius: 4px;
    }
  }
  &__logs-wrapper {
    max-height: 100%;
  }
  &__log {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 5px;
    
    &__date-time {
      background: #fff;
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
      color: #111;
    }
    &__content {
      color: #fff;
    }
  }
}
</style>