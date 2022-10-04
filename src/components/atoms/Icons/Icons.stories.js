import Icons from "./Icons";
import { stories } from "helpers/storiesName";

export default {
  title: `${stories.atoms}Icons`,
  component: Icons,
};

const Template = (args) => <Icons {...args} />;

export const Default = Template.bind({});

Default.args = {
  color: "black",
};
