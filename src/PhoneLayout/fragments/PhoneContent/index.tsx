import * as Styled from './styles'

interface Props {
  children: React.ReactNode
}

const PhoneContent: React.FC<Props> = ({ children }) => {
  return (
    <Styled.PhoneContentWrapper>
      <Styled.PhoneContent>
        <Styled.PhoneContentInner>{children}</Styled.PhoneContentInner>
      </Styled.PhoneContent>
    </Styled.PhoneContentWrapper>
  )
}

export default PhoneContent
