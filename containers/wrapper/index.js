import * as React from 'react';
import { Header, Footer } from '../../components';
import PropTypes from 'prop-types';

import 'raleway-cyrillic/fonts/Raleway-v4020-Bold.ttf';
import 'raleway-cyrillic/fonts/Raleway-v4020-Bold.woff';
import 'raleway-cyrillic/fonts/Raleway-v4020-Bold.eot';
import 'raleway-cyrillic/fonts/Raleway-v4020-Medium.eot';
import 'raleway-cyrillic/fonts/Raleway-v4020-Medium.ttf';
import 'raleway-cyrillic/fonts/Raleway-v4020-Medium.woff';
import 'raleway-cyrillic/fonts/Raleway-v4020-Regular.eot';
import 'raleway-cyrillic/fonts/Raleway-v4020-Regular.ttf';
import 'raleway-cyrillic/fonts/Raleway-v4020-Regular.woff';
import 'raleway-cyrillic/fonts/Raleway-v4020-Light.eot';
import 'raleway-cyrillic/fonts/Raleway-v4020-Light.ttf';
import 'raleway-cyrillic/fonts/Raleway-v4020-Light.woff';

import '../../static/base/fonts.scss';
import '../../static/base/reset.scss';
import '../../static/base/index.scss';

export class Wrapper extends React.Component {
  static propTypes = {
    headerBgActive: PropTypes.bool
  }

  render() {
    const { headerBgActive } = this.props;

    return (
      <div className={'rockstat-container'}>
        <Header headerBgActive={headerBgActive} />
        <div className={'rockstat-container-content'}>
          { this.props.children }
        </div>
        <Footer />
      </div>
    )
  }
}
