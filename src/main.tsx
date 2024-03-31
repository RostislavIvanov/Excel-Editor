import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ImportData from '~/pages/ImportData/ImportData.tsx';
import EditingData from '~/pages/EditingData/EditingData.tsx';
import Visualisation from '~/pages/Visualisation/Visualisation.tsx';
import ExportData from '~/pages/ExportData/ExportData.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <ImportData/>,
    },
    {
        path: '/editing',
        element: <EditingData/>,
    },
    {
        path: '/visualisation',
        element: <Visualisation/>,
    },
    {
        path: '/export',
        element: <ExportData/>,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
);
