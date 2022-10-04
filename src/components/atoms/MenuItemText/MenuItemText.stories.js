import MenuItemText from "./MenuItemText";
import { stories } from "helpers/storiesName";
import { withRouter } from "storybook-addon-react-router-v6";

export default {
  title: `${stories.atoms}MenuItemText`,
  component: MenuItemText,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: "/home",
    },
  },
};

const Template = (args) => <MenuItemText {...args} />;

export const Default = Template.bind({});

Default.args = {
  isOpen: false,
  data: {
    menuitem: "menu",
  },
};
