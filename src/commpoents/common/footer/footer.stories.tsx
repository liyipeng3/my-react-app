import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Footer} from './index';

export default {
    title: 'Example/Header',
    component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
