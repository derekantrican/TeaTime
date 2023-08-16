import NavBar from "./NavBar";

export function Layout(props) {
    return (
      <div style={{height: '100%'}}>
        <NavBar />
        {props.children}
      </div>
    )
  }