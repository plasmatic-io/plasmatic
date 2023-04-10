import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

/** A Primary button */
export const Primary: Story = {
  args: {
    primary: true,
  },
};

/** A secondary button */
export const Secondary: Story = {
  args: {
    primary: false,
  },
};
