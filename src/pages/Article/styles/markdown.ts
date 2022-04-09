import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  .bytemd {
    height: calc(100vh - 288px);
  }
  .markdown-body h1,
  .markdown-body h2 {
    padding-bottom: 0.3em;
    border-bottom: 1px solid #eaecef;
  }
  .markdown-body h1 {
    font-size: 2em;
  }
  .markdown-body h2 {
    font-size: 1.5em;
  }
  .markdown-body h3 {
    font-size: 1.25em;
  }
  .markdown-body h4 {
    font-size: 1em;
  }
  .markdown-body h5 {
    font-size: 0.875em;
  }
  .markdown-body h6 {
    font-size: 0.85em;
    color: #6a737d;
  }
  .markdown-body h1,
  .markdown-body h2,
  .markdown-body h3,
  .markdown-body h4,
  .markdown-body h5,
  .markdown-body h6 {
    margin-top: 24px;
    margin-bottom: 16px;
    font-weight: 600;
    line-height: 1.25;
  }
  .markdown-body blockquote {
    padding: 0 1em;
    color: #6a737d;
    border-left: 0.25em solid #dfe2e5;
  }
  .markdown-body table {
    display: block;
    width: 100%;
    overflow: auto;
  }
  .markdown-body ol,
  .markdown-body ul {
    padding-left: 2em;
  }
  .markdown-body blockquote,
  .markdown-body details,
  .markdown-body dl,
  .markdown-body ol,
  .markdown-body p,
  .markdown-body pre,
  .markdown-body table,
  .markdown-body ul {
    margin-top: 0;
    margin-bottom: 16px;
  }
  .markdown-body li {
    word-wrap: break-all;
  }
  .markdown-body pre {
    padding: 16px;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    background-color: #f6f8fa;
    border-radius: 3px;
  }
  .markdown-body code {
    padding: 0.2em 0.4em;
    margin: 0;
    font-size: 85%;
    background-color: rgba(27, 31, 35, 0.05);
    border-radius: 3px;
  }
  .markdown-body pre code {
    display: inline;
    max-width: auto;
    padding: 0;
    margin: 0;
    overflow: visible;
    line-height: inherit;
    word-wrap: normal;
    background-color: initial;
    border: 0;
  }
  .markdown-body pre > code {
    padding: 0;
    margin: 0;
    font-size: 100%;
    word-break: normal;
    white-space: pre;
    background: transparent;
    border: 0;
  }
`
