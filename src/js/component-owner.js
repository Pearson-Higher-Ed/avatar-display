import React, {PropTypes} from 'react';
import {intlShape, injectIntl} from 'react-intl';
import {messages} from './defaultMessages';

class ComponentOwner extends React.Component {

  static propTypes = {
    avatarURLText: PropTypes.string,
    avatarAltText: intlShape,
    avatarStyle: PropTypes.string,
    avatarSize: PropTypes.string,
    avatarClick: PropTypes.func
  };

  constructor(props) {

    super(props);
  }

  _click = () => {
    if (this.props.data.avatarClick) {
      this.props.data.avatarClick();
    }
  };

  _enter = (event) => {
    if (event.keyCode === 13) {
      this._click();
    }
  };

  render() {

    const {formatMessage} = this.props.intl;
    const altTextMsg = this.props.data.avatarAltText ? this.props.data.avatarAltText : formatMessage(messages.avatarAltText);
    let imageStyle = 'avatar-display-img';
    let imageSize = 120;
    let tabValue = -1;
    if (this.props.data.avatarStyle === 'round') {
      imageStyle = imageStyle + ' avatar-display-round';
    }

    if (this.props.data.avatarSize === 'small') {
      imageSize = 50;
    }

    if (this.props.data.avatarClick) {
      tabValue = 0;
    }

    if (!this.props.data.avatarURLText || this.props.data.avatarURLText === '') {
      this.props.data.avatarURLText = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgJ2h0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCc+PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IC0yNyAyNCAxMDAgMTAwIiBpZD0idW5rbm93biIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSItMjcgMjQgMTAwIDEwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpza2V0Y2g9Imh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnPjxnPjxyZWN0IGZpbGw9IiNGNUVFRTUiIGhlaWdodD0iMTAwIiB3aWR0aD0iMTAwIiB4PSItMjciIHk9IjI0Ii8+PGc+PGRlZnM+PHBhdGggZD0iTTM2LDk1LjljMCw0LDQuNyw1LjIsNy4xLDUuOGM3LjYsMiwyMi44LDUuOSwyMi44LDUuOWMzLjIsMS4xLDUuNywzLjUsNy4xLDYuNnY5LjhILTI3di05LjggYzEuMy0zLjEsMy45LTUuNSw3LjEtNi42YzAsMCwxNS4yLTMuOSwyMi44LTUuOWMyLjQtMC42LDcuMS0xLjgsNy4xLTUuOGMwLTQsMC0xMC45LDAtMTAuOWgyNkMzNiw4NSwzNiw5MS45LDM2LDk1Ljl6IiBpZD0ic2hvdWxkZXJzIi8+PC9kZWZzPjx1c2UgZmlsbD0iI0U2QzE5QyIgb3ZlcmZsb3c9InZpc2libGUiIHhsaW5rOmhyZWY9IiNzaG91bGRlcnMiLz48Y2xpcFBhdGggaWQ9InNob3VsZGVyc18xXyI+PHVzZSBvdmVyZmxvdz0idmlzaWJsZSIgeGxpbms6aHJlZj0iI3Nob3VsZGVycyIvPjwvY2xpcFBhdGg+PHBhdGggY2xpcC1wYXRoPSJ1cmwoI3Nob3VsZGVyc18xXykiIGQ9Ik0yMy4yLDM1YzAuMSwwLDAuMSwwLDAuMiwwYzAsMCwwLDAsMCwwIGMzLjMsMCw4LjIsMC4yLDExLjQsMmMzLjMsMS45LDcuMyw1LjYsOC41LDEyLjFjMi40LDEzLjctMi4xLDM1LjQtNi4zLDQyLjRjLTQsNi43LTkuOCw5LjItMTMuNSw5LjRjMCwwLTAuMSwwLTAuMSwwIGMtMC4xLDAtMC4xLDAtMC4yLDBjLTAuMSwwLTAuMSwwLTAuMiwwYzAsMC0wLjEsMC0wLjEsMGMtMy43LTAuMi05LjUtMi43LTEzLjUtOS40Yy00LjItNy04LjctMjguNy02LjMtNDIuNCBjMS4yLTYuNSw1LjItMTAuMiw4LjUtMTIuMWMzLjItMS44LDguMS0yLDExLjQtMmMwLDAsMCwwLDAsMEMyMy4xLDM1LDIzLjEsMzUsMjMuMiwzNUwyMy4yLDM1eiIgZmlsbD0iI0Q0QjA4QyIgaWQ9ImhlYWQtc2hhZG93Ii8+PC9nPjwvZz48cGF0aCBkPSJNMjIuNiw0MGMxOS4xLDAsMjAuNywxMy44LDIwLjgsMTUuMWMxLjEsMTEuOS0zLDI4LjEtNi44LDMzLjdjLTQsNS45LTkuOCw4LjEtMTMuNSw4LjMgYy0wLjIsMC0wLjIsMC0wLjMsMGMtMC4xLDAtMC4xLDAtMC4yLDBDMTguOCw5Ni44LDEzLDk0LjYsOSw4OC43Yy0zLjgtNS42LTcuOS0yMS44LTYuOC0zMy44QzIuMyw1My43LDMuNSw0MCwyMi42LDQweiIgZmlsbD0iI0YyQ0VBNSIgaWQ9ImhlYWQiLz48L2c+PC9zdmc+';
    }

    return (
      <img src={this.props.data.avatarURLText}
           className={imageStyle}
           height={imageSize}
           width={imageSize}
           alt={altTextMsg}
           tabIndex={tabValue}
           onClick={this._click}
           onKeyUp={this._enter} />
    )
  }

}

export default injectIntl(ComponentOwner); // Inject this.props.intl into the component context
