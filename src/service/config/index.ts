let BASE_URL = ''
// @ts-ignore
if (import.meta.env.MODE === 'development') {
  // @ts-ignore
  console.log(123123123, import.meta.env)
  BASE_URL = 'http://codercba.dev:8000'
} else {
  BASE_URL = 'http://codercba.dev:8000'
}
const TIME_OUT = 10000
export { BASE_URL, TIME_OUT }
