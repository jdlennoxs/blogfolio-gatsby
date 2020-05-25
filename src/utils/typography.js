import Typography from "typography"

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  headerFontFamily: ['Manrope', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
  bodyFontFamily: ['Inter', 'Source Sans Pro', 'Lato', 'serif'],
  bodyWeight: 400,
  headerWeight: 600,
  boldWeight: 600,
  googleFonts: [
    {
      name: "Manrope",
      styles: ["400", "600"],
    },
    {
      name: "Source Sans Pro",
      styles: ["400", "600"],
    },
    {
      name: "Inter",
      styles: ["400", "600"],
    },
  ],
  // See below for the full list of options.
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
