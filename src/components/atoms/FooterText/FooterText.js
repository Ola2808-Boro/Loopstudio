import React, { useContext } from "react";
import { dataContext } from "providers/DataProvider";
import { StyledFooterText } from "components/atoms/FooterText/FooterText.styles";
const FooterText = () => {
  const { data } = useContext(dataContext);

  return <StyledFooterText>{data.footer.text}</StyledFooterText>;
};

export default FooterText;
