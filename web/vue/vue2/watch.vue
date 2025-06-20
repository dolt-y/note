<template>
  <div>
    <input v-model="message" placeholder="输入内容试试" />
    <button @click="user.age++">年龄+1</button>
    <p>你输入的是: {{ message }}</p>
    <p>user: {{ user.name }} - {{ user.age }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '',
      count: 0,
      user: {
        name: 'Tom',
        age: 18
      }
    }
  },
  watch: {
    // 1. 普通写法，监听 message
    message(newVal, oldVal) {
      console.log('message 变化了:', oldVal, '=>', newVal)
    },
    // 2. 对象写法，监听 count
    count: {
      handler(newVal, oldVal) {
        console.log('count 变化了:', oldVal, '=>', newVal)
      },
      immediate: true,
      deep: false
    },
    // 3. 深度监听对象 user
    user: {
      handler(newVal, oldVal) {
        console.log('user 变化了:', oldVal, '=>', newVal)
      },
      deep: true
    },
    // 4. 监听对象的某个属性
    'user.age'(newVal, oldVal) {
      console.log('user.age 变化了:', oldVal, '=>', newVal)
    }
  },
  created() {
    // 5. 通过 $watch 动态监听 message
    this.$watch('message', function(newVal, oldVal) {
      console.log('$watch 监听 message:', oldVal, '=>', newVal)
    })
    // 6. 监听多个数据，统一处理
    this.$watch(
      () => [this.message, this.count],
      function(newVal, oldVal) {
        console.log('message 或 count 变化了:', oldVal, '=>', newVal)
      }
    )
  }
}
</script>

<style scoped>
/* 样式可选 */
</style>