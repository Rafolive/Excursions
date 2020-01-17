import React, { Component } from "react";
import PropTypes from "prop-types";
import { IconTypes } from "./iconTypes";
import "./icons.scss";

const SaveIcon = () => {
  return (
    <svg
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      className={`icon`}
    >
      <title>Save</title>
      <path fill="currentColor" d="M12,19 C11.4477153,19 11,18.5522847 11,18 L11,1 C11,0.44771525 11.4477153,1.01453063e-16 12,0 C12.5522847,-1.01453063e-16 13,0.44771525 13,1 L13,18 C13,18.5522847 12.5522847,19 12,19 Z" />
      <path fill="currentColor" d="M12 20C11.7348052 19.9999434 11.4804927 19.8945494 11.293 19.707L4.293 12.707C3.91402779 12.3146211 3.91944763 11.6909152 4.30518142 11.3051814 4.69091522 10.9194476 5.31462111 10.9140278 5.707 11.293L12 17.586 18.293 11.293C18.6853789 10.9140278 19.3090848 10.9194476 19.6948186 11.3051814 20.0805524 11.6909152 20.0859722 12.3146211 19.707 12.707L12.707 19.707C12.5195073 19.8945494 12.2651948 19.9999434 12 20zM23 24L1 24C.44771525 24 6.76353751e-17 23.5522847 0 23-6.76353751e-17 22.4477153.44771525 22 1 22L23 22C23.5522847 22 24 22.4477153 24 23 24 23.5522847 23.5522847 24 23 24z" />
      <path fill="currentColor" d="M1 24C.44771525 24 6.76353751e-17 23.5522847 0 23L0 19C-6.76353751e-17 18.4477153.44771525 18 1 18 1.55228475 18 2 18.4477153 2 19L2 23C2 23.5522847 1.55228475 24 1 24zM23 24C22.4477153 24 22 23.5522847 22 23L22 19C22 18.4477153 22.4477153 18 23 18 23.5522847 18 24 18.4477153 24 19L24 23C24 23.5522847 23.5522847 24 23 24z" />
    </svg>
  );
};
const GroupIcon = () => {
  return (
    <svg
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      className={`icon`}
    >
      <title>Group</title>
      <path fill="currentColor" d="M544 224c44.2 0 80-35.8 80-80s-35.8-80-80-80-80 35.8-80 80 35.8 80 80 80zm0-112c17.6 0 32 14.4 32 32s-14.4 32-32 32-32-14.4-32-32 14.4-32 32-32zM96 224c44.2 0 80-35.8 80-80s-35.8-80-80-80-80 35.8-80 80 35.8 80 80 80zm0-112c17.6 0 32 14.4 32 32s-14.4 32-32 32-32-14.4-32-32 14.4-32 32-32zm396.4 210.9c-27.5-40.8-80.7-56-127.8-41.7-14.2 4.3-29.1 6.7-44.7 6.7s-30.5-2.4-44.7-6.7c-47.1-14.3-100.3.8-127.8 41.7-12.4 18.4-19.6 40.5-19.6 64.3V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-44.8c.2-23.8-7-45.9-19.4-64.3zM464 432H176v-44.8c0-36.4 29.2-66.2 65.4-67.2 25.5 10.6 51.9 16 78.6 16 26.7 0 53.1-5.4 78.6-16 36.2 1 65.4 30.7 65.4 67.2V432zm92-176h-24c-17.3 0-33.4 5.3-46.8 14.3 13.4 10.1 25.2 22.2 34.4 36.2 3.9-1.4 8-2.5 12.3-2.5h24c19.8 0 36 16.2 36 36 0 13.2 10.8 24 24 24s24-10.8 24-24c.1-46.3-37.6-84-83.9-84zm-236 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm0-176c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zM154.8 270.3c-13.4-9-29.5-14.3-46.8-14.3H84c-46.3 0-84 37.7-84 84 0 13.2 10.8 24 24 24s24-10.8 24-24c0-19.8 16.2-36 36-36h24c4.4 0 8.5 1.1 12.3 2.5 9.3-14 21.1-26.1 34.5-36.2z"></path>
    </svg>
  );
};
const TimeIcon = () => {
  return (
    <svg
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      className={`icon`}
    >
      <title>Group</title>
      <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"></path>
    </svg>
  );
};

export default class Icon extends Component {
  render() {
    const { icon } = this.props;
    switch (icon) {
      case IconTypes.SAVE:
        return <SaveIcon />;
      case IconTypes.GROUP:
        return <GroupIcon />;
      case IconTypes.TIME:
        return <TimeIcon />;

      default:
        return null;
    }
  }
}

Icon.propTypes = {
  icon: PropTypes.oneOf(Object.values(IconTypes))
};

Icon.defaultProps = {
  icon: IconTypes.NONE
};
