<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .mn.bg-intro.px-5
      p.mb-lg-4 Estimado aprendiz bienvenido al componente formativo “APIs de videojuegos y repositorios” Para comenzar, le invitamos a ingresar al siguiente video para obtener más información:
      figure.p-lg-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/tk80Xy6lcWY?si=SIEZFkPSEvP3PMfI" title="APIs de videojuegos y repositorios" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video:APIs de videojuegos y repositorios
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass">
@media (min-width: $bp-min-lg)
  .bg-intro
    background-image: url('../assets/curso/temas/bg-intro.svg')
    background-position: 100%
    background-repeat: no-repeat
    background-size: cover
</style>
