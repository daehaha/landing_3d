import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
const meta: Meta<typeof Card> = {
	title: 'ui/Card',
	component:Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Basic: Story = {
	args: {
		//basic args here 
	},
};
