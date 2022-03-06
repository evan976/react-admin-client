import styled from 'styled-components'

export const Container = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 24px;
  box-shadow: 0 2px 5px rgb(0 0 0 / 10%);

  .trigger {
    padding: 0 24px;
    font-size: 16px;
    line-height: 64px;
    cursor: pointer;
    transition: background-color .3s;
  }

  .trigger:hover, .link:hover, .github:hover {
    background-color: #f0f2f5;
  }

  .right {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .link, .github {
      padding: 0 16px;
      font-size: 16px;
      line-height: 64px;
      cursor: pointer;
      transition: background-color .3s;
    }

    .user {
      margin-left: 16px;
      cursor: pointer;
    }
  }
`
