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
      this.props.data.avatarURLText = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+IDxzdmcgd2lkdGg9IjE3NXB4IiBoZWlnaHQ9IjE3NXB4IiB2aWV3Qm94PSIwIDAgMTc1IDE3NSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4gPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzOS4xICgzMTcyMCkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+IDx0aXRsZT5hdmF0YXItdmVjdG9yPC90aXRsZT4gPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+IDxkZWZzPiA8bGluZWFyR3JhZGllbnQgeDE9IjUwJSIgeTE9IjAlIiB4Mj0iNTAlIiB5Mj0iMTAwJSIgaWQ9ImxpbmVhckdyYWRpZW50LTEiPiA8c3RvcCBzdG9wLWNvbG9yPSIjRDRFM0Y1IiBvZmZzZXQ9IjAlIj48L3N0b3A+IDxzdG9wIHN0b3AtY29sb3I9IiNBREM4RTMiIG9mZnNldD0iMTAwJSI+PC9zdG9wPiA8L2xpbmVhckdyYWRpZW50PiA8L2RlZnM+IDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiA8ZyBpZD0iYXZhdGFyLXZlY3RvciI+IDxnIGlkPSJhdmF0YXIiPiA8cmVjdCBpZD0iYmciIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMSkiIHg9IjAiIHk9IjAiIHdpZHRoPSIxNzUiIGhlaWdodD0iMTc1Ij48L3JlY3Q+IDxwYXRoIGQ9Ik0yLjU2OTA5MTgsMTc3LjA3NjQxNiBDMi41NjkwOTE4LDE3Ny4wNzY0MTYgMy45MDgyMDMxMywxNTMuMzE2NDA1IDE0LjIxOTcyNjYsMTI4LjIwMjYzNiBDMTUuNDM1MDU4NiwxMjYuMjQ5NTExIDE2LjM5NDc3NTQsMTI1LjM0ODE0NCAxNy44MjE4NTcsMTI1LjA1MzI2IEMxOS4yNDg5Mzg2LDEyNC43NTgzNzcgMzcuNjE1NjQ4NywxMjEuMDgyNzY4IDQzLjUxMDI1MzksMTE5LjY3ODcxMSBDNDkuNDA0ODU5MSwxMTguMjc0NjU0IDU1LjA1OTA4MiwxMTYuMTgzNTk0IDU1LjA1OTA4MiwxMTYuMTgzNTk0IEM1NS4wNTkwODIsMTE2LjE4MzU5NCA2MS44Mjc2MjUzLDExMC4xODYxMzQgNjguMTk5NjM4NCwxMDcuNzcwNDU0IEM3MC4wMjg5NDAxLDEwNy4xNjE4MTcgNzAuNjM3NzI0NywxMDIuNDE3OTk5IDY4Ljg1MDIxOTcsOTkuMDIzMzk5MiBDNjcuNjI4MDY1NSw5Ni43MDI0NDExIDY1LjUzNTUyOTIsOTIuMjY4MDU5OCA2NC45OTUzNjksOTAuOTk3NTA4OCBDNjMuMjE1MDA0LDg3LjQ5OTk5OTggNjAuNzc5NjIyNyw4NS4wODU1NDc0IDU5LjEyNSw4My4wMTAyNTM3IEM1Ni4yNDc0MTM2LDc5LjI4Njg2NTEgNTUuMDU5MDgyLDYyLjgyMTA3NTMgNTcuODAxMTkzMiw1My41MDUxMjExIEM2My40OTI4MDksMzQuMTY4NjIxNCA4My45OTcwNzAzLDMyLjA1ODU5MzcgODMuOTk3MDcwMywzMi4wNTg1OTM3IEM4My45OTcwNzAzLDMyLjA1ODU5MzcgOTUuODAyNzM0NCwyOS43MTg3NSA5OC40MzUwNTg2LDMzLjE2MDE1NjMgQzEwMS4wNjczODMsMzYuNjAxNTYyNSAxMDYuODA1MDIzLDM1LjY0ODc2MjUgMTA2LjgwNTAyMywzNS42NDg3NjI1IEMxMDYuODA1MDIzLDM1LjY0ODc2MjUgMTE5LjQxNzk2OSwzOC40Mzg5NjM4IDEyMS4zNzEwOTQsNTAuMDY3MzgyNiBDMTIzLjMyNDIxOSw2MS42OTU4MDE1IDEyMC41OTQ3MjcsNTcuNjQxNjAyNCAxMjIuNzI3MDUxLDY2LjY0OTkwMjIgQzEyNy4xMTA4NCw3Mi44NDI3MTk5IDExOS4yNDAyMzQsODQuMDg5NDA4NyAxMTcuNDM0NTcsODYuMjk0NDMzNiBDMTE1LjYyODkwNiw4OC40OTk0NTg1IDExNC42MDQwMDQsOTQuNDkxNjk5IDExMy4wMzI3MTUsOTYuODc0MDIzMyBDMTExLjQ2MTQyNiw5OS4yNTYzNDc1IDExMC44MDQxOTksMTA0LjkzODQ3NiAxMTMuMDMyNzE1LDEwNi44NjkxNDEgQzExNS4yNjEyMywxMDguNzk5ODA1IDExNy45OTcwNywxMDkuMzEzOTY2IDExOS4yNDAyMzQsMTEwLjkxNTAzOSBDMTIwLjQ4MzM5OCwxMTIuNTE2MTEyIDEyNC42NDY5NzMsMTE3LjA4NzQwMiAxMjcuMTEwODQsMTE4LjIwMDY4MyBDMTI5LjU3NDcwNywxMTkuMzEzOTY1IDE1Ni44MDcxMjksMTI2LjA3MzI0MiAxNjIuMDU0Njg4LDEzMi45NTk5NiBDMTYzLjQ3MDY4MywxMzQuODE4MjY0IDE2NC44NTk2NDYsMTQxLjAyNzg5NyAxNjUuNjQ2Mjg2LDE0Mi45NTQyMDggQzE2Ny43NzQ4NjYsMTQ4LjE2NjY0MyAxNjcuNDk4NjQyLDE0Ny43NTM5NDQgMTY4Ljc2NDA1MywxNTMuNTI5NTk0IEMxNzAuMDI5NDY1LDE1OS4zMDUyNDQgMTczLjIzMDk1NywxNzYuODMzOTg0IDE3My4yMzA5NTcsMTc2LjgzMzk4NCBMMi41NjkwOTE4LDE3Ny4wNzY0MTYgWiIgaWQ9IlBhdGgtMi1Db3B5IiBzdHJva2U9IiNEMUUzRjkiIGZpbGw9IiNBNUJERTQiPjwvcGF0aD4gPC9nPiA8L2c+IDwvZz4gPC9zdmc+';
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
