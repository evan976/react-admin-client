import * as React from 'react'
import { Button, Form, Input, notification } from 'antd'
import { useNavigate, useParams } from 'react-router-dom'
import { useSafeState } from 'ahooks'
import { Editor } from '@bytemd/react'
import gfm from '@bytemd/plugin-gfm'
import gemoji from '@bytemd/plugin-gemoji'
import highlight from '@bytemd/plugin-highlight-ssr'
import zhHans from 'bytemd/locales/zh_Hans.json'
import * as mainApi from '@/api'
import 'bytemd/dist/index.min.css'
import 'highlight.js/styles/vs.css'
import PublishOption from './PublishOption'
import { Wrapper } from './styles/markdown'
import { Article } from '@/types'

const plugins = [
  gfm(),
  gemoji(),
  highlight({})
]

const ArticleEdit: React.FC = () => {

  const navigate = useNavigate()
  const { id } = useParams()
  const [form] = Form.useForm<Article>()
  const [visible, setVisible] = useSafeState<boolean>(false)
  const [title, setTitle] = useSafeState<string>('')
  const [thumb, setThumb] = useSafeState<string>('')
  const [content, setContent] = useSafeState<string>('')
  const [tags, setTags] = useSafeState<string[]>([])
  const [category, setCategory] = useSafeState<string>('')

  const onFinish = async (values: any) => {
    const posts = { ...values, title, content, thumb, tags, category }

    if (!id) {
      await mainApi.articleService.create(posts)
      notification.success({ message: '文章发表成功' })
    } else {
      await mainApi.articleService.update(id, posts)
      notification.success({ message: '文章修改成功' })
    }
    setVisible(false)
    navigate('/article/list')
  }

  React.useEffect(() => {
    if (id) {
      (async () => {
        const { data } = await mainApi.articleService.findOne(id)
        form.setFieldsValue(data)
        setTitle(data.title)
        setThumb(data.thumb)
        setContent(data.content)
        setTags(data.tags?.map(v => v.id) as Array<string>)
        setCategory(data.category?.id)
      })()
    }
  }, [])

  React.useEffect(() => {
    if (!id) {
      form.resetFields()
      setTitle('')
      setThumb('')
      setContent('')
      setCategory('')
      setTags([])
    }
  }, [id])

  return (
    <Wrapper>
      <Form form={form}>
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
            onClick={() => setVisible(true)}
            style={{ position: 'fixed', right: 40, bottom: 50 }}
          >确定</Button>
        </Form.Item>
      </Form>
      <PublishOption
        visible={visible}
        setVisible={setVisible}
        thumb={thumb}
        setThumb={(t) => setThumb(t)}
        tags={tags}
        setTags={(t) => setTags(t)}
        category={category}
        setCategory={(c) => setCategory(c)}
        form={form}
        onFinish={onFinish}
      />
    </Wrapper>
  )
}

export default ArticleEdit
