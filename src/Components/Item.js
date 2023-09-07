import React from 'react';
// import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Items } from '../Data/ItemData';

function Item() {
  return (
    <div className="component">
      <h1>Item Page</h1>
      <ul className="item-list">
        {Items.map((ele) => (
          <Link to={ele.id} key={ele.id}>
            <li>{ele.title}</li>
          </Link>
        ))}

        {/* <Link to="/item/item1">
          <li>item1</li>
        </Link>
        <Link to="/item/item2">
          <li>item2</li>
        </Link>
        <Link to="/item/item3">
          <li>item3</li>
        </Link>
        <Link to="/item/item4">
          <li>item4</li>
        </Link> */}
      </ul>
    </div>
  );
}

export default Item;
