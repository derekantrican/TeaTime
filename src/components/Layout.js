import NavBar from "./NavBar";

export function Layout(props) {
    return (
      <div style={{minHeight: '100%', backgroundColor: 'rgba(68, 25, 11, 0.9)', color: 'white'}}>
        <NavBar />
        {props.children}
      </div>
    );
}