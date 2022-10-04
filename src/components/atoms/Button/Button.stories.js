import Button from "./Button";
import { stories } from "helpers/storiesName";

export default {
  title: `${stories.atoms}Button`,
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bond({});

Default.args = {
  text: "See all",
};
