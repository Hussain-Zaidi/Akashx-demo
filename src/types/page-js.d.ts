declare module '*page.js' {
  const value: any
  // Support both CommonJS and ES module imports
  export default value
  export = value
}

declare module '*layout.js' {
  const value: any
  export default value
  export = value
}

declare module '*route.js' {
  const value: any
  export default value
  export = value
}
