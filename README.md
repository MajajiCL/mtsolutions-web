# 🏭 MT Solutions — Software OEE & IoT Industrial (Nueva Versión)

> Nueva versión moderna, ultrarrápida y optimizada para SEO del sitio corporativo de **[MT Solutions](https://mtsolutions.io/)**, pioneros en medición de OEE, pesaje industrial digital y eficiencia energética desde 2009.

---

## 🚀 Tecnologías y Stack

* **Framework:** Next.js 15+ (App Router con Server Components y SSG)
* **Lenguaje:** TypeScript
* **Estilos:** Tailwind CSS v4 (Tema Industrial Dark Cyber, Glassmorphism, Paleta de Telemetría)
* **Iconografía:** Lucide Icons
* **Optimización SEO:**
  * Metadatos dinámicos OpenGraph & Twitter Cards.
  * `sitemap.xml` dinámico y `robots.txt` automatizados.
  * Marcado semántico estructurado **Schema.org JSON-LD**:
    * `Organization` (con datos de contacto multi-país y redes).
    * `WebSite` con SearchAction.
    * `SoftwareApplication` & `Product` en cada módulo de la suite.
    * `FAQPage` para preguntas frecuentes indexables en Google.
    * `BreadcrumbList` jerárquico.
    * `TechArticle` / `BlogPosting` para artículos técnicos.

---

## 📦 Estructura de Páginas y Módulos

* **`/` (Inicio):**
  * **Hero Section:** Propuesta de valor industrial con llamadas a la acción claras.
  * **Simulador de Telemetría en Vivo:** Widget interactivo que simula en tiempo real Disponibilidad, Rendimiento, Calidad, OEE y detección de paradas.
  * **Calculadora Interactiva de ROI & OEE:** Permite a los directores de planta ajustar turnos, máquinas y costos por hora para proyectar el ahorro y ganancias anuales recuperables.
  * **Nuestra Suite:** Pestañas interactivas para alternar entre MTcontrol, MTweight, MTenergy y MTflow.
  * **Arquitectura en 4 Pasos:** De la señal física y PLC a la nube y dashboards Andon.
  * **Casos de Éxito Reales:** Testimonios con métricas cuantitativas (Viña Concha y Toro, Degasa, Anasac, Difem).
  * **Ecosistema de Integraciones:** SAP S/4HANA, Oracle, QAD, Power BI, Siemens, Modbus, OPC-UA.
  * **FAQ con Schema.org:** Respuestas enriquecidas para posicionamiento en motores de búsqueda.
* **`/suite`:** Catálogo general de los 4 módulos.
* **`/suite/[slug]`:** Páginas dedicadas de producto (`mtcontrol`, `mtweight`, `mtenergy`, `mtflow`) con especificaciones de hardware y KPIs medidos.
* **`/beneficios`:** Análisis de las 6 Grandes Pérdidas de Manufactura y tabla comparativa "Antes vs Con MT Solutions".
* **`/empresa`:** Historia desde 2009, hitos de crecimiento y presencia en 7 países (Chile, Brasil, México, Colombia, Perú, Argentina, EE.UU.).
* **`/partners`:** Programa de Partners con niveles *Promotor* y *Distribuidor* (comisiones de hasta 40%).
* **`/blog` & `/blog/[slug]`:** Artículos técnicos de Industria 4.0, OEE y gestión energética listos para indexación orgánica.
* **`/contacto`:** Formulario de captura de leads calificados por país y líneas de atención telefónica directas.

---

## 🛠️ Comandos de Desarrollo

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción y verificar SSG
npm run build

# Iniciar servidor de producción
npm run start
```

---

## 🔗 Cómo subir este proyecto a tu GitHub

1. **Crea un nuevo repositorio en GitHub** (por ejemplo: `mtsolutions-web` o `mtsolutions-oee`).
2. Abre la terminal en esta carpeta (`mtsolutions-web`) y ejecuta:

```bash
# Agregar todos los cambios al commit inicial
git add .
git commit -m "feat: modern MT Solutions web app with OEE calculator, live telemetry simulator and full SEO schema"

# Renombrar rama principal a main si es necesario
git branch -M main

# Vincular con tu repositorio de GitHub (reemplaza con tu URL de GitHub)
git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git

# Subir al repositorio
git push -u origin main
```

---

## 🌐 Despliegue en 1 Click

El proyecto está 100% optimizado para desplegarse de manera instantánea en:
* **Vercel:** Importa el repositorio de GitHub y presiona *Deploy*.
* **Netlify / Cloudflare Pages:** Compatible con `npm run build` y salida estática/serverless.
