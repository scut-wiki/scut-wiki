import { h } from 'vue';
import DefaultTheme from 'vitepress/theme';
import PageContributors from './components/PageContributors.vue';
import RecentUpdates from './components/RecentUpdates.vue';
import './style.css';

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'doc-footer-before': () => h(PageContributors),
    });
  },
  enhanceApp({ app }) {
    app.component('RecentUpdates', RecentUpdates);
  },
};
