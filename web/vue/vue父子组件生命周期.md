#  vue父子组件生命周期

1. 父 beforeCreate  
2. 父 created  
3. 父 beforeMount  
   —— 开始处理子组件 ——  
4. 子 beforeCreate  
5. 子 created  
6. 子 beforeMount  
7. 子 mounted  
   —— 子组件挂载完成 ——  
8. 父 mounted

更新顺序：父 beforeUpdate → 子 beforeUpdate → 子 updated → 父 updated

销毁顺序：父 beforeUnmount → 子 beforeUnmount → 子 unmounted → 父 unmounted