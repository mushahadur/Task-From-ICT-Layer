<template>
  <div class="grid">
   <product
    v-for="product in products"
    :key="product.id"
    :title="product.title"
    :price="product.price"
    :image="product.image"
   />
    
  </div>
</template>

<script>
import axios from "axios";
import Product from "./../components/Product.vue"
export default{
  components:{
    Product,
  },
  data(){
    return {
      products:[],
    };
  },
    mounted(){
        axios
          .get('https://fakestoreapi.com/products')
          .then((response)=>{
            this.products = response.data;
            console.log(response);
          })
          .catch((e)=>{
            console.log(e);
          });
    },
};

</script>

<style>
  .grid {
  display: grid;
  grid-template-columns: repeat(auto-fit minmax(200px, 1fr));
  grid-gap: 20px;
  }
 

</style>