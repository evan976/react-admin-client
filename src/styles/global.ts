import 'antd/dist/antd.less'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  #root {
    width: 100%;
    height: 100%;
  }

  .ant-menu-inline {
    border: none;
  }

  .ant-menu-inline .ant-menu-item::after {
    border: none;
  }

  .ant-menu-sub.ant-menu-inline {
    background: #ffffff;
  }
`
