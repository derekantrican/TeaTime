import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { useIsMobile } from '../hooks/isMobile';

export function NavBar() {
    const isMobile = useIsMobile();
    const [collapsed, setCollapsed] = useState(true);
    const [navBarHasHiddenOnce, setNavBarHasHiddenOnce] = useState(false); //Use this to make show we don't run the 'showNav' animation when the page first loads

    //------------------------------------------------------
    // useHideOnScrollDown and useDebounce taken from https://codesandbox.io/p/sandbox/hide-navbar-on-scroll-uj7uc
    const useHideOnScrollDown = () => {
      const [isVisible, setIsVisible] = useState(true);
      const [scrollY, setScrollY] = useState(0);
      const dbScrollY = useDebounce(scrollY, 100);
      
      const handleScroll = useCallback(() => {
        const cur = window.scrollY;
        const visible = dbScrollY > cur || cur < 10
        setIsVisible(visible);

        if (!visible) {
          setNavBarHasHiddenOnce(true);
        }

        setScrollY(cur);
      }, [dbScrollY]);
      
      useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, [handleScroll]);

      return isVisible;
    };
    
    const useDebounce = (value, delay) => {
      // State and setters for debounced value
      const [debouncedValue, setDebouncedValue] = useState(value);
      
      useEffect(
        () => {
          // Update debounced value after delay
          const handler = setTimeout(() => {
            setDebouncedValue(value);
          }, delay);
          // Cancel the timeout if value changes (also on delay change or unmount)
          // This is how we prevent debounced value from updating if value is changed ...
          // .. within the delay period. Timeout gets cleared and restarted.
          return () => {
            clearTimeout(handler);
          };
        },
        [value, delay] // Only re-call effect if value or delay changes
      );

      return debouncedValue;
    };

    const isVisible = useHideOnScrollDown();
    //------------------------------------------------------

    return (
        <nav className={`navbar navbar-dark bg-dark navbar-expand-lg fixed-top ${!isVisible ? 'hideNav' : navBarHasHiddenOnce ? 'showNav' : ''}`}>
            <Link className="navbar-brand" to="/">
                <img className="m-2" src='/images/icon.png' height='50' alt='Tea Time'/>
                Tea Time
            </Link>
            <button className="navbar-toggler me-2" onClick={() => setCollapsed(!collapsed)}>
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`${collapsed ? 'collapse' : ''} navbar-collapse me-2`} id="navbarCollapse">
                <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                    <NavLink name="Home" target="/" onClick={() => setCollapsed(true)}/>
                    <NavLink name="About" target="/about" onClick={() => setCollapsed(true)}/>
                    <NavLink name="Guidelines" target="/guidelines" onClick={() => setCollapsed(true)}/>
                    <NavLink name="Find a Group" target="/groups" onClick={() => setCollapsed(true)}/>
                    <a style={{alignSelf: isMobile ? '' : 'center'}} href='https://www.instagram.com/teatime.social' target='_blank' rel='noreferrer'>
                      <img className="m-2" height='32' src='/images/instagram.png' alt='instagram'/>
                    </a>
                </ul>
            </div>
        </nav>
    );
};

function NavLink(props) {
    return (
        <li className="nav-item m-2">
            <Link className="nav-link" style={{color: 'white'}} to={props.target} onClick={() => props.onClick()}>{props.name}</Link>
        </li>
    );
}

export default NavBar;