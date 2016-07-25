/* global describe it expect */

import expect from 'expect';
import expectJSX from 'expect-jsx';
import React from 'react';
import {IntlProvider} from 'react-intl';
import TestUtils from 'react-addons-test-utils';
import ComponentOwner from '../src/js/component-owner';

expect.extend(expectJSX);

describe('Component Owner Suite (avatar-display)', () => {
  let renderer;
  let intlProvider;

  beforeEach(() => {
    renderer = TestUtils.createRenderer();
    intlProvider = new IntlProvider({locale: 'en'}, {});
  });

  it('shallowly renders the component owner using React TestUtils', () => {

    const {intl} = intlProvider.getChildContext();
    const targetData = {
      elementId: 'test-target',
      avatarURLText: 'http://keenthemes.com/preview/metronic/theme/assets/pages/media/profile/profile_user.jpg',
      avatarAltText: 'Small Avatar Image',
      avatarSize: 'small',
      avatarClick: function () {
        console.log('test');
      }
    };

    renderer.render(
      <ComponentOwner.WrappedComponent
        data={targetData}
        intl={intl} />
      , {intl}
    );

    expect(renderer.getRenderOutput()).toEqualJSX(
      <img src='http://keenthemes.com/preview/metronic/theme/assets/pages/media/profile/profile_user.jpg' className='avatar-display-img' height={50} width={50} tabIndex="0" onClick={function noRefCheck() {}} alt='Small Avatar Image' />
    );
  });

  it('calls the click handler function when the avatar is clicked, in a document provided by jsdom', () => {

    const {intl} = intlProvider.getChildContext();
    let testValue = 0;
    const targetData = {
      elementId: 'test-target',
      avatarURLText: 'http://keenthemes.com/preview/metronic/theme/assets/pages/media/profile/profile_user.jpg',
      avatarAltText: 'Small Avatar Image',
      avatarSize: 'small',
      avatarClick: function () {
        testValue = 1;
      }
    };
    const locale = 'en';
    const translations = {
      'en' : {}
    };

    const container = TestUtils.renderIntoDocument(<IntlProvider locale={locale} messages={translations[locale]}><ComponentOwner data={targetData} intl={intl} /></IntlProvider>);
    const testAvatar = TestUtils.findRenderedDOMComponentWithTag(container, 'img');
    TestUtils.Simulate.click(testAvatar);
    expect(testValue).toEqual(1);
  });

});
