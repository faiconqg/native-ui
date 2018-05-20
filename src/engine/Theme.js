export default {
  colors: {
    light: '#FFFFFF',
    background: '#fbfbfb',
    primaryDark: '#4a6832',
    primary: '#71ac45',
    accent: '#ff9736',
    accentDark: '#976329',
    accentExtra: '#ffd93c',
    tabIconDefault: '#ccc',
    border: '#e2e2e2',
    text: 'rgba(96,100,109, 1)',
    textAlpha: 'rgba(96,100,109, 0.5)'
  },
  setColors(colors) {
    Object.assign(this.colors, colors)
  }
}
