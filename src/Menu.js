import React from "react";

const menuItems = [
  {
    name: "Roadkill Surprise",
    description:
      "Meat of the day (possibly an old shoe) seasoned with whatever was under the chef's fingernails.",
    price:
      "get Crazy Dan to take his meds (we recommend wrapping them in a slice of cheese)"
  },
  {
    name: "Miners' Stew",
    description: "Yesterday's leftovers, boiled to sterilize.",
    price:
      "get Crazy Dan to take a shower (we recommend waiting until his meds kick in)"
  },
  {
    name: "Lobster Bisque",
    description:
      "A playful bouquet of seafood and dairy flavors donated by master chef Jamie Oliver",
    price: "get Crazy Dan to stop peeing in the alley behind restaurant Fifteen"
  },
  {
    name: "Gazpacho",
    description: "Cold tomato soup, made from ketchup packets.",
    price: "steal some ketchup packets for tomorrow's gazpacho"
  }
];

class Menu extends React.Component {
  render() {
    //    const {name, description, price} = this.props
    return (
      <div className="menu" id="Menu">
        <ul className="list-group">
          {menuItems.map(item =>
            <li>
              <br />
              {item.name}: <br />
              {item.description}
              <br />price: <i>{item.price}</i>
              <br />
              <br />
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default Menu;
