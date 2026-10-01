export interface FaqItem {
  id: string;
  category: "oee" | "hardware" | "roi" | "integracion" | "general";
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    id: "que-es-oee",
    category: "oee",
    question: "¿Qué es el OEE y por qué es vital para una planta industrial?",
    answer:
      "El OEE (Overall Equipment Effectiveness o Eficiencia General de los Equipos) es el estándar internacional para medir la productividad manufacturera. Se calcula multiplicando tres factores: Disponibilidad (tiempo operando vs planificado), Rendimiento (velocidad real vs nominal) y Calidad (piezas buenas vs producidas). Un OEE del 85% se considera de clase mundial; sin embargo, muchas plantas sin digitalizar operan entre un 45% y 60% sin saberlo debido a tiempos muertos y microparadas no registradas.",
  },
  {
    id: "como-se-instala-hardware",
    category: "hardware",
    question: "¿Cómo se conecta MT Solutions a máquinas antiguas o de distintas marcas?",
    answer:
      "MT Solutions utiliza una arquitectura agnóstica no invasiva. Instalamos un dispositivo adquisidor IoT (Edge Industrial) en el tablero de la máquina que puede leer señales eléctricas directas (relés, fotoceldas, encoders de velocidad) o comunicarse directamente con el PLC (Siemens, Rockwell, Omron, Schneider) vía Modbus, OPC-UA o Ethernet/IP. No requiere modificar el programa del PLC ni detener la producción de la planta por más de unas pocas horas.",
  },
  {
    id: "tiempo-implementacion",
    category: "general",
    question: "¿Cuánto tiempo toma implementar el sistema en una planta?",
    answer:
      "A diferencia de proyectos MES tradicionales que tardan de 6 a 12 meses, la suite SaaS de MT Solutions se implementa en cuestión de días o semanas. El piloto en las primeras líneas de producción suele estar operativo y transmitiendo datos en tiempo real en menos de 5 a 10 días laborables.",
  },
  {
    id: "integracion-erp",
    category: "integracion",
    question: "¿Se integra con sistemas ERP existentes como SAP, Oracle o QAD?",
    answer:
      "Sí. MT Solutions cuenta con una API REST robusta y conectores para intercambiar Órdenes de Fabricación (OTs), consumos de materia prima, artículos producidos y tiempos de parada con ERPs líderes del mercado como SAP S/4HANA / ECC, Oracle NetSuite, QAD, Microsoft Dynamics y dashboards en Microsoft Power BI.",
  },
  {
    id: "retorno-inversion",
    category: "roi",
    question: "¿Cuál es el tiempo de Retorno de Inversión (ROI) típico?",
    answer:
      "El ROI promedio de nuestros clientes se logra entre los 3 y 6 meses posteriores a la puesta en marcha. Al visibilizar las paradas no programadas y reducir mermas y tiempos muertos ocultos, las plantas suelen aumentar su OEE entre un 7% y un 20% en el primer trimestre, lo que se traduce en cientos de horas recuperadas de producción sin comprar nuevas máquinas.",
  },
  {
    id: "seguridad-datos",
    category: "general",
    question: "¿Cómo se resguardan la seguridad y confidencialidad de los datos?",
    answer:
      "Toda la comunicación entre los adquisidores IoT en planta y los servidores cloud está cifrada mediante certificados SSL/TLS de 256 bits. Contamos con políticas estrictas de aislamiento por cliente (multi-tenant seguro), backups automáticos diarios y cumplimiento de altos estándares de ciberseguridad industrial.",
  },
];
