import React from "react";
import { FormattedMessage } from "react-intl";
import PropTypes from "prop-types";
import MobileDetect from "mobile-detect";

import MobileScreenEntryImg from "../assets/images/mobile_screen_entry.svg";
import DesktopScreenEntryImg from "../assets/images/desktop_screen_entry.svg";
import GenericVREntryImg from "../assets/images/generic_vr_entry.svg";
import GearVREntryImg from "../assets/images/gearvr_entry.svg";
import DaydreamEntyImg from "../assets/images/daydream_entry.svg";

const mobiledetect = new MobileDetect(navigator.userAgent);

const EntryButton = props => (
  <button className="entry-button" onClick={props.onClick}>
    <img src={props.iconSrc} className="entry-button__icon" />
    <div className="entry-button__label">
      <div className="entry-button__label__contents">
        <span>
          <FormattedMessage id={props.prefixMessageId} />
        </span>
        <span className="entry-button--bolded">
          <FormattedMessage id={props.mediumMessageId} />
        </span>
        {props.subtitle && <div className="entry-button__subtitle">{props.subtitle}</div>}
      </div>
    </div>
  </button>
);

EntryButton.propTypes = {
  onClick: PropTypes.func,
  iconSrc: PropTypes.string,
  prefixMessageId: PropTypes.string,
  mediumMessageId: PropTypes.string,
  subtitle: PropTypes.string
};

export const TwoDEntryButton = props => {
  const entryButtonProps = {
    ...props,
    iconSrc: mobiledetect.mobile() ? MobileScreenEntryImg : DesktopScreenEntryImg,
    prefixMessageId: "entry.screen-prefix",
    mediumMessageId: mobiledetect.mobile() ? "entry.mobile-screen" : "entry.desktop-screen"
  };

  return <EntryButton {...entryButtonProps} />;
};

export const GenericEntryButton = props => {
  const entryButtonProps = {
    ...props,
    iconSrc: GenericVREntryImg,
    prefixMessageId: "entry.generic-prefix",
    mediumMessageId: "entry.generic-medium"
  };

  return <EntryButton {...entryButtonProps} />;
};

export const GearVREntryButton = props => {
  const entryButtonProps = {
    ...props,
    iconSrc: GearVREntryImg,
    prefixMessageId: "entry.gearvr-prefix",
    mediumMessageId: "entry.gearvr-medium"
  };

  return <EntryButton {...entryButtonProps} />;
};

export const DaydreamEntryButton = props => {
  const entryButtonProps = {
    ...props,
    iconSrc: DaydreamEntyImg,
    prefixMessageId: "entry.daydream-prefix",
    mediumMessageId: "entry.daydream-medium"
  };

  return <EntryButton {...entryButtonProps} />;
};
