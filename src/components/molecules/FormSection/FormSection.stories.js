import FormSection from "./FormSection";
import { stories } from "helpers/storiesName";

export default {
  title: `${stories.molecules}FormSection`,
  component: FormSection,
};

const Template = (args) => <FormSection {...args} />;

export const Default = Template.bind({});
