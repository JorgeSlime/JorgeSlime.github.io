```markdown
# 📚 Biblioteca de Códigos Competitivos

**Una colección organizada de algoritmos y estructuras de datos para programación competitiva**, desplegada automáticamente desde GitHub. 

---

## 🚀 Características Principales

- **Códigos listos para usar**: Implementaciones en C++/Python/Java.
- **Búsqueda integrada**: Encuentra algoritmos rápidamente.
- **Sintaxis resaltada**: Gracias a Prism.js.
- **Responsive**: Funciona en móviles y escritorio.
- **Despliegue automático**: Con GitHub Pages.

---

## 🛠 Tecnologías

- **Framework**: [Astro](https://astro.build/) (sitio estático moderno).
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/) + CSS personalizado.
- **Hosting**: [GitHub Pages](https://pages.github.com/).
- **Herramientas**: 
  - Prism.js (resaltado de código).
  - GitHub Actions (CI/CD).

---

## ⚡️ Cómo Usar

### 1. Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/tu-repo.git
cd tu-repo
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Ejecutar localmente
```bash
npm run dev
```
Abre http://localhost:3000 en tu navegador.

---

## 🚀 Desplegar en GitHub Pages

1. **Configurar `astro.config.mjs`**:
   ```javascript
   export default defineConfig({
     site: 'https://tu-usuario.github.io',
     base: '/nombre-repo',
   });
   ```

2. **Hacer push a GitHub**:
   ```bash
   git push origin main
   ```

3. **Activar GitHub Pages**:
   - Ve a `Settings > Pages` en tu repositorio.
   - Selecciona la rama `main` y carpeta `dist`.

---

## 🪄 Estructura del Proyecto

```
.
├── src/
│   ├── pages/        # Páginas del sitio
│   ├── components/   # Componentes reutilizables
│   ├── layouts/      # Plantillas HTML
│   └── data/         # Metadatos de algoritmos
└── public/           # Assets estáticos
```

---

## 📄 Licencia

MIT License. Revisa el archivo [LICENSE](LICENSE).

---

## 👥 Contribuir

1. Haz fork del proyecto.
2. Crea una rama: `git checkout -b mi-algoritmo`.
3. Commits: `git commit -m 'Agrega X'`.
4. Push: `git push origin mi-algoritmo`.
5. Abre un Pull Request.

---

**✨ Preview**: [Ver sitio en vivo](https://jorgeslime.github.io/Slime-s-Library/)  
**🔧 Soporte**: Si tienes dudas, abre un *issue*.
```

---

### Notas:
1. Reemplaza `tu-usuario`, `tu-repo`, y enlaces según tu proyecto.
2. Agrega una captura de pantalla en `/public/preview.png` y un enlace en la sección **Preview**.
3. Personaliza la sección **Tecnologías** si usas herramientas adicionales.
