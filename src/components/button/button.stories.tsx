import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
    textColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const ButtonSmall = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ButtonSmall.args = {
  text: "small",
  size: "small",
};

export const ButtonMedium = Template.bind({});

ButtonMedium.args = {
  text: "medium",
  size: "medium",
};

export const ButtonLarge = Template.bind({});

ButtonLarge.args = {
  text: "large",
  size: "large",
};
