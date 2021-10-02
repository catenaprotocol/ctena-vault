import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import Menu from '@material-ui/icons/Menu';
import Close from '@material-ui/icons/Close';
import WbSunny from '@material-ui/icons/WbSunny';
import NightsStay from '@material-ui/icons/NightsStay';
import { getNetworkBuyUrl } from '../../features/helpers/getNetworkData';
import styles from './styles';

const useStyles = makeStyles(styles);

const Header = ({ links, isNightMode, setNightMode }) => {
  const { chain } = useParams();

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const classes = useStyles();
  const { t } = useTranslation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar className={`${classes.appBar} ${classes.dark}`} position="relative">
      <Toolbar className={classes.container}>
        <Link to={`/${chain}`}>
          <Button className={classes.title}>
            <Hidden xsDown>
              <img
                alt="RIBBON"
                src={require(`images/BIFI-logo.svg`)}
                height={'40px'}
                className={classes.logo}
              />
              ctena.finance
            </Hidden>
            <Hidden smUp>
              <img
                alt="RIBBON"
                src={require(`images/BIFI-logo.svg`)}
                height={'35px'}
                className={classes.logo}
              />
            </Hidden>
          </Button>
        </Link>

        <div className={classes.middleNav}>
          <Hidden smDown>
            {/* {renderLink('vote', 'vote', 'vote-yea', classes)} */}
            {/*             {renderLink('dashboard', t('stats'), 'chart-bar', classes)}
             */}{' '}
            {renderLink('docs', 'docs', 'book', classes)}
            {renderLink('governance', 'gov', 'landmark', classes)}
          </Hidden>
          {renderLink('buy', t('buy'), 'dollar-sign', classes)}
          <Link className={classes.btnBoost} to={`/${chain}/stake`}>
            Stake
            {/*             <img alt="Boost" src={require('images/stake/boost.svg')} />
             */}{' '}
          </Link>
        </div>

        <Hidden smDown implementation="css">
          <div className={classes.collapse}>{links}</div>
        </Hidden>
        <Hidden mdUp>
          <IconButton
            className={classes.iconButton}
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>

      <Hidden mdUp implementation="js">
        <Drawer
          variant="temporary"
          anchor={'right'}
          open={mobileOpen}
          classes={{
            paper: classes.drawerPaper,
          }}
          onClose={handleDrawerToggle}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            className={classes.closeButtonDrawer}
          >
            <Close />
          </IconButton>
          <div className={classes.appResponsive}>{links}</div>
          <div style={{ textAlign: 'center' }}>
            <LinkSidebar name="vote" label="vote" icon="vote-yea" classes={classes} />
            <LinkSidebar name="dashboard" label={t('stats')} icon="chart-bar" classes={classes} />
            <LinkSidebar name="docs" label="docs" icon="book" classes={classes} />
            <LinkSidebar name="buy" label={t('buy')} icon="dollar-sign" classes={classes} />
            <IconButton onClick={setNightMode} className={classes.icon}>
              {isNightMode ? <WbSunny /> : <NightsStay />}
            </IconButton>
          </div>
        </Drawer>
      </Hidden>
    </AppBar>
  );
};

const renderLink = (name, label, icon, classes) => {
  return (
    <a
      href={getLinkUrl(name)}
      target="_blank"
      rel="noopener noreferrer"
      className={classes.link}
      style={{ marginLeft: '5px', marginRight: '5px' }}
    >
      <i className={`fas fa-${icon} ${classes.icon}`} />
      <span>{label}</span>
    </a>
  );
};

const LinkSidebar = ({ name, label, icon, classes }) => (
  <div style={{ width: '100%', paddingTop: '10px' }}>{renderLink(name, label, icon, classes)}</div>
);

const getLinkUrl = name => {
  if (name === 'buy') {
    getNetworkBuyUrl();
  } else if (name === 'docs') {
    return 'https://catena-protocol.gitbook.io/catena-protocol/';
  } else {
    return `https://${name}.ctena.finance`;
  }
  /* 
  name === 'buy' ? getNetworkBuyUrl() : `https://${name}.ctena.finance`;
  return name === 'docs' ? 'https://catena-protocol.gitbook.io/catena-protocol/' : `https://${name}.ctena.finance`; */
};

export default Header;
