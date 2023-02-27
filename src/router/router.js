import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Privacy from '../pages/Privacy/Privacy';
import Terms from '../pages/Terms/Terms';

const router = createBrowserRouter([
    {path: '/', element: <Home/>},
    {path: '/home', element: <Home/>},
    {path: '/privacy-policy', element: <Privacy/>},
    {path: '/terms-conditions', element: <Terms/>},
])

export default router;