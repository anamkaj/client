import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter, ScrollRestoration } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/Redux/configStor'
import { QueryClient, QueryClientProvider } from 'react-query'
import { YMInitializer } from 'react-yandex-metrika'
import { HelmetProvider } from 'react-helmet-async'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <BrowserRouter>
          <YMInitializer
            accounts={[44879992]}
            options={{
              clickmap: true,
              trackLinks: true,
              accurateTrackBounce: true,
              webvisor: true,
              trackHash: true,
            }}
          />
          <HelmetProvider>
            <App />
          </HelmetProvider>
        </BrowserRouter>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
)
