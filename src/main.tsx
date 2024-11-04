import { createRoot } from 'react-dom/client'
import { App } from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import { GlobalStyle } from "./style/global.ts";

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>
)