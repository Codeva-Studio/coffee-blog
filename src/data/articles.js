// Información general de los artículos de Coffee Blog
// Contiene los datos necesarios para mostrar las tarjetas y organizar las publicaciones

export const articles = [
    {
        // Título que aparecerá en la tareta y en el artículos
        title: "La historia del café",

        // Identificador único para relacionar el los datos con el contenido y generar la dirección del artículo
        slug: "historia-del-cafe",

        // Categoría temática a la que pertenece el artículo
        category: "Cultura e historia",

        // Resumen breve que aparecerá en la tarjeta del artículo
        description: "Conoce los orígenes del café y cómo se extendió por diferentes regiones del mundo.",

        // Ruta de la imagen que se mostrará en la tarjeta
        image: "",

        // Descripción de la imagén para mejorar la accesibilidad
        imageAlt: "Granos de café tostado",

        // Autor o resposable de la publicación
        author: "Coffe Blog",

        // Fecha de publicación en formato AAAA-MM-DD
        publishedAt: "2026-11-07",

        // Indica si el artículo aparecerá como destacado
        featured: true,
    },
    {
        title: "Métodos de preparación del café",

        slug: "metodos-de-preparacion",

        category: "Preparación",

        description:"Descubre diferentes métodos para preparar café y las características de cada uno.",
        
        image: "",

        imageAlt: "Preparación de café mediante filtrado",

        author: "Coffee Blog",

        publishedAt: null,

        featured: false,
  },
  {
    title: "¿Cómo elegir un buen café?",

    slug: "como-elegir-un-buen-cafe",

    category: "Conocimiento",

    description:"Aprende qué aspectos considerar al elegir granos de café para tu próxima taza.",
    
    image: "",

    imageAlt: "Taza de ceramica llena de café con leche",

    author: "Coffee Blog",

    publishedAt: null,

    featured: false,
  },
  {
    title: "Explorando el mundo del café",

    slug: "explorando-el-mundo-del-cafe",

    category: "Exploración",

    description: "Un acercamiento a las distintas regiones productoras y sus características.",
    
    image: "/images/blog/mundo-del-cafe.webp",

    imageAlt: "Manojo de granos de café",

    author: "Coffee Blog",

    publishedAt: null,

    featured: false,
  },
];