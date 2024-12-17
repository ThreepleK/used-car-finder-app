import { Link } from "react-router-dom";

export const UsedCarFinder = () => {
    return <>
        <div className="title">
            내 연봉으로<br />
            알아보는 드림카
        </div>
        <div className="btn-area">
            <Link to='/used-car-finder/form'>알아보기</Link>
        </div>
    </>
};