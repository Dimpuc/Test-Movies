import { SHeader, SHeaderLink, SHeaderLinkBlock, SHeaderTitle } from "./styled";

export const Header = () => {
  return (
    <SHeader>
      <SHeaderTitle>Movies App</SHeaderTitle>

      <SHeaderLinkBlock>
        <SHeaderLink to="/">Main Page</SHeaderLink>
        <SHeaderLink to="/moviesList">Movies Page</SHeaderLink>
      </SHeaderLinkBlock>
    </SHeader>
  );
};
