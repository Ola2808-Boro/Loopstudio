import FooterText from "./FooterText";
import withMock from "storybook-addon-mock";
import { stories } from "helpers/storiesName";
import { withReactContext } from "storybook-react-context";
import { dataContext } from "providers/DataProvider";
export default {
  title: `${stories.atoms}FooterText`,
  component: FooterText,
  decorators: [
    withReactContext({
      Context: dataContext,
      initialState: {
        data: {},
        setData: () => {},
        isClicked: false,
        setIsClicked: () => {},
        handleClick: () => {},
        products: {},
        setProducts: () => {},
        click: false,
        isClickedProductDetails: () => {},
      },
    }),
    withMock,
  ],
};

const Template = (args) => <FooterText {...args} />;

export const Default = Template.bind({});

Default.args = {
  data: {
    footer: {
      text: "text",
    },
  },
};

Default.parameters = {
  mockData: [
    {
      url: "https://jsonplaceholder.typicode.com/todos/1",
      method: "GET",
      status: 200,
      response: {
        data: "Hello storybook-addon-mock!",
      },
    },
  ],
};
