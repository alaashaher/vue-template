<script>
import { ref } from 'vue';
// Calling API 
const products = ref(null);
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => products.value = data);
export default {
  setup() {
    return {
      dataSource: products,

      columns: [
        {
          title: 'id',
          dataIndex: 'id',
          key: 'id',
        },
        {
          title: 'title',
          dataIndex: 'title',
          key: 'title',
        },
        // {
        //   title: 'Address',
        //   dataIndex: 'address',
        //   key: 'address',
        // },
      ],
    };
  },
};
</script>


<template>
  <main>
    <a-table :dataSource="dataSource" :columns="columns" />
  </main>
</template>
