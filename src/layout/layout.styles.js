import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: #f4f5f5;
  width: 100%;
  display: flex;
  flex-direction: column;

  .container {
    max-width: 1200px;
    margin: 2em auto;
    display: flex;
    justify-content: space-between;
  }

  .content {
    width:940px;
    height: auto;
    margin-left: 20px;
    border-radius: 2px;
    background-color: #fff;
  }
`
