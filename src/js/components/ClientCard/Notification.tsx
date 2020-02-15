import React from "react";

/**
 * Component properties "Notification".
 */
interface NotificationProps {
  /** Displayed notification text*/
  text: string;
}

/**
 * Displayed notification text.
 *
 * @param {string} text Notification text.
 */
const Notification: React.FC<NotificationProps> = ({
  text = ""
}): JSX.Element => <div>{text}</div>;

export default Notification;
