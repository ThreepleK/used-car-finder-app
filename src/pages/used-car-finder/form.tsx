import { useState } from "react";

/**
 * 입력 컴포넌트
 */
const ProcessCompo = ({title, btnName, onSubmit}: {
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
                    type='number' placeholder='연봉'
                    value={annualSalary}
                    onChange={onBindAnnulSalary}
                />
                <span>만원</span>
            </label>
            {isShow && <>
                <label>
                    <input
                        type='number' placeholder='여유예산'
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

/**
 * 검증 컴포넌트
 */
const ValidationCompo = ({msg, isShow}: {
    msg: string;
    isShow: boolean;
}) => {
    return <>
        {isShow && <span className='msg-vali'>{msg}</span>}
    </>;
}

export const Form = () => {
    const [isValiShow, setIsValiShow] = useState(false);
    const [valiMsg, setValiMsg] = useState('');

    const onSubmit = (annualSalary: number, budget: number) => {
        // 연봉이 입력되지 않았을 경우
        if( annualSalary <= 0 ){
            setIsValiShow(true);
            setValiMsg('연봉을 입력해주세요.');
            return;
        }

        // 입력되지 않았을 때 검증 메시지 제거를 위함
        if( isValiShow ){
            setIsValiShow(false);
            setValiMsg('');
        }

        console.log('연봉', annualSalary);
        console.log('예산', budget);
    };

    return <>
        {/* 검증 메시지 */}
        <ValidationCompo isShow={isValiShow} msg={valiMsg} />

        <ProcessCompo
            title='나의 가치는?'
            btnName='내 드림카 보러가기'
            onSubmit={onSubmit}
        />

        <span className='msg-info'>* 재미로 알아볼 뿐 기재한 내용이 서버에 기록되지 않습니다.</span>
    </>;
}