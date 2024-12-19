import { type RouteObject, createBrowserRouter, RouterProvider } from 'react-router-dom';
import { BaseRootComp } from './utils'

import {Root, ErrorPage} from "../app";
import {
    UsedCarFinder,
    Form,
    Result
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
            { path: 'used-car-finder/form', element: <Form /> },
            {
                path: 'used-car-finder/result/:annualSalary/:budget',
                element: <Result />,
                loader: ({params}: {
                    params: {
                        annualSalary: number;     // 연봉 입력 값
                        budget: number;           // 여유 예산 값
                    }
                }) => params || {annualSalary: 0, budget: 0}
            },
        ]
    },
];

/**
 * 라우터에 사용될 값으로 변경
 */
const router = createBrowserRouter(routerConf as RouteObject[]);

/**
 * 앱 라우터 컴포넌트
 */
export const AppRouter = () => {
    return <RouterProvider {...{router}} />
};