import ErrorText from "./ErrorText";
import { stories } from "helpers/storiesName";
export default {
  title: `${stories.atoms}ErrorText`,
  component: ErrorText,
  argTypes: {
    text: "text",
  },
};
const Template = (args) => <ErrorText {...args} />;

export const Default = Template.bind({
  text: "Error",
});
