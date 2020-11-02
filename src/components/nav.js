import React from "react"
import { NavLink } from '@theme-ui/components'
import {Flex} from "theme-ui"
import ThemeSwithcher from "../components/theme-switcher"


const Nav = () => (
    <Flex as='nav' style={{float:"right",justifyContent:"flex-end"}}>
    <NavLink href='/' p={2}>
        Home
    </NavLink>
    <NavLink href='/blog' p={2}>
        Blog
    </NavLink>
    <NavLink href='about' p={2}>
        About
    </NavLink>
    <ThemeSwithcher />
    </Flex>

)

export default Nav