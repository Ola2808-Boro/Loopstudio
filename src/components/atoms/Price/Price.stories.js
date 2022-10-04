import PriceText from "./Price";
import { stories } from "helpers/storiesName";

export default {
  title: `${stories.atoms}Price`,
  component: PriceText,
};

const Template = (args) => <PriceText {...args} />;

export const Default = Template.bind({});

Default.args = {
  color: "black",
  price: "50",
  details: false,
};
