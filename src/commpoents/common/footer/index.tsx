import React from 'react';

import './footer.css';

interface FooterProps {
    logo?: string
}

export const Footer = ({logo = ''}: FooterProps) => (
    <footer>
        <div className="wrapper">
          footer
        </div>
    </footer>
);
