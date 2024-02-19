<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Sistemas Operativos, API y librerías

    .mn.p-5.adorno(style="background-color:#DCDEFA").mb-5
      .contenido
        .row.justify-content-center.align-items-center

          .col-lg-7.mb-lg-0.mb-3
            p.mb-0 Los sistemas operativos, las API y las librerías son componentes esenciales en el ámbito de la informática y la programación. Los sistemas operativos, como Windows, macOS o Linux, son fundamentales para gestionar los recursos del <i>hardware</i> y proporcionar una interfaz entre los usuarios y la máquina. Las API, o interfaces de programación de aplicaciones, son cruciales para permitir que diferentes programas y servicios interactúen y compartan funcionalidades o datos. Por último, las librerías, que son colecciones de funciones y procedimientos preescritos, facilitan enormemente el proceso de desarrollo de <i>software</i> al ofrecer bloques de construcción estandarizados, lo que ahorra tiempo y esfuerzo en la programación. Estos tres elementos trabajan conjuntamente para crear un ecosistema robusto y eficiente, esencial para el desarrollo moderno de <i>software</i> y aplicaciones.
          .col-lg-5.col-8: img(src='@/assets/curso/temas/1.png', alt='')
      .adorno--1.d-none.d-lg-block: img(src='@/assets/curso/temas/adorno1.png', alt='')
    Separador


    #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.1  Sistemas Operativos

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/2.svg', alt='')
      .col-lg-7
        p.mb-0 Un Sistema Operativo (SO) es el programa que, después de ser inicialmente cargado en la computadora mediante un programa de arranque, administra todos los demás programas de aplicación en una computadora. Los programas de aplicación utilizan el sistema operativo haciendo solicitudes de servicios a través de una Interfaz de Programación de Aplicaciones (API) definida. Además, los usuarios pueden interactuar directamente con el sistema operativo a través de una interfaz de usuario, como una Interfaz de Línea de Comandos (CLI) o una Interfaz Gráfica de Usuario (GUI).
          br
          br
          |Los Sistemas Operativos se clasifican en:

    .bg-1.mn.adorno.p-5
      .adorno--2: img(src='@/assets/curso/temas/adorno2.png', alt='')
      .contenido
        TabsC.color-acento-botones.mb-5
          .p-5.py-md-5(titulo="Escritorio").bg-white
            h4 Escritorio

            p Los sistemas operativos de escritorio son aquellos diseñados para ser utilizados en computadoras personales y estaciones de trabajo. En el siguiente video se explican los más comunes:

            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/YajQ6KRr5yI?si=w9CDbOLHQyKZYw2h" title="Sistemas Operativos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
              figcaption Video: Sistemas Operativos
          .p-5.py-md-5(titulo="Móvil").bg-white
            .row
              .col-lg-9.mb-4.mb-md-0
                h4 Móvil
                p.mb-4 Los sistemas operativos móviles están diseñados para satisfacer las necesidades específicas de la informática móvil y los dispositivos centrados en la comunicación, como teléfonos inteligentes y tabletas. Estos dispositivos generalmente ofrecen recursos computacionales limitados en comparación con las PC tradicionales, y el sistema operativo se optimiza en tamaño y complejidad para minimizar el uso de recursos, asegurando al mismo tiempo suficientes recursos para una o más aplicaciones en ejecución en el dispositivo. Los sistemas operativos móviles se enfocan en un rendimiento eficiente, capacidad de respuesta y manejo avanzado de tareas de datos, como el soporte para transmisión de medios.

                .row.justify-content-center
                  .col-lg-10
                    .bg-E8EAFF.px-4.py-2
                      .row.align-items-center
                        .col-auto
                          img(src='@/assets/curso/temas/4.svg', style='max-width:74px').mx-auto
                        .col
                          span Ejemplos de sistemas operativos móviles son Apple iOS y Google Android


              .col-lg-3: img(src='@/assets/curso/temas/3.svg', alt='', style='max-width: 295px').mx-auto
          .p-5.py-md-5(titulo="Integrados").bg-white
            .row
              .col-lg-9.mb-4.mb-md-0
                h4 Integrados
                p.mb-4 No todos los dispositivos informáticos son de propósito general. Una amplia variedad de dispositivos especializados, incluyendo asistentes digitales domésticos, cajeros automáticos (ATM), sistemas de aeronaves, terminales de punto de venta (POS) y dispositivos del Internet de las Cosas (IoT), incorporan computadoras que requieren un sistema operativo. La principal diferencia es que estos dispositivos están diseñados para realizar una función principal, lo que permite un sistema operativo altamente especializado, enfocado en rendimiento y robustez. El sistema operativo debe ser rápido, confiable y manejar errores adecuadamente para funcionar bajo cualquier circunstancia. Comúnmente, se incorpora en un chip integrado en el dispositivo.

                .row.justify-content-center
                  .col-lg-11
                    .bg-E8EAFF.px-4.py-3
                      .row.align-items-center
                        .col-auto
                          img(src='@/assets/curso/temas/4.svg', style='max-width:74px').mx-auto
                        .col
                          span Por ejemplo, un dispositivo médico en un equipo de soporte vital empleará un sistema operativo integrado que debe operar de manera confiable para mantener al paciente con vida. Linux integrado es un ejemplo de este tipo de sistema operativo.


              .col-lg-3: img(src='@/assets/curso/temas/5.svg', alt='', style='max-width: 295px').mx-auto
          .p-5.py-md-5(titulo="De red").bg-white
            .row
              .col-lg-9.mb-4.mb-md-0
                h4 De red
                p.mb-4 Un Sistema Operativo de Red (NOS) es un tipo especializado destinado a facilitar la comunicación entre dispositivos en una Red de Área Local (LAN). Un NOS proporciona la pila de comunicación necesaria para manejar los protocolos de red, creando, intercambiando y descomponiendo paquetes de red. Hoy, la idea de un NOS especializado se ha vuelto en gran parte obsoleta, ya que otros tipos de sistemas operativos ahora manejan la mayoría de las comunicaciones de red.

                .row.justify-content-center
                  .col-lg-11
                    .bg-E8EAFF.px-4.py-3
                      .row.align-items-center
                        .col-auto
                          img(src='@/assets/curso/temas/4.svg', style='max-width:74px').mx-auto
                        .col
                          span Por ejemplo, Windows 10 y Windows Server 2019 incluyen capacidades avanzadas de red. Aunque el concepto de NOS sigue siendo relevante en dispositivos de red como enrutadores, conmutadores y <i>firewalls</i>, donde fabricantes como Cisco utilizan NOS propietarios como <i>Cisco Internetwork Operating System</i> (IOS), RouterOS y ZyNOS.


              .col-lg-3: img(src='@/assets/curso/temas/6.svg', alt='', style='max-width: 295px').mx-auto
          .p-5.py-md-5(titulo="En tiempo real").bg-white
            .row
              .col-lg-9.mb-4.mb-md-0
                h4 En tiempo real
                p Cuando un dispositivo informático necesita interactuar con el mundo real dentro de límites de tiempo estrictos y predecibles, se puede optar por un Sistema Operativo en Tiempo Real (RTOS).

                p Por ejemplo, un sistema de control industrial puede gestionar las operaciones de una fábrica o planta de energía. Estos sistemas reciben señales de numerosos sensores y envían señales para operar válvulas, actuadores, motores y otros dispositivos. En estas situaciones, el sistema debe responder rápidamente y de manera predecible a cambios en el mundo real para evitar desastres. Un RTOS debe operar sin almacenamiento en búfer, latencias de procesamiento y otros retrasos que son aceptables en otros tipos de sistemas operativos. FreeRTOS y VxWorks son ejemplos de RTOS.
              .col-lg-3: img(src='@/assets/curso/temas/7.png', alt='', style='max-width: 295px').mx-auto

    Separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.2  Concepto de API

    .bg-7.mn.adorno.px-5.pb-5
      .adorno--1: img(src='@/assets/curso/temas/adorno1.png', alt='')
      .contenido
        .row
          .col-lg-9.mb-4.mb-md-0
            p.mb-4 API significa “interfaz de programación de aplicaciones”. <i>(Application Program Interface)</i> En el contexto de las API, la palabra aplicación se refiere a cualquier <i>software</i> con una función distinta. La interfaz puede considerarse como un “contrato” de servicio entre dos aplicaciones. Este “contrato” define cómo se comunican entre sí mediante solicitudes y respuestas. La documentación de su API contiene información sobre cómo los desarrolladores deben estructurar esas solicitudes y respuestas. Las API son mecanismos que permiten a dos componentes de <i>software</i> comunicarse entre sí mediante un conjunto de definiciones y protocolos.

            .tarjeta.p-4.color-acento-contenido
              .row
                .col-auto
                  img(src='@/assets/curso/temas/9.svg', style='max-width:85px').mx-auto
                .col
                  p.mb-0 Por ejemplo, el sistema de <i>software</i> del instituto de meteorología contiene datos meteorológicos diarios. La aplicación meteorológica de su teléfono “habla” con este sistema a través de las API y le muestra las actualizaciones meteorológicas diarias en su teléfono.

          .col-lg-3
            img(src='@/assets/curso/temas/8.png', style='max-width:295px').mx-auto


        .titulotres.mb-4
          h3.mb-0 ¿Cómo funcionan las API?

        p La arquitectura de las API suele explicarse en términos de cliente y servidor. La aplicación que envía la solicitud se llama cliente, y la que envía la respuesta se llama servidor. En el ejemplo del tiempo, la base de datos meteorológicos del instituto es el servidor y la aplicación móvil es el cliente.

        p.mb-4 Las API pueden funcionar de cuatro maneras diferentes, según el momento y el motivo de su creación:

        .tarjeta.bg-slyder.py-5.px-4
          SlyderA(tipo="b")
            .row.justify-content-center
              .col-lg-10
                .row
                  .col-md-6.mb-4.mb-md-0
                    h4 API de SOAP
                    p Estas API utilizan el protocolo simple de acceso a objetos. El cliente y el servidor intercambian mensajes mediante XML. Se trata de una API menos flexible que era más popular en el pasado.

                  .col-md-6
                    figure
                      img(src='@/assets/curso/temas/10.svg', alt='', style='max-width: 505px')

            .row.justify-content-center
              .col-lg-10
                .row
                  .col-md-6.mb-4.mb-md-0
                    h4 API de RPC
                    p Estas API se denominan llamadas a procedimientos remotos. El cliente completa una función (o procedimiento) en el servidor, y el servidor devuelve el resultado al cliente.

                  .col-md-6
                    figure
                      img(src='@/assets/curso/temas/11.svg', alt='', style='max-width: 505px')

            .row.justify-content-center
              .col-lg-10
                .row
                  .col-md-6.mb-4.mb-md-0
                    h4 API de #[em WebSocket]
                    p La API de <i>WebSocket</i> es otro desarrollo moderno de la API web que utiliza objetos JSON para transmitir datos. La API de <i>WebSocket</i> admite la comunicación bidireccional entre las aplicaciones cliente y el servidor. El servidor puede enviar mensajes de devolución de llamada a los clientes conectados, por lo que es más eficiente que la API de REST.

                  .col-md-6
                    figure
                      img(src='@/assets/curso/temas/12.svg', alt='', style='max-width: 505px')

            .row.justify-content-center
              .col-lg-10
                .row
                  .col-md-6.mb-4.mb-md-0
                    h4 API de #[em REST]
                    p Estas son las API más populares y flexibles que se encuentran en la web actualmente. El cliente envía las solicitudes al servidor como datos. El servidor utiliza esta entrada del cliente para iniciar funciones internas y devuelve los datos de salida al cliente.

                  .col-md-6
                    figure
                      img(src='@/assets/curso/temas/13.svg', alt='', style='max-width: 505px')


    Separador

    #t_1_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.3  Motores para videojuegos multiplataforma

    p.mb-5 Los motores para videojuegos multiplataforma son herramientas de desarrollo de <i>software</i> diseñadas para crear videojuegos que se pueden ejecutar en varios sistemas operativos y dispositivos, como PC, consolas y dispositivos móviles. Algunos de los motores de videojuegos multiplataforma más populares incluyen:

    .row.mb-5
      .col-lg-9

        TabsA.color-acento-botones
          .tarjeta.bg-FAE2FD.p-4(titulo="Unity").h-100
            h4 Unity
            p Es ampliamente reconocido por su versatilidad y facilidad de uso. Permite a los desarrolladores crear juegos para múltiples plataformas, incluyendo Windows, macOS, Linux, iOS, Android, y consolas.
            a(href='https://unity.com/es', target='_blank') #[span.resaltado https://unity.com/es]


          .tarjeta.bg-FAE2FD.p-4(titulo="Unreal Engine").h-100
            h4 Unreal Engine
            p Desarrollado por Epic Games, es conocido por su potente renderizado gráfico y se utiliza en muchos juegos AAA. Es compatible con una variedad de plataformas.

            a(href='https://www.unrealengine.com/es-ES', target='_blank') #[span.resaltado https://www.unrealengine.com/es-ES]

          .tarjeta.bg-FAE2FD.p-4(titulo="GDevelop").h-100
            h4 GDevelop
            p Es un motor de juegos de código abierto, enfocado en ser fácil de usar para principiantes, y permite la creación de juegos sin necesidad de conocimientos de programación. Compatible con varias plataformas, incluyendo Windows, Linux y dispositivos móviles.

            a(href=' https://gdevelop.io/es-es', target='_blank') #[span.resaltado  https://gdevelop.io/es-es]

          .tarjeta.bg-FAE2FD.p-4(titulo="O3DE (Open 3D Engine)").h-100
            h4 O3DE (Open 3D Engine)
            p Un motor de juego de código abierto que se centra en la creación de mundos 3D y juegos inmersivos. Ofrece una amplia gama de herramientas y es compatible con múltiples plataformas.

            a(href='https://o3de.org/', target='_blank') #[span.resaltado https://o3de.org/]

          .tarjeta.bg-FAE2FD.p-4(titulo="GameMaker").h-100
            h4 GameMaker
            p Similar a GameMaker Studio, es una plataforma de desarrollo que destaca por su sencillez y eficacia, permitiendo la creación rápida de juegos para diversas plataformas.

            a(href='https://gamemaker.io/es', target='_blank') #[span.resaltado https://gamemaker.io/es]

      .col-lg-3
        figure
          img(src='@/assets/curso/temas/14.png', alt='', style='max-width: 295px')


    .tarjeta.color-primario.p-4.mb-5
      .row.align-items-center
        .col-lg-auto
          img(src='@/assets/curso/temas/15.svg', alt='', style='max-width: 85px')
        .col
          p.mb-0.text-white Estos motores varían en términos de capacidades gráficas, facilidad de uso, y modelos de licencia, pero todos ofrecen la capacidad de desarrollar juegos para múltiples plataformas, lo que es esencial en el mercado de juegos actual.

    Separador


    #t_1_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.4  Librerías para videojuegos

    p Las bibliotecas o librerías para el desarrollo de videojuegos en Python ofrecen una variedad de herramientas y funciones para facilitar la creación de juegos. A continuación, se presentan algunas de las librerías:

    .row.mb-5.align-items-center
      .col-lg-9

        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-ADB3F3")
          div(titulo="Python Arcade")
            p Una biblioteca moderna, fácil de usar, para el desarrollo de juegos 2D en Python. Ofrece soporte para gráficos, animaciones y sonido, siendo una opción ideal para principiantes y educadores.

            a(href='https://api.arcade.academy/en/latest/', target='_blank') #[span.resaltado https://api.arcade.academy/en/latest/]


          div(titulo="Panda3D")
            p Un motor de juego y una biblioteca de renderizado 3D para Python y C++. Es potente y flexible, adecuado para juegos más complejos y aplicaciones 3D.

            a(href='https://docs.panda3d.org/1.10/python/index', target='_blank') #[span.resaltado https://docs.panda3d.org/1.10/python/index]

          div(titulo="Harfang")
            p Una plataforma de alto nivel para la creación de aplicaciones 2D y 3D. Ofrece un amplio conjunto de características para gráficos, física y más, ideal para proyectos avanzados.

            a(href='https://www.harfang3d.com/en_US/', target='_blank') #[span.resaltado https://www.harfang3d.com/en_US/]

          div(titulo="Ren’Py")
            p Especializado en la creación de novelas visuales y juegos basados en narrativas. Es muy popular entre los desarrolladores de novelas visuales por su facilidad de uso y flexibilidad.

            a(href='https://www.renpy.org/', target='_blank') #[span.resaltado https://www.renpy.org/]


      .col-lg-3
        figure
          img(src='@/assets/curso/temas/16.png', alt='', style='max-width: 295px')


    .row.mb-5.align-items-center
      .col-lg-3
        figure
          img(src='@/assets/curso/temas/17.svg', alt='', style='max-width: 295px')
      .col-lg-9

        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-ADB3F3")
          div(titulo="Kivy")
            p Una biblioteca de Python para desarrollar aplicaciones multitáctiles. Aunque no es específicamente para juegos, su soporte para gráficos y UI la hace útil para ciertos tipos de juegos.


            a(href='https://kivy.org/', target='_blank') #[span.resaltado https://kivy.org/]


          div(titulo="Pygame")
            p Una de las bibliotecas más populares para el desarrollo de videojuegos en Python. Es ideal para juegos 2D y es amigable para principiantes, con una gran comunidad y recursos de aprendizaje.

            a(href='https://www.pygame.org/news ', target='_blank') #[span.resaltado https://www.pygame.org/news ]

          div(titulo="Cocos2d")
            p Un marco de trabajo para construir juegos, interfaces gráficas y proyectos multimedia en Python. Es bien conocido por su facilidad de uso y su capacidad para crear juegos 2D.

            a(href='https://pypi.org/project/cocos2d/', target='_blank') #[span.resaltado https://pypi.org/project/cocos2d/]

          div(titulo="Cochinillo (Pyglet)")
            p Una biblioteca para el desarrollo de juegos y otras aplicaciones visuales en Python. Es una base sólida para juegos 2D/3D, aplicaciones multimedia y otros proyectos gráficos.

            a(href='https://pyglet.org/', target='_blank') #[span.resaltado https://pyglet.org/]


    Separador


    #t_1_5.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.5  Librerías de videojuegos #[em web]

    p.mb-5 Las bibliotecas de videojuegos para la web son herramientas esenciales para desarrollar juegos que se ejecutan en navegadores web. A continuación, se presentan algunas de las librerías:

    .row.mb-5
      .col-lg-7

        TabsA.color-acento-botones
          .tarjeta.bg-FAE2FD.p-4(titulo="Phaser").h-100
            h4 Phaser
            p Una biblioteca de juegos rápida y gratuita para la creación de juegos HTML5 tanto en escritorio como en dispositivos móviles. Es especialmente popular por su flexibilidad y facilidad de uso, ideal para juegos 2D.


          .tarjeta.bg-FAE2FD.p-4(titulo="Three.js").h-100
            h4 Three.js
            p Una biblioteca JavaScript para crear y mostrar gráficos 3D animados en un navegador web, usando WebGL. Es ampliamente utilizada para juegos, visualizaciones y experiencias interactivas en 3D.

          .tarjeta.bg-FAE2FD.p-4(titulo="Pixi.js").h-100
            h4 Pixi.js
            p Un motor de renderizado 2D que permite crear contenido interactivo y hermoso. Es conocido por su velocidad y su capacidad para trabajar con WebGL y Canvas.

          .tarjeta.bg-FAE2FD.p-4(titulo="Babylon.js").h-100
            h4 Babylon.js
            p Un potente motor de juego 3D para la web, que facilita la creación de experiencias interactivas y juegos en 3D con soporte para WebGL, WebXR y otras tecnologías web modernas.

          .tarjeta.bg-FAE2FD.p-4(titulo="PlayCanvas").h-100
            h4 PlayCanvas
            p Un motor de juego 3D basado en HTML5 y WebGL. Ofrece un entorno de desarrollo integrado en la nube y es conocido por su rendimiento y accesibilidad.

          .tarjeta.bg-FAE2FD.p-4(titulo="Construct 3").h-100
            h4 Construct 3
            p Un editor de juegos basado en la web que permite a los usuarios crear juegos sin escribir código. Es muy accesible para principiantes y es popular para la creación de juegos 2D.

      .col-lg-5
        figure
          img(src='@/assets/curso/temas/20.svg', alt='', style='max-width: 505px')


    .tarjeta.color-primario.p-4.mb-5
      .row.align-items-center
        .col-lg-auto
          img(src='@/assets/curso/temas/15.svg', alt='', style='max-width: 85px')
        .col
          p.mb-0.text-white Estas bibliotecas y herramientas varían en términos de capacidades gráficas, facilidad de uso y enfoque (2D vs 3D), pero todas ofrecen potentes opciones para desarrollar juegos accesibles a través de navegadores web.


    Separador


    #t_1_6.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.6  Librerías de videojuegos móviles

    p.mb-5 Para el desarrollo de videojuegos móviles, existen varias bibliotecas y herramientas que facilitan la creación de juegos para plataformas como Android e iOS. Estas pueden ser:

    .bg-8.mn.p-5
      figure.mb-4
        img(src='@/assets/curso/temas/bg-9.svg', alt='')

      .row.align-items-stretch
        .col-lg-4
          .tarjeta--blanca.p-4.h-100
            h5 #[span.resaltado Android Game Development Kit (AGDK)]

            p Una colección de herramientas y bibliotecas proporcionadas por Google específicamente para el desarrollo de juegos en Android. Incluye soporte para C++ y Kotlin, y ofrece herramientas para mejorar el rendimiento y la calidad de los juegos en dispositivos Android.

        .col-lg-4
          .tarjeta--blanca.p-4.h-100
            h5 #[span.resaltado GameSalad]

            p Una plataforma para el desarrollo de juegos que permite a los usuarios crear juegos para iOS, Android, HTML5 y más, sin necesidad de conocimientos de programación avanzados. Es popular entre educadores y principiantes por su interfaz de arrastrar y soltar.

        .col-lg-4
          .tarjeta--blanca.p-4.h-100
            h5 #[span.resaltado Stencyl]

            p Similar a GameSalad, Stencyl es una herramienta que permite a los desarrolladores crear juegos sin necesidad de escribir código, utilizando un sistema de ‘arrastrar y soltar’. Soporta la creación de juegos para iOS, Android, Windows, Mac, y Linux.

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
.bg-1
  background-image: url('../assets/curso/temas/bg-1.png')
  background-position: 100%
  background-repeat: no-repeat
  background-size: cover
.bg-2
  background-image: url('../assets/curso/temas/bg-2.svg')
  background-position: 100%
  background-repeat: no-repeat
  background-size: cover
.bg-3
  background-image: url('../assets/curso/temas/bg-3.svg')
  background-position: 100%
  background-repeat: no-repeat
  background-size: contain

.bg-7
  background-image: url('../assets/curso/temas/bg-7b.png')
  background-position: 100%
  background-repeat: no-repeat
  background-size: cover
  background-position: top

.bg-8
  background-image: url('../assets/curso/temas/bg-8.svg')
  background-position: 100%
  background-repeat: no-repeat
  background-size: cover


.tabs-a .row
  align-items: stretch

.tabs-a__content-item--active
  height: 100%
</style>
