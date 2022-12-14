import { useThemeContext } from "@/react/contexts/ThemeContext"
import { DarkModeOutlined, LightModeRounded } from "@mui/icons-material"
import { IconButton, IconButtonProps, Tooltip } from "@mui/material"

interface ThemeSwitcherButtonProps extends IconButtonProps {}
const ThemeSwitcher = ({ ...rest }: ThemeSwitcherButtonProps) => {
    const { themeMode, toggleTheme } = useThemeContext()
    return (
        <Tooltip title={themeMode === "light" ? `Switch to dark mode` : `Switch to light mode`}>
            <IconButton {...rest} onClick={toggleTheme}>
                {themeMode === "light" ? <DarkModeOutlined /> : <LightModeRounded />}
            </IconButton>
        </Tooltip>
    )
}
export default ThemeSwitcher
