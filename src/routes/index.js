// src/routes/index.js

import { useRoutes, Navigate } from 'react-router-dom';

// project import
import LoginRoutes from './LoginRoutes';
import MainRoutes from './MainRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([
    {
      path: '/',
      element: <Navigate to="/login" />
    },
    LoginRoutes,
    MainRoutes
  ]);
}
