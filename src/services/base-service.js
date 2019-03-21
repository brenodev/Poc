export const headerParams = {
  headers: {
    'Content-Type': 'application/json; charset=UTF-8'
  }
}

const devBaseUrl = 'https://jsonplaceholder.typicode.com'
const devAppKey = '5185415ba171ea3a00704eed'
const hmlBaseUrl = 'https://jsonplaceholder.typicode.com'
const hmlAppKey = '5185415ba171ea3a00704eed'
const prodBaseUrl = 'https://jsonplaceholder.typicode.com'
const prodAppKey = '5185415ba171ea3a00704eed'

export const getBaseParams = () => {
  if (process.env.NODE_ENV === 'production') {
    return { baseUrl: prodBaseUrl, baseKey: prodAppKey }
  } else if (process.env.NODE_ENV === 'testing') {
    return { baseUrl: hmlBaseUrl, baseKey: hmlAppKey }
  }
  return { baseUrl: devBaseUrl, baseKey: devAppKey }
}
