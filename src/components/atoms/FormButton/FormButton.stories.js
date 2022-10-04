import FormButton from "./FormButton";
import { stories } from "helpers/storiesName";

export default {
  title: `${stories.atoms}FormButton`,
  component: FormButton,
  argTypes: {
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <FormButton {...args} />;

export const Default = Template.bind({
  size: "small",
});
