import { useState } from "react";
import { Link } from "react-router-dom";

/**
 * 하위 컴포넌트 기본 베이스
 */
export const ChildBaseCompo = ({title, btnName, onSubmit}: {
    title: string;
    btnName: string;
    onSubmit: (annualSalary: number, budget: number) => void;
}) => {
    const [annualSalary, setAnnualSalary] = useState('');
    const [budget, setBudget] = useState('');
    const [isShow, setIsShow] = useState(false);

    // 연봉 변경 이벤트
    const onBindAnnulSalary = (e: any) => {
        const aSalary = e.target.value.trim();

        setAnnualSalary(aSalary);   // 연봉 입력 값 bind
        setIsShow(aSalary !== '');  // 예산 보임 여부 설정
    }

    // 예산 변경 이벤트
    const onBindBudget = (e: any) => {
        setBudget(e.target.value.trim());   // 예산 입력 값 bind
    }

    // 버튼 클릭
    const onBtnClick = () => {
        let tmpASalary = annualSalary.trim();
        let tmpBudget = budget.trim();

        // 입력 값 전달
        onSubmit(
            tmpASalary === '' ? 0 : Number(tmpASalary),
            tmpBudget === '' ? 0 : Number(tmpBudget)
        );
    }

    return <>
        <div className='title'>{title}</div>
        <form>
            <label>
                <input
                    type='number' placeholder='내 연봉은?'
                    value={annualSalary}
                    onChange={onBindAnnulSalary}
                />
                <span>만원</span>
            </label>
            {isShow && <>
                <label>
                    <input
                        type='number' placeholder='내 여유예산은?'
                        value={budget}
                        onChange={onBindBudget}
                    />
                    <span>만원</span>
                </label>
            </>}
        </form>
        <div className="btn-area">
            <button className="submit" onClick={onBtnClick}>{btnName}</button>
        </div>
    </>;
}

export const UsedCarFinder = () => {
    return <>
        <div className="title">
            내 연봉으로<br />
            현실적인 자동차는?
        </div>
        <div className="btn-area">
            <Link to='/used-car-finder/real' className="real">현실편</Link>
            <Link to='/used-car-finder/dream' className="dream">희망편</Link>
        </div>
    </>
};