const url =
  'https://newsapi.org/v2/top-headlines?country=us&apiKey=2abca9b2ced44586a5c18e282f890392'

export async function getNews () {
  let result = await fetch(url).then(response => response.json())
  return result.articles
}
