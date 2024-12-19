import {useLoaderData} from 'react-router-dom';

import {ResultGuide, ResultChart, ResultExpence} from './components'

//* 결과 주소에서 넘어올 데이터
interface LoaderData {
    annualSalary: number;   // 연봉
    budget: number;         // 예산
};

//* 현실편
const ResultRealType = ({params}: {
    params: LoaderData
}) => {
    return <>
        <section className='real'>
            <strong>1. 현실편</strong>
            <ResultGuide {...{type: 'real', ...params}} />
            <ResultChart {...{type: 'real',  ...params}} />
            <ResultExpence {...{type: 'real', ...params}} />
        </section>
    </>;
}

//* 희망편
const ResultDreamType = ({params}: {
    params: LoaderData
}) => {
    return <>
        <section className='dream'>
            <strong>2. 희망편</strong>
            <ResultGuide {...{type: 'dream', ...params}} />
            <ResultChart {...{type: 'dream', ...params}} />
            <ResultExpence {...{type: 'dream', ...params}} />
        </section>
    </>;
}

export const Result = () => {
    const loaderData = useLoaderData() as LoaderData;
    const {annualSalary, budget} = loaderData;

    return <>

        <section className='info'>
            <div>
                <h1>
                    <span className='sub-msg'>내가 입력한</span>
                    <span className='main-msg'>AI 분석결과</span>
                </h1>
                <dl>
                    <dt>연봉</dt>
                    <dd>{annualSalary.toLocaleString('ko-KR')}만원</dd>
                </dl>
                <dl>
                    <dt>예산</dt>
                    <dd>{budget.toLocaleString('ko-KR')}만원</dd>
                </dl>
            </div>
        </section>

        <div className='img-car'></div>

        <section className='result-area'>
            <ResultRealType {...{params: loaderData}} />
            <ResultDreamType {...{params: loaderData}} />
        </section>
    </>;
}