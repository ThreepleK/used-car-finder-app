export const ResultExpence = ({ type, annualSalary, budget }: {
    type: string;           // real, dream (현실, 희망 타입)
    annualSalary: number;   // 연봉
    budget: number;         // 예산
}) => {
    console.log(annualSalary, budget);
    return <>{type} 비용</>;
}