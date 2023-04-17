import { kodiContract } from '@kodiui/ui'
import { globalStyle } from '@vanilla-extract/css'

globalStyle('body', { background: kodiContract.colors.white })
globalStyle('::-webkit-scrollbar', { background: kodiContract.colors.whiteA6, width: '10px' })
globalStyle('::-webkit-scrollbar-track', { background: kodiContract.colors.blackA5 })
globalStyle('::-webkit-scrollbar-thumb', {
  background: kodiContract.colors.blackA7,
  borderRadius: '10px',
})
globalStyle('::-webkit-scrollbar-thumb:hover', { background: kodiContract.colors.blackA9 })
