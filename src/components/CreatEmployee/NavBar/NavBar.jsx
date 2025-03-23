import { Navbar, Logo, LogoImage } from "./NavBar.styled";

function NavBar() {
  return (
    <Navbar data-testid="navbar">
      <Logo>
        <LogoImage src="/logo.PNG" alt="logo du site" />
        <h1>Wealth Health</h1>
      </Logo>
    </Navbar>
  );
}

export default NavBar;
