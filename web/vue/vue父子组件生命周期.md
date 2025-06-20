#  vue父子组件生命周期

父beforeCreate -> 父created -> 父beforeMount -> 子beforeCreate -> 子created -> 子beforeMount -> 子mounted -> 父mounted->父beforeUpdate->子beforeUpdate->子updated->父updated->父beforeDestroy->子beforeDestroy->子destroyed->父destroyed


记忆技巧
挂载时，父先走到 beforeMount，子全走完，父再 mounted。
更新时，父先 beforeUpdate，子先 updated，父最后 updated。
销毁时，父先 beforeUnmount，子全走完，父最后 unmounted。