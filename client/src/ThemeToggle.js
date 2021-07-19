import React from 'react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'

export default function ThemeToggle() {
    const { toggleColorMode: toggleMode } = useColorMode();
    const ToggleIcon = useColorModeValue(SunIcon, MoonIcon)
    return (
        <IconButton
            icon={<ToggleIcon w={7} h={7}/>}
            variant="ghost"
            aria-label="Toggle Theme"
            onClick={toggleMode}
            size="lg"
            className="Icon"
        />
    )
}