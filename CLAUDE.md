# InspiredInk — Prospectos Dev Guide

## Stack
Astro 6 + Tailwind (AstroWind base) + CSS tokens por cliente. Cada cliente: `src/data/[client].ts` + `src/pages/[client].astro`. Fase 1 = solo visual, formularios decorativos.

## Design Context — Irish Home Improvement LLC

### Users
Propietarios en Bridgeport y el Condado Fairfield, CT. El 80%+ ve el demo desde el teléfono mientras deciden si llamar. Su trabajo: evaluar confianza y pedir un estimado. Quieren sentir que el contratista llegará, hará buen trabajo y cobrará justo.

### Brand Personality
Irlandés · Familiar · Orgulloso. Cálido, enraizado en la comunidad, con identidad de herencia. Como un pub irlandés familiar que también construye decks excelentes: carácter, calor y trabajo directo sin pretensiones.

### Aesthetic Direction
Editorial + Heritage. Tipografía display serif con personalidad (Fraunces italic) contrastando con sans moderna limpia (DM Sans). Verde irlandés + ámbar cálido + crema/lino. Layouts asimétricos que se ven diseñados por una persona. Fotos reales de proyectos son críticas — cada placeholder grita "pon una foto real aquí."

Anti-referencias: SaaS landing pages genéricas, templates de Bootstrap para contractors, gradientes púrpura, glassmorphism, card grids de 3 columnas.

### Design Principles
1. **Heritage over hype**: La identidad irlandesa respira — verde, calor, carácter. Sin estética startup.
2. **Type as the star**: Cuando faltan fotos, la tipografía hace el trabajo visual. Grande, editorial, intencional.
3. **Asymmetry signals intent**: Romper grillas deliberadamente. Layouts que se ven diseñados por una persona.
4. **Copy sounds like John**: Directo, sin cadencia AI. Sin em-dashes. Sin frases como "done right" o "clean finish."
5. **Photo-first when ready**: Cada placeholder diseñado para recibir fotos reales — diseñar para las fotos, no alrededor de su ausencia.

## Impeccable Rules Applied
- Sin em-dashes en body copy (AI cadence tell)
- Sin dark glow (colored box-shadow en dark bg)
- Sin card grids genéricos para servicios
- Sin fuentes overused (Inter, Arial, system-ui como protagonista)
