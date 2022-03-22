import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  margin-bottom: 16px;

  img {
    width: 100%;
  }

  .user-info {
    position: absolute;
    left: 50%;
    bottom: 20px;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    .name {
      font-size: 16px;
      font-weight: 500;
      margin: 8px 0;
    }

    .other {
      display: flex;
      align-items: center;
      .job {
        margin: 0 16px;
      }
      .item {
        margin-left: 2px;
      }
    }
  }
`
