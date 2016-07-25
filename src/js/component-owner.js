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

  render() {

    const {formatMessage} = this.props.intl;
    const altTextMsg = this.props.data.avatarAltText ? this.props.data.avatarAltText : formatMessage(messages.avatarAltText);
    let imageStyle = 'avatar-display-img';
    if (this.props.data.avatarStyle === 'round') {
      imageStyle = imageStyle + ' avatar-display-round';
    }
    
    let imageSize = 120;
    if (this.props.data.avatarSize === 'small') {
      imageSize = 50;
    }

    if (!this.props.data.avatarURLText || this.props.data.avatarURLText === '') {
      this.props.data.avatarURLText = 'https://tokentalk.org/files/avatars/default.jpg';
    }

    return (
      <img src={this.props.data.avatarURLText}
           className={imageStyle}
           height={imageSize}
           width={imageSize}
           alt={altTextMsg}
           tabIndex="0"
           onClick={this._click} />
    )
  }

}

export default injectIntl(ComponentOwner); // Inject this.props.intl into the component context
