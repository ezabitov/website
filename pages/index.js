import React from 'react';
import { Router } from '../next-routes';

export default class extends React.Component {
  static async getInitialProps({ res, query }) {
    if (!res) {
      Router.replaceRoute('/ru')
    }
    return {}
  }
  
  render() {
    return (
      <div>
      </div>
    )
  }
}
