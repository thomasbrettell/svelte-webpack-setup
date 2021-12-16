import './normalize.scss';
import './global.scss';
import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    url: 'https://github.com/thomasbrettell/svelte-webpack-setup',
  },
});

export default app;
