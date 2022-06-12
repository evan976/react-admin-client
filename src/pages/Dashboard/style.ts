import styled from 'styled-components'

export const Container = styled.div`
  margin-bottom: 32px;

  .ant-row {
    margin: 0 -10px;

    .ant-col {
      padding: 0 10px;
    }
  }

  .article {
    background: linear-gradient(180deg,#f2f9fe,#e6f4fe);
  }

  .category {
    background: linear-gradient(180deg,#f5fef2,#e6feee);
  }

  .tag {
    background: linear-gradient(180deg,#f2f9fe,#e6f4fe);
  }

  .comment {
    background: linear-gradient(180deg,#f5fef2,#e6feee);
  }

  .ant-card {
    .statistic {
      h5 {
        font-weight: normal;
        color: #333333;
      }
      span {
        font-size: 20px;
        margin-bottom: 4px;
        margin-top: 24px;
        display: block;
      }
    }

    img {
      width: 194px;
      height: 80px;
    }
  }

  .ant-card-body {
    display: flex;
    justify-content: space-between;
    min-height: 100px;
    padding: 16px 20px 20px;
  }
`

export const DashboardPage = styled.div`
  display: flex;
  flex-direction: column;

  .ant-row {
    margin: 0 -10px;

    .ant-col {
      padding: 0 10px;
    }
  }
`
