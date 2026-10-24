"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
    AppBar,
    Box,
    Button,
    Collapse,
    Container,
    Drawer,
    IconButton,
    List,
    ListItemButton,
    ListItemText,
    Toolbar,
    Typography,
} from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import MosqueLogo from "@/assets/icons/mosque-logo.svg";

const navigationItems = [
    { title: "خانه", href: "/" },
     { title: "برنامه‌ها و مناسبت‌ها", href: "/programs" },
    { title: "پایگاه بسیج", href: "/basij", hasSubmenu: true },
    { title: "هیئت انصارالفاطمه الزهرا (س)", href: "/heyat" },
    { title: "معرفی مسجد", href: "/about" },
    { title: "پخش زنده", href: "/live" },
];

const basijItems = [
    { title: "برادران | شهدای فاطمیه", href: "/basij/brothers" },
    { title: "خواهران | شهید واشقانی", href: "/basij/sisters" },
];

export default function Header() {
    const pathname = usePathname();

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [basijMenuOpen, setBasijMenuOpen] = useState(
        pathname.startsWith("/basij"),
    );

    useEffect(() => {
        setMobileMenuOpen(false);
        setBasijMenuOpen(pathname.startsWith("/basij"));
    }, [pathname]);

    const closeMobileMenu = () => setMobileMenuOpen(false);

    const isActive = (href: string) =>
        href === "/"
            ? pathname === "/"
            : pathname === href || pathname.startsWith(`${href}/`);

    const navLinkSx = (active: boolean) => ({
        position: "relative",
        minWidth: 0,
        minHeight: 42,
        px: { xs: 1, xl: 1.25 },
        borderRadius: 1,
        color: active ? "secondary.main" : "text.primary",
        bgcolor: "transparent",
        fontSize: "0.875rem",
        fontWeight: active ? 800 : 600,
        whiteSpace: "nowrap",
        transition: "color 180ms ease, background-color 180ms ease",

        "&:hover, &:focus-visible": {
            color: "secondary.main",
            bgcolor: "transparent",
        },

        "&:hover::after, &:focus-visible::after": {
            width: "calc(100% - 20px)",
        },

        "& .MuiButton-endIcon": {
            color: "inherit",
        },

        "&::after": {
            content: '""',
            position: "absolute",
            right: "50%",
            bottom: 2,
            width: active ? "calc(100% - 20px)" : 0,
            height: 2,
            borderRadius: 2,
            bgcolor: "secondary.main",
            transform: "translateX(50%)",
            transition: "width 180ms ease",
        },
    });

    const mobileLinkSx = (active: boolean) => ({
        minHeight: 44,
        mb: 0.5,
        px: 1.5,
        borderRadius: 1,
        color: active ? "secondary.main" : "text.primary",
        bgcolor: "transparent",
        transition: "color 180ms ease, background-color 180ms ease",

        "&:hover, &.Mui-selected, &.Mui-selected:hover, &:focus-visible": {
            color: "secondary.main",
            bgcolor: "action.hover",
        },

        "& .MuiListItemText-root": {
            m: 0,
            textAlign: "right",
        },

        "& .MuiListItemText-primary": {
            fontFamily: "inherit",
            fontSize: "0.85rem",
            fontWeight: active ? 800 : 600,
            lineHeight: 1.8,
            color: "inherit",
        },
    });

    const iconButtonSx = {
        width: { xs: 36, sm: 38 },
        height: { xs: 36, sm: 38 },
        p: 0,
        flexShrink: 0,
        borderRadius: 2,
        color: "primary.dark",
        bgcolor: "action.hover",
        border: "1px solid",
        borderColor: "divider",
        transition: "background-color 180ms ease, border-color 180ms ease",
        "&:hover": {
            bgcolor: "action.selected",
            borderColor: "secondary.main",
        },
    };

    return (
        <>
            <Box
                component="header"
                sx={{
                    position: "fixed",
                    top: { xs: 8, sm: 12, md: 18 },
                    left: 0,
                    right: 0,
                    zIndex: 1200,
                    px: { xs: 1, sm: 2, lg: 4 },
                    pointerEvents: "none",
                }}
            >
                <AppBar
                    position="static"
                    elevation={0}
                    sx={{
                        width: "100%",
                        maxWidth: 1440,
                        mx: "auto",
                        overflow: "visible",
                        pointerEvents: "auto",
                        borderRadius: { xs: 3, md: 999 },
                        bgcolor: "glass.background",
                        backgroundImage: "none",
                        backdropFilter: "glass.backdropFilter",
                        WebkitBackdropFilter: "glass.backdropFilter",
                        border: "none",
                        boxShadow: "glass.shadow",
                        color: "text.primary",
                    }}
                >
                    <Container
                        maxWidth={false}
                        sx={{ px: { xs: 1.25, sm: 2, md: 3 } }}
                    >
                        <Toolbar
                            disableGutters
                            sx={{
                                minHeight: { xs: 54, sm: 64, md: 78 },
                                gap: { xs: 1, md: 2 },
                                justifyContent: "space-between",
                            }}
                        >
                            <Box
                                component={Link}
                                href="/"
                                onClick={closeMobileMenu}
                                aria-label="مسجد جامع فاطمیه - صفحه اصلی"
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: { xs: 0.75, sm: 1.25 },
                                    minWidth: 0,
                                    flexShrink: 0,
                                    color: "inherit",
                                    textDecoration: "none",
                                }}
                            >
                                <Box
                                    sx={{
                                        width: { xs: 38, sm: 46, md: 58 },
                                        height: { xs: 38, sm: 46, md: 58 },
                                        flexShrink: 0,
                                    }}
                                >
                                    <Image
                                        src={MosqueLogo}
                                        alt="لوگوی مسجد جامع فاطمیه"
                                        width={58}
                                        height={58}
                                        priority
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
                                            fontSize: {
                                                xs: "0.72rem",
                                                sm: "0.85rem",
                                                md: "0.98rem",
                                            },
                                            fontWeight: 800,
                                            color: "primary.dark",
                                            lineHeight: 1.8,
                                            whiteSpace: "nowrap",
                                        }}
                                    >
                                        مسجد جامع فاطمیه
                                    </Typography>

                                    <Typography
                                        sx={{
                                            display: { xs: "none", sm: "block" },
                                            fontSize: "0.7rem",
                                            color: "text.secondary",
                                            lineHeight: 1.5,
                                            whiteSpace: "nowrap",
                                        }}
                                    >
                                        پایگاه فرهنگی مذهبی
                                    </Typography>
                                </Box>
                            </Box>

                            <Box
                                component="nav"
                                aria-label="منوی اصلی"
                                sx={{
                                    display: { xs: "none", lg: "flex" },
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flex: 1,
                                    minWidth: 0,
                                    gap:"30px",
                                }}
                            >
                                {navigationItems.map((item) => {
                                    const active = isActive(item.href);

                                    if (item.hasSubmenu) {
                                        return (
                                            <Box
                                                key={item.href}
                                                sx={{
                                                    position: "relative",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    "&:hover .basij-submenu, &:focus-within .basij-submenu": {
                                                        opacity: 1,
                                                        visibility: "visible",
                                                        transform: "translateY(0)",
                                                        pointerEvents: "auto",
                                                    },
                                                    "&:hover .MuiButton-endIcon svg, &:focus-within .MuiButton-endIcon svg": {
                                                        transform: "rotate(180deg)",
                                                    },
                                                }}
                                            >
                                                <Button
                                                    component={Link}
                                                    href={item.href}
                                                    aria-haspopup="true"
                                                    endIcon={
                                                        <KeyboardArrowDownRoundedIcon
                                                            fontSize="small"
                                                            sx={{
                                                                transition: "transform 180ms ease",
                                                            }}
                                                        />
                                                    }
                                                    sx={{
                                                        ...navLinkSx(active),
                                                        gap: 0.25,
                                                        "& .MuiButton-endIcon": {
                                                            mr: 0,
                                                            ml: 0,
                                                            color: "inherit",
                                                        },
                                                    }}
                                                >
                                                    {item.title}
                                                </Button>

                                                <Box
                                                    className="basij-submenu"
                                                    sx={{
                                                        position: "absolute",
                                                        top: "100%",
                                                        right: 0,
                                                        pt: 1,
                                                        width: 224,
                                                        opacity: 0,
                                                        visibility: "hidden",
                                                        pointerEvents: "none",
                                                        transform: "translateY(5px)",
                                                        transition:
                                                            "opacity 180ms ease, transform 180ms ease, visibility 180ms",
                                                    }}
                                                >
                                                    <Box
                                                        sx={{
                                                            p: 1,
                                                            border: "none",
                                                            borderRadius: 2,
                                                            bgcolor: "background.paper",
                                                            boxShadow: "glass.shadow",
                                                        }}
                                                    >
                                                        {basijItems.map((subItem) => {
                                                            const subActive = isActive(
                                                                subItem.href,
                                                            );

                                                            return (
                                                                <Button
                                                                    key={subItem.href}
                                                                    component={Link}
                                                                    href={subItem.href}
                                                                    fullWidth
                                                                    sx={{
                                                                        justifyContent: "flex-start",
                                                                        minHeight: 42,
                                                                        px: 1.5,
                                                                        borderRadius: 1,
                                                                        color: subActive
                                                                            ? "secondary.main"
                                                                            : "text.primary ",
                                                                        bgcolor: "transparent",
                                                                        fontSize: "0.84rem",
                                                                        fontWeight: subActive ? 800 : 600,
                                                                        transition: "color 180ms ease, background-color 180ms ease",
                                                                        "&:hover, &:focus-visible": {
                                                                            color: "primary.main ",
                                                                            bgcolor: "action.hover",
                                                                        },
                                                                    }}
                                                                >
                                                                    {subItem.title}
                                                                </Button>
                                                            );
                                                        })}
                                                    </Box>
                                                </Box>
                                            </Box>
                                        );
                                    }

                                    return (
                                        <Button
                                            key={item.href}
                                            component={Link}
                                            href={item.href}
                                            sx={navLinkSx(active)}
                                        >
                                            {item.title}
                                        </Button>
                                    );
                                })}
                            </Box>

                            <IconButton
                                aria-label="باز کردن منو"
                                aria-expanded={mobileMenuOpen}
                                aria-controls="mobile-navigation"
                                onClick={() => setMobileMenuOpen(true)}
                                sx={{
                                    ...iconButtonSx,
                                    display: { xs: "flex", lg: "none" },
                                    color: "primary.contrastText",
                                    bgcolor: "primary.main",
                                    borderColor: "transparent",
                                    "&:hover": {
                                        bgcolor: "primary.dark",
                                        borderColor: "transparent",
                                    },
                                }}
                            >
                                <MenuRoundedIcon fontSize="small" />
                            </IconButton>
                        </Toolbar>
                    </Container>
                </AppBar>
            </Box>

            <Drawer
                anchor="right"
                open={mobileMenuOpen}
                onClose={closeMobileMenu}
                transitionDuration={{ enter: 240, exit: 180 }}
                ModalProps={{
                    keepMounted: true,
                    disableScrollLock: true,
                }}
                sx={{
                    display: { xs: "block", lg: "none" },
                    zIndex: 1400,
                    "& .MuiBackdrop-root": {
                        bgcolor: "rgba(16, 59, 72, 0.42)",
                        backdropFilter: "blur(4px)",
                    },
                    "& .MuiDrawer-paper": {
                        width: { xs: "min(88vw, 340px)", sm: 340 },
                        boxSizing: "border-box",
                        border: "none",
                        borderRadius: "16px 0 0 16px",
                        bgcolor: "background.paper",
                        backgroundImage: "none",
                        boxShadow: "-12px 0 40px rgba(16, 59, 72, 0.16)",
                        overflowY: "auto",
                        display: "flex",
                        flexDirection: "column",
                    },
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 1,
                        px: 2,
                        py: 1.75,
                        borderBottom: "1px solid",
                        borderColor: "divider",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            minWidth: 0,
                        }}
                    >
                        <Box sx={{ width: 40, height: 40, flexShrink: 0 }}>
                            <Image
                                src={MosqueLogo}
                                alt="لوگوی مسجد جامع فاطمیه"
                                width={40}
                                height={40}
                                priority
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
                                    fontSize: "0.85rem",
                                    fontWeight: 800,
                                    color: "primary.dark",
                                    lineHeight: 1.8,
                                    whiteSpace: "nowrap",
                                }}
                            >
                                مسجد جامع فاطمیه
                            </Typography>

                            <Typography
                                sx={{
                                    fontSize: "0.7rem",
                                    color: "text.secondary",
                                }}
                            >
                                پایگاه فرهنگی مذهبی
                            </Typography>
                        </Box>
                    </Box>

                    <IconButton
                        aria-label="بستن منو"
                        onClick={closeMobileMenu}
                        sx={iconButtonSx}
                    >
                        <CloseRoundedIcon fontSize="small" />
                    </IconButton>
                </Box>

                <Box
                    id="mobile-navigation"
                    component="nav"
                    aria-label="منوی موبایل"
                    sx={{ px: 2, py: 2 }}
                >
                    <Typography
                        sx={{
                            px: 1.5,
                            mb: 1.25,
                            color: "text.secondary",
                            fontSize: "0.7rem",
                            fontWeight: 700,
                        }}
                    >
                        دسترسی سریع
                    </Typography>

                    <List disablePadding>
                        {navigationItems.map((item) => {
                            const active = isActive(item.href);

                            if (item.hasSubmenu) {
                                return (
                                    <Box key={item.href}>
                                        <ListItemButton
                                            onClick={() =>
                                                setBasijMenuOpen((open) => !open)
                                            }
                                            aria-expanded={basijMenuOpen}
                                            aria-controls="mobile-basij-submenu"
                                            sx={mobileLinkSx(active)}
                                        >
                                            <ListItemText primary={item.title} />

                                            <KeyboardArrowDownRoundedIcon
                                                sx={{
                                                    flexShrink: 0,
                                                    color: "inherit",
                                                    transform: basijMenuOpen
                                                        ? "rotate(180deg)"
                                                        : "none",
                                                    transition: "transform 180ms ease",
                                                }}
                                            />
                                        </ListItemButton>

                                        <Collapse
                                            id="mobile-basij-submenu"
                                            in={basijMenuOpen}
                                            timeout={200}
                                            unmountOnExit
                                        >
                                            <Box
                                                sx={{
                                                    mr: 2,
                                                    ml: 1,
                                                    mt: 0.5,
                                                    mb: 1,
                                                    pr: 1,
                                                    borderRight: "2px solid",
                                                    borderColor: "secondary.light",
                                                }}
                                            >
                                                {basijItems.map((subItem) => {
                                                    const subActive = isActive(
                                                        subItem.href,
                                                    );

                                                    return (
                                                        <ListItemButton
                                                            key={subItem.href}
                                                            component={Link}
                                                            href={subItem.href}
                                                            onClick={closeMobileMenu}
                                                            selected={subActive}
                                                            sx={{
                                                                ...mobileLinkSx(subActive),
                                                                minHeight: 42,
                                                            }}
                                                        >
                                                            <ListItemText
                                                                primary={subItem.title}
                                                            />
                                                        </ListItemButton>
                                                    );
                                                })}
                                            </Box>
                                        </Collapse>
                                    </Box>
                                );
                            }

                            return (
                                <ListItemButton
                                    key={item.href}
                                    component={Link}
                                    href={item.href}
                                    onClick={closeMobileMenu}
                                    selected={active}
                                    sx={mobileLinkSx(active)}
                                >
                                    <ListItemText primary={item.title} />
                                </ListItemButton>
                            );
                        })}
                    </List>
                </Box>

                <Box sx={{ mt: "auto", px: 2, pb: 2 }}>
                    <Box
                        sx={{
                            p: 1.75,
                            borderRadius: 2,
                            bgcolor: "action.hover",
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: "0.82rem",
                                fontWeight: 800,
                                color: "primary.dark",
                            }}
                        >
                            مسجد جامع فاطمیه
                        </Typography>

                        <Typography
                            sx={{
                                mt: 0.5,
                                mb: 1.5,
                                fontSize: "0.73rem",
                                color: "text.secondary",
                                lineHeight: 1.9,
                            }}
                        >
                            همراه شما در مسیر ایمان و فرهنگ
                        </Typography>

                        <Button
                            component={Link}
                            href="/live"
                            onClick={closeMobileMenu}
                            fullWidth
                            variant="contained"
                            color="primary"
                            sx={{
                                minHeight: 40,
                                borderRadius: 2,
                                fontSize: "0.82rem",
                                fontWeight: 700,
                            }}
                        >
                            مشاهده پخش زنده
                        </Button>
                    </Box>
                </Box>
            </Drawer>
        </>
    );
}