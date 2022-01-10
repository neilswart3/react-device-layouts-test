import { ShineWrapper, Header, Footer, PhoneContent } from './fragments'
import * as Styled from './styles'

interface Props {
  children: React.ReactNode
  className?: string
}

const PhoneLayout: React.FC<Props> = (props) => {
  const { children, className = 'PhoneLayout' } = props

  return (
    <>
      <Styled.PhoneLayout className={className}>
        <Styled.PhoneFrame>
          <Styled.PhoneFrameInner>
            <ShineWrapper>
              <Styled.PhoneBody>
                <Header />
                <PhoneContent>{children}</PhoneContent>
                <Footer />
              </Styled.PhoneBody>
            </ShineWrapper>
          </Styled.PhoneFrameInner>
        </Styled.PhoneFrame>
      </Styled.PhoneLayout>
    </>
  )
}
export default PhoneLayout
