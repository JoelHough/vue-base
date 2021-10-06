import vueRouter from 'storybook-vue3-router'
import { action } from '@storybook/addon-actions'

export const parameters = {
  actions: {
    argTypesRegex: "^on[A-Z].*",
    argTypes: { onClick: { action: 'clicked' } },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  vueRouter([{ path: '/:pathMatch(.*)*', name: 'CatchAll' }], (to, from) => {action('ROUTE CHANGED')({ to: to, from: from }); return false;}),
]