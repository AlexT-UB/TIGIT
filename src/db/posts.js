export function addLike( key){
    postItems[key].likes++
}
export function addDislike( key){
    postItems[key].dislikes++
}
export let postItems = [
  {
    title: "Porque no funciona mi SAT-Solver?",
    username: "Edgar1809",
    date: "5:01 5/6/2022",
    text:
      "Mi grupo y yo hemos escrito un pequeño SAT-Solver para un proyecto universitario, pero NO TENGO NI " +
      "IDEA de por qué es que no funciona. Normalmente preguntaría para algo concreto para resolver el " +
      "problema, pero simplemente no sé qué y por qué tengo este problema. No nos sale ningún error. " +
      "Simplemente deja de procesarse después de un rato. Todos hemos estado tratando de resolverlo durante " +
      "este par de días y buscando consejos online, pero no hemos encontrado nada. Agregué el código para " +
      "main en el archivo adjunto. Por favor, ayuda, sinceramente no sé cómo resolver esto.",
    image: null,
    profile_pic: require("../assets/profile_Pics/abeja.png"),
    hastags: "#SAT_Solvers, #Coding, " + "#UnknownCodingError, #Academia",
    docs: "code_snippet.txt",
    likes:4,
    dislikes:1,
  },
  {
    title:
      "Alguien porfavor me puede descifrar estas formulas que ha mandado mi profesor?",
    username: "Opoossum_01",
    date: "4:59 5/6/2022",
    text:
      "Hola todos. Soy una estudiante de segundo de carrera de mates de la UMSA, y mi profesor de grafos " +
      "nos acaba de mandar este .jpg con formulas escritas a mano que dice quew saldrán en el examen. Nunca " +
      "las hemos visto en clasem nunca las ha mencionado, y no nos ha dado ninguna explicación de que son o " +
      "que hacen. Estoy honestamente confundida y no se por donde empezar. Si alguine me las pudiese explicar" +
      " o decirme como se llaman, realmente se aprecaría mucho.",
    profile_pic: require("../assets/profile_Pics/ballena.png"),
    image: require("../assets/post_Pics/istockphoto-696935130-612x612.jpg"),
    docs: "formulas.jpg",
    hastags: "#Graphs, #Maths, #UnknownFormulas, #Urgent, #UMSA, #Academia",
    likes:8,
    dislikes:4,
  },
  {
    title: "Comparto mis apuntes!",
    username: "Ligotti22",
    date: "4:58 5/6/2022",
    text:
      " Os comparto mis apuntes de Estadísticas(363011) que la cursé el año pasado. También he notado " +
      "que muchos de nosotros están pidiendo apuntes de diferentes asignaturas, así que creo este nuevo tag " +
      "#APUNTES para que todos lo vean! Suerte!!!",
    profile_pic: require("../assets/profile_Pics/blowfish.png"),
    docs: "Mis_Apuntes_de_Estadistica.pdf",
    image: null,
    hastags: "#Apuntes, #UB, #Estadisticas, #Academia",
    likes:4,
    dislikes:1,
  },
  {
    title: "Clarificación de un mensaje de la UB",
    username: "YellowHoward",
    date: "4:57 5/6/2022",
    text:
      'Alguien me puede clarificar si hay clase o no en matesfest de la UB? "Bon dia, aquest dimecres 27 ' +
      "d’abril (dia no lectiu) es celebra la MATEFEST-INFOFEST, una festa de las Matemàtiques i Informàtica " +
      "organitzada per l’alumnat de la nostra facultat. Durant el matí hi haurà stands i xerrades adreçades " +
      'principalment a l’alumnat de secundaria."',
    profile_pic: require("../assets/profile_Pics/erizo.png"),
    image: null,
    docs: null,
    hastags: "#UB, " + "#InfoFest, #MatesFest, #UBMates",
    likes:4,
    dislikes:1,
  },
  {
    title: "¿Cómo o dónde consigo prácticas?",
    username: "Miguel_UB",
    date: "4:57 5/6/2022",
    profile_pic: require("../assets/profile_Pics/escorpion.png"),
    image: null,
    text:
      "Hola, ya estoy cerca de poder realizar prácticas para ingeniería informática y me preguntaba si " +
      "sabían de alguna empresa buena donde pueda comenzar o cuál sería la mejor forma de encontrar.",
    docs: null,
    hastags: "#Practicas, #Informatica, #Trabajo ",
    likes:4,
    dislikes:1,
  },
  {
    title: "Estudiante de intercambio",
    username: "EnglishStudentInBarcelona",
    date: "4:54 5/6/2022",
    text:
      "¡Buenas!, soy un estudiante de intercambio, he venido de Durham a estudiar psicología en la UB. Me " +
      "preguntaba si alguien tendría la amabilidad de quedar conmigo un día en la cafetería para hacer amigos " +
      "y crear un grupo, ¡yo invito!",
    profile_pic: require("../assets/profile_Pics/medusa.png"),
    image: require("../assets/post_Pics/durham.png"),
    docs: null,
    hastags: "#Personal, #Grupo, #Barcelona, #Amigos",
    likes:4,
    dislikes:1,
  },
  {
    title: "¿Cómo cambio el color del subtítulo en vuetify?",
    username: "AlexUBInfo",
    date: "4:52 5/6/2022",
    text:
      "Estoy desarrollando una web para un proyecto de clase pero al asignar el color a un subtítulo, este " +
      "no cambia y sigue de color blanco. Me gustaría ponerlo de color naranja, ya que combina con el azul " +
      "y además en color blanco no se ve, ya que los posts son de color blanco de fondo. \n " +
      "Adjunto una captura del código.",
    profile_pic: require("../assets/profile_Pics/murcielago.png"),
    image: require("../assets/post_Pics/Hashtags.png"),
    docs: null,
    hastags: "#UB, #Vue, #html, #JS, #Vuetify",
    likes:4,
    dislikes:1,
  },
];
