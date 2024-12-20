import { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';

//* 차트 구현을 위한 임시 DB
const _TMP_DATA_LIST = [
    {grade: '10', salary:  2000, mainItem: '대중교통'},
    {grade:  '9', salary:  3000, mainItem: '모닝'},
    {grade:  '8', salary:  4000, mainItem: 'K3'},
    {grade:  '7', salary:  5000, mainItem: '더 뉴 아반떼'},
    {grade:  '6', salary:  6000, mainItem: '소나타 디 엣지'},
    {grade:  '5', salary:  7000, mainItem: 'K8'},
    {grade:  '4', salary:  8000, mainItem: '산타페'},
    {grade:  '3', salary: 10000, mainItem: '디 올 뉴 그랜저'},
    {grade:  '2', salary: 15000, mainItem: '아이오닉 6'},
    {grade:  '1', salary: 20000, mainItem: '3 Series'},
    {grade:  '0', salary: 30000, mainItem: 'GV80'},
];

export const ResultChart = ({ type, annualSalary, budget }: {
    type: string;           // real, dream (현실, 희망 타입)
    annualSalary: number;   // 연봉
    budget: number;         // 예산
}) => {
    // 차트 옵션
    const [option, setOption] = useState({} as any);

    //* 초기 차트 설정
    useEffect(() => {

        // 현실, 희망에 따른 총 사용예산 설정
        const totalBudget = type === 'real'
            ? annualSalary
            : annualSalary + budget
        ;

        // 현실, 희망에 따른 색상 테마
        const {main: mColor, sub: sColor} = ((type: string) => {
            switch( type ){
                case 'dream': return {main: '#ff8100', sub: '#fbdec0'};
                default:      return {main: '#05976a', sub: '#d7ede3'};
            }
        })(type);

        //* x축 카테고리
        const category: any = [];
        //* y축 데이터
        const data: any = [];
        //* 예산에 따른 표기할 포인트
        const markPoint = {
            value: ''       as string,          // 표기 할 내용
            xAxis: ''       as string,          // 차트 x축
            yAxis: 0        as number,          // 차트 y축
            symbolRotate: 0 as number,          // 회전 값
            symbolOffset: [0, 0] as any[],      // 오프셋
        };
        //* 표기 포인트 사용 여부
        let isPoint = false;

        // 임시 데이터를 기준으로 x, y축 / 포인트 값 설정
        _TMP_DATA_LIST.forEach((r: any, idx: number) => {
            // 카테고리
            category.push(r.grade);

            // 값
            ((value: number) => {
                // 예산에 포함 되어 있을 경우
                if( !isPoint && totalBudget < value ){
                    isPoint = true;

                    // 바 차트 위에 표기할 포인트
                    markPoint.value = `${r.mainItem}`;
                    markPoint.xAxis = r.grade;
                    markPoint.yAxis = value;

                    // 바 차트 스타일
                    data.push({
                        value,
                        itemStyle: { color: mColor }
                    });

                    return;
                }
                // 예산이 이미 데이터를 초과할 경우
                else if( !isPoint && idx === _TMP_DATA_LIST.length-1 ){
                    isPoint = true;

                    // 바 차트 위에 표기할 포인트
                    markPoint.value = `${r.mainItem}`;
                    markPoint.xAxis = r.grade;
                    markPoint.yAxis = value;
                    markPoint.symbolRotate = 160;
                    markPoint.symbolOffset = [-40, 10];

                    // 바 차트 스타일
                    data.push({
                        value,
                        itemStyle: { color: mColor }
                    });

                    return;
                }

                data.push({
                    value,
                    itemStyle: { color: '#eee' }
                });
            })(r.salary);
        });

        // 차트에 적용할 최종 옵션 설정
        setOption({
            xAxis: {
                type: 'category',
                data: category,
                axisLabel: {
                    rotate: -45,
                    fontSize: 10,
                    margin: 8,
                    padding: [0, 0, 0, -1],
                    formatter: ( value: string ) => `${value} 등급`
                }
            },
            yAxis: {
                type: 'value'
            },
            grid: {
                top: 20,
                left: 50,
                right: 20,
                bottom: 50,
            },
            series: [{
                type: 'bar',
                label: { show: false },
                data: data,
                silent: true,
                markPoint: {
                    data: [{
                        ...markPoint,
                        silent: true,
                        symbol: 'pin',
                        symbolSize: 30,
                        itemStyle: {
                            color: 'transparent'
                        },
                        label: {
                            color: '#fff',
                            textBorderWidth: 3,
                            textBorderColor: mColor,
                            backgroundColor: mColor,
                            borderRadius: 8,
                            padding: [0, 5, 2, 5],
                            height: 16,
                            lineHeight: 12,
                            fontSize: 12,
                            verticalAlign: 'bottom'
                        }
                    }]
                }
            }]
        });
    }, []);

    return <ReactECharts option={option}/>;
}