import React from "react";
import boiRussianLogo from "../../images/logo_rus.png";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import {
  Collapse,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@material-ui/core";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Nav.module.css";
import clsx from "clsx";
import { ExpandLess, ExpandMore } from "@material-ui/icons";

export default function Nav(props) {
  const [langDrop, setLangDrop] = useState(null);
  const [aboutUsDrop, setAboutUsDrop] = useState(null);
  const [reportsDrop, setReportsDrop] = useState(null);
  const [pressCenterDrop, setPressCenterDrop] = useState(null);
  const [complaintDrop, setComplaintDrop] = useState(null);

  const [aboutUsSidebarDrop, setAboutUsSidebarDrop] = useState(false);
  const [reportsSidebarDrop, setReportsSidebarDrop] = useState(false);
  const [pressCenterSidebarDrop, setPressCenterSidebarDrop] = useState(false);
  const [complaintSidebarDrop, setComplaintSidebarDrop] = useState(false);

  const handleAboutUsSidebarDrop = () => {
    setAboutUsSidebarDrop(!aboutUsSidebarDrop);
  };

  const handleReportsSidebarDrop = () => {
    setReportsSidebarDrop(!reportsSidebarDrop);
  };

  const handlePressCenterSidebarDrop = () => {
    setPressCenterSidebarDrop(!pressCenterSidebarDrop);
  };

  const handleComplaintSidebarDrop = () => {
    setComplaintSidebarDrop(!complaintSidebarDrop);
  }

  const {
    sidebarClasses,
    theme,
    handleSidebarOpen,
    handleSidebarClose,
    openSidebar,
  } = props;

  const handleClick = (event) => {
    setLangDrop(event.currentTarget);
  };

  const handleAboutUsClick = (event) => {
    setAboutUsDrop(event.currentTarget);
  };

  const handleReportsClick = (event) => {
    setReportsDrop(event.currentTarget);
  };

  const handlePressCenterClick = (event) => {
    setPressCenterDrop(event.currentTarget);
  };

  const handleComplaintClick = (event) => {
    setComplaintDrop(event.currentTarget);
  }

  const handleClose = () => {
    setLangDrop(null);
  };

  const handleAboutUsClose = () => {
    setAboutUsDrop(null);
  };

  const handleReportsClose = () => {
    setReportsDrop(null);
  };

  const handlePressCenterClose = () => {
    setPressCenterDrop(null);
  };

  const handleComplaintClose = () => {
    setComplaintDrop(null);
  }

  return (
    <>
      <nav className="navbar">
        <div className="navbar-wrapper">
          <p className="nav-title">
            <NavLink className="logo" to="/">
              <img src={boiRussianLogo} alt="boi-logo" />
            </NavLink>
          </p>

          <div className="inner-navbar">
            <p className="inner-nav-a" style={{marginTop: 3}}>
              О нас
              <IconButton
                aria-controls="about-us-menu"
                aria-haspopup="true"
                onClick={handleAboutUsClick}
                style={{ padding: "0" }}
              >
                <ArrowDropDownIcon fontSize="medium" color="primary" />
              </IconButton>
            </p>
            <Menu
              id="about-us-menu"
              anchorEl={aboutUsDrop}
              keepMounted
              open={Boolean(aboutUsDrop)}
              onClose={handleAboutUsClose}
              style={{top: 40}}
            >
              <MenuItem>
                <NavLink to="/normative-base" className={classes.menuLink}>
                  Миссия
                </NavLink>
              </MenuItem>

              <MenuItem>
                <NavLink to="/our-team" className={classes.menuLink}>
                  Команда
                </NavLink>
              </MenuItem>

              <MenuItem>
                <NavLink to="/faq" className={classes.menuLink}>
                  FAQ
                </NavLink>
              </MenuItem>
            </Menu>


            {/* ----------------------------------- */}


            <p className="inner-nav-a" style={{marginTop: 3}}>
              Подать жалобу
              <IconButton
                aria-controls="about-us-menu"
                aria-haspopup="true"
                onClick={handleComplaintClick}
                style={{ padding: "0" }}
              >
                <ArrowDropDownIcon fontSize="medium" color="primary" />
              </IconButton>
            </p>
            <Menu
              id="about-us-menu"
              anchorEl={complaintDrop}
              keepMounted
              open={Boolean(complaintDrop)}
              onClose={handleComplaintClose}
              style={{top: 40}}
            >
              <MenuItem>
                <NavLink to="/complaint" className={classes.menuLink}>
                  Онлайн форма
                </NavLink>
              </MenuItem>

              <MenuItem>
                <NavLink to="/eligibility" className={classes.menuLink}>
                  Критерии жалоб
                </NavLink>
              </MenuItem>
            </Menu>

            {/* ----------------------------------- */}

            <NavLink className="inner-nav-a" to="/consultation">
              Консультация
            </NavLink>

            <p className="inner-nav-a" style={{marginTop: 3}}>
              Отчеты
              <IconButton
                aria-controls="reports-menu"
                aria-haspopup="true"
                onClick={handleReportsClick}
                style={{ padding: "0" }}
              >
                <ArrowDropDownIcon fontSize="medium" color="primary" />
              </IconButton>
            </p>

            <Menu
              id="reports-menu"
              anchorEl={reportsDrop}
              keepMounted
              open={Boolean(reportsDrop)}
              onClose={handleReportsClose}
              style={{top: 40}}
            >
              <MenuItem>
                <NavLink to="/annual-reports" className={classes.menuLink}>
                  Годовые
                </NavLink>
              </MenuItem>

              <MenuItem>
                <NavLink to="/quarter-reports" className={classes.menuLink}>
                  Квартальные
                </NavLink>
              </MenuItem>
            </Menu>

            <NavLink className="inner-nav-a" to="/cases">
              Кейсы
            </NavLink>

            <p className="inner-nav-a" style={{marginTop: 3}}>
              Пресс-центр
              <IconButton
                aria-controls="press-center-menu"
                aria-haspopup="true"
                onClick={handlePressCenterClick}
                style={{ padding: "0" }}
              >
                <ArrowDropDownIcon fontSize="medium" color="primary" />
              </IconButton>
            </p>
            <Menu
              id="reports-menu"
              anchorEl={pressCenterDrop}
              keepMounted
              open={Boolean(pressCenterDrop)}
              onClose={handlePressCenterClose}
              style={{top: 40}}
            >
              <MenuItem>
                <NavLink to="/news" className={classes.menuLink}>
                  Новости
                </NavLink>
              </MenuItem>

              <MenuItem>
                <NavLink to="/mass-media" className={classes.menuLink}>
                  Сми о нас
                </NavLink>
              </MenuItem>

              <MenuItem>
                <NavLink to="/media-materials" className={classes.menuLink}>
                  Медиа материалы
                </NavLink>
              </MenuItem>
            </Menu>

            <NavLink to="/contacts" className="inner-nav-a">
              Контакты
            </NavLink>

            {/* <a className="inner-nav-a" href="#contacts">
              Контакты
            </a> */}

            {/* <NavLink
              className="inner-nav-a"
              to="/complaint"
              style={{ color: "white" }}
              className="nav-button inner-nav-a"
            >
              Подать жалобу
            </NavLink> */}

            <div
              className="lang-dropdown"
              style={{ display: "flex", alignItems: "center" }}
            >
              <p>Языки</p>
              <IconButton
                aria-controls="language-menu"
                aria-haspopup="true"
                onClick={handleClick}
                style={{ padding: "0" }}
              >
                <ArrowDropDownIcon fontSize="medium" color="primary" />
              </IconButton>
              <Menu
                id="language-menu"
                anchorEl={langDrop}
                keepMounted
                open={Boolean(langDrop)}
                onClose={handleClose}
                style={{top: 40}}
              >
                <MenuItem onClick={handleClose}>РУС</MenuItem>
                <MenuItem onClick={handleClose}>КЫР</MenuItem>
                <MenuItem onClick={handleClose}>ENG</MenuItem>
              </Menu>
            </div>
          </div>
          <div className="menu-wrapper">
            <Toolbar style={{ padding: 0 }}>
              <IconButton
                color="primary"
                aria-label="open sidebar"
                edge="end"
                onClick={handleSidebarOpen}
                className={clsx(openSidebar && sidebarClasses.hide)}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </div>
        </div>
      </nav>
      <Drawer
        className={sidebarClasses.drawer}
        variant="persistent"
        anchor="right"
        open={openSidebar}
        classes={{
          paper: sidebarClasses.drawerPaper,
        }}
      >
        <div className={sidebarClasses.drawerHeader}>
          <IconButton onClick={handleSidebarClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <NavLink to="/" className={classes.menuLink}>
            <ListItem button key="Main Page">
              <ListItemText primary="Главная" />
            </ListItem>
          </NavLink>

          <ListItem
            button
            key="AboutUsOptions"
            onClick={handleAboutUsSidebarDrop}
          >
            <ListItemText primary="О нас" />
            {aboutUsSidebarDrop ? <ExpandLess /> : <ExpandMore />}
          </ListItem>

          <Collapse in={aboutUsSidebarDrop} timeout="auto" unmountOnExit>
            <List>
              <NavLink to="/normative-base">
                <ListItem
                  button
                  key="about-us/normative-base"
                  className={classes.nested}
                >
                  <ListItemText
                    primary="Миссия"
                    className={classes.nestedLink}
                  />
                </ListItem>
              </NavLink>

              <NavLink to="/our-team">
                <ListItem
                  button
                  key="about-us/our-team"
                  className={classes.nested}
                >
                  <ListItemText
                    primary="Наша команда"
                    className={classes.nestedLink}
                  />
                </ListItem>
              </NavLink>

              <NavLink to="/faq">
                <ListItem button key="about-us/faq" className={classes.nested}>
                  <ListItemText primary="FAQ" className={classes.nestedLink} />
                </ListItem>
              </NavLink>
            </List>
          </Collapse>


          {/* --------------------------------- */}

          <ListItem
            button
            key="ComplaintOptions"
            onClick={handleComplaintSidebarDrop}
          >
            <ListItemText primary="Подать жалобу" />
            {complaintSidebarDrop ? <ExpandLess /> : <ExpandMore />}
          </ListItem>

          <Collapse in={complaintSidebarDrop} timeout="auto" unmountOnExit>
            <List>
              <NavLink to="/complaint">
                <ListItem
                  button
                  key="/complaint"
                  className={classes.nested}
                >
                  <ListItemText
                    primary="Онлайн форма"
                    className={classes.nestedLink}
                  />
                </ListItem>
              </NavLink>

              <NavLink to="/eligibility">
                <ListItem
                  button
                  key="/eligibility"
                  className={classes.nested}
                >
                  <ListItemText
                    primary="Консультация"
                    className={classes.nestedLink}
                  />
                </ListItem>
              </NavLink>
            </List>
          </Collapse>


          {/* --------------------------------- */}

          <NavLink to="/consultation" className={classes.menuLink}>
            <ListItem button key="Consultation">
              <ListItemText primary="Консультация" />
            </ListItem>
          </NavLink>

          <ListItem
            button
            key="CasesOptions"
            onClick={handleReportsSidebarDrop}
          >
            <ListItemText primary="Отчеты" />
            {reportsSidebarDrop ? <ExpandLess /> : <ExpandMore />}
          </ListItem>

          <Collapse in={reportsSidebarDrop} timeout="auto" unmountOnExit>
            <List>
              <NavLink to="/annual-reports">
                <ListItem
                  button
                  key="/annual-reports"
                  className={classes.nested}
                >
                  <ListItemText
                    primary="Годовые отчеты"
                    className={classes.nestedLink}
                  />
                </ListItem>
              </NavLink>

              <NavLink to="/quarter-reports">
                <ListItem
                  button
                  key="/quarter-reports"
                  className={classes.nested}
                >
                  <ListItemText
                    primary="Квартальные отчеты"
                    className={classes.nestedLink}
                  />
                </ListItem>
              </NavLink>
            </List>
          </Collapse>

          <NavLink to="/cases" className={classes.menuLink}>
            <ListItem button key="Cases">
              <ListItemText primary="Кейсы" />
            </ListItem>
          </NavLink>

          <ListItem
            button
            key="PressCenterOptions"
            onClick={handlePressCenterSidebarDrop}
          >
            <ListItemText primary="Пресс-центр" />
            {pressCenterSidebarDrop ? <ExpandLess /> : <ExpandMore />}
          </ListItem>

          <Collapse in={pressCenterSidebarDrop} timeout="auto" unmountOnExit>
            <List>
              <NavLink to="/news">
                <ListItem
                  button
                  key="/news"
                  className={classes.nested}
                >
                  <ListItemText
                    primary="Новости"
                    className={classes.nestedLink}
                  />
                </ListItem>
              </NavLink>

              <NavLink to="/mass-media">
                <ListItem
                  button
                  key="/mass-media"
                  className={classes.nested}
                >
                  <ListItemText
                    primary="Сми о нас"
                    className={classes.nestedLink}
                  />
                </ListItem>
              </NavLink>

              <NavLink to="/media-materials">
                <ListItem
                  button
                  key="/media-materials"
                  className={classes.nested}
                >
                  <ListItemText
                    primary="Медиа материалы"
                    className={classes.nestedLink}
                  />
                </ListItem>
              </NavLink>
            </List>
          </Collapse>

          <NavLink to="/contacts" className={classes.menuLink}>
            <ListItem button key="Contacts">
              <ListItemText primary="Контакты" />
            </ListItem>
          </NavLink>

        </List>
      </Drawer>
    </>
  );
}

