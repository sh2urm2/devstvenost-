# VTK Trible Trailer Inc. — Static Website

Навчальний проєкт. **Чиста статика — тільки HTML + CSS, нуль JavaScript.**

## Файли

```
vtk-trible-trailer/
├── index.html       ← Головна сторінка
├── services.html    ← Сервіси (Lab 05: Grid sidebar + content)
├── garage.html      ← Автопарк (Lab 05: auto-fill grid)
├── about.html       ← Про нас
├── checkout.html    ← Get a Quote (Lab 06: форма з валідацією)
└── assets/
    └── css/
        └── style.css  ← Всі стилі (Lab 03–07)
```

## Лабораторні

| Lab | Реалізовано |
|-----|-------------|
| 03 | `:root` змінні, Google Fonts, reset, `.btn` + `:hover` |
| 04 | Header flex, `main-nav ul` flex+gap, `.product-card` flex-column |
| 05 | `page-layout` grid 250px+1fr, `trucks-grid` auto-fill, `@media` |
| 06 | `fieldset/legend`, radio, checkbox, `pattern`, `:valid/:invalid` |
| 07 | Inline SVG (кошик, соцмережі), `menu-toggle` CSS-only |

## Публікація на GitHub Pages

```bash
git init
git add .
git commit -m "Initial commit: VTK Trible Trailer — Labs 03-07"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/vtk-trible-trailer.git
git push -u origin main
```

Потім: **Settings → Pages → Branch: main / root → Save**

Сайт буде на: `https://YOUR_USERNAME.github.io/vtk-trible-trailer/`
