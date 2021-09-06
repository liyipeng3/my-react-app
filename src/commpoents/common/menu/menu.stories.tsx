import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Menu} from './index';

export default {
    title: 'Example/Menu',
    component: Menu,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof Menu>;

// @ts-ignore
const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />;

export const Main = Template.bind({});
Main.args = {
    data: [{
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
    }],
};
