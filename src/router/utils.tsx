import { Navigate, useResolvedPath} from 'react-router-dom';

/**
 * Root 페이지 리다이렉션을 위한 컴포넌트
 */
export const BaseRootComp = ({elem, redirect}: {
    elem: JSX.Element;      // Root 컴포넌트
    redirect: {
        checkPath: string;  // 리다이렉션 조건 경로
        movePath: string;   // 리다이렉션 이동 경로
    }
}) => {
    // 컨텐츠 구분 하기위한 값
    const pageCode = useResolvedPath({}).pathname.slice(1);

    // 리다이렉션 옵션 값
    const { checkPath, movePath } = redirect;

    // 리다이렉션 처리
    const loadPage = pageCode === checkPath
        ? <Navigate to={movePath} />
        : <>{elem}</>
    ;

    return <>{loadPage}</>;
}
