import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { BaseRootComp } from './utils'

import {Root, ErrorPage} from "../app";
import {
    UsedCarFinder,
    Dream, Real
} from "../pages";


/**
 * 라우터 설정 값
 */
const routerConf = [
    {
        path: '/',
        element: <BaseRootComp
            elem={<Root/>}
            redirect={{
                checkPath: '',
                movePath: '/used-car-finder'
            }}
        />,
        errorElement: <ErrorPage />,
        children: [
            { path: 'used-car-finder', element: <UsedCarFinder />, index: true },
            { path: 'used-car-finder/dream', element: <Dream /> },
            { path: 'used-car-finder/real', element: <Real /> },
        ]
    },
];

/**
 * 라우터에 사용될 값으로 변경
 */
const router = createBrowserRouter(routerConf);

/**
 * 앱 라우터 컴포넌트
 */
export const AppRouter = () => {
    return <RouterProvider {...{router}} />
};