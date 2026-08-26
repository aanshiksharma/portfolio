# Personal Portfolio

This repository contains the source code for my personal developer portfolio.

I built it as both a place to present my work and an opportunity to explore frontend engineering, interaction design, performance, and visual direction.

Rather than following the usual developer-portfolio aesthetic, the portfolio takes a more editorial approach, using typography, whitespace, motion, and composition as important parts of the overall experience.

**[Live Portfolio](https://aanshiksharma.vercel.app)** · **[GitHub](https://github.com/aanshiksharma)** · **[LinkedIn](https://linkedin.com/in/aanshik-sharma)**

---

<!-- ## Preview -->

<!-- Add a screenshot or preview of the portfolio here. -->

<!-- ![Portfolio Preview](YOUR_SCREENSHOT_URL) -->

<!-- --- -->

## About

This is my personal developer portfolio, built to showcase my work, technical skills, and experience while giving me room to experiment with frontend engineering and visual design.

### Visual Direction

The portfolio takes an **editorial approach** rather than following the conventions of typical developer portfolios. Large display typography, generous whitespace, strong visual hierarchy, and carefully composed imagery form the foundation of the interface.

The visual system is intentionally restrained, using a limited palette, subtle contrast, and minimal decorative elements. Instead of relying on grids of cards and other common portfolio patterns, the layout uses scale, spacing, typography, and composition to give each section its own character.

### Continuous Development

This is an **ongoing personal project**. I continuously keep track of ideas, refinements, and technical improvements, implementing them over time as I find opportunities to make the portfolio better.

The goal is for the portfolio itself to reflect my approach to **design, engineering, and continuous improvement**.

---

## Built With

- **Next.js**
- **React**
- **Mongoose**
- **TailwindCSS**
- **GSAP**

---

## Technical Highlights

### Server-Side Data Caching

Portfolio data is cached after being retrieved from the server.

Because the content of a personal portfolio changes relatively infrequently, caching avoids repeatedly fetching the same data for every visitor. Once the cache has been populated, subsequent requests can generally be served without waiting for another request to the underlying data source.

The cache can be refreshed when the source data changes.

### Loading Experience

The portfolio uses an animated loading transition rather than simply removing the loader as soon as the data becomes available.

This is particularly useful when cached data makes the actual loading period extremely short. The transition remains intentional instead of allowing the interface to abruptly switch from a loading state to the finished page.

### Staging Environment

The project uses separate staging and production deployments through Vercel.

The `staging` branch is connected to the staging environment, while `main` represents the production environment.

This allows changes to be tested independently before being released to the live portfolio.

---

## Deployment

The portfolio is deployed using **Vercel**.

| Branch    | Environment |
| --------- | ----------- |
| `staging` | Staging     |
| `main`    | Production  |

Changes pushed to the respective branches are automatically deployed to their associated environments.

---

## Project Structure

<!-- Add the actual structure of your repository here once finalized. -->

```text
portfolio
├── app/
│   ├── _components/
│   │   ├── AboutSection/
│   │   ├── ContactSection/
│   │   ├── ProjectsSection/
│   │   ├── SkillsSection/
│   │   └── common/
│   └── hooks/
├── components/
├── config/
├── data/
├── lib/
│   └── queries/
├── models/
├── public/
│   └── favicon/
├── package.json
└── ...
```

---

## Author

**Aanshik**

- Portfolio: [https://aanshiksharma.vercel.app](https://aanshiksharma.vercel.app)
- GitHub: [https://github.com/aanshiksharma](https://github.com/aanshiksharma)
- LinkedIn: [https://linkedin.com/in/aanshik-sharma](https://linkedin.com/in/aanshik-sharma)

---

> This is a personal project and is primarily intended to showcase my work, design decisions, and approach to full stack development.
