import {Link} from "react-router-dom";
import {IndexWrapper} from "./index.style";

export default function IndexScreen() {
    return (
        <IndexWrapper>
            <div>Now in index</div>
            <Link to='/about'>about</Link>
            <div className='main'>
                <div className='box'>aa</div>
            </div>
        </IndexWrapper>
    )
}