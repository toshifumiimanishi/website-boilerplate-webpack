const query = (() => {
  type Query = {
    [key: string]: string
  }

  const _get = () => {
    const params: string[] = location.search.substring(1).split('&')
    const query = params.reduce((acc: Query, param: string) => {
      const pair: string[] = param.split('=')
      acc[pair[0]] = decodeURIComponent(pair[1])
      return acc
    }, {})
    
    return query
  }

  const _update = (query: Query) => {
    let newQuery = ''

    for (const key in query) {
      newQuery += (newQuery.indexOf('?') == -1) ? '?' : '&'
      newQuery += key + '=' + query[key]
    }
    location.search = newQuery
  }

  return {
    get: _get,
    update: _update,
  }
})()

export default query;