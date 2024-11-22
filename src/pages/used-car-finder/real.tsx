import { ChildBaseCompo } from "./index";

export const Real = () => {
    const onSubmit = (annualSalary: number, budget: number) => {
        console.log('연봉', annualSalary);
        console.log('예산', budget);
    };

    return <>
        <ChildBaseCompo
            title='현실편'
            btnName='내 현실카 보러가기'
            onSubmit={onSubmit}
        />
    </>;
}