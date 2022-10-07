import { FC } from "react"
import { AppBar, Container, Divider, Toolbar } from "@mui/material"
import Link from "next/link"
import SimpleSnackbar from "./SimpleSnackbar"
import ThemeSwitcher from "./ThemeSwitcherButton"

const SiteLayout: FC = ({ children }) => {
    return (
        <>
            <AppBar position="static">
                <Toolbar>Menu</Toolbar>
            </AppBar>
            <Container>{children}</Container>
            <Container component="footer">
                <ThemeSwitcher />
                <Divider />
                <Link href="/">Index</Link>
                <Divider />
                <Link href="/test">Test</Link>
                <Divider />
                <SimpleSnackbar />
            </Container>
        </>
    )
}

export default SiteLayout
