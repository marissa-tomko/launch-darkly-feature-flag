import React, { Component } from 'react';
import './ProductCard.css';

import LDClient from 'ldclient-js';

class ProductCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      areThereCustomerReviews: null,
      areReviewsShowing: false
    }
  }

  componentDidMount() {
    const user = {
      // hard coded user key to focus on feature flag aspect of project, used email to ensure unique key value
      key: 'marissatomko@gmail.com'
    }
    this.ldclient = LDClient.initialize('5c721ddf40c28f208f909d20', user);
    this.ldclient.on('ready', this.onLaunchDarklyUpdated.bind(this));
    this.ldclient.on('change', this.onLaunchDarklyUpdated.bind(this));
  }

  onLaunchDarklyUpdated() {
    this.setState({
      featureFlags: {
        customerReviewsAreAdded: this.ldclient.variation('customer-reviews')
      }
    })
  }

  toggleReviews = () => {
    this.setState({
      areReviewsShowing: !this.state.areReviewsShowing
    })
  }

  render() {
    if(!this.state.featureFlags) {
      return <div>Loading...</div>
    }

    let reviews
    if(this.state.areThereCustomerReviews) {
      if(this.state.areThereCustomerReviews === true) {
        reviews = true;
      } else if(this.state.areThereCustomerReviews === false) {
        reviews = false;
      }
    } else {
      if(this.state.featureFlags.customerReviewsAreAdded) {
        reviews = true;
      } else {
        reviews = undefined;
      }
    }

    return (
      <div className='product-card col-xs-12 col-sm-6 col-md-3'>
        <div className='product-name'>
          <h3>{this.props.productName}</h3>
        </div>
        <div className='product-description'>
          <p>{this.props.productDescription}</p>
        </div>
        <div>
          <img className='product-image' src={require('../../images/jeans.jpeg')} alt='dummy-pic' />
        </div>
        {
          reviews ?
            <div className='product-reviews'>
                  <div>
                    <button className='review-button' onClick={this.toggleReviews}>{this.state.areReviewsShowing? 'Hide Reviews' : 'Show Reviews' }</button>
                    {
                      this.state.areReviewsShowing ?
                        <p>{this.props.productReviews}</p>
                      : null
                    }
                  </div>
            </div>
            :
          null
        }
      </div>
    );
  }
}
export default ProductCard;
