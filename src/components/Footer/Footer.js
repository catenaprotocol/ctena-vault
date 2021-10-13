import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';

import styles from './styles';

const useStyles = makeStyles(styles);

const Footer = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      <div className={classes.column}>
        <div className={classes.title}>ctena.finance</div>
        <a
          href="https://ctena.finance"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <i className={`fas fa-book ${classes.linkIcon}`}></i>
          <span>docs</span>
        </a>

        <a
          href="https://catenaprotocol.kampsite.co/"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <i className={`fas fa-vote-yea  ${classes.linkIcon}`}></i>
          <span>{t('proposal')}</span>
        </a>

        <a
          href="https://medium.com/catenaprotocol"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <i className={`fab fa-medium ${classes.linkIcon}`}></i>
          <span>{t('news')}</span>
        </a>

        <a
          href="https://github.com/catenaprotocol"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <i className={`fab fa-github ${classes.linkIcon}`}></i>
          <span>{t('source')}</span>
        </a>
      </div>

      <div className={classes.column}>
        <div className={classes.title}>{t('products')}</div>
        <a
          href="https://governance.ctena.finance"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <i className={`fas fa-landmark ${classes.linkIcon}`}></i>
          <span>gov</span>
        </a>

        <a
          href="https://app.xdao.app/#/dacprofile/0xD4Bc41277E392c76ae864223577FC3a73cc8a881"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <i className={`fas fa-landmark ${classes.linkIcon}`}></i>
          <span>daoBTC</span>
        </a>

        <a
          href="http://nakamoto.ctena.finance"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <i className={`fas fa-landmark ${classes.linkIcon}`}></i>
          <span>nakamoto index</span>
        </a>

        <a
          href="http://cdefi.ctena.finance"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <i className={`fas fa-landmark ${classes.linkIcon}`}></i>
          <span>cDEFI index</span>
        </a>

        <a
          href="http://calt.ctena.finance"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <i className={`fas fa-landmark ${classes.linkIcon}`}></i>
          <span>cALT index</span>
        </a>

        <a
          href="http://cstable.ctena.finance"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <i className={`fas fa-landmark ${classes.linkIcon}`}></i>
          <span>cSTABLE index</span>
        </a>

        {/*  <a
          href="https://vote.beefy.finance"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <i className={`fas fa-vote-yea ${classes.linkIcon}`}></i>
          <span>vote</span>
        </a>
 */}
        <a
          href="https://vault.ctena.finance"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <i className={`fas fa-hand-holding-usd ${classes.linkIcon}`}></i>
          <span>vault</span>
        </a>
      </div>

      <div className={classes.column}>
        <div className={classes.title}>{t('socials')}</div>
        <a
          href="https://twitter.com/catenaprotocol"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <i className={`fab fa-twitter ${classes.linkIcon}`}></i>

          <span>twitter</span>
        </a>
        <a
          href="https://t.me/catenaprotocol"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <i className={`fab fa-telegram ${classes.linkIcon}`}></i>

          <span>telegram</span>
        </a>
        {/* <a
          href="https://discord.gg/yq8wfHd"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <i className={`fab fa-discord ${classes.linkIcon}`}></i>
          <span>discord</span>
        </a> */}
      </div>
    </div>
  );
};

export default memo(Footer);
