import React from "react";
import { List, ListItem, PageLink } from "./nav";

const Nav = () => {
  return (
     <List>
        <ListItem>
         <PageLink to="/">Home</PageLink>
        </ListItem>

        <ListItem>
         <PageLink to="/">About</PageLink>
        </ListItem>

        <ListItem>
         <PageLink to="/">Menu</PageLink>
        </ListItem>
                
        <ListItem>
         <PageLink to="/">Your Cart</PageLink>
        </ListItem>

        <ListItem>
         <PageLink to="/">Your profile</PageLink>   
        </ListItem>

        <ListItem>
         <PageLink to="/">Contacts</PageLink>    
        </ListItem>
      </List>
   )     
}

export default Nav