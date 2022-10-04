import Select from "./Select";
import { stories } from "helpers/storiesName";

export default {
  title: `${stories.atoms}Select`,
  component: Select,
};

const Template = (args) => <Select {...args} />;

export const Default = Template.bind({});
