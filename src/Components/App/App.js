import React, { Component } from 'react';
import './App.css';

import ProductCard from '../ProductCard/ProductCard'

class App extends Component {
  constructor() {
    super()
    this.state = {
      // hard coded product info to focus on feature flag aspect of product
      products: [
        {name: 'Blue Jeans', description: 'Classic denim with a classic fit.', reviews: ['Pro ea mazim everti, diam maiorum vim in.', 'Quo ex voluptaria deterruisset.', 'Munere aeterno id eum', 'Pro ea mazim everti, diam maiorum vim']},
        {name: 'Dark Wash', description: 'A darker version of our blue jeans.', reviews: ['Graece omittantur ius an, cu delenit.', 'Dsit id dolorem delectus.']},
        {name: 'Black Jeans', description: 'High-waisted black jeans with stretch.', reviews: ['Albucius mel, no quo albuciu', 'Dueterruisset, sit id dolorem delectus. Ei numquam debitis detraxit sea, an graece hendrerit quo.', 'Quo ex voluptaria deterruisset.', 'Munere aeterno id eum', 'Pro ea mazim everti, diam maiorum vim']},
        {name: 'Ripped Jeans', description: 'Light wash denim with trendy rips.', reviews: ['Pro ea mazim everti, diam maiorum vim in.', 'Quo ex voluptaria deterruisset.', 'Munere aeterno id eum', 'Pro ea mazim everti, diam maiorum vim']},
        {name: 'White Jeans', description: 'Bright pants that make a statement.', reviews: ['Pro ea mazim everti, diam maiorum vim in.', 'Quo ex voluptaria deterruisset.', 'Munere aeterno id eum', 'Pro ea mazim everti, diam maiorum vim']},
        {name: 'Khakis', description: 'A staple in a straight leg fit.', reviews: ['Graece omittantur ius an, cu delenit.', 'Dsit id dolorem delectus.']},
        {name: 'Boot Cut', description: 'Our classic denim in boot cut.', reviews: ['Albucius mel, no quo albuciu', 'Dueterruisset, sit id dolorem delectus. Ei numquam debitis detraxit sea, an graece hendrerit quo.', 'Quo ex voluptaria deterruisset.', 'Munere aeterno id eum', 'Pro ea mazim everti, diam maiorum vim']},
        {name: 'Jean Shorts', description: 'Classic jean cutoffs for warmer days.', reviews: ['Pro ea mazim everti, diam maiorum vim in.', 'Quo ex voluptaria deterruisset.', 'Munere aeterno id eum', 'Pro ea mazim everti, diam maiorum vim']}
      ]
    }
  }

  render() {
    return (
      <div className='container-fluid'>
        <h1 className='app-title'>Marissa's Boutique</h1>
        <hr />
        <div className='row'>
        <div>
          {
            this.state.products.map(product => {
              return(
                <div key={product.name}>
                  <div>
                    <ProductCard
                      productName={product.name}
                      productDescription={product.description}
                      productReviews={product.reviews}
                    />
                  </div>
                </div>
              )
            })
          }
        </div>
        </div>
      </div>
    );
  }
}
export default App;
