import React, { Component } from 'react';
import { StatusBar } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/Input';

class Home extends Component {
  state = {
    baseCurrency: 'USD',
    targetCurrency: 'GBP',
    basePrice: 100,
    targetPrice: 70,
  };

  handleCurrencyChange = value => console.log(value);

  render() {
    const {
      baseCurrency, targetCurrency, basePrice, targetPrice,
    } = this.state;

    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Logo />
        <InputWithButton
          currency={baseCurrency}
          price={basePrice}
          changeHandler={this.handleCurrencyChange}
        />
        <InputWithButton currency={targetCurrency} price={targetPrice} editable={false} />
      </Container>
    );
  }
}

export default Home;
