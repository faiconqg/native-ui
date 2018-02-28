export default {
  colorPrimaryDark: '#4a6832',
  colorPrimary: '#71ac45',
  colorAccent: '#ff9736',
  colorAccentDark: '#976329',
  colorAccentExtra: '#ffd93c',
  tabIconDefault: '#ccc',
  setColors(colors) {
    if (colors.default) {
      colors = colors.default
    }
    this.colorPrimary = colors.colorPrimary
    this.colorPrimaryDark = colors.colorPrimaryDark
    this.colorAccent = colors.colorAccent
    this.colorAccentDark = colors.colorAccentDark
    this.colorAccentExtra = colors.colorAccentExtra
    this.tabIconDefault = colors.tabIconDefault
  }
}