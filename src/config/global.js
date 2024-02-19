export default {
  global: {
    componenteFormativo: 'API de videojuegos y repositorios',
    descripcionCurso:
      'Durante el desarrollo de este componente formativo, el aprendiz aprenderá los conceptos de API y su relación con el desarrollo de videojuegos. Asimismo, conocerá cuáles son los dispositivos que se pueden utilizar como entrada y/o salida para que el usuario interactúe con ellos. Además, como tema final, se explicará qué es el versionamiento en <i>software</i> y cómo se manejan los repositorios basados en GIT.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a4.png'),
      },
      {
        clases: ['banner-principal-decorativo-5', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a5.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Sistemas Operativos, API y librerías',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Sistemas Operativos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Concepto de API',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Motores para videojuegos multiplataforma',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Librerías para videojuegos',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Librerías de videojuegos web',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Librerías de videojuegos móviles',
            hash: 't_1_6',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Periféricos para videojuegos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Repositorios GIT',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Versiones en software',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Definición de GIT',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Configuración de GIT',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Operaciones en repositorios',
            hash: 't_3_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CF03_217326_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Sistemas Operativos',
      referencia:
        'El Salón de Informática. (2021, febrero 18). Sisemas operativos | ¿Qué son?¿Cómo Funcionan? | Tipos de Sistemas Operativos | Explicación Fácil.  YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=fsuroRYmagw',
    },
    {
      tema: 'Motores para videojuegos multiplataforma',
      referencia:
        'GogoGames07. (2023, agosto 1). Descubriendo los Motores de Videojuegos: ¿Cuál es el Mejor?',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=XAoSRQKo2ug',
    },
    {
      tema: 'Periféricos videojuegos',
      referencia:
        'YANPOL (s.f). Accesorios que debes tener en tu setup. Youtube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/playlist?list=PLsdJhEyi2JJCB0TWpvoSmxI4rP19kOMx6',
    },
    {
      tema: 'Versiones en <em>software</em>',
      referencia:
        'MyLearny Platform. (2023, junio 13). Curso de Git y GitHub - 1. Introducción. Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=SZpz-Sd326M&list=PLCWlDaiO',
    },
    {
      tema: 'Configuración de GIT',
      referencia:
        'Todo code. (2021). Curso GIT y GITHUB - Tutorial desde CERO. Youtube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/playlist?list=PLQxX2eiEaqby-qh4raiKfYyb4T7WyHsfW',
    },
  ],
  glosario: [
    {
      termino: 'API',
      significado:
        'es una abreviatura de <em>Application Programming Interfaces</em>, que en español significa interfaz de programación de aplicaciones. Se trata de un conjunto de definiciones y protocolos que se utiliza para desarrollar e integrar el <em>software</em> de las aplicaciones, permitiendo la comunicación entre dos aplicaciones de <em>software</em> a través de un conjunto de reglas.',
    },
    {
      termino: 'Dispositivo de Escritorio (Informática)',
      significado:
        'se denomina computadora de escritorio, computador de escritorio, ordenador de sobremesa u ordenador fijo a un tipo de computadora personal, diseñada y fabricada para ser instalada en una ubicación estática, como un escritorio o mesa, a diferencia de otras computadoras similares, como la computadora portátil, cuya ubicación es dinámica.',
    },
    {
      termino: 'Dispositivo Móvil (Informática)',
      significado:
        'es un pequeño dispositivo de computación portátil que generalmente incluye una pantalla y un método de entrada (ya sea táctil o teclado en miniatura). Muchos dispositivos móviles tienen sistemas operativos que pueden ejecutar aplicaciones. Las aplicaciones hacen posible que los dispositivos móviles y teléfonos celulares se utilicen como dispositivos para juegos, reproductores multimedia, calculadoras, navegadores, etc.',
    },
    {
      termino: 'GIT',
      significado:
        'Git es un sistema de control de versiones distribuido que te permite registrar los cambios que haces en tus archivos y volver a versiones anteriores si algo sale mal. Fue diseñado por Linus Torvalds para garantizar la eficiencia y confiabilidad del mantenimiento de versiones de aplicaciones que tienen un gran número de archivos de código fuente.',
    },
    {
      termino: 'Librería <em>(Software)</em>',
      significado:
        'es un conjunto de archivos que se utiliza para desarrollar<em>software</em>. Suele estar compuesta de código y datos, y su fin es ser utilizada por otros programas de forma totalmente autónoma.',
    },
    {
      termino: 'Motor de Videojuegos',
      significado:
        'un motor de juegos, o <em>game engine</em>, como está llamado en inglés, es un conjunto de herramientas de <em>software</em> o API creadas para optimizar el desarrollo de un videojuego',
    },
    {
      termino: 'Página web',
      significado:
        'se conoce como página Web, página electrónica o página digital a un documento digital de carácter multimediático (es decir, capaz de incluir audio, video, texto y sus combinaciones), adaptado a los estándares de la <em>World Wide Web</em> (WWW) y a la que se puede acceder a través de un navegador Web y una conexión activa a Internet. Se trata del formato básico de contenidos en la red.',
    },
    {
      termino: 'Periférico',
      significado:
        'un periférico de ordenador es un dispositivo externo al ordenador que está conectado a él pero que no es parte del equipo principal y que permite la entrada y salida de información desde o hacia el propio ordenador.',
    },
    {
      termino: 'Sistema Operativo',
      significado:
        'es el programa encargado de administrar y gestionar de manera eficiente todos los recursos de un ordenador y otros dispositivos. También se le conoce como <em>software</em> de sistema, y su función comienza nada más encender el dispositivo en el que están instalados.',
    },
  ],
  referencias: [
    {
      referencia: 'Fasheh, I. (2023). Programando Videojuegos 2.0.',
      link: '',
    },
    {
      referencia:
        'López Sandoval, Carlo (2022). UNITY aprende a desarrollar videojuegos. Edición Actualizada a Unity 2022.',
      link: '',
    },
    {
      referencia:
        'Sauco, A, y Lozano, E. (2021). El Viaje del Jugador: Guía de Diseño de Videojuegos.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Carlos Andrés Cortes',
          cargo: 'Experto temático',
          centro:
            'Centro de Diseño e Innovación Tecnológica Industrial- Regional Risaralda',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Diseñadora instruccional',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Blanca Flor Tinoco',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Emilsen Alfonso Bautista',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Carmen Alicia Martinez Torres ',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada ',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Camilo Andrés Bolaño Rey',
          cargo: 'Locución',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
