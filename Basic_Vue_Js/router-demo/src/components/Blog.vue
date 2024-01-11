<template>
    <h2>Blog Page</h2>
    <p> {{ this.$route.params.id }} </p>
</template>>

<script>
export default{
    mounted(){
        console.log(this.$route);
    },
};

</script>

