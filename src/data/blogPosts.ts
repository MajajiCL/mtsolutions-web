export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedAt: string;
  author: string;
  content: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "como-implementar-monitoreo-produccion-tiempo-real",
    title: "¿Cómo implementar Monitoreo de Producción en tiempo real en tu planta?",
    excerpt:
      "Descubre los 5 pasos esenciales para pasar de planillas en papel a tableros en tiempo real con IoT industrial sin detener tus operaciones.",
    category: "Industria 4.0",
    readTime: "6 min de lectura",
    publishedAt: "2026-01-15",
    author: "Equipo de Innovación MT Solutions",
    content: `
### Por qué el monitoreo en tiempo real es el pilar de la Industria 4.0

En la era moderna de la manufactura, los datos desfasados por 24 horas son equivalentes a manejar un vehículo mirando únicamente el espejo retrovisor. El monitoreo de producción en tiempo real permite a los directores de planta, supervisores e ingenieros de mantenimiento tomar decisiones operativas con información que ocurre en el presente.

#### 1. Identificar los puntos críticos de recolección de datos
El primer paso consiste en determinar qué señales son indispensables:
- **Disponibilidad:** Señal de marcha / paro del motor principal o PLC.
- **Velocidad / Rendimiento:** Pulsos del sensor de conteo o encoder en la salida de la línea.
- **Calidad:** Rechazos automáticos de fotoceldas o chequeadores de peso.

#### 2. Conectividad no invasiva mediante IoT Edge
No es necesario renovar el parque de maquinaria ni reescribir programas de PLCs antiguos. Con equipos adquisidores de datos industriales conectados a borneras o puertos de comunicación estándar (Modbus, OPC-UA), la instalación física se completa en cuestión de horas.

#### 3. Involucrar a los operarios con interfaces simples
La tecnología sólo es exitosa si el operador de piso de planta la adopta. MT Solutions provee pantallas táctiles con botones grandes y menús intuitivos para que tipificar una parada tome menos de 3 segundos.

#### 4. Automatizar las alarmas tempranas
Configurar alertas proactivas vía correo, WhatsApp o pantallas Andon en planta asegura que ante una detención de más de 5 minutos, el equipo de electromecánica esté notificado automáticamente.

#### 5. Cerrar el ciclo con análisis de Pareto semanal
Utiliza los reportes automáticos de OEE para reunir al equipo multidisciplinario (Producción, Mantenimiento, Calidad) y atacar las 3 causas principales que concentran el 80% de los tiempos muertos.
    `,
  },
  {
    slug: "oee-que-es-y-como-mejorar-la-eficiencia-de-planta",
    title: "OEE: Qué es, cómo se calcula y estrategias para superar el 85%",
    excerpt:
      "Guía técnica completa sobre Disponibilidad, Rendimiento y Calidad. Aprende a calcular tu OEE real y combatir las 6 grandes pérdidas.",
    category: "OEE & Metodologías",
    readTime: "8 min de lectura",
    publishedAt: "2026-01-20",
    author: "Consultoría de Excelencia Operacional",
    content: `
### La fórmula fundamental del OEE

El Overall Equipment Effectiveness (OEE) es una métrica porcentual que mide la utilización efectiva de la capacidad de una máquina o línea de producción:

$$\\text{OEE} = \\text{Disponibilidad} \\times \\text{Rendimiento} \\times \\text{Calidad}$$

#### Los Tres Factores del OEE

1. **Disponibilidad (A):**
   $$\\text{Disponibilidad} = \\frac{\\text{Tiempo Operativo Real}}{\\text{Tiempo Planificado de Producción}}$$
   Mide las pérdidas por averías, preparaciones de máquina y cambios de formato (SMED).

2. **Rendimiento (P):**
   $$\\text{Rendimiento} = \\frac{\\text{Producción Total}}{\\text{Velocidad Teórica} \\times \\text{Tiempo Operativo}}$$
   Mide las pérdidas por microparadas (de menos de 2 minutos) y marcha a velocidad reducida.

3. **Calidad (Q):**
   $$\\text{Calidad} = \\frac{\\text{Unidades Conformes (Buenas)}}{\\text{Unidades Totales Fabricadas}}$$
   Mide las pérdidas por piezas defectuosas y mermas de arranque de lote.

#### Las 6 Grandes Pérdidas de Manufactura
- **1. Fallas en equipos (Averías no programadas)**
- **2. Ajustes y cambios de formato (Setups lentos)**
- **3. Microparadas y atascos breves**
- **4. Velocidad reducida por desgaste o problemas de material**
- **5. Defectos de calidad durante el proceso**
- **6. Mermas y desperdicios de arranque**

Con **MTcontrol**, cada una de estas 6 pérdidas se contabiliza y clasifica automáticamente, permitiendo a la gerencia priorizar proyectos de mejora continua como Kaizen o TPM con base en datos duros.
    `,
  },
  {
    slug: "alarmas-tardias-enemigo-silencioso-control-de-planta",
    title: "Alarmas tardías: El enemigo silencioso del control de planta",
    excerpt:
      "Por qué enterarse al final del turno de una parada o desvío de calidad cuesta hasta 10 veces más que reaccionar en el minuto exacto.",
    category: "Gestión Operativa",
    readTime: "5 min de lectura",
    publishedAt: "2026-02-02",
    author: "Equipo Técnico MT Solutions",
    content: `
### El costo real de una reacción tardía

En entornos de alta velocidad de producción (líneas de embotellado, extrusión de plásticos, empaque farmacéutico o confección continua), cada minuto que una línea opera a menor velocidad o desfasada en calidad genera un impacto acumulativo enorme.

#### La anatomía de una parada no resuelta:
- **Minuto 0:** La máquina se detiene por un atasco en la faja transportadora.
- **Minuto 1 a 5:** El operario intenta resolver el atasco por su cuenta sin éxito.
- **Minuto 6 a 15:** El operario se traslada al taller a buscar al técnico de mantenimiento.
- **Minuto 16 a 25:** Diagnóstico y reparación.
- **Resultado:** 25 minutos de parada total.

#### Con el sistema de Alarmas en Tiempo Real de MTcontrol:
- **Minuto 0:** Parada detectada por el sensor.
- **Minuto 2:** Si no hay reactivación, se emite una notificación push automática al smartwatch/celular del técnico de guardia y en la torre Andon de la planta.
- **Minuto 4:** El técnico llega a la estación con las herramientas adecuadas.
- **Minuto 8:** Línea restablecida.
- **Ahorro:** 17 minutos de producción recuperados en un solo evento.
    `,
  },
  {
    slug: "mtenergy-eficiencia-energetica-iso-50001",
    title: "Eficiencia Energética Inteligente en la Industria: Implementando ISO 50001 con MTenergy",
    excerpt:
      "Cómo correlacionar el consumo de kWh con las órdenes de fabricación para reducir la factura eléctrica hasta en un 35% y justificar proyectos de sustentabilidad.",
    category: "Sustentabilidad & Energía",
    readTime: "7 min de lectura",
    publishedAt: "2026-02-18",
    author: "Especialista en Gestión Energética",
    content: `
### De la factura estática al monitoreo dinámico

Tradicionalmente, las empresas manufactureras reciben su factura eléctrica una vez al mes. En ese documento ven un monto global en pesos o dólares, pero es imposible saber:
- ¿Qué máquina consumió más en el turno nocturno?
- ¿Cuánta energía se perdió mientras la caldera operaba en vacío?
- ¿Cuál es el costo energético específico de cada producto fabricado?

#### El Ciclo PHVA y MTenergy:
- **Planificar (Plan):** Definición de la Línea Base Energética y los Indicadores de Rendimiento Energético (EnPIs).
- **Hacer (Do):** Instalación de analizadores de redes y correlación automática con los estados operativos de MTcontrol.
- **Verificar (Check):** Dashboards que contrastan el consumo esperado versus el real en cada lote.
- **Actuar (Act):** Apagado sistemático de equipos auxiliares en tiempos de parada y corrección de picos de potencia.
    `,
  },
];
