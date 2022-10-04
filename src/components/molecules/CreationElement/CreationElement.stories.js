import CreationElement from "./CreationElement";
import { stories } from "helpers/storiesName";

export default {
  title: `${stories.molecules}CreationElement`,
  component: CreationElement,
};

const Template = (args) => <CreationElement {...args} />;

export const Default = Template.bind({});

Default.args = {
  data: {
    description: "Description",
    img: {
      url: "assets/images/mobile/image-curiosity.jpg",
    },
  },
  color: "black",
};
