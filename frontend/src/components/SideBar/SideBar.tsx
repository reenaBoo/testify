import React from 'react';
import { StyledAside, StyledLink, LogOutButton, Logo, LinkIcon } from './SideBar.styles';
import { Container } from '../Containers/Containers.styles';
import { links } from '../../utils/contants';
import logo from '../../assets/images/logo.svg';
import logoutIcon from '../../assets/images/logout-icon.svg';

function SideBar() {
  return (
    <Container>
      <StyledAside pathProps>
        <Logo src={logo} />
        <Container column>
          {links.map(({ path, name, icon }, index) => (
            <StyledLink to={path} key={`link-${index}`}>
              <LinkIcon icon={icon} />
              {name}
            </StyledLink>
          ))}
        </Container>
        <LogOutButton>
          <LinkIcon icon={logoutIcon} />
          Log Out
        </LogOutButton>
      </StyledAside>
    </Container>
  );
}

export default SideBar;
