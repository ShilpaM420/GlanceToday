/*import React from 'react'

import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"
import * as RiIcons from "react-icons/ri"
import * as BsIcons from "react-icons/bs"
import * as FaIcons from "react-icons/fa"

export const SidebarData = [
   
    {
        title: 'Home',
        path:'/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text' 
    },
    {
        title: 'Signup',
        path:'/Signup',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text' 
    },
    {
        title: 'Recent',
        path:'/recent',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text' 
    },
    {
        title: 'Category',
        path:'/Category',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text',
        
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
              title: "India",
              path: "/Category/Category1",
              icon: <IoIcons.IoIosPaper />,
              cName: "sub-nav",
            },
            {
              title: "Entertainment",
              path: "/Category/Category2",
              icon: <IoIcons.IoIosPaper />,
              cName: "sub-nav",
            },
            {
              title: "Sports",
              path: "/Category/Category3",
              icon: <IoIcons.IoIosPaper />,
            },
          ],
        },
    
    {
        title: 'History',
        path:'/history',
        icon: <FaIcons.FaHireAHelper />,
        cName: 'nav-text' 
    },
    {
        title: 'Saved',
        path:'/saved',
        icon: <BsIcons.BsFillBookmarkFill />,
        cName: 'nav-text' 
    },
    {
        title: "About",
        path: "/About",
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
        },
        {
            title: "Contact",
            path: "/Contact",
            icon: <AiIcons.AiFillHome />,
            cName: 'nav-text'
            }
];
*/

import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
// import InboxIcon from "@material-ui/icons/MoveToInbox";
// import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu"; // added

import {
  createMuiTheme,
  ThemeProvider,
  useMediaQuery,
} from "@material-ui/core"; // added

import categories from "../layout/data/Category";

const useStyles = makeStyles({
  list: {
    width: 200, // changed
    paddingLeft: 10, // changed
    paddingRight: 5, //changed
  
  },
  fullList: {
    width: "auto",
  },
});

export default function SwipeableTemporaryDrawer({ setCategory }) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  //---------------------------------------------------
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );
  //----------------------------------------------------

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>Categories</ListItem>
      </List>
      <Divider />
      <List>
        {categories.map((text, index) => (
          <ListItem
            style={{ height: 40, borderRadius: 3 }}
            button
            onClick={() => setCategory(text)}
            key={text}
          >
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
      {['About', 'Contact'].map((text, index) => (
          <ListItem button key={text}>
           
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <Button onClick={toggleDrawer("left", true)}>
        {/* added icon */}
        <MenuIcon />
      </Button>
      {/* added */}
      <ThemeProvider theme={theme}>
        <SwipeableDrawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
          onOpen={toggleDrawer("left", true)}
        >
          {list("left")}
        </SwipeableDrawer>
      </ThemeProvider>
    </div>
  );
}