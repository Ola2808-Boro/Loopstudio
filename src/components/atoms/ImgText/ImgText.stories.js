import ImgText from "./ImgText";
import { stories } from "helpers/storiesName";

export default {
  title: `${stories.atoms}ImgText`,
  component: ImgText,
};

const Template = (args) => <ImgText {...args} />;

export const Default = Template.bind({});

Default.args = {
  imgText: "Text",
  color: "black",
  isProduct: false,
};
