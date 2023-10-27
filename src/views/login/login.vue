<template>
  <div class="login">
    login
    {{ counterStore.count }} {{ counterStore.doubleCount }}
    <button @click="handleClick">点我count+1</button>
  </div>
</template>

<script lang="ts" setup>
import { useCounterStore } from '@/stores/counter'
import wjwRequest from '@/service/index'

const counterStore = useCounterStore()
function handleClick() {
  counterStore.increment()
}

wjwRequest.get({ name: 'coderwhy', password: '123456' } as any).then((res) => {
  console.log(res)
})
</script>

<style lang="less" scoped></style>
