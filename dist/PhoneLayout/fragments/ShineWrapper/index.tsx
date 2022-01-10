import * as Styled from './styles'

interface Props {
  children: React.ReactNode
}

const ShineWrapper: React.FC<Props> = ({ children }) => {
  return (
    <Styled.ShineWrapper>
      <Styled.Shine />
      {children}
    </Styled.ShineWrapper>
  )
}

export default ShineWrapper
