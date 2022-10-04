import Logo from "./Logo";
import { stories } from "helpers/storiesName";

export default {
  title: `${stories.atoms}Logo`,
  component: Logo,
};

const Template = (args) => <Logo {...args} />;

export const Default = Template.bind({});

Default.args = {
  color: "black",
};
