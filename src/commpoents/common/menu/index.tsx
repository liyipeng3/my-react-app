import './menu.scss'
import {useState} from "react";

interface DataItem {
    title: string,
    children?: DataItem[]
}

interface MenuItem extends DataItem {
    index: string
}

interface MenuProps {
    data: DataItem[]
}

export const Menu = ({data}: MenuProps) => {
    const [currentIndex, setCurrentIndex] = useState('');
    const menus: MenuItem[] = data.map((item, index) => {
        const temp: MenuItem = item as MenuItem;
        temp.index = String(index + 1);
        temp.children && temp.children.map((childItem, childIndex) => {
            const childTemp: MenuItem = childItem as MenuItem;
            childTemp.index = `${index + 1}-${childIndex + 1}`;
            return childTemp
        })
        return temp;
    })
    return (
        <div>
            {
                menus.map(
                    ({index, title, children = []}) => (
                        <div key={index} id={index}>
                            <div onClick={()=>{setCurrentIndex(index===currentIndex?'':index)}}>{title}</div>
                            <div className={index === currentIndex ? '' : 'display-none'}>
                                {children?.map(({title}, index)=>(
                                    <div key={title + index}>{title}</div>
                                ))}
                            </div>
                        </div>
                    )
                )
            }
        </div>
    )
}
