import React from 'react'
import App, { Container } from 'next/app'
import MainContainer from '../components/main-container'
import Title from '../components/title'

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <MainContainer>
          <div className="row">
            <div className="col">
              <Title />
            </div>
          </div>

          <Component {...pageProps} />
        </MainContainer>
      </Container>
    )
  }
}