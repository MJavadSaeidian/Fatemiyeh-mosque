import {
  createTheme,
  type PaletteMode,
} from "@mui/material/styles";

export function createAppTheme(mode: PaletteMode = "light") {
  const isDark = mode === "dark";

  const glassBackground = isDark
    ? "rgba(16, 59, 72, 0.58)"
    : "rgba(255, 255, 255, 0.31)";

  const glassBorder = isDark
    ? "1px solid rgba(255, 255, 255, 0.12)"
    : "1px solid rgba(255, 255, 255, 0.65)";

  const glassShadow = isDark
    ? "0 8px 32px rgba(0, 0, 0, 0.18)"
    : "0 8px 32px rgba(16, 59, 72, 0.08)";

  const glassBackdropFilter = "blur(16px) saturate(160%)";

  const hoverColors = {
    background: isDark
      ? "rgba(19, 182, 201, 0.14)"
      : "rgba(8, 127, 145, 0.07)",

    primary: isDark ? "#55D0DC" : "#066B7A",

    secondary: isDark ? "#F0DDAA" : "#806329",

    border: isDark
      ? "rgba(85, 208, 220, 0.45)"
      : "rgba(8, 127, 145, 0.25)",

    card: isDark ? "#164653" : "#FAFCFC",

    glass: isDark
      ? "rgba(19, 182, 201, 0.16)"
      : "rgba(255, 255, 255, 0.76)",
  };

  return createTheme({
    direction: "rtl",

    palette: {
      mode,

      primary: {
        main: isDark ? "#13B6C9" : "#087F91",
        light: isDark ? "#174F60" : "#D5EEF0",
        dark: isDark ? "#55D0DC" : "#103B48",
        contrastText: isDark ? "#082B35" : "#FFFFFF",
      },

      secondary: {
        main: isDark ? "#DDBB70" : "#A98643",
        light: isDark ? "#F0DDAA" : "#F4E8CB",
        dark: isDark ? "#A98643" : "#806329",
        contrastText: isDark ? "#082B35" : "#FFFFFF",
      },

      background: {
        default: isDark ? "#082B35" : "#F4F3EE",
        paper: isDark ? "#103B48" : "#FFFFFF",
      },

      text: {
        primary: isDark ? "#F4F3EE" : "#103B48",
        secondary: isDark ? "#C2D0D4" : "#6F858C",
      },

      divider: isDark
        ? "rgba(255, 255, 255, 0.14)"
        : "#D5DEE0",

      success: {
        main: isDark ? "#69C99A" : "#287D56",
      },

      warning: {
        main: isDark ? "#E8BD68" : "#A98643",
      },

      error: {
        main: isDark ? "#FF8D96" : "#C03945",
      },

      action: {
        hover: hoverColors.background,
        hoverOpacity: 0.08,
        selected: isDark
          ? "rgba(19, 182, 201, 0.20)"
          : "rgba(8, 127, 145, 0.12)",
        selectedOpacity: 0.12,
        focus: isDark
          ? "rgba(19, 182, 201, 0.22)"
          : "rgba(8, 127, 145, 0.14)",
        focusOpacity: 0.12,
        disabled: isDark
          ? "rgba(244, 243, 238, 0.30)"
          : "rgba(16, 59, 72, 0.26)",
        disabledBackground: isDark
          ? "rgba(244, 243, 238, 0.08)"
          : "rgba(16, 59, 72, 0.08)",
      },

      glass: {
        background: glassBackground,
        border: glassBorder,
        shadow: glassShadow,
        backdropFilter: glassBackdropFilter,
        hoverBackground: hoverColors.glass,
      },

      hover: hoverColors,
    },

    typography: {
      fontFamily: "Vazirmatn, sans-serif",

      h1: {
        fontWeight: 800,
        fontSize: "2rem",
        lineHeight: 1.5,
      },

      h2: {
        fontWeight: 700,
        fontSize: "1.625rem",
        lineHeight: 1.5,
      },

      h3: {
        fontWeight: 700,
        fontSize: "1.25rem",
        lineHeight: 1.6,
      },

      body1: {
        fontSize: "1rem",
        lineHeight: 1.9,
      },

      body2: {
        fontSize: "0.875rem",
        lineHeight: 1.8,
      },

      button: {
        fontWeight: 600,
        textTransform: "none",
      },
    },

    shape: {
      borderRadius: 12,
    },

    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },

    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            minHeight: 44,
            borderRadius: 10,
            paddingInline: 18,
            transition:
              "color 180ms ease, background-color 180ms ease, border-color 180ms ease, box-shadow 180ms ease",

            "&:hover": {
              backgroundColor: hoverColors.background,
            },

            "&.Mui-focusVisible": {
              outline: `2px solid ${hoverColors.primary}`,
              outlineOffset: 2,
            },
          },

          textPrimary: {
            "&:hover": {
              color: hoverColors.primary,
              backgroundColor: hoverColors.background,
            },
          },

          textSecondary: {
            "&:hover": {
              color: hoverColors.secondary,
              backgroundColor: isDark
                ? "rgba(221, 187, 112, 0.12)"
                : "rgba(169, 134, 67, 0.08)",
            },
          },

          containedPrimary: {
            boxShadow: "0 4px 16px rgba(19, 182, 201, 0.18)",

            "&:hover": {
              backgroundColor: isDark ? "#55D0DC" : "#066B7A",
              boxShadow: "0 6px 20px rgba(19, 182, 201, 0.28)",
            },
          },

          containedSecondary: {
            boxShadow: "none",

            "&:hover": {
              backgroundColor: isDark ? "#F0DDAA" : "#806329",
              boxShadow: "none",
            },
          },

          outlinedPrimary: {
            "&:hover": {
              borderColor: hoverColors.primary,
              backgroundColor: hoverColors.background,
            },
          },

          outlinedSecondary: {
            "&:hover": {
              borderColor: hoverColors.secondary,
              backgroundColor: isDark
                ? "rgba(221, 187, 112, 0.12)"
                : "rgba(169, 134, 67, 0.08)",
            },
          },
        },
      },

      MuiIconButton: {
        styleOverrides: {
          root: {
            transition:
              "color 180ms ease, background-color 180ms ease, border-color 180ms ease",

            "&:hover": {
              color: hoverColors.primary,
              backgroundColor: hoverColors.background,
            },

            "&.Mui-focusVisible": {
              outline: `2px solid ${hoverColors.primary}`,
              outlineOffset: 2,
            },
          },
        },
      },

      MuiListItemButton: {
        styleOverrides: {
          root: {
            borderRadius: 10,
            transition:
              "color 180ms ease, background-color 180ms ease",

            "&:hover": {
              color: hoverColors.primary,
              backgroundColor: hoverColors.background,
            },

            "&.Mui-selected": {
              color: isDark ? "#55D0DC" : "#087F91",
              backgroundColor: isDark
                ? "rgba(19, 182, 201, 0.14)"
                : "rgba(8, 127, 145, 0.08)",
            },

            "&.Mui-selected:hover": {
              backgroundColor: isDark
                ? "rgba(19, 182, 201, 0.22)"
                : "rgba(8, 127, 145, 0.13)",
            },
          },
        },
      },

      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 16,
            boxShadow: isDark
              ? "0 4px 20px rgba(0, 0, 0, 0.16)"
              : "0 4px 20px rgba(16, 59, 72, 0.07)",
            border: isDark
              ? "1px solid rgba(255, 255, 255, 0.08)"
              : "1px solid rgba(16, 59, 72, 0.06)",
            transition:
              "background-color 180ms ease, border-color 180ms ease, box-shadow 180ms ease",

            "&:hover": {
              backgroundColor: hoverColors.card,
              borderColor: hoverColors.border,
            },
          },
        },
      },

      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: glassBackground,
            backgroundImage: "none",
            backdropFilter: glassBackdropFilter,
            WebkitBackdropFilter: glassBackdropFilter,
            borderBottom: glassBorder,
            color: isDark ? "#F4F3EE" : "#FFFFFF",
            boxShadow: glassShadow,
          },
        },
      },

      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: "none",
          },
        },
      },

      MuiLink: {
        styleOverrides: {
          root: {
            transition: "color 180ms ease",

            "&:hover": {
              color: hoverColors.primary,
            },

            "&:focus-visible": {
              outline: `2px solid ${hoverColors.primary}`,
              outlineOffset: 3,
            },
          },
        },
      },
    },
  });
}

const theme = createAppTheme();

export default theme;