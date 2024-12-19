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
                        annualSalary?: string;     // 연봉 입력 값
                        budget?: string;           // 여유 예산 값
                    }
                }) => {
                    const res: any = {};
                    const items = params as any;

                    // 입력 값 전부 Number 타입으로 변환
                    for( const key in items ){
                        const val = Number(items[key]);
                        res[key] = isNaN(val) ? 0 : val; 
                    }

                    return res;
                }
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