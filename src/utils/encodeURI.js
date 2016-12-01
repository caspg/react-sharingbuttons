export default (string) => {
  if (typeof string === 'undefined') {
    return ''
  }

  return encodeURIComponent(string)
}
