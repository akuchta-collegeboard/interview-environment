import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TechAssistPortalRouter from './router.tsx';
import { RouterProvider } from 'react-router';

const router = TechAssistPortalRouter();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
