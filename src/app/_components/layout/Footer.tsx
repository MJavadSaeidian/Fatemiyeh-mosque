"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import MosqueLogo from "@/assets/icons/mosque-logo.svg";

const quickLinks = [
  { title: "خانه", href: "/" },
  { title: "برنامه‌ها و مناسبت‌ها", href: "/programs" },
  { title: "پایگاه بسیج", href: "/basij" },
  { title: "هیئت انصارالفاطمه الزهرا (س)", href: "/heyat" },
  { title: "معرفی مسجد", href: "/about" },
  { title: "پخش زنده", href: "/live" },
];

const basijLinks = [
  { title: "برادران | شهدای فاطمیه", href: "/basij/brothers" },
  { title: "خواهران | شهید واشقانی", href: "/basij/sisters" },
];

const socialLinks = [
  {
    title: "اینستاگرام",
    href: "https://instagram.com/",
    icon: InstagramIcon,
  },
  {
    title: "تلگرام",
    href: "https://t.me/",
    icon: TelegramIcon,
  },
  {
    title: "یوتیوب",
    href: "https://youtube.com/",
    icon: YouTubeIcon,
  },
];

export default function Footer() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const footerBackground = isDark
    ? theme.palette.background.default
    : theme.palette.primary.dark;

  const bottomBackground = isDark ? alpha("#000000", 0.18) : "#082B35";

  const textColor = isDark ? theme.palette.text.primary : "#F4F3EE";
  const mutedColor = isDark ? theme.palette.text.secondary : "#C2D0D4";
  const accentColor = theme.palette.secondary.main;
  const borderColor = alpha("#FFFFFF", 0.12);

  const linkSx = {
    display: "inline-flex",
    alignItems: "center",
    gap: 0.75,
    width: "fit-content",
    maxWidth: "100%",
    color: mutedColor,
    fontSize: "0.84rem",
    lineHeight: 2,
    textDecoration: "none",
    transition: "color 180ms ease, transform 180ms ease",
    "&:hover": {
      color: theme.palette.secondary.light,
      transform: "translateX(-3px)",
    },
    "&:focus-visible": {
      outline: `2px solid ${accentColor}`,
      outlineOffset: 3,
      borderRadius: 1,
    },
  };

  const headingSx = {
    position: "relative",
    mb: { xs: 2, md: 2.5 },
    pb: 1.25,
    color: textColor,
    fontSize: "0.95rem",
    fontWeight: 800,
    "&::after": {
      content: '""',
      position: "absolute",
      right: 0,
      bottom: 0,
      width: 32,
      height: 2,
      borderRadius: 2,
      bgcolor: accentColor,
    },
  };

  return (
    <Box
      component="footer"
      sx={{
        mt: "auto",
        overflow: "hidden",
        color: textColor,
        bgcolor: footerBackground,
        backgroundImage: isDark
          ? "none"
          : `linear-gradient(145deg, ${theme.palette.primary.dark} 0%, #103B48 65%, #164653 100%)`,
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            py: { xs: 4, sm: 5, md: 6 },
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, minmax(0, 1fr))",
                lg: "minmax(240px, 1.35fr) repeat(3, minmax(0, 1fr))",
              },
              columnGap: { xs: 3, md: 4, lg: 5 },
              rowGap: { xs: 4, sm: 4, lg: 0 },
            }}
          >
            <Box sx={{ minWidth: 0 }}>
              <Stack
                direction="row"
                alignItems="center"
                spacing={1.5}
                sx={{ mb: 2 }}
              >
                <Box
                  sx={{
                    width: { xs: 48, md: 56 },
                    height: { xs: 48, md: 56 },
                    p: 0.5,
                    flexShrink: 0,
                    display: "grid",
                    placeItems: "center",
                    borderRadius: 2.5,
                    bgcolor: "#FFFFFF",
                  }}
                >
                  <Image
                    src={MosqueLogo}
                    alt="لوگوی مسجد جامع فاطمیه"
                    width={56}
                    height={56}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>

                <Box sx={{ minWidth: 0 }}>
                  <Typography
                    sx={{
                      color: textColor,
                      fontSize: {
                        xs: "0.98rem",
                        md: "1.05rem",
                      },
                      fontWeight: 800,
                      lineHeight: 1.8,
                    }}
                  >
                    مسجد جامع فاطمیه
                  </Typography>

                  <Typography
                    sx={{
                      color: mutedColor,
                      fontSize: "0.75rem",
                      lineHeight: 1.8,
                    }}
                  >
                    پایگاه فرهنگی مذهبی
                  </Typography>
                </Box>
              </Stack>

              <Typography
                sx={{
                  maxWidth: 360,
                  color: mutedColor,
                  fontSize: "0.84rem",
                  lineHeight: 2.2,
                  textAlign: "justify",
                }}
              >
                مسجد جامع فاطمیه، پایگاهی برای عبادت، فعالیت‌های فرهنگی و مذهبی
                و تقویت همدلی در جامعه؛ همراه ما باشید تا از برنامه‌ها و
                مناسبت‌های مسجد باخبر شوید.
              </Typography>

              <Button
                component={Link}
                href="/live"
                variant="contained"
                color="secondary"
                endIcon={<ArrowBackRoundedIcon />}
                sx={{
                  mt: 2.5,
                  minHeight: 42,
                  px: 2,
                  fontSize: "0.82rem",
                  borderRadius: 2,
                  "&:hover": {
                    bgcolor: theme.palette.secondary.dark,
                  },
                }}
              >
                مشاهده پخش زنده
              </Button>
            </Box>

            <Box sx={{ minWidth: 0 }}>
              <Typography sx={headingSx}>دسترسی سریع</Typography>

              <Stack spacing={1.1} alignItems="flex-start">
                {quickLinks.map((item) => (
                  <Box
                    key={item.href}
                    component={Link}
                    href={item.href}
                    sx={linkSx}
                  >
                    <ArrowBackRoundedIcon
                      sx={{
                        fontSize: 15,
                        color: accentColor,
                        flexShrink: 0,
                      }}
                    />
                    {item.title}
                  </Box>
                ))}
              </Stack>
            </Box>

            <Box sx={{ minWidth: 0 }}>
              <Typography sx={headingSx}>بخش‌های مسجد</Typography>

              <Stack spacing={2} alignItems="flex-start">
                <Stack direction="row" spacing={1.25} alignItems="flex-start">
                  <EventAvailableOutlinedIcon
                    sx={{
                      mt: 0.25,
                      color: accentColor,
                      fontSize: 21,
                    }}
                  />
                  <Box sx={{ minWidth: 0 }}>
                    <Box
                      component={Link}
                      href="/programs"
                      sx={{
                        ...linkSx,
                        color: textColor,
                        fontWeight: 700,
                      }}
                    >
                      برنامه‌ها و مناسبت‌ها
                    </Box>
                    <Typography
                      sx={{
                        mt: 0.25,
                        color: mutedColor,
                        fontSize: "0.75rem",
                        lineHeight: 1.9,
                      }}
                    >
                      اطلاع از مراسم و برنامه‌های مسجد
                    </Typography>
                  </Box>
                </Stack>

                <Stack direction="row" spacing={1.25} alignItems="flex-start">
                  <MenuBookOutlinedIcon
                    sx={{
                      mt: 0.25,
                      color: accentColor,
                      fontSize: 21,
                    }}
                  />
                  <Box sx={{ minWidth: 0 }}>
                    <Box
                      component={Link}
                      href="/heyat"
                      sx={{
                        ...linkSx,
                        color: textColor,
                        fontWeight: 700,
                      }}
                    >
                      هیئت انصارالفاطمه الزهرا (س)
                    </Box>
                    <Typography
                      sx={{
                        mt: 0.25,
                        color: mutedColor,
                        fontSize: "0.75rem",
                        lineHeight: 1.9,
                      }}
                    >
                      اخبار و فعالیت‌های هیئت
                    </Typography>
                  </Box>
                </Stack>

                <Box component={Link} href="/basij" sx={linkSx}>
                  <ArrowBackRoundedIcon
                    sx={{
                      fontSize: 15,
                      color: accentColor,
                    }}
                  />
                  پایگاه بسیج
                </Box>

                <Stack spacing={1} sx={{ pr: 2.5 }}>
                  {basijLinks.map((item) => (
                    <Box
                      key={item.href}
                      component={Link}
                      href={item.href}
                      sx={{
                        ...linkSx,
                        fontSize: "0.78rem",
                      }}
                    >
                      {item.title}
                    </Box>
                  ))}
                </Stack>
              </Stack>
            </Box>

            <Box sx={{ minWidth: 0 }}>
              <Typography sx={headingSx}>ارتباط با ما</Typography>

              <Stack spacing={2.25}>
                <Stack direction="row" spacing={1.25} alignItems="flex-start">
                  <LocationOnOutlinedIcon
                    sx={{
                      mt: 0.25,
                      color: accentColor,
                      fontSize: 21,
                      flexShrink: 0,
                    }}
                  />
                  <Box sx={{ minWidth: 0 }}>
                    <Typography
                      sx={{
                        color: textColor,
                        fontSize: "0.84rem",
                        fontWeight: 700,
                      }}
                    >
                      نشانی مسجد
                    </Typography>
                    <Typography
                      sx={{
                        mt: 0.5,
                        color: mutedColor,
                        fontSize: "0.8rem",
                        lineHeight: 2,
                      }}
                    >
                      آدرس مسجد را در این قسمت وارد کنید.
                    </Typography>
                  </Box>
                </Stack>

                <Stack direction="row" spacing={1.25} alignItems="center">
                  <PhoneOutlinedIcon
                    sx={{
                      color: accentColor,
                      fontSize: 21,
                      flexShrink: 0,
                    }}
                  />
                  <Box sx={{ minWidth: 0 }}>
                    <Typography
                      sx={{
                        color: textColor,
                        fontSize: "0.84rem",
                        fontWeight: 700,
                      }}
                    >
                      شماره تماس
                    </Typography>
                    <Typography
                      sx={{
                        mt: 0.5,
                        color: mutedColor,
                        fontSize: "0.8rem",
                      }}
                    >
                      شماره تماس مسجد
                    </Typography>
                  </Box>
                </Stack>

                <Stack direction="row" spacing={1.25} alignItems="flex-start">
                  <AccessTimeRoundedIcon
                    sx={{
                      mt: 0.25,
                      color: accentColor,
                      fontSize: 21,
                      flexShrink: 0,
                    }}
                  />
                  <Box sx={{ minWidth: 0 }}>
                    <Typography
                      sx={{
                        color: textColor,
                        fontSize: "0.84rem",
                        fontWeight: 700,
                      }}
                    >
                      ساعات پاسخگویی
                    </Typography>
                    <Typography
                      sx={{
                        mt: 0.5,
                        color: mutedColor,
                        fontSize: "0.8rem",
                        lineHeight: 2,
                      }}
                    >
                      ساعات مراجعه را وارد کنید.
                    </Typography>
                  </Box>
                </Stack>
              </Stack>

              <Button
                component={Link}
                href="/about"
                variant="text"
                endIcon={<ArrowBackRoundedIcon />}
                sx={{
                  mt: 2,
                  px: 0,
                  color: theme.palette.secondary.light,
                  fontSize: "0.8rem",
                  "&:hover": {
                    bgcolor: alpha(accentColor, 0.1),
                  },
                }}
              >
                آشنایی با مسجد
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>

      <Divider sx={{ borderColor }} />

      <Box sx={{ bgcolor: bottomBackground }}>
        <Container maxWidth="xl">
          <Box
            sx={{
              py: { xs: 2.5, md: 2 },
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "flex-start", md: "center" },
              justifyContent: "space-between",
              gap: { xs: 2, md: 3 },
            }}
          >
            <Typography
              sx={{
                color: mutedColor,
                fontSize: "0.76rem",
                lineHeight: 1.9,
              }}
            >
              © {new Date().getFullYear()} مسجد جامع فاطمیه
              {" — "}تمامی حقوق محفوظ است.
            </Typography>

            <Stack direction="row" spacing={1} alignItems="center">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <IconButton
                    key={item.title}
                    component="a"
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.title}
                    sx={{
                      width: 38,
                      height: 38,
                      color: mutedColor,
                      border: `1px solid ${borderColor}`,
                      borderRadius: 2,
                      "&:hover": {
                        color: accentColor,
                        borderColor: accentColor,
                        bgcolor: alpha(accentColor, 0.1),
                      },
                    }}
                  >
                    <Icon fontSize="small" />
                  </IconButton>
                );
              })}
            </Stack>

            <Stack direction="row" spacing={2.5} flexWrap="wrap" useFlexGap>
              <Box
                component={Link}
                href="/about"
                sx={{
                  ...linkSx,
                  fontSize: "0.76rem",
                }}
              >
                درباره مسجد
              </Box>
              <Box
                component={Link}
                href="/programs"
                sx={{
                  ...linkSx,
                  fontSize: "0.76rem",
                }}
              >
                برنامه‌ها
              </Box>
              <Box
                component={Link}
                href="/live"
                sx={{
                  ...linkSx,
                  fontSize: "0.76rem",
                }}
              >
                پخش زنده
              </Box>
            </Stack>
          </Box>
        </Container>
      </Box>

      <Box
        sx={{
          height: 3,
          background: `linear-gradient(90deg, transparent, ${accentColor}, ${theme.palette.primary.main}, transparent)`,
        }}
      />
    </Box>
  );
}
