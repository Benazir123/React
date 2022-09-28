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
      </ul>
    </nav>
  </header>
);

export default Header;
