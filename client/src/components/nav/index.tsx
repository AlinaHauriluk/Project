import React from "react";
import { List, ListItem, PageLink } from "./nav";

const Nav = () => {
  return (
    <List>
      <ListItem>
        <PageLink to="/">Home</PageLink>
      </ListItem>

      <ListItem>
        <PageLink to="/about">About</PageLink>
      </ListItem>

      <ListItem>
        <PageLink to="/menu">Menu</PageLink>
      </ListItem>

      <ListItem>
        <PageLink to="/cart">Your Cart</PageLink>
      </ListItem>

      <ListItem>
        <PageLink to="/profile">Your profile</PageLink>
      </ListItem>

      <ListItem>
        <PageLink to="/contacts">Contacts</PageLink>
      </ListItem>
    </List>
  );
};

export default Nav;
