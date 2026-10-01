export interface ProductModule {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  shortDescription: string;
  badge: string;
  color: string;
  gradient: string;
  heroStat: { value: string; label: string };
  metaTitle: string;
  metaDescription: string;
  iconName: string;
  fullDescription: string;
  challengesSolved: { title: string; desc: string }[];
  keyFeatures: { title: string; desc: string; icon: string }[];
  technicalSpecs: { category: string; items: string[] }[];
  kpisMeasured: string[];
  clientQuote?: { quote: string; author: string; company: string; role: string };
  ctaText: string;
}

export const PRODUCTS: Record<string, ProductModule> = {
  mtcontrol: {
    id: "mtcontrol",
    slug: "mtcontrol",
    name: "MTcontrol",
    tagline: "El funcionamiento de tu planta en tiempo real",
    shortDescription:
      "Software OEE y sistema de monitoreo en tiempo real que mide disponibilidad, rendimiento y calidad, eliminando planillas manuales y detectando paradas de forma instantánea.",
    badge: "Módulo Principal OEE",
    color: "cyan",
    gradient: "from-cyan-500 to-blue-600",
    heroStat: { value: "+18%", label: "Incremento promedio de OEE en 90 días" },
    metaTitle: "MTcontrol: Monitoreo de Producción y Software OEE en Tiempo Real",
    metaDescription:
      "Optimiza tu piso de planta con MTcontrol. Monitoreo OEE en tiempo real, detección de paradas, gráficos de Pareto y eliminación total de planillas manuales.",
    iconName: "Activity",
    fullDescription:
      "MTcontrol proporciona visibilidad 360° en tiempo real del estado de tus máquinas para todo el equipo operativo y directivo. Con reportes automatizados, cálculo instantáneo de OEE y análisis de Pareto, tu equipo identifica al instante cuellos de botella y reacciona antes de que se conviertan en pérdidas millonarias.",
    challengesSolved: [
      {
        title: "Carga de datos manual e imprecisa",
        desc: "Elimina las planillas de papel y los reportes en Excel desfasados por días que ocultan la realidad del piso de planta.",
      },
      {
        title: "Tiempos muertos no clasificados",
        desc: "Detecta paradas mecánicas, falta de material, esperas y microparadas con inicio y fin cronometrados con precisión de segundos.",
      },
      {
        title: "Alarmas tardías",
        desc: "Envío inmediato de notificaciones a supervisores vía pantalla, móvil o correo ante desviaciones de velocidad o paradas prolongadas.",
      },
      {
        title: "Falta de información centralizada",
        desc: "Visualiza plantas múltiples o líneas distribuidas desde un único dashboard unificado en la nube.",
      },
    ],
    keyFeatures: [
      {
        title: "Cálculo OEE en Tiempo Real",
        desc: "Disponibilidad × Rendimiento × Calidad calculado segundo a segundo por máquina, línea, turno y orden de trabajo (OT).",
        icon: "Gauge",
      },
      {
        title: "Diagrama de Pareto de Detenciones",
        desc: "Prioriza automáticamente las causas raíz que más tiempo y dinero le restan a tu operación.",
        icon: "BarChart3",
      },
      {
        title: "Andon Virtual y Alertas",
        desc: "Pantallas de piso de planta (Andon) y alertas móviles para respuesta inmediata de mantenimiento y operaciones.",
        icon: "BellRing",
      },
      {
        title: "Reportabilidad por Turno y OT",
        desc: "Exportación instantánea a Excel, PDF o integración continua con Power BI y tu ERP (SAP, Oracle, QAD).",
        icon: "FileSpreadsheet",
      },
    ],
    technicalSpecs: [
      {
        category: "Conectividad en Planta",
        items: [
          "Dispositivo Adquisidor IoT MT (Edge Industrial)",
          "Conexión a señales digitales, relés, fotoceldas y encoders",
          "Protocolos industriales: Modbus TCP/RTU, OPC-UA, Siemens S7, Ethernet/IP",
          "Conexión WiFi industrial o cable Ethernet",
        ],
      },
      {
        category: "Plataforma Cloud & Seguridad",
        items: [
          "Arquitectura Cloud Multi-Tenant segura (SSL/TLS 256-bit)",
          "Disponibilidad SLA 99.9%",
          "Acceso web responsive para PC, tablets y smartphones",
          "Gestión de roles y permisos por usuario y planta",
        ],
      },
    ],
    kpisMeasured: [
      "OEE (Overall Equipment Effectiveness)",
      "Disponibilidad (Tiempo Operando vs Tiempo Detenido)",
      "Rendimiento / Velocidad nominal vs real",
      "Calidad / Unidades conformes vs Scrap",
      "MTBF (Mean Time Between Failures)",
      "MTTR (Mean Time To Repair)",
    ],
    clientQuote: {
      quote:
        "Con MTcontrol obtuvimos transparencia total del estado de las líneas de embotellado, reduciendo paradas no programadas y elevando la productividad operativa.",
      author: "Carlos López",
      company: "Viña Concha y Toro",
      role: "Jefe de Excelencia Operacional",
    },
    ctaText: "Solicitar Demo de MTcontrol",
  },
  mtweight: {
    id: "mtweight",
    slug: "mtweight",
    name: "MTweight",
    tagline: "Control preciso de pesaje y dosificación en línea",
    shortDescription:
      "Módulo de pesaje digital que se adosa a tus balanzas industriales para garantizar el cumplimiento de recetas, reducir mermas y auditar la eficiencia por operador.",
    badge: "Control de Mermas & Recetas",
    color: "amber",
    gradient: "from-amber-500 to-orange-600",
    heroStat: { value: "-45%", label: "Reducción de mermas y desperdicios de materia prima" },
    metaTitle: "MTweight: Software de Pesaje Industrial y Control de Dosificación",
    metaDescription:
      "Evita sobrecostos por desvíos en pesaje. MTweight digitaliza tus balanzas industriales, controla recetas y mide la velocidad y precisión por operador.",
    iconName: "Scale",
    fullDescription:
      "En procesos alimenticios, químicos, farmacéuticos y manufactureros, cada gramo cuenta. MTweight digitaliza el proceso de pesaje acoplándose a balanzas existentes. Registra electrónicamente cada transacción, valida tolerancias de receta antes del lote y genera estadísticas de rendimiento por operador.",
    challengesSolved: [
      {
        title: "Desvíos de fórmula y recetas",
        desc: "Impide que se procesen lotes con ingredientes fuera de la tolerancia permitida.",
      },
      {
        title: "Pérdida oculta por sobrepeso (Giveaway)",
        desc: "El exceso de producto dosificado cuesta miles de dólares al año; MTweight asegura el peso exacto.",
      },
      {
        title: "Falta de trazabilidad por operador",
        desc: "Registra quién pesó qué, a qué hora, con qué velocidad y con qué desviación estándar.",
      },
      {
        title: "Duplicidad en digitación",
        desc: "Los datos van directo de la balanza a la nube sin transcripción manual a planillas.",
      },
    ],
    keyFeatures: [
      {
        title: "Integración Universal con Balanzas",
        desc: "Dispositivo IoT que se conecta a puertos RS232, RS485 o Ethernet de marcas como Toledo, Mettler, Sartorius, Systel.",
        icon: "Cpu",
      },
      {
        title: "Validación de Receta en Pantalla",
        desc: "Guía visual al operador paso a paso indicando con códigos de color verde/rojo si el peso está dentro de tolerancia.",
        icon: "CheckCircle2",
      },
      {
        title: "Estadísticas por Operador",
        desc: "Mide unidades pesadas por minuto, variabilidad de peso y cumplimiento de estándares de calidad.",
        icon: "Users",
      },
      {
        title: "Conexión a ERPs & BI",
        desc: "Descarga de consumos reales de inventario directo a SAP, Oracle, QAD o dashboards en Power BI.",
        icon: "Database",
      },
    ],
    technicalSpecs: [
      {
        category: "Hardware de Adquisición",
        items: [
          "Módulo MTweight con aislamiento galvánico",
          "Compatibilidad con balanzas estáticas y dinámicas",
          "Lectura continua de peso estable y tara",
          "Gabinete con protección industrial IP65",
        ],
      },
    ],
    kpisMeasured: [
      "Porcentaje de Mermas / Desperdicio",
      "Desviación Estándar de Pesaje (g / kg)",
      "Unidades Pesadas por Operador / Hora",
      "Cumplimiento de Receta / Tolerancia %",
      "Giveaway / Sobrellenado acumulado",
    ],
    clientQuote: {
      quote:
        "La digitalización del pesaje con MTweight nos permitió garantizar la consistencia en el dosificado médico y reducir el tiempo de auditoría de calidad a cero.",
      author: "Lizbeth Sarabia",
      company: "Degasa",
      role: "Líder de Operaciones Tecnológicas",
    },
    ctaText: "Solicitar Demo de MTweight",
  },
  mtenergy: {
    id: "mtenergy",
    slug: "mtenergy",
    name: "MTenergy",
    tagline: "Ahorra hasta un 35% en energía sincronizada con la producción",
    shortDescription:
      "Monitorea el consumo eléctrico, de gas o vapor y correlaciónalo directamente con las unidades fabricadas para cumplir con la norma ISO 50001 y reducir la huella de carbono.",
    badge: "Eficiencia Energética & ISO 50001",
    color: "emerald",
    gradient: "from-emerald-500 to-teal-600",
    heroStat: { value: "35%", label: "Ahorro energético potencial en plantas industriales" },
    metaTitle: "MTenergy: Software de Gestión Energética Industrial y Eficiencia",
    metaDescription:
      "Ahorra hasta 35% de energía en planta. MTenergy correlaciona el consumo de kWh con la producción real, detectando consumos parásitos en paradas.",
    iconName: "Zap",
    fullDescription:
      "¿Sabías que una planta promedio desperdicia más del 40% de su energía durante tiempos no productivos o en vacíos de máquina? MTenergy sincroniza los sensores de energía y variables de proceso (presión, temperatura, caudal) con el software de producción para calcular el costo energético real por unidad fabricada.",
    challengesSolved: [
      {
        title: "Consumos fantasma en paradas",
        desc: "Detecta compresores, motores o calderas encendidos innecesariamente durante cambios de formato o paradas de línea.",
      },
      {
        title: "Desconocimiento del costo energético por SKU",
        desc: "Calcula exactamente cuántos kWh y dinero cuesta fabricar cada producto específico.",
      },
      {
        title: "Cumplimiento de la Ley de Eficiencia e ISO 50001",
        desc: "Herramienta estructurada bajo el ciclo PHVA (Planificar, Hacer, Verificar, Actuar) con indicadores EnPIs.",
      },
      {
        title: "Picos de potencia no controlados",
        desc: "Alertas tempranas antes de sobrepasar el límite de potencia contratada y sufrir penalizaciones de la distribuidora.",
      },
    ],
    keyFeatures: [
      {
        title: "Correlación kWh vs Producción",
        desc: "No mires la factura eléctrica a mes vencido; observa el consumo en tiempo real por tonelada o unidad procesada.",
        icon: "LineChart",
      },
      {
        title: "Monitoreo de Variables Críticas",
        desc: "Sincroniza presión de aire comprimido, temperatura de hornos, flujo de vapor y agua.",
        icon: "Gauge",
      },
      {
        title: "Gestión de Línea Base Energética (EnPI)",
        desc: "Establece objetivos de reducción y compara el desempeño histórico frente a la meta.",
        icon: "Target",
      },
      {
        title: "Alarmas de Sobrecosto y Desvíos",
        desc: "Notificaciones automáticas si una máquina excede su umbral de consumo en vacío.",
        icon: "AlertTriangle",
      },
    ],
    technicalSpecs: [
      {
        category: "Medidores Soportados",
        items: [
          "Analizadores de redes trifásicos (Schneider, Siemens, Janitza, Circutor)",
          "Transformadores de corriente no invasivos tipo split-core",
          "Medidores de flujo de gas, vapor y caudalímetros de agua",
          "Protocolos Modbus TCP/RTU, BACnet, MQTT",
        ],
      },
    ],
    kpisMeasured: [
      "Consumo Específico de Energía (kWh / Unidad)",
      "Pérdidas Energéticas en Tiempos Muertos (kWh)",
      "Demanda Máxima de Potencia (kW)",
      "Factor de Potencia y Desbalance",
      "Huella de Carbono (tCO2e emitidas)",
    ],
    clientQuote: {
      quote:
        "Al cruzar el consumo eléctrico con el estado de las máquinas de MTcontrol, identificamos que el 28% de la energía se consumía en líneas detenidas en espera de material.",
      author: "Diego Sáez",
      company: "Anasac",
      role: "Gerente de Planta",
    },
    ctaText: "Solicitar Demo de MTenergy",
  },
  mtflow: {
    id: "mtflow",
    slug: "mtflow",
    name: "MTflow",
    tagline: "Visualiza y digitaliza el flujo de tu planta y Órdenes de Trabajo",
    shortDescription:
      "Plataforma no-code para digitalizar formularios, auditar puestos de trabajo manuales y automáticos, y dar seguimiento integral a cada Orden de Trabajo (OT).",
    badge: "Digitalización de Procesos & OT",
    color: "purple",
    gradient: "from-purple-500 to-indigo-600",
    heroStat: { value: "100%", label: "Trazabilidad digital de punta a punta de la OT" },
    metaTitle: "MTflow: Digitalización de Órdenes de Trabajo y Procesos de Planta",
    metaDescription:
      "Controla tiempos de ciclo, formularios dinámicos y seguimiento de OTs. MTflow digitaliza puestos manuales y automatizados con total flexibilidad.",
    iconName: "Workflow",
    fullDescription:
      "Muchas plantas tienen procesos mixtos: máquinas automatizadas combinadas con estaciones de ensamblaje o chequeo manual. MTflow conecta ambos mundos, permitiendo registrar tiempos de ciclo, listas de chequeo digitales y estado de órdenes de trabajo en terminales táctiles simples e intuitivas.",
    challengesSolved: [
      {
        title: "Pérdida de rastro de Órdenes de Trabajo",
        desc: "Sabe exactamente en qué puesto, con qué operario y en qué porcentaje de avance está cada lote.",
      },
      {
        title: "Formularios de papel que se pierden o manchan",
        desc: "Reemplaza checklist de calidad, limpieza, arranque de línea y seguridad por formularios digitales con validaciones.",
      },
      {
        title: "Cuellos de botella entre estaciones",
        desc: "Mide tiempos de espera y de transferencia entre diferentes puestos de trabajo.",
      },
      {
        title: "Falta de validaciones en tiempo real",
        desc: "Bloquea el avance del proceso si un parámetro de calidad o seguridad no cumple con los límites mínimos/máximos.",
      },
    ],
    keyFeatures: [
      {
        title: "Formularios Dinámicos No-Code",
        desc: "Crea campos con validaciones numéricas, fotos adjuntas, firmas digitales y selección múltiple sin programar.",
        icon: "CheckSquare",
      },
      {
        title: "Seguimiento de Tiempos de Ciclo",
        desc: "Cronometra el tiempo estándar versus el tiempo real por estación y por operario.",
        icon: "Timer",
      },
      {
        title: "Exportación a PDF y Webhooks",
        desc: "Genera automáticamente el dossier de calidad del lote en PDF al finalizar la orden.",
        icon: "FileDown",
      },
      {
        title: "Interfaz Táctil para Operadores",
        desc: "Diseñada para tablets industriales o pantallas táctiles con botones grandes y flujos guiados.",
        icon: "Tablet",
      },
    ],
    technicalSpecs: [
      {
        category: "Compatibilidad",
        items: [
          "Web App adaptable a tablets Android, iPads y PCs industriales",
          "Lectura de códigos de barra 1D/2D y QR mediante cámara o escáner USB",
          "API REST para recepción de OTs desde SAP, Dynamics, Netsuite, etc.",
        ],
      },
    ],
    kpisMeasured: [
      "Tiempo de Ciclo (Cycle Time) vs Estándar",
      "Tasa de Cumplimiento de OTs a Tiempo (OTIF)",
      "Tiempo de Espera entre Procesos (WIP Time)",
      "Conformidad de Parámetros de Calidad %",
    ],
    clientQuote: {
      quote:
        "Con MTflow digitalizamos todas las inspecciones de calidad de la línea farmacéutica, eliminando 4 archivadores de papel por mes y acelerando las liberaciones de lote.",
      author: "Patricio Valverde",
      company: "Difem Laboratorios",
      role: "Director Técnico & Operaciones",
    },
    ctaText: "Solicitar Demo de MTflow",
  },
};

export const PRODUCT_LIST = Object.values(PRODUCTS);
