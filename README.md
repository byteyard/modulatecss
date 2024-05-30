# Modulate CSS

The `modulatecss` package is designed to distribute ModulateCSS styles, providing a streamlined and scalable solution for modern web development. It allows developers to integrate a comprehensive CSS framework that enhances design consistency, maintainability, and responsiveness across web applications. This package supports both CDN and npm installation methods, making it versatile for different project setups. ModulateCSS leverages advanced CSS techniques such as Grid, Flexbox, and CSS custom properties, ensuring your web designs are robust and future-proof.

Read the docs under [modulatecss.com](https://modulatecss.com/).

## Features
- **Comprehensive Style Distribution:** Ensures consistent styling across your web projects.
- **Advanced CSS Techniques:** Utilizes modern CSS features like Grid, Flexbox, and custom properties.
- **Flexible Integration:** Supports installation via CDN or npm, adaptable to various project needs.
- **Scalable and Maintainable:** Promotes a clear separation of concerns and modular CSS structure for easier maintenance.
- **Responsive Design:** Implements fluid sizing and other responsive techniques to adapt seamlessly across devices.

## Installation
You can install `modulatecss` using npm:

```bash
npm install modulatecss
```

Or include it directly via CDN:

```html
<link href="https://cdn.jsdelivr.net/npm/modulate@1.0.0/dist/css/modulate.min.css" rel="stylesheet">
```

## Integration

Depending on the features you need, you can import different CSS files:

All:
```js
import 'modulatecss/dist/css/modulate.min.css';
```

Fluid Sizing Full:
```js
import 'modulatecss/dist/css/modulate-fluid-sizing.min.css';
```

Fluid Sizing Classic:
```js
import 'modulatecss/dist/css/modulate-fluid-sizing-classic.min.css';
```

Fluid Sizing Modern:
```js
import 'modulatecss/dist/css/modulate-fluid-sizing-modern.min.css';
```

Advanced Module Grid:
```js
import 'modulatecss/dist/css/modulate-grid.min.css';
```

Advanced Header:
```js
import 'modulatecss/dist/css/modulate-header.min.css';
```

Remember to replace 'modulatecss' with the path to your node_modules directory if you installed via npm, or with the CDN URL if you're using a CDN.


**Next.js:**

```javascript
import 'modulatecss/dist/css/modulate.min.css';
import '@styles/theme.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
```

**Angular:**

```json
{
  "projects": {
    "your-project-name": {
      "architect": {
        "build": {
          "options": {
            "styles": [
              "node_modules/modulatecss/dist/css/modulate.min.css",
              "styles/theme.css"
            ]
          }
        }
      }
    }
  }
}
```

**Vue.js:**

```javascript
import 'modulatecss/dist/css/modulate.min.css';
import 'styles/theme.css';

new Vue({
  render: h => h(App),
}).$mount('#app');
```

**Svelte:**

```javascript
import 'modulatecss/dist/css/modulate.min.css';
import 'styles/theme.css';

const app = new App({
  target: document.body,
});

export default app;
```

**Gatsby:**

```javascript
import 'modulatecss/dist/css/modulate.min.css';
import 'styles/theme.css';
```

## Repository
For more information, visit the [GitHub repository](https://github.com/byteyard/modulatecss).

## Issues
To report bugs or request features, please use the [issue tracker](https://github.com/byteyard/modulatecss/issues).

## License
This project is licensed under MIT.
