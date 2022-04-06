import * as React from 'react'
import { Button, Form, Input } from 'antd'
import { useSafeState } from 'ahooks'

import { Editor } from '@bytemd/react'
import gfm from '@bytemd/plugin-gfm'
import gemoji from '@bytemd/plugin-gemoji'
import highlight from '@bytemd/plugin-highlight-ssr'
import zhHans from 'bytemd/locales/zh_Hans.json'
import 'bytemd/dist/index.min.css'
import 'highlight.js/styles/vs.css'
import PublishOption from './PublishOption'
import { Wrapper } from './styles/markdown'

const plugins = [
  gfm(),
  gemoji(),
  highlight({})
]


const ArticleEdit: React.FC = () => {
  const [form] = Form.useForm()

  const [visible, setVislble] = useSafeState<boolean>(false)
  const [title, setTitle] = useSafeState<string>('')
  const [thumb, setThumb] = useSafeState<string>('')
  const [content, setContent] = useSafeState<string>('')

  const onFinish = () => {
    const values = form.getFieldsValue()
    const posts = { ...values, title, content, thumb }
    console.log(posts)
  }

  return (
    <Wrapper>
      <Form>
        <Form.Item label="文章标题">
          <Input value={title} onChange={(e) => setTitle(e.target.value)} />
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
        thumb={thumb}
        setThumb={(t) => setThumb(t)}
        form={form}
        onFinish={onFinish}
      />
    </Wrapper>
  )
}

export default ArticleEdit
