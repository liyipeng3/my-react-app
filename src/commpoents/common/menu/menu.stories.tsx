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

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    label: 'Button',
};
