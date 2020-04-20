import React from 'react'
import { FlatList } from 'react-native'
import { getNews } from './src/components/News'
import Article from './src/components/Article'
import Amplify, { Analytics } from 'aws-amplify'
import awsconfig from './aws-exports'

Amplify.configure(awsconfig)
export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { articles: [], refreshing: true }
    this.fetchNews = this.fetchNews.bind(this)
  }

  componentDidMount () {
    Analytics.record('FIRST-EVENT-NAME')
    this.fetchNews()
  }

  fetchNews () {
    getNews()
      .then(articles => {
        Analytics.record('NEWS FETCHED SUCCESSFULLY')
        this.setState({ articles, refreshing: false })
      })
      .catch(() => this.setState({ refreshing: false }))
  }

  handleRefresh () {
    Analytics.record('DATA REFRESHED')
    this.setState(
      {
        refreshing: true
      },
      () => this.fetchNews()
    )
  }

  render () {
    return (
      <FlatList
        data={this.state.articles}
        renderItem={({ item }) => <Article article={item} />}
        keyExtractor={item => item.url}
        refreshing={this.state.refreshing}
        onRefresh={this.handleRefresh.bind(this)}
      />
    )
  }
}
