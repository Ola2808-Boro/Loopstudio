import ProductElement from "./ProductElement";
import { stories } from "helpers/storiesName";

export default {
  title: `${stories.molecules} ProductElement`,
  component: ProductElement,
};

const Template = (args) => <ProductElement {...args} />;

export const Default = Template.bind({});

Default.args = {
  product: {
    Description:
      'Notebook Basic 15 with 2,80 GHz quad core, 15" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro',
    ProductPicUrl: "HT-1000.jpg",
    Status: "Available",
    Price: 956,
    Category: "Laptops",
    MainCategory: "Computer Systems",
    SupplierName: "Very Best Screens",
    WeightMeasure: 4.2,
    WeightUnit: "KG",
    Name: "Notebook Basic 18",
    Width: 28,
    Height: 2.5,
    DimUnit: "cm",
  },
  click: () => {},
};
