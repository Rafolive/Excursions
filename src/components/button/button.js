import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  ButtonSizes,
  ButtonThemes,
  ButtonTag,
  ButtonTarget
} from "./buttonTypes";
import { IconTypes } from "../icons/iconTypes";
import Icon from "../icons/icons";
import "./button.scss";

export default class Button extends Component {
  getButtonClasses() {
    const { icon, size, theme } = this.props;
    const buttonClasses = ["button", `button--${size}`, `button--${theme}`];
    icon && icon !== IconTypes.NONE && buttonClasses.push("button--icon");
    return buttonClasses.join(" ");
  }
  render() {
    const {
      disabled,
      onClickHandler,
      children,
      icon,
      tag,
      href,
      target
    } = this.props;
    return tag === "a" ? (
      <a
        href={href}
        target={target}
        className={this.getButtonClasses()}
        rel="noopener noreferrer"
        disabled={disabled}
      >
        {icon && <Icon icon={icon} />}
        <span>{children}</span>
      </a>
    ) : (
      <button
        className={this.getButtonClasses()}
        onClick={event => onClickHandler(event.target)}
        disabled={disabled}
      >
        {icon && <Icon icon={icon} />}
        <span>{children}</span>
      </button>
    );
  }
}
Button.propTypes = {
  disabled: PropTypes.bool,
  onClickHandler: PropTypes.func.isRequired,
  children: PropTypes.any,
  size: PropTypes.oneOf(Object.values(ButtonSizes)),
  theme: PropTypes.oneOf(Object.values(ButtonThemes)),
  icon: PropTypes.oneOf(Object.values(IconTypes)),
  tag: PropTypes.oneOf(Object.values(ButtonTag)),
  target: PropTypes.oneOf(Object.values(ButtonTarget)),
  href: PropTypes.string
};

Button.defaultProps = {
  tag: "button",
  target: "_self",
  href: "",
  type: ButtonThemes.PRIMARY,
  onClickHandler: () => console.log("No click handler specified"),
  label: "",
  disabled: false,
  size: ButtonSizes.MEDIUM,
  icon: IconTypes.NONE
};
