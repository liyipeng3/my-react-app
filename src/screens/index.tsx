import {Link} from "react-router-dom";
import './index.scss';

export default function IndexScreen() {
    return (
        <div>
            <div>Now in index</div>
            <Link to='/about'>about</Link>
            <div className='main'>
                <div className='box'>aa</div>
            </div>
        </div>
    )
}
