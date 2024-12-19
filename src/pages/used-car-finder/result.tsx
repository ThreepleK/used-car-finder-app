import {useLoaderData} from 'react-router-dom';

//* 결과 주소에서 넘어올 데이터
interface LoaderData {
    annualSalary: number;   // 연봉
    budget: number;         // 예산
};

export const Result = () => {
    const {annualSalary, budget} = useLoaderData() as LoaderData;

    return <>
        결과
        연봉: {annualSalary}만원
        예산: {budget}만원
    </>;
}