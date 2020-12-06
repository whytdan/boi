import React, { useContext } from "react";
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
import { LanguageContext } from "../../App";

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

  const langState = useContext(LanguageContext);

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
              {
                langState.lang === 'ru' ? 'О нас' : 
                langState.lang === 'kg' ? 'Биз жѳнүндѳ' : 
                'About us'
              }
              <IconButton
                aria-controls="about-us-menu"
                aria-haspopup="true"
                onClick={handleAboutUsClick}
                style={{ padding: "0" }}
              >
                <ArrowDropDownIcon color="primary" />
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
                {
                langState.lang === 'ru' ? 'Миссия' : 
                langState.lang === 'kg' ? 'Миссия' : 
                'Mission'
                }
                </NavLink>
              </MenuItem>

              <MenuItem>
                <NavLink to="/our-team" className={classes.menuLink}>
                  {
                  langState.lang === 'ru' ? 'Команда' : 
                  langState.lang === 'kg' ? 'Кызматкерлерибиз' : 
                  'Team'
                  }
                </NavLink>
              </MenuItem>

              <MenuItem>
                <NavLink to="/faq" className={classes.menuLink}>
                  {
                  langState.lang === 'ru' ? 'FAQ' : 
                  langState.lang === 'kg' ? 'Суроо-жооптор' : 
                  'FAQ'
                }
                </NavLink>
              </MenuItem>
            </Menu>


            {/* ----------------------------------- */}


            <p className="inner-nav-a" style={{marginTop: 3}}>
              {
                langState.lang === 'ru' ? 'Подать жалобу' : 
                langState.lang === 'kg' ? 'Арыз берүү' : 
                'Make a complaint'
              }
              <IconButton
                aria-controls="about-us-menu"
                aria-haspopup="true"
                onClick={handleComplaintClick}
                style={{ padding: "0" }}
              >
                <ArrowDropDownIcon color="primary" />
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
                  {
                  langState.lang === 'ru' ? 'Онлайн форма' : 
                  langState.lang === 'kg' ? 'Онлайн форма' : 
                  'Online form'
                  }
                </NavLink>
              </MenuItem>

              <MenuItem>
                <NavLink to="/eligibility" className={classes.menuLink}>
                  {
                  langState.lang === 'ru' ? 'Критерии жалоб' : 
                  langState.lang === 'kg' ? 'Критерийлер' : 
                  'Criterias'
                  }
                </NavLink>
              </MenuItem>
            </Menu>

            {/* ----------------------------------- */}

            <NavLink className="inner-nav-a" to="/consultation">
              {
                langState.lang === 'ru' ? 'Консультация' : 
                langState.lang === 'kg' ? 'Консультация' : 
                'Consultation'
              }
            </NavLink>

            <p className="inner-nav-a" style={{marginTop: 3}}>
              {
                langState.lang === 'ru' ? 'Отчеты' : 
                langState.lang === 'kg' ? 'Отчёттор' : 
                'Reports'
              }
              <IconButton
                aria-controls="reports-menu"
                aria-haspopup="true"
                onClick={handleReportsClick}
                style={{ padding: "0" }}
              >
                <ArrowDropDownIcon color="primary" />
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
                  {
                    langState.lang === 'ru' ? 'Годовые' : 
                    langState.lang === 'kg' ? 'Жылдык' : 
                    'Annual'
                  }
                </NavLink>
              </MenuItem>

              <MenuItem>
                <NavLink to="/quarter-reports" className={classes.menuLink}>
                  {
                    langState.lang === 'ru' ? 'Квартальные' : 
                    langState.lang === 'kg' ? 'Кварталдык' : 
                    'Quarter'
                  }
                </NavLink>
              </MenuItem>
            </Menu>

            <NavLink className="inner-nav-a" to="/cases">
              {
                langState.lang === 'ru' ? 'Кейсы' : 
                langState.lang === 'kg' ? 'Кейстер' : 
                'Cases'
              }
            </NavLink>

            <p className="inner-nav-a" style={{marginTop: 3}}>
              {
                langState.lang === 'ru' ? 'Пресс-центр' : 
                langState.lang === 'kg' ? 'Пресс-центр' : 
                'Press-center'
              }
              <IconButton
                aria-controls="press-center-menu"
                aria-haspopup="true"
                onClick={handlePressCenterClick}
                style={{ padding: "0" }}
              >
                <ArrowDropDownIcon color="primary" />
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
                  {
                    langState.lang === 'ru' ? 'Новости' : 
                    langState.lang === 'kg' ? 'Жаңылыктар' : 
                    'News'
                  }
                </NavLink>
              </MenuItem>

              <MenuItem>
                <NavLink to="/mass-media" className={classes.menuLink}>
                  {
                    langState.lang === 'ru' ? 'Сми о нас' : 
                    langState.lang === 'kg' ? 'Сми биз жѳнүндѳ' : 
                    'Mass media about us'
                  }
                </NavLink>
              </MenuItem>

              <MenuItem>
                <NavLink to="/media-materials" className={classes.menuLink}>
                  {
                    langState.lang === 'ru' ? 'Медиа материалы' : 
                    langState.lang === 'kg' ? 'Медиа материалдар' : 
                    'Media materials'
                  }
                </NavLink>
              </MenuItem>
            </Menu>

            <NavLink to="/contacts" className="inner-nav-a">
              {
                langState.lang === 'ru' ? 'Контакты' : 
                langState.lang === 'kg' ? 'Контакттар' : 
                'Contacts'
              }
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
              {
                langState.lang === 'ru' ? (<p>Языки</p>) :
                langState.lang === 'kg' ? (<p>Тилдер</p>) :
                (<p>Languages</p>)
              }
              
              <IconButton
                aria-controls="language-menu"
                aria-haspopup="true"
                onClick={handleClick}
                style={{ padding: "0" }}
              >
                <ArrowDropDownIcon color="primary" />
              </IconButton>
              <Menu
                id="language-menu"
                anchorEl={langDrop}
                keepMounted
                open={Boolean(langDrop)}
                onClose={handleClose}
                style={{top: 40}}
              >
                <MenuItem onClick={() => {
                  langState.setLang('ru')
                  handleClose()
                }}>РУС</MenuItem>
                <MenuItem onClick={() => {
                  langState.setLang('kg')
                  handleClose()
                }}>КЫР</MenuItem>
                <MenuItem onClick={() => {
                  langState.setLang('en')
                  handleClose()
                }}>ENG</MenuItem>
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
            {
                langState.lang === 'ru' ? (<ListItemText primary="Главная" />) : 
                langState.lang === 'kg' ? (<ListItemText primary="Башкы бет" />) : 
                (<ListItemText primary="Main" />)
            }
            </ListItem>
          </NavLink>

          <ListItem
            button
            key="AboutUsOptions"
            onClick={handleAboutUsSidebarDrop}
          >
            {
              langState.lang === 'ru' ? (<ListItemText primary="О нас" />) : 
              langState.lang === 'kg' ? (<ListItemText primary="Биз жѳнүндѳ" />) : 
              (<ListItemText primary="About us" />)
            }
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
                  {
                    langState.lang === 'ru' ? (
                      <ListItemText
                        primary="Миссия"
                        className={classes.nestedLink}
                      />
                    ) : 
                    langState.lang === 'kg' ? (
                      <ListItemText
                        primary="Миссия"
                        className={classes.nestedLink}
                      />
                    ) : 
                    (
                      <ListItemText
                        primary="Mission"
                        className={classes.nestedLink}
                      />
                    )
                  }
                </ListItem>
              </NavLink>

              <NavLink to="/our-team">
                <ListItem
                  button
                  key="about-us/our-team"
                  className={classes.nested}
                >
                  {
                    langState.lang === 'ru' ? (
                      <ListItemText
                        primary="Наша команда"
                        className={classes.nestedLink}
                      />
                    ) : 
                    langState.lang === 'kg' ? (
                      <ListItemText
                        primary="Кызматкерлерибиз"
                        className={classes.nestedLink}
                      />
                    ) : 
                    (
                      <ListItemText
                        primary="Team"
                        className={classes.nestedLink}
                      />
                    )
                  }
                </ListItem>
              </NavLink>

              <NavLink to="/faq">
                <ListItem button key="about-us/faq" className={classes.nested}>
                  {
                    langState.lang === 'ru' ? (
                      <ListItemText primary="FAQ" className={classes.nestedLink} />
                    ) : 
                    langState.lang === 'kg' ? (
                      <ListItemText primary="Суроо-жооптор" className={classes.nestedLink} />
                    ) : 
                    (
                      <ListItemText primary="FAQ" className={classes.nestedLink} />
                    )
                  }
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
            {
              langState.lang === 'ru' ? (<ListItemText primary="Подать жалобу" />) : 
              langState.lang === 'kg' ? (<ListItemText primary="Арыз берүү" />) : 
              (<ListItemText primary="Make a complaint" />)
            }
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
                  {
                    langState.lang === 'ru' ? (
                      <ListItemText
                        primary="Онлайн форма"
                        className={classes.nestedLink}
                      />
                    ) : 
                    langState.lang === 'kg' ? (
                      <ListItemText
                        primary="Онлайн форма"
                        className={classes.nestedLink}
                      />
                    ) : 
                    (
                      <ListItemText
                        primary="Online form"
                        className={classes.nestedLink}
                      />
                    )
                  }
                </ListItem>
              </NavLink>

              <NavLink to="/eligibility">
                <ListItem
                  button
                  key="/eligibility"
                  className={classes.nested}
                >
                  {
                    langState.lang === 'ru' ? (
                      <ListItemText
                        primary="Критерии жалоб"
                        className={classes.nestedLink}
                      />
                    ) : 
                    langState.lang === 'kg' ? (
                      <ListItemText
                        primary="Критерийлер"
                        className={classes.nestedLink}
                      />
                    ) : 
                    (
                      <ListItemText
                        primary="Criterias"
                        className={classes.nestedLink}
                      />
                    )
                  }
                </ListItem>
              </NavLink>
            </List>
          </Collapse>


          {/* --------------------------------- */}

          <NavLink to="/consultation" className={classes.menuLink}>
            <ListItem button key="Consultation">
              {
                langState.lang === 'ru' ? (<ListItemText primary="Консультация" />) : 
                langState.lang === 'kg' ? (<ListItemText primary="Консультация" />) : 
                (<ListItemText primary="Consultation" />)
              }
            </ListItem>
          </NavLink>

          <ListItem
            button
            key="CasesOptions"
            onClick={handleReportsSidebarDrop}
          >
            {
              langState.lang === 'ru' ? (<ListItemText primary="Отчеты" />) : 
              langState.lang === 'kg' ? (<ListItemText primary="Отчёттор" />) : 
              (<ListItemText primary="Reports" />)
            }
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
                  {
                    langState.lang === 'ru' ? (
                      <ListItemText
                        primary="Годовые отчеты"
                        className={classes.nestedLink}
                      />
                    ) : 
                    langState.lang === 'kg' ? (
                      <ListItemText
                        primary="Жылдык отчёттор"
                        className={classes.nestedLink}
                      />
                    ) : 
                    (
                      <ListItemText
                        primary="Annual reports"
                        className={classes.nestedLink}
                      />
                    )
                  }
                </ListItem>
              </NavLink>

              <NavLink to="/quarter-reports">
                <ListItem
                  button
                  key="/quarter-reports"
                  className={classes.nested}
                >
                  {
                    langState.lang === 'ru' ? (
                      <ListItemText
                        primary="Квартальные отчеты"
                        className={classes.nestedLink}
                      />
                    ) : 
                    langState.lang === 'kg' ? (
                      <ListItemText
                        primary="Кварталдык отчёттор"
                        className={classes.nestedLink}
                      />
                    ) : 
                    (
                      <ListItemText
                        primary="Quarter reports"
                        className={classes.nestedLink}
                      />
                    )
                  }
                </ListItem>
              </NavLink>
            </List>
          </Collapse>

          <NavLink to="/cases" className={classes.menuLink}>
            <ListItem button key="Cases">
              {
                langState.lang === 'ru' ? (<ListItemText primary="Кейсы" />) : 
                langState.lang === 'kg' ? (<ListItemText primary="Кейстер" />) : 
                (<ListItemText primary="Cases" />)
              }
            </ListItem>
          </NavLink>

          <ListItem
            button
            key="PressCenterOptions"
            onClick={handlePressCenterSidebarDrop}
          >
            {
              langState.lang === 'ru' ? (<ListItemText primary="Пресс-центр" />) : 
              langState.lang === 'kg' ? (<ListItemText primary="Пресс-центр" />) : 
              (<ListItemText primary="Press-center" />)
            }
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
                  {
                    langState.lang === 'ru' ? (
                      <ListItemText
                        primary="Новости"
                        className={classes.nestedLink}
                      />
                    ) : 
                    langState.lang === 'kg' ? (
                      <ListItemText
                        primary="Жаңылыктар"
                        className={classes.nestedLink}
                      />
                    ) : 
                    (
                      <ListItemText
                        primary="News"
                        className={classes.nestedLink}
                      />
                    )
                  }
                </ListItem>
              </NavLink>

              <NavLink to="/mass-media">
                <ListItem
                  button
                  key="/mass-media"
                  className={classes.nested}
                >
                  {
                    langState.lang === 'ru' ? (
                      <ListItemText
                        primary="Сми о нас"
                        className={classes.nestedLink}
                      />
                    ) : 
                    langState.lang === 'kg' ? (
                      <ListItemText
                        primary="Сми биз жѳнүндѳ"
                        className={classes.nestedLink}
                      />
                    ) : 
                    (
                      <ListItemText
                        primary="Mass media about us"
                        className={classes.nestedLink}
                      />
                    )
                  }
                </ListItem>
              </NavLink>

              <NavLink to="/media-materials">
                <ListItem
                  button
                  key="/media-materials"
                  className={classes.nested}
                >
                  {
                    langState.lang === 'ru' ? (
                      <ListItemText
                        primary="Медиа материалы"
                        className={classes.nestedLink}
                      />
                    ) : 
                    langState.lang === 'kg' ? (
                      <ListItemText
                        primary="Медиа материалдар"
                        className={classes.nestedLink}
                      />
                    ) : 
                    (
                      <ListItemText
                        primary="Media materials"
                        className={classes.nestedLink}
                      />
                    )
                  }
                </ListItem>
              </NavLink>
            </List>
          </Collapse>

          <NavLink to="/contacts" className={classes.menuLink}>
            <ListItem button key="Contacts">
              {
                langState.lang === 'ru' ? (<ListItemText primary="Контакты" />) : 
                langState.lang === 'kg' ? (<ListItemText primary="Контакттар" />) : 
                (<ListItemText primary="Contacts" />)
              }
            </ListItem>
          </NavLink>

        </List>
      </Drawer>
    </>
  );
}

