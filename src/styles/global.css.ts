import { kodiContract } from '@kodiui/ui'
import { globalStyle } from '@vanilla-extract/css'

globalStyle('body', { background: kodiContract.colors.white })
globalStyle('::-webkit-scrollbar', { width: '7px' })
globalStyle('::-webkit-scrollbar-track', { background: `#f1f1f1` })
globalStyle('::-webkit-scrollbar-thumb', { background: `#888` })
globalStyle('::-webkit-scrollbar-thumb:hover', { background: `#555` })
