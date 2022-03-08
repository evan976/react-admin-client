import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .wrapper {
    margin: auto;
    min-height: 560px;
    border: 1px solid #EEE;
    border-radius: 2px;
    box-shadow: 0 20px 40px rgb(0 0 0 / 8%);
    display: flex;
    align-items: stretch;

    .register-main {
      width: 512px;
      margin-left: auto;
      margin-right: auto;
      padding-left: 0;
      padding-right: 0;
      background-color: #FFF;
    }

    .register-form {
      width: 400px;
      height: 100%;
      margin: auto;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;

      .register-title {
        color: #1890ff;
        font-size: 32px;
        font-weight: 400;
        text-align: center;
        line-height: 48px;
      }

      .login {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`
