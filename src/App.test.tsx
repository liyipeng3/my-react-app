import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';
import {store} from "@/store";
import {Provider} from "react-redux";

test('renders learn react link', () => {
    render(<Provider store={store}><App /></Provider>);
    const linkElement = screen.getAllByText(/lyp123/i);
    expect(linkElement[0]).toBeInTheDocument();
});
