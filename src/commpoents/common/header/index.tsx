import React from 'react';

import './header.scss';

interface HeaderProps {
    logo?: string
}

export const Header = ({logo = ""}: HeaderProps) => (
    <header>
        <div className="wrapper">
            <div>
                {logo}
                <h1>lyp123</h1>
            </div>
        </div>
    </header>
);
