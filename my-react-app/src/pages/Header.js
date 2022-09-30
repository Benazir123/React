import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <nav>
      <ul>
        <li>
          <Link to="/">Mounting Life  Cycle</Link>
        </li>
        <li>
          <Link to="updating">Updating Life  Cycle</Link>
        </li>
        <li>
          <Link to="unmounting">UnMounting Life  Cycle</Link>
        </li>
        <li>
          <Link to="jsx">JSX</Link>
        </li>
        <li>
          <Link to="stateandprops">State and Props</Link>
        </li>
        <li>
          <Link to="reactprops">React props</Link>
        </li>
        <li>
          <Link to="conditionalrendering">Conditional Rendering</Link>
        </li>
        <li>
          <Link to="inlineifwithlogical">Inline If with Logical</Link>
        </li>
        <li>
          <Link to="inlineifwithternary">Inline If with Ternary</Link>
        </li>
        <li>
          <Link to="listandkeys">List and Keys</Link>
        </li>
        <li>
          <Link to="hoc">HOC</Link>
        </li>
        <li>
          <Link to="hocCount">HOC another example with count</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
