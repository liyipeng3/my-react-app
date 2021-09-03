import {Link} from "react-router-dom";
import './index.less'

export default function IndexScreen() {
    return (
        <>
            <div>Now in index</div>
            <Link to='/about'>about</Link>
            <div className='main'>
                <div className='box'>aa</div>
            </div>
        </>
    )
}
