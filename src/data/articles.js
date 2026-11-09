// Información general de los artículos de Coffee Blog.
// Contiene los datos necesarios para mostrar las tarjetas y organizar las publicaciones. El contenido completo estará en archivos Markdown (.md).

export const articles = [
  {
    // Título que aparecerá en la tarjeta y en el artículo.
    title: "La historia del café",

    // Identificador único para relacionar los datos con el contenido y generar la dirección del artículo.
    slug: "historia-del-cafe",

    // Categoría temática a la que pertenece el artículo.
    category: "Cultura e historia",

    // Resumen breve que aparecerá en la tarjeta del artículo.
    description: "Conoce los orígenes del café y cómo se extendió por diferentes regiones del mundo.",

    // Ruta de la imagen que se mostrará en la tarjeta.
    image: "/images/blog/historia-del-cafe.jpg",

    // Descripción de la imagen para mejorar la accesibilidad.
    imageAlt: "Granos de café tostado",

    // Autor o responsable de la publicación.
    author: "Alejandro Suárez",

    // Marca editorial responsable de publicar el contenido.
    publisher: "Coffee Blog",

    // Fecha de publicación en formato AAAA-MM-DD.
    // Se deja en null hasta definir una fecha real.
    publishedAt: "2026-11-09",

    // Indica si el artículo aparecerá como destacado.
    featured: true,
  },
  {
    title: "Métodos de preparación del café",

    slug: "metodos-de-preparacion",

    category: "Preparación",

    description: "Descubre diferentes métodos para preparar café y las características de cada uno.",

    image: "/images/blog/metodos-de-preparacion.jpg",

    imageAlt: "Preparación de café mediante filtrado",

    author: "Alejandro Suárez",

    publisher: "Coffee Blog",

    publishedAt: "2026-11-09",

    featured: false,
  },
  {
    title: "¿Cómo elegir un buen café?",

    slug: "como-elegir-un-buen-cafe",

    category: "Conocimiento",

    description: "Aprende qué aspectos considerar al elegir granos de café para tu próxima taza.",

    image: "/images/blog/elegir-buen-cafe.jpg",

    imageAlt: "Taza de cerámica llena de café con leche",

    author: "Alejandro Suárez",

    publisher: "Coffee Blog",

    publishedAt: "2026-11-09",

    featured: false,
  },
  {
    title: "Explorando el mundo del café",

    slug: "explorando-el-mundo-del-cafe",

    category: "Exploración",

    description: "Un acercamiento a las distintas regiones productoras y sus características.",

    image: "/images/blog/mundo-del-cafe.jpg",

    imageAlt: "Manojo de granos de café",

    author: "Alejandro Suárez",

    publisher: "Coffee Blog",

    publishedAt: "2026-11-09",

    featured: false,
  },
];