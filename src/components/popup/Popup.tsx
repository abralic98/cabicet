import { Portal } from '../portal/Portal'
import { Animation, Box, FlexBox, Stack } from '@kodiui/ui'
import { PopupHeader } from './PopupHeader'
import { PopupProps } from './types'

export const Popup: React.FC<PopupProps> = (props) => {
  if (!props.visible) return null

  return (
    <Portal querySelector="#popup">
      <FlexBox
        alignItems={'center'}
        justifyContent={'center'}
        position="absolute"
        top={0}
        left={0}
        width={'full'}
        height={'screen'}
        id={'popup'}
      >
        <Animation animation="fadeIn">
          <Box
            style={{ background: 'rgba(0,0,0,0.5)' }}
            onClick={() => props.setVisible && props.setVisible(false)}
            zIndex="10"
            position={'absolute'}
            top={0}
            left={0}
            width={'full'}
            height={'screen'}
          />
        </Animation>
        {/* <Box maxWidth={'20'} width={'20'} visible={props.visible}> */}
        <Box zIndex={'100'} maxWidth={'20'} width={'20'}>
          <Stack gap={'2xl'}>
            {props.headerChildren && (
              <PopupHeader
                title={props.title || ''}
                setClose={props.setClose}
                headerChildren={props.headerChildren}
              />
            )}
            <Animation animation="fadeInBloom">
              <Animation
                animation="shakeX"
                animationDuration="0.3s"
                animationIterationCount={'infinite'}
              >
                <Box className="popup-content">{props.children}</Box>
              </Animation>
            </Animation>
          </Stack>
        </Box>
      </FlexBox>
    </Portal>
  )
}
