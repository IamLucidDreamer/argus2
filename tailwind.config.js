module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        hero: "url('argus website/PNG/Insta Argus12.png')",
        footer: "url('argus website/SVG/1. LOGO Vectorssmall 2.svg')",
        mapbg: "url('argus website/PNG/World Map.png')",
        mapbg2: "url('argus website/PNG/World Map Home.png')",
        aboutbg: "url('argus website/PNG/Image Thumbnail2.png')",
        servicesbg: "url('argus website/PNG/Image Thumbnail.png')",
        jobsbg: "url('argus website/PNG/Image Thumbnail1.png')",
        callus: "url('argus website/PNG/raw-2_edited.png')",
        knowbg: "url('argus website/PNG/Group 1560.jpg')",
        empofmon: "url('argus website/PNG/Overlay.png')",
        shape: "url(argus website/SVG/5. Newsletter.svg)",
        shape1: "url(argus website/SVG/Path 217.svg)",
        siren: "url(argus website/SVG/siren.svg)",
        "header-bg": "url('argus website/PNG/1. Overlay 2.png')",
        "cta-bg": "url('argus website/PNG/1. Overlay 3.png')",
        logincar: "url(argus website/PNG/2. Hero box.png)",
        handcuffs: "url(argus website/SVG/9. Hancuffs.svg)",
        triangles: "url(argus website/SVG/Know your partner triangles.svg)",
      }),
      colors: {
        "gray-1": "#F1F1F1",
        "gray-2": "#868696",
        "gray-3": "#3F3F3F",
        "red-1": "#BA0913",
        "black-1": "#1c1c1c",
        hover: "#501616",
        client: "#e8eaee",
        "mobile-nav-border":"#707070"
      },
      fontFamily: {
        "for-heading": [
          "Rajdhani",
          "ui-serif",
          "Georgia",
          "Cambria",
          "Times New Roman",
          "Times",
          "serif",
        ],
        "for-para": [
          "Helvetica",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
      },
      fontSize: {
        "4xl": "2.85rem",
        "number": "2.50rem"
      },
      maxWidth: {
        1366: "1230px",
        1500: "1500px",
        1600: "1600px",
        8: "8px",
      },
      minWidth: {
        8: "8px",
      },
      width: {
        "8-px": "8px",
      },
      boxShadow: {
        "header-outer-shadow": "3px 3px 6px 1px rgba(0, 0, 0, 0.2)",
        "button-shadow": "3px 3px 6px 1px rgba(0, 0, 0, 0.4)",
        "button-shadow-2": "3px 3px 6px 1px rgba(0, 0, 0, 0.16)",
        "button-shadow-3": "3px 3px 6px 1px rgba(0, 0, 0, 0.08)",
        "button-inner": "inset -3px -3px 6px 1px rgba(0, 0, 0, 0.20)",
        "speech": "5px 5px 10px 1px rgba(0, 0, 0, 0.16)",
        "speech-2": "5px 3px 10px 1px rgba(0, 0, 0, 0.08)",
        "services": "inset -3px -3px 10px 1px rgba(0, 0, 0, 0.30)",
      },
      backgroundSize: {
        "stretch-x": "100% 100%",
      },
      rotate: {
         '60': '60deg',
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
