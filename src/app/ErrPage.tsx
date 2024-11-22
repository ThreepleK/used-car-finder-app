import { useRouteError } from "react-router-dom";

/**
 * 페이지 에러
 */
export default () => {
    const error: any = useRouteError();
    console.log(error);

    return <>
        <div className="err-page">
            <h1>웁스!!</h1>
            <p>{error.statusText || error.message}</p>
        </div>
    </>;
}