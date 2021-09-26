import React from 'react';

import './header.scss';
import {useStoreSelector} from "@/store/hooks";
import {selectUser} from "@/store/user";

interface HeaderProps {
    logo?: string
}

export const Header = ({logo = ""}: HeaderProps) => {
    const user = useStoreSelector(selectUser);

    return (
        <header>
            <div>
                {logo}
                <h1>lyp123</h1>
            </div>
            <span>{user.username}</span>
        </header>
    )
};
