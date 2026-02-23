# GPhil - Web Application

GPhil is a web app that helps musicians practice or perform live an instrumental concerto with orchestral accompaniment. This is the Nuxt 3 port of the original Flutter application.

## Tech Stack

- **Framework:** [Nuxt 4](https://nuxt.com/) (Vue 3)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **State Management:** [Pinia](https://pinia.vuejs.org/)
- **CMS:** [Sanity](https://www.sanity.io/) (library data, scores)
- **UI Components:** [Nuxt UI](https://ui.nuxt.com/)
- **Deployment:** Netlify

## Setup

```bash
pnpm install
```

## Development

```bash
pnpm dev
```

## Production

```bash
pnpm build
pnpm preview
```

## Project Structure

```
app/
├── components/       # Vue components
│   ├── home/         # Landing page sections
│   └── icons/        # SVG icon components
├── layouts/          # Page layouts
├── pages/            # File-based routing
├── stores/           # Pinia stores
└── assets/           # CSS, fonts
```

## Links

- **Live site:** [g-phil.app](https://g-phil.app)
- **Web app:** [app.g-phil.app](https://app.g-phil.app)
- **App Store:** [GPhil on Apple App Store](https://apps.apple.com/us/app/gphil/id6740543718)
- **Microsoft Store:** [GPhil on Microsoft Store](https://apps.microsoft.com/store/detail/9PKKZ2P2DLDG)
