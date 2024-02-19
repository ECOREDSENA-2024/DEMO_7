<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Periféricos para videojuegos


    .tarjeta.px-4.py-1.color-acento-contenido.mb-5
      .row.align-items-center
        .col-auto
          img(src='@/assets/curso/temas/21.svg').mx-auto
        .col
          p.mb-0 La industria del juego y la tecnología ha evolucionado significativamente en los últimos años. Hoy en día, los videojuegos tienen como característica ser más inmersivos e interactivos. A medida que avanza la tecnología, también lo hacen los periféricos que la acompañan.

    p.mb-5 Desde controladores de alta tecnología hasta cascos de realidad virtual, los periféricos para juegos se han vuelto esenciales para la experiencia de juego sin importar el nivel del jugador. Entre ellos destaca:

    .bg-7.mn.adorno.px-5.pb-5
      .adorno--1: img(src='@/assets/curso/temas/adorno1.png', alt='')
      .contenido

        figure.mb-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/W9MFdkn8Clc?si=HGoPrtBBAgJGZffh" title="Periféricos para videojuegos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video: Periféricos para videojuegos

        p.mb-5.mt-5 Se debe considerar los siguientes elementos al momento de desarrollar el videojuego:


        .row.justify-content-center.mb-5
          .col-xl-10
            figura.d-none.d-lg-block
              img(src='@/assets/curso/temas/22.png', alt='').mx-auto
            figura.d-lg-none
              img(src='@/assets/curso/temas/22b.png', alt='').mx-auto


        p Si el videojuego que se quiere construir tiene como esencia ser orientado a Realidad Virtual, aumentada o mixta, igualmente debe considerarse las diferentes marcas y tecnologías disponibles en el mercado que permitan al usuario tener una buena experiencia en el momento de utilizarlas.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
@media (min-width: $bp-min-lg)
  .bg-7
    background-image: url('../assets/curso/temas/bg-7b.png')
    background-position: 100%
    background-repeat: no-repeat
    background-size: cover
    background-position: top
</style>
