import { Outlet, useResolvedPath } from 'react-router-dom'

export default () => {
    // 컨텐츠 구분 하기위한 값
    const pageCode = useResolvedPath({}).pathname.slice(1);

    return <>
        {/* 하위 메뉴 표기 용 */}
        <div className='appFrame' {...{path: pageCode}}>
            <Outlet />
        </div>
    </>;
}