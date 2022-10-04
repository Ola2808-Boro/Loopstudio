import Title from "./Title";
import { stories } from "helpers/storiesName";

export default {
  title: `${stories.atoms}Title`,
  component: Title,
};

const Template = (args) => <Title {...args} />;

export const Default = Template.bind({});

Default.args = {
  color: "black",
  title: "Title",
};
