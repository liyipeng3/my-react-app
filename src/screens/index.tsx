import {Link} from "react-router-dom";
import './index.scss';
import {Menu} from "@/components/common/menu";
import {login} from "@/store/user";
import {useStoreDispatch} from "@/store/hooks";
import {useState} from "react";
// import CompState from "@/components/test/state";

export default function IndexScreen() {
    const dispatch = useStoreDispatch();
    const setUser = () => {
        dispatch(login({uid, username}))
    }
    const [uid, setUid] = useState(-1)
    const [username, setUsername] = useState('未登录')
    return (
        <div>
            <Menu data={[{
                title: 'title1',
                children: [
                    {title: 'title1-1', path: '/about'},
                    {title: 'title1-1', path: '/about'},
                    {title: 'title1-1', path: '/'},
                    {title: 'title1-1', path: '/'},
                    {title: 'title1-1', path: '/'}
                ]
            }, {
                title: 'title2',
                children: [
                    {title: 'title1-1', path: '/'},
                    {title: 'title1-1', path: '/'},
                    {title: 'title1-1', path: '/'}
                ]
            }, {
                title: 'title3',
                path: '/about'
            }, {
                title: 'title4'
            }]}/>
            <div className="hidden">Now in index</div>
            <Link to='/about'>about</Link>
            <div className='main'>
                <div className='box'>aa</div>
            </div>
            {/*<CompState/>*/}
            {/*<Counter />*/}
            uid: <input onChange={(e) => {
            setUid(Number(e.target.value))
        }}/>
            username: <input onChange={(e) => {
            setUsername(e.target.value)
        }}/>
            <button onClick={() => {
                setUser()
            }}>login</button>
        </div>
    )
}
