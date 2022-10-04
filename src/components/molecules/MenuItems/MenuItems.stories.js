import MenuItems from "./MenuItems";
import { stories } from "helpers/storiesName";

export default {
  title: `${stories.molecules}MenuItems`,
  component: MenuItems,
};

const Template = (args) => <MenuItems {...args} />;

export const Default = Template.bind({});
