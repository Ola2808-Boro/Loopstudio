import OpenMenu from "./OpenMenu";
import { stories } from "helpers/storiesName";

export default {
  title: `${stories.organisms}OpenMenu`,
  component: OpenMenu,
};
const Template = (args) => <OpenMenu {...args} />;

export const Default = Template.bind({});
