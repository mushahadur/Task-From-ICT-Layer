<template>
    <div  class="product">
      <img :src="image" alt="">
      <h3>{{ title }}</h3>
      <h5>{{ price }}</h5>
    </div>
</template>

<script>
export default{
    props:{
        title: String,
        price: String,
        image:{
            type:String,
            required:true,
        },
    },
};
</script>
<style>
    product {
    box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
    padding: 10px;
    border-radius: 5px;
     width: 100%;
    height: 150px;
    }
    /* product img {
    width: 100%;
    height: 150px;
    } */
</style>
