<template>
    <div>
        <Header/>
        <Banner/>
        <Infos/>
        <Sobre/>
        <Projetos/>
        <Cta/>
        <Footer/>
        <Contato/>
    </div>
</template>

<script setup lang="ts">
    useHead({
    title: 'Guilherme ES | Portfolio ',
    meta: [
        { name: 'description', content: 'No meu portfolio você vai encontrar um pouco sobre mim, e meus principais projetos' }
    ],
    })
</script>