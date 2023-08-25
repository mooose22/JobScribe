import Wrapper from "../assets/wrappers/BigSidebar";
import NavLinks from "./NavLinks";
import { useAppContext } from "../context/appContext";
import Logo from "../components/Logo";

const BigSidebar = () => {
  const { showSidebar, toggleSidebar } = useAppContext();

  const smallLogoStyle = {
    width: "150px",
    height: "150px",
  };

  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container " : "sidebar-container show-sidebar"
        }
      >
        <div className="content">
          <header>
            <Logo style={smallLogoStyle} />
          </header>
          <NavLinks toggleSidebar={toggleSidebar} />
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar;
