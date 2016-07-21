import React, {PropTypes} from 'react';
import {intlShape, injectIntl} from 'react-intl';
import {messages} from './defaultMessages';

class ComponentOwner extends React.Component {

  static propTypes = {
    avatarURLText: PropTypes.string,
    avatarAltText: intlShape.isRequired,
    avatarStyle: PropTypes.string,
    avatarSize: PropTypes.string
  };

  constructor(props) {

    super(props);
  }

  render() {

    const {formatMessage} = this.props.intl;
    const altTextMsg = this.props.avatarAltText ? this.props.avatarAltText : formatMessage(messages.avatarAltText);
    let imageStyle = 'avatar-display-img';
    if (this.props.avatarStyle === 'round') {
      imageStyle = imageStyle + ' avatar-display-round';
    }
    
    let imageSize = 120;
    if (this.props.avatarSize === 'small') {
      imageSize = 50;
    }

    if (this.props.avatarURLText && this.props.avatrURLText === '') {
      this.props.avatarURLText = 'https://tokentalk.org/files/avatars/default.jpg';
    }

    return (
      // Insert HTML for avatar-display here
      <img src={this.props.avatarURLText} className={imageStyle} height={imageSize} width={imageSize} alt={altTextMsg} />
    )
  }

}

export default injectIntl(ComponentOwner); // Inject this.props.intl into the component context
