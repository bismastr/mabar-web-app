import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import App from './App.tsx'
import './index.css'
import { store } from './store.ts';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './app/login/page';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>

    </Provider>
  </StrictMode>,
)
