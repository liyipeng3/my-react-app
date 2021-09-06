import {Link} from "react-router-dom";
import './index.scss';
import {Menu} from "@/commpoents/common/menu";

export default function IndexScreen() {
    return (
        <div>
            <Menu data={[{
                title: 'title1',
                children: [
                    {title: 'title1-1'},
                    {title: 'title1-1'},
                    {title: 'title1-1'},
                    {title: 'title1-1'},
                    {title: 'title1-1'},
                ]
            },{
                title: 'title2',
                children:[
                    {title: 'title1-1'},
                    {title: 'title1-1'},
                    {title: 'title1-1'},
                ]
            },{
                title: 'title3'
            },{
                title: 'title4'
            }]} />
            <div>Now in index</div>
            <Link to='/about'>about</Link>
            <div className='main'>
                <div className='box'>aa</div>
            </div>
        </div>
    )
}
