import ProductName from "./ProductName";
import { stories } from "helpers/storiesName";

export default {
  title: `${stories.atoms}ProductName`,
  component: ProductName,
};

const Template = (args) => <ProductName {...args} />;

export const Default = Template.bind({});

Default.args = {
  color: "black",
  productName: "Product Name",
};
