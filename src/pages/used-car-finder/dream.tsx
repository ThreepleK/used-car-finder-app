import { ChildBaseCompo } from "./index";

export const Dream = () => {
    const onSubmit = (annualSalary: number, budget: number) => {
        console.log('연봉', annualSalary);
        console.log('예산', budget);
    };

    return <>
        <ChildBaseCompo
            title='희망편'
            btnName='내 드림카 보러가기'
            onSubmit={onSubmit}
        />
    </>;
}