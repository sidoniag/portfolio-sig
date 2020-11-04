import React from "react";
import { Row } from "reactstrap";

function Nav(props) {
  const { categories = [], setCurrentCategory, currentCategory } = props;

  return (
      <Row>
        <nav>
          <ul className="flex-row">
            {categories.map((category) => (
              <li key={category.name}>
                <span
                  onClick={() => setCurrentCategory(category)}
                  className={`mx-2 ${
                    currentCategory.name === category.name && "navActive"
                  }`}
                >
                  {category.name}
                </span>
              </li>
            ))}
          </ul>
        </nav>
        </Row>
  );
}

export default Nav;
