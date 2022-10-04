import Input from "./Input";
import { stories } from "helpers/storiesName";

export default {
  title: `${stories.atoms}Input`,
  component: Input,
  argTypes: {
    size: {
      options: ["s", "m", "l"],
      control: { type: "radio" },
    },
  },
};
const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});

Default.args = {
  size: "s",
  register: () => {},
};
