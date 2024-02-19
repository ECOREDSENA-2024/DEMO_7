<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Repositorios GIT

    .row
      .col-lg-7
        p Los repositorios GIT son una parte esencial del sistema de control de versiones Git, utilizado en el desarrollo de <i>software</i> para manejar el código fuente. Cada repositorio Git contiene todo el historial de cambios del proyecto, conocidos como <i>commits</i>, así como las distintas ramas y etiquetas. Estas características permiten a los desarrolladores registrar cada cambio en los archivos, trabajar en distintas características de forma aislada mediante las ramas, y marcar versiones específicas del proyecto con etiquetas. Su naturaleza distribuida significa que cada desarrollador trabaja con una copia completa del repositorio, facilitando la colaboración y el seguimiento detallado de los cambios.

        p Además de almacenar el código y su historial, los repositorios Git apoyan en la colaboración entre desarrolladores y en el seguimiento de errores o <i>bugs</i>. Plataformas de alojamiento como GitHub, GitLab y Bitbucket extienden las funcionalidades de Git, proporcionando herramientas para la revisión de código, la gestión de proyectos y la colaboración en equipo. Estos repositorios son indispensables en el mundo del desarrollo de <i>software</i>, ofreciendo un control detallado y eficiente sobre las diferentes versiones y cambios realizados en un proyecto.

      .col-lg-5
        figure.mb-4
          img(src='@/assets/curso/temas/23.svg', alt='')


    Separador

    #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.1 Versiones en #[em Software]

    p.mb-5 El control de versiones es el proceso de gestionar múltiples versiones de un mismo producto, las cuales, aunque cumplen con la misma función general, pueden diferir en términos de mejoras, actualizaciones o personalizaciones. Aunque el término se utiliza en diversos contextos, es más comúnmente aplicado a sistemas operativos, <i>software</i> y servicios web.

    .mn.bg-intro.px-5.py-4
      .tarjeta.color-primario.p-4.mb-5
        .row.align-items-center
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/24.svg', alt='')

          .col-lg-7
            p.mb-0.text-white Por ejemplo, los proveedores pueden asignar nombres únicos o identificadores numéricos a diferentes versiones de un producto, como es el caso de Windows 10 y Windows 11. Estos números representan distintas versiones del mismo <i>software</i> o aplicación, incrementándose para reflejar desarrollos y actualizaciones recientes.

      p.mb-5 Los lanzamientos sucesivos de un producto también pueden tener identificadores numéricos, generalmente consistiendo en dos o tres cifras separadas por puntos.


      .bg-8.p-5
        figure.mb-4
          img(src='@/assets/curso/temas/bg-10.svg', alt='')

        .row.align-items-stretch
          .col-lg-4
            .tarjeta--blanca.p-4.h-100
              p #[span.resaltado El primer número], conocido como número mayor, se incrementa con mejoras significativas o cambios en la funcionalidad. Por ejemplo, el cambio de Internet Explorer 4 a Internet Explorer 5 por parte de Microsoft.

          .col-lg-4
            .tarjeta--blanca.p-4.h-100
              p #[span.resaltado El segundo número], denominado número menor, aumenta con cambios menores en las funciones o correcciones de errores importantes. Por ejemplo, Internet Explorer 5.2 indica cambios menores respecto a la versión anterior, Internet Explorer 5.1.

          .col-lg-4
            .tarjeta--blanca.p-4.h-100
              p #[span.resaltado El tercer número], si se incluye, se conoce como número de revisión y se añade o incrementa para correcciones de errores menores. Así, el ‘7’ en Internet Explorer 5.1.7 indica la corrección de errores menores en la versión anterior


    Separador

    #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.2 Definición de GIT


    .mn.p-5.adorno(style="background-color:#DCDEFA").mb-5
      .contenido
        p.mb-4 GIT es una plataforma de desarrollo de <i>software</i> en línea. Se utiliza para almacenar, rastrear y colaborar en proyectos de <i>software</i>. Los usuarios de GIT crean cuentas, cargan archivos y crean proyectos de codificación, permitiendo, de esta manera, que los usuarios comienzan a colaborar.
        .row.justify-content-center.align-items-center
          .col-lg-5.col-8: img(src='@/assets/curso/temas/25.svg', alt='')
          .col-lg-7.mb-lg-0.mb-3
            p.mb-0 Si bien cualquiera puede codificar de forma independiente, la mayoría de los proyectos de desarrollo los construyen equipos de personas. A veces, estos equipos están todos en un lugar a la vez, pero lo más frecuente es que trabajen de forma asincrónica. Adicionalmente es el sistema de control de versiones más utilizado en el desarrollo de <i>software</i>.

      .adorno--1.d-none.d-lg-block: img(src='@/assets/curso/temas/adorno1.png', alt='')


    .titulotres.mb-4
      h3.mb-0 Utilidad de Git en el Versionamiento

    p Al crear <i>software</i>, los desarrolladores actualizan el código con frecuencia y simultáneamente para agregar funciones y corregir errores. No tendría sentido realizar estos cambios directamente en el código fuente, ya que cualquier problema afectaría a los usuarios. En cambio, los desarrolladores trabajan con sus propias copias del código y luego, después de que el código se haya probado exhaustivamente, lo agregan a la base de código principal.


    Separador

    #t_3_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.3 Configuración de GIT

    p Desde la instalación de Git hasta la creación de su primer repositorio en GitHub, a continuación, se proporcionará los conocimientos básicos necesarios para comenzar. Siga estos pasos para embarcarse en su viaje hacia una gestión de proyectos de <i>software</i> exitosa y eficiente.

    .row.mb-5
      .col-lg-7
        LineaTiempoD.color-acento-botones
          div(numero="1" titulo="Instalar GIT")
            p.text-small Instale la última versión de Git en su dispositivo. Necesitará tener Git instalado para funcionar con su repositorio de GitHub. Hay varias formas de hacerlo, así que siga las recomendaciones del sitio web de Git. El <i>software</i> Git es gratuito.

          div(numero="2" titulo="Regístrese en GitHub")
            p.text-small Después de instalar Git, vaya al sitio web de GitHub y cree una cuenta con su dirección de correo electrónico.

          div(numero="3" titulo="Inicie un repositorio")
            p.text-small Una vez que su cuenta de GitHub esté configurada, accederá a su panel de control. Para iniciar su primer repositorio, haga clic en Crear repositorio. Esto le permite mantener todo el código de su nuevo proyecto de GitHub en un solo lugar.

          div(numero="4" titulo="Nombre el proyecto")
            p.text-small En la pantalla Crear un nuevo repositorio, ingrese el nombre de su repositorio y una descripción opcional (puede cambiar ambos más adelante).

          div(numero="5" titulo="Agregue detalles del proyecto")
            p.text-small En la misma pantalla, agregue un archivo README (un archivo de texto que describe su proyecto y una de las mejores prácticas de desarrollo), un .gitignore (que elimina archivos irrelevantes como .DS_Store) y una licencia para su proyecto.

          div(numero="6" titulo="Crear el repositorio")
            p.text-small Crear el repositorio. Haga clic en Crear repositorio. Será llevado a la página de su repositorio principal, que enumera sus archivos.

          div(numero="7" titulo="Crear una copia local de su repositorio")
            p.text-small Ahora creará una copia local de su repositorio de GitHub (o en términos de GitHub, “clonará” su repositorio) donde editará sus archivos y enviará sus cambios. En la página principal de su repositorio, haga clic en el botón verde Código y luego copie la URL HTTPS de su repositorio.

          div(numero="8" titulo="Elegir un directorio")
            p.text-small Abra su terminal y navegue hasta el directorio donde desea colocar su copia del repositorio.


          div(numero="9" titulo="Pegar la URL de su repositorio")
            p.text-small En la terminal, ingresa git clone. Después de esto, pegue la URL del repositorio que copió anteriormente.

          div(numero="10" titulo="Clonar y verificar el repositorio copiado")
            p.text-small Presione Enter para clonar el repositorio. Verá un nuevo archivo agregado a su sistema de archivos local con el nombre de su repositorio. Si abre este archivo, verá que contiene los archivos en su repositorio de GitHub. Estas son versiones copiadas de los archivos de su repositorio que puede editar y luego enviar de regreso a su repositorio.

      .col-lg-5
        figure.mb-4
          img(src='@/assets/curso/temas/26.svg', alt='')


    .row.justify-content-center
      .col-lg-10.col-xl-8
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/curso/temas/27.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Curso GIT y GITHUB
                  p.text-small Para obtener una visión más detallada de la instalación, puede revisarla en el siguiente enlace Curso GIT y GITHUB.
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/playlist?list=PLQxX2eiEaqby-qh4raiKfYyb4T7WyHsfW" target="_blank")
                    span Abrir enlace
                    i.fas.fa-external-link-alt
    Separador

    #t_3_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.4 Operaciones en repositorios

    p Las operaciones básicas de <i>Git</i>, como <i>init, add, commit, y push</i>, permiten a los usuarios crear repositorios, gestionar cambios, guardar progresos y compartir su trabajo con otros. A continuación, se explora las operaciones fundamentales en repositorios Git, proporcionando una guía esencial para cualquiera que busque entender o mejorar su flujo de trabajo en el desarrollo de <i>software</i>.

    .row.mb-5.align-items-center
      .col-lg-7

        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-ADB3F3")
          div(titulo="<em>git INIT</em>")
            p El comando <i>git init</i> se utiliza para crear un repositorio Git vacío. Después de usar el comando <i>git init</i>, se crea una carpeta. <i>git</i> en el directorio con algunos subdirectorios. Una vez que se inicializa el repositorio, comienza el proceso de creación de otros archivos.


          div(titulo="<em>git ADD</em>")
            p El comando Agregar se usa después de verificar el estado de los archivos, para agregar esos archivos al área de preparación. Antes de ejecutar el comando de confirmación, se utiliza <i>“git add”</i> para agregar archivos nuevos o modificados.

          div(titulo="<em>git COMMIT</em>")
            p El comando de confirmación asegura que los cambios se guarden en el repositorio local. El comando #[span.etiqueta <i>“git commit</i> –m &lt;mensaje&gt;"] le permite describir a todos y ayudarlos a comprender lo que sucedió.

          div(titulo="<em>git STATUS</em>")
            p El comando <i>git status</i> indica el estado actual del repositorio. El comando proporciona la rama de trabajo actual. Si los archivos están en el área de preparación, pero no confirmados, se mostrará en el estado de <i>git</i>. Además, si no hay cambios, mostrará el mensaje No hay cambios para confirmar, directorio de trabajo limpio.

          div(titulo="<em>git CONFIG</em>")
            p El comando <i>git config</i> se usa inicialmente para configurar el nombre de usuario y el correo electrónico de usuario. Esto especifica qué ID de correo electrónico y nombre de usuario se utilizarán desde un repositorio local. Cuando se usa <i>git config</i> con el indicador —<i>global</i>, escribe la configuración en todos los repositorios de la computadora.

          div(titulo="<em>git BRANCH</em>")
            p El comando <i>git branch</i> se utiliza para determinar en qué rama se encuentra el repositorio local. El comando permite agregar y eliminar una rama.

      .col-lg-5
        figure
          img(src='@/assets/curso/temas/28.svg', alt='', style='max-width: 505px')

    .row
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/29.svg', alt='', style='max-width: 505px')

      .col-lg-7

        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-ADB3F3")
          div(titulo="<em>git CHECKOUT</em>")
            p El comando <i>git checkout</i> se utiliza para cambiar de rama, siempre que el trabajo deba iniciarse en una rama diferente. El comando funciona en tres entidades separadas: archivos, confirmaciones y ramas.


          div(titulo="<em>git MERGE</em>")
            p El comando <i>git merge</i> se utiliza para integrar las ramas. El comando combina los cambios de una rama a otra. Se utiliza para fusionar los cambios en la rama provisional con la rama estable.

          div(titulo="<em>git REMOTE</em>")
            p El comando <i>git remote</i> se utiliza para crear, ver y eliminar conexiones a otros repositorios. Las conexiones aquí no son como enlaces directos a otros repositorios, sino como marcadores que sirven como nombres convenientes para usar como referencia.

          div(titulo="<em>git CLONE</em>")
            p El comando <i>git clone</i> se utiliza para crear una copia de trabajo local de un repositorio remoto existente. El comando descarga el repositorio remoto a la computadora. Es equivalente al comando <i>Git init</i> cuando se trabaja con un repositorio remoto.

          div(titulo="<em>git PULL</em>")
            p El comando <i>git pull</i> se utiliza para recuperar y fusionar cambios del repositorio remoto al repositorio local. El comando <i>“git pull origin master”</i> copia todos los archivos de la rama maestra del repositorio remoto al repositorio local.

          div(titulo="<em>git PUSH</em>")
            p El comando <i>git push</i> se usa para transferir las confirmaciones o enviar el contenido del repositorio local al repositorio remoto. El comando se utiliza después de que se haya modificado un repositorio local y las modificaciones se compartirán con los miembros del equipo remoto.
</template>
<script>
export default {
  name: 'Tema3',
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
.bg-intro
  background-image: url('../assets/curso/temas/bg-intro.svg')
  background-position: 100%
  background-repeat: no-repeat
  background-size: cover

.bg-8
  background-image: url('../assets/curso/temas/bg-8.svg')
  background-position: 100%
  background-repeat: no-repeat
  background-size: cover

.tabs-a .row
  align-items: stretch

.tabs-a__content-item--active
  height: 100%

.tarjeta--gris
  background: #F3BCF9

.linea-tiempo-d__item--selected .tarjeta--gris
  background: #FAE2FD

.linea-tiempo-d__item__number.tarjeta--gris
  background: #f7df3f
</style>
