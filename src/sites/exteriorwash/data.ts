export const business = {
  name: "Bert Falsetti's Home Improvement LLC",
  shortName: "Bert Falsetti's",
  tradeEn: "Pressure Washing & Exterior Cleaning",
  tradeEs: "Lavado a Presion y Limpieza Exterior",
  phone: {
    display: "(203) 258-5177",
    href: "tel:+12032585177",
    sms: "sms:+12032585177",
  },
  email: "falsetti67@gmail.com",
  emailHref: "mailto:falsetti67@gmail.com",
  address: "56 Woodfield Dr, Shelton, CT 06484",
  license: "CT HIC 0569501",
  founded: "2001",
  rating: "5.0",
  reviewCount: "71",
  mapsHref: "https://www.google.com/maps/search/?api=1&query_place_id=ChIJESx1A8Xh54kRqSAoABYPkmM",
  currentSite: "https://falcettis.inspiredink.space",
};

export const navLinks = [
  ["Services", "Servicios", "#services"],
  ["Work", "Trabajos", "#work"],
  ["Reviews", "Resenas", "#reviews"],
  ["Areas", "Areas", "#areas"],
  ["Contact", "Contacto", "#estimate"],
];

export const trustSignals = [
  { value: "24+", en: "Years serving CT homeowners", es: "Anos sirviendo hogares en CT" },
  { value: "5.0", en: "Google rating from 71 reviews", es: "Rating en Google con 71 resenas" },
  { value: "CT", en: "Licensed and insured", es: "Con licencia y seguro" },
  { value: "Owner", en: "Operated by Bert", es: "Atendido por Bert" },
];

export const services = [
  {
    slug: "pressure-washing",
    num: "01",
    en: "Pressure Washing",
    es: "Lavado a Presion",
    titleEn: "Pressure Washing in Shelton, CT",
    titleEs: "Lavado a Presion en Shelton, CT",
    shortEn: "Driveways, walkways, patios and exterior hard surfaces cleaned with the right pressure for each material.",
    shortEs: "Entradas, aceras, patios y superficies exteriores limpiadas con la presion correcta para cada material.",
    detailEn:
      "Bert removes algae, grime and slippery buildup from concrete, stone, steps, patios and other exterior surfaces so the property looks cared for and feels safer to walk on.",
    detailEs:
      "Bert elimina algas, suciedad y acumulacion resbalosa de concreto, piedra, escalones, patios y otras superficies exteriores para que la propiedad se vea cuidada y sea mas segura.",
    image: "/images/exteriorwash/12-surface-cleaning-pressure-washing.webp",
    altEn: "Before and after pressure washing on exterior stone walkway",
    altEs: "Antes y despues de lavado a presion en camino de piedra exterior",
  },
  {
    slug: "soft-washing",
    num: "02",
    en: "Soft Washing",
    es: "Soft Washing",
    titleEn: "Soft Washing for Connecticut Homes",
    titleEs: "Soft Washing para Casas en Connecticut",
    shortEn: "A low-pressure method for siding and delicate surfaces that need cleaning without damage.",
    shortEs: "Metodo de baja presion para siding y superficies delicadas que necesitan limpieza sin danos.",
    detailEn:
      "Soft washing clears organic staining, mold, mildew and algae from siding and painted surfaces while protecting the finish of the home.",
    detailEs:
      "El soft washing limpia manchas organicas, moho, mildew y algas del siding y superficies pintadas mientras protege el acabado de la casa.",
    image: "/images/exteriorwash/16-soft-washing-shelton-connecticut.webp",
    altEn: "Soft washing result on residential siding in Shelton Connecticut",
    altEs: "Resultado de soft washing en siding residencial en Shelton Connecticut",
  },
  {
    slug: "house-washing",
    num: "03",
    en: "House Washing",
    es: "Lavado de Casas",
    titleEn: "House Washing in Fairfield & New Haven Counties",
    titleEs: "Lavado de Casas en Fairfield y New Haven County",
    shortEn: "Whole-home exterior washing for siding, trim, porches and visible curb appeal.",
    shortEs: "Lavado exterior completo para siding, molduras, porches y mejor apariencia desde la calle.",
    detailEn:
      "From green buildup to years of weathering, house washing helps siding, trim and exterior details look bright again without harsh treatment.",
    detailEs:
      "Desde manchas verdes hasta anos de desgaste por clima, el lavado de casas ayuda a que siding, molduras y detalles exteriores se vean claros otra vez sin trato agresivo.",
    image: "/images/exteriorwash/17-house-wash-branford-connecticut.webp",
    altEn: "Clean residential home after house washing in Branford Connecticut",
    altEs: "Casa residencial limpia despues de house washing en Branford Connecticut",
  },
  {
    slug: "roof-washing",
    num: "04",
    en: "Roof Washing",
    es: "Lavado de Techos",
    titleEn: "Roof Washing & Black Streak Removal",
    titleEs: "Lavado de Techos y Remocion de Manchas Negras",
    shortEn: "Roof cleaning for moss, lichen and black streaks with a careful soft-wash approach.",
    shortEs: "Limpieza de techos con musgo, liquen y manchas negras usando un metodo cuidadoso de soft wash.",
    detailEn:
      "Bert uses a roof-safe cleaning process designed to treat black streaks, moss and lichen without blasting shingles.",
    detailEs:
      "Bert usa un proceso seguro para techos disenado para tratar manchas negras, musgo y liquen sin maltratar las tejas.",
    image: "/images/exteriorwash/14-roof-and-house-soft-wash-trumbull-ct.webp",
    altEn: "Before and after roof and house soft wash in Trumbull CT",
    altEs: "Antes y despues de soft wash de techo y casa en Trumbull CT",
  },
  {
    slug: "surface-cleaning",
    num: "05",
    en: "Exterior Surface Cleaning",
    es: "Limpieza de Superficies Exteriores",
    titleEn: "Exterior Surface Cleaning for Safer Walkways",
    titleEs: "Limpieza de Superficies Exteriores para Caminar con Mas Seguridad",
    shortEn: "Walkways, bluestone, pool areas and patios cleaned for traction, safety and appearance.",
    shortEs: "Caminos, bluestone, areas de piscina y patios limpiados para traccion, seguridad y apariencia.",
    detailEn:
      "Surface cleaning removes slippery algae and buildup from outdoor walking areas, helping materials last longer and look finished.",
    detailEs:
      "La limpieza de superficies elimina algas resbalosas y acumulacion en areas exteriores de paso, ayudando a que los materiales duren mas y se vean mejor.",
    image: "/images/exteriorwash/19-blue-stone-walkway-surface-cleaning-trumbull-connectic.webp",
    altEn: "Bluestone walkway surface cleaning before and after in Trumbull Connecticut",
    altEs: "Antes y despues de limpieza de camino bluestone en Trumbull Connecticut",
  },
  {
    slug: "replacement-windows",
    num: "06",
    en: "Custom Replacement Windows",
    es: "Ventanas de Reemplazo a Medida",
    titleEn: "Custom Replacement Windows",
    titleEs: "Ventanas de Reemplazo a Medida",
    shortEn: "Window replacement support for homeowners who want cleaner, more efficient exterior upgrades.",
    shortEs: "Apoyo con reemplazo de ventanas para propietarios que quieren mejoras exteriores mas limpias y eficientes.",
    detailEn:
      "For exterior maintenance projects that go beyond cleaning, Bert can discuss custom replacement windows and practical home improvement needs.",
    detailEs:
      "Para proyectos exteriores que van mas alla de la limpieza, Bert puede orientar sobre ventanas de reemplazo a medida y mejoras practicas del hogar.",
    image: "/images/exteriorwash/15-vinyl-siding-wash-fairfield-connecticut.webp",
    altEn: "Clean vinyl siding and windows after exterior home maintenance",
    altEs: "Siding de vinilo y ventanas limpias despues de mantenimiento exterior",
  },
];

export const gallery = [
  {
    src: "/images/exteriorwash/17-house-wash-branford-connecticut.webp",
    altEn: "Clean home exterior after house washing in Branford Connecticut",
    altEs: "Exterior de casa limpio despues de lavado en Branford Connecticut",
    labelEn: "House washing / Branford",
    labelEs: "Lavado de casa / Branford",
  },
  {
    src: "/images/exteriorwash/24-before-and-after-house-wash-fairfield-ct.webp",
    altEn: "Before and after house wash in Fairfield CT",
    altEs: "Antes y despues de lavado de casa en Fairfield CT",
    labelEn: "Before / after / Fairfield",
    labelEs: "Antes / despues / Fairfield",
  },
  {
    src: "/images/exteriorwash/11-roof-washing-shelton-ct.webp",
    altEn: "Roof washing before and after in Shelton CT",
    altEs: "Antes y despues de lavado de techo en Shelton CT",
    labelEn: "Roof wash / Shelton",
    labelEs: "Lavado de techo / Shelton",
  },
  {
    src: "/images/exteriorwash/10-patio-cleaning-naugatuck-ct.webp",
    altEn: "Patio cleaning before and after in Naugatuck CT",
    altEs: "Antes y despues de limpieza de patio en Naugatuck CT",
    labelEn: "Patio cleaning / Naugatuck",
    labelEs: "Limpieza de patio / Naugatuck",
  },
  {
    src: "/images/exteriorwash/18-painted-siding-algae-cleaning-easton-connecticut.webp",
    altEn: "Painted siding algae cleaning in Easton Connecticut",
    altEs: "Limpieza de algas en siding pintado en Easton Connecticut",
    labelEn: "Siding cleaning / Easton",
    labelEs: "Limpieza de siding / Easton",
  },
  {
    src: "/images/exteriorwash/19-blue-stone-walkway-surface-cleaning-trumbull-connectic.webp",
    altEn: "Bluestone walkway surface cleaning in Trumbull Connecticut",
    altEs: "Limpieza de camino bluestone en Trumbull Connecticut",
    labelEn: "Surface cleaning / Trumbull",
    labelEs: "Superficies / Trumbull",
  },
];

export const reviews = [
  {
    name: "Dennis McNamara",
    date: "2026",
    photo: "/images/exteriorwash/reviewers/dennis-mcnamara.webp",
    quoteEn: "Great experience with Bert. He responded quickly, showed up on time, and delivered quality work. Would definitely recommend.",
    quoteEs: "Gran experiencia con Bert. Respondio rapido, llego a tiempo e hizo un trabajo de calidad. Definitivamente lo recomiendo.",
  },
  {
    name: "Len Zargo",
    date: "2025",
    photo: "/images/exteriorwash/reviewers/len-zargo.webp",
    quoteEn:
      "Bert is highly responsive and communicative with regards to availability, price and scope of work. He exceeded expectation with great work.",
    quoteEs:
      "Bert responde rapido y comunica bien disponibilidad, precio y alcance del trabajo. Supero expectativas con un gran trabajo.",
  },
  {
    name: "Lee Branco",
    date: "2025",
    photo: "/images/exteriorwash/reviewers/lee-branco.webp",
    quoteEn:
      "After years of green mold buildup, our house looks brand new. His prices are reasonable, and he's a great person to work with.",
    quoteEs:
      "Despues de anos de moho verde, nuestra casa parece nueva. Sus precios son razonables y es excelente para trabajar.",
  },
  {
    name: "Maggi C",
    date: "2025",
    quoteEn: "Responsive and professional! Bert was able to clean the nastiest mold off the house. So pleased.",
    quoteEs: "Responsivo y profesional. Bert pudo limpiar el moho mas dificil de la casa. Quedamos muy satisfechos.",
  },
  {
    name: "Rob Grosshart",
    date: "2025",
    quoteEn: "Totally professional, on-time, easy to work with, and did a fantastic job removing all the green and grime from our home.",
    quoteEs: "Totalmente profesional, puntual, facil de tratar e hizo un trabajo fantastico removiendo lo verde y la suciedad de la casa.",
  },
  {
    name: "Sharon Stolze",
    date: "2024",
    quoteEn: "My house hadn't been cleaned in 18 years and he made it look like new. Highly recommend!",
    quoteEs: "Mi casa no se habia limpiado en 18 anos y la dejo como nueva. Muy recomendado.",
  },
];

export const areas = [
  "Shelton",
  "Fairfield County",
  "New Haven County",
  "Branford",
  "Fairfield",
  "Trumbull",
  "Naugatuck",
  "Easton",
];

export const heroImage = "/images/exteriorwash/17-house-wash-branford-connecticut.webp";
export const logo = "/images/exteriorwash/01-pressure-washing-shelton-connecticut.webp";
export const ownerGraphic = "/images/exteriorwash/02-home.webp";
