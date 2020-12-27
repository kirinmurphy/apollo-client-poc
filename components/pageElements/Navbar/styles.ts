import styled from "styled-components";

export const SiteLogoTheme = styled.h1`
  font-size:var(--fontSize-title-medium);

  .svg-inline--fa {
    font-size:var(--fontSize-small);
    transform:translateY(-4px);
    color:#bbb;
  }

  a { color:var(--textcolor-base); 
    &:hover { 
      text-decoration:none; 

      .svg-inline--fa {
        color:var(--textcolor-base);
      }
    
    }
  }
`;

export const NavbarTheme = styled.nav`
  display:flex;
  justify-content: space-between;
  padding-bottom:1rem;
  margin-bottom:1rem;
  border-bottom:1px solid #ddd;

  .site-nav {
    display:flex;
  }
`;

export const UserControlsWrapper = styled.div`
  position:relative;
  z-index:11;
  transform:translateY(5px);
  
  > a {
    text-transform:uppercase;

    &:not(.button) {
      color:var(--textcolor-base);
    }
  }

  .sign-up {
    display:inline-block;
    margin-left:1rem;
    background-color:#759b88;
    line-height:2rem;
    padding:0 .75rem;

    &:hover {
      color:var(--textcolor-inverted);
      text-decoration:none;
      background-color:#556b78;
    }
  }

  .svg-inline--fa {
    font-size:1.75rem;
    transform:translateY(.2rem);
    color:var(--textcolor-link);
  }

  .dropdownizer__window {
    width:200px;
    font-size:var(--fontSize-small);
  }

  .user-details,
  .dropdownizer .dropdown-item {
    padding:.3rem 1rem;
  }
`;
