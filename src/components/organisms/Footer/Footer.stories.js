import Footer from "./Footer";
import { stories } from "helpers/storiesName";

export default {
  title: `${stories.organisms}Footer`,
  component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const Default = Template.bind({});
