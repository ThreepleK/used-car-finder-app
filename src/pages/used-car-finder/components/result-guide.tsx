export const ResultGuide = ({ type, annualSalary, budget }: {
    type: string;           // real, dream (현실, 희망 타입)
    annualSalary: number;   // 연봉
    budget: number;         // 예산
}) => {
    const titleTxt = type === 'real' ? '현실적인' : '희망적인';
    console.log(type, annualSalary, budget);
    
    return <>
        <div className="guide-msg">
            AI가 바라본 {titleTxt} 가이드
        </div>
    </>;
}