/** @jsx jsx */

import { jsx, useColorMode } from 'theme-ui'
import {Button} from "@theme-ui/components"

export default props => {
    const [colorMode, setColorMode] = useColorMode()
    return (
        <div>
        <Button variant='muted' bg='muted' color='#000'
          onClick={e => {
              console.log(colorMode);
            setColorMode(colorMode === 'dark' ? 'light' : 'dark')
            //document.body.classList.add('theme-ui-' + colorMode)
          }}>
           {colorMode === 'dark' ? 'light' : 'dark'}

        </Button>
        </div>

    )
  }