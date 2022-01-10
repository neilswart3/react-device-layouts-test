import { PhoneFrontCamera } from '..'
import * as Styled from './styles'

const PhoneSpeaker: React.FC = () => (
  <Styled.PhoneSpeakerWrapper>
    <Styled.PhoneSensor />
    <Styled.PhoneFrontCameraWrapper>
      <PhoneFrontCamera />
      <Styled.PhoneSpeaker />
    </Styled.PhoneFrontCameraWrapper>
  </Styled.PhoneSpeakerWrapper>
)

export default PhoneSpeaker
