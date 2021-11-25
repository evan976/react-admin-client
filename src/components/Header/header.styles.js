import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 5rem;
  background: #fff;
  box-shadow: 0 2px 5px rgb(0 0 0 / 10%);

  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }

  .logo {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .right {
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
