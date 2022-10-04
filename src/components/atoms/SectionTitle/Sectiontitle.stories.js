import SectionTitle from "./SectionTitle";
import { stories } from "helpers/storiesName";

export default {
  title: `${stories.atoms}SectionTitle`,
  component: SectionTitle,
};

const Template = (args) => <SectionTitle {...args} />;

export const Default = Template.bind({});

Default.args = {
  details: "black",
  sectionTitle: "Title",
};
