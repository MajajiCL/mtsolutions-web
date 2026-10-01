export interface CaseStudy {
  id: string;
  slug: string;
  client: string;
  country: string;
  flag: string;
  industry: string;
  leader: string;
  role: string;
  challenge: string;
  solution: string;
  results: { metric: string; label: string }[];
  quote: string;
  modulesUsed: string[];
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "vina-concha-y-toro",
    slug: "vina-concha-y-toro",
    client: "Viña Concha y Toro",
    country: "Chile",
    flag: "🇨🇱",
    industry: "Vitivinícola / Bebidas",
    leader: "Carlos López",
    role: "Jefe de Excelencia Operacional",
    challenge:
      "Las líneas de embotellado y etiquetado presentaban microparadas frecuentes y cambios de formato lentos. Los reportes se llenaban a mano al finalizar el turno, dificultando identificar la causa raíz de las pérdidas de rendimiento.",
    solution:
      "Implementación de MTcontrol en todas las líneas de envasado, capturando tiempos de parada con código de motivo directo desde la botonera táctil del operador y sincronizado con el sensor de conteo.",
    results: [
      { metric: "+16%", label: "Aumento de OEE en líneas críticas" },
      { metric: "-32%", label: "Reducción de tiempos de cambio de formato (SMED)" },
      { metric: "100%", label: "Eliminación de reportes manuales en papel" },
    ],
    quote:
      "Con MTcontrol obtuvimos la transparencia que necesitábamos para gestionar el embotellado en tiempo real. Ahora los operadores y supervisores hablan el mismo idioma con datos 100% confiables.",
    modulesUsed: ["MTcontrol"],
  },
  {
    id: "degasa-medical",
    slug: "degasa-medical",
    client: "Degasa",
    country: "México",
    flag: "🇲🇽",
    industry: "Dispositivos Médicos & Farmacéutica",
    leader: "Lizbeth Sarabia & Cuitlahuac Solís",
    role: "Liderazgo de Operaciones Tecnológicas",
    challenge:
      "Necesidad de un control de pesaje y dosificación milimétrico para insumos médicos críticos, con trazabilidad rigurosa exigida por normas sanitarias internacionales y auditorías de calidad.",
    solution:
      "Despliegue del módulo MTweight conectado directamente a las balanzas industriales, registrando pesos en tiempo real y bloqueando desviaciones fuera de receta de forma automática.",
    results: [
      { metric: "-48%", label: "Reducción en mermas de insumos críticos" },
      { metric: "0", label: "Incidentes de no conformidad en dosificación" },
      { metric: "15 min", label: "Ahorro por lote en auditorías de calidad" },
    ],
    quote:
      "El impacto de MTweight en la calidad de nuestros procesos fue inmediato. Pasar del papel a la digitalización automática de balanzas elevó nuestros estándares de producción médica.",
    modulesUsed: ["MTweight", "MTcontrol"],
  },
  {
    id: "anasac",
    slug: "anasac",
    client: "Anasac",
    country: "Chile / Latam",
    flag: "🌎",
    industry: "Agroquímica & Manufactura",
    leader: "Diego Sáez",
    role: "Gerente de Planta",
    challenge:
      "Altos costos energéticos en plantas de formulación y envasado. Los equipos auxiliares (compresores, bombas y enfriadores) permanecían encendidos consumiendo energía incluso con líneas paradas.",
    solution:
      "Integración de MTenergy con MTcontrol para cruzar en tiempo real los kWh consumidos con el estatus de operación de cada línea, activando alertas por consumo parásito en paradas.",
    results: [
      { metric: "28%", label: "Ahorro energético en tiempos de inactividad" },
      { metric: "3.5 meses", label: "Retorno total de la inversión (ROI)" },
      { metric: "ISO 50001", label: "Acreditación exitosa en gestión energética" },
    ],
    quote:
      "MTenergy nos abrió los ojos respecto a cuánta energía estábamos botando en tiempos no productivos. Hoy el consumo de energía es un KPI clave de cada turno.",
    modulesUsed: ["MTenergy", "MTcontrol"],
  },
  {
    id: "difem-laboratorios",
    slug: "difem-laboratorios",
    client: "Difem Laboratorios",
    country: "Chile",
    flag: "🇨🇱",
    industry: "Farmacéutica & Cosmética",
    leader: "Patricio Valverde",
    role: "Director de Operaciones",
    challenge:
      "Múltiples estaciones manuales de empaque, inspección y muestreo generaban gran volumen de hojas de control que debían ser revisadas manualmente antes de liberar cada lote de medicamentos.",
    solution:
      "Implementación de MTflow en terminales táctiles en cada puesto de trabajo, digitalizando checklists de despeje de línea, muestreos de calidad y tiempos entre estaciones.",
    results: [
      { metric: "4 archivadores/mes", label: "Papel eliminado en planta" },
      { metric: "-60%", label: "Tiempo de liberación de lote farmacéutico" },
      { metric: "100%", label: "Trazabilidad de operarios y turnos" },
    ],
    quote:
      "MTflow transformó nuestra operación manual en un flujo digital ordenado, validado y accesible desde cualquier lugar.",
    modulesUsed: ["MTflow", "MTcontrol"],
  },
];
