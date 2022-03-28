import * as React from 'react'
import { Button, Form, Input } from 'antd'
import { useSafeState } from 'ahooks'
import { Editor } from '@bytemd/react'
import gfm from '@bytemd/plugin-gfm'
import gemoji from '@bytemd/plugin-gemoji'
import highlight from '@bytemd/plugin-highlight-ssr'
import zhHans from 'bytemd/lib/locales/zh_Hans.json'
import 'bytemd/dist/index.css'
import 'highlight.js/styles/vs.css'
import './markdown.css'
import PublishOption from './PublishOption'

const plugins = [
  gfm(),
  gemoji(),
  highlight()
]

const ArticleEdit: React.FC = () => {
  const [form] = Form.useForm()

  const [visible, setVislble] = useSafeState<boolean>(false)
  const [content, setContent] = useSafeState<string>('')

  const onFinish = () => {
    console.log('11')
  }

  return (
    <>
      <Form>
        <Form.Item label="文章标题">
          <Input />
        </Form.Item>
        <Form.Item label="文章内容">
          <Editor
            value={content}
            locale={zhHans}
            plugins={plugins}
            onChange={(v) => setContent(v)}
          />
        </Form.Item>
        <Form.Item>
          <Button
            type='primary'
            onClick={() => setVislble(true)}
            style={{ float: 'right' }}
          >确定</Button>
        </Form.Item>
      </Form>
      <PublishOption
        visible={visible}
        setVisible={setVislble}
        form={form}
        onFinish={onFinish}
      />
    </>
  )
}

export default ArticleEdit
