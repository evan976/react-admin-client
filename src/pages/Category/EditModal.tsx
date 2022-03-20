import * as React from 'react'
import { Form, FormInstance, Input, notification, Upload } from 'antd'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'

type Props = {
  form: FormInstance<any>
}

const EditForm: React.FC<Props> = (props) => {
  const [imageUrl, setImageUrl] = React.useState<string>('')
  const [loading, setLoading] = React.useState<boolean>(false)

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 5 }}>点击上传</div>
    </div>
  )

  const handleChange = (info: any) => {
    if (info.file.status === 'uploading') {
      setLoading(true)
      return
    }
    if (info.file.status === 'error') {
      setLoading(false)
      notification.error({ message: '上传失败' })
      return
    }
    if (info.file.status === 'done') {
      console.log(info.file)
      setLoading(false)
    }
  }

  return (
    <Form form={props.form}>
      <Form.Item name="name" label="名称" rules={[{ required: true, message: '请输入名称' }]}>
        <Input placeholder="名称" autoComplete="off" />
      </Form.Item>
      <Form.Item name="slug" label="别名" rules={[{ required: true, message: '请输入别名' }]}>
        <Input placeholder="别名" autoComplete="off" />
      </Form.Item>
      <Form.Item name="description" label="描述">
        <Input.TextArea rows={2} placeholder="描述" />
      </Form.Item>
      <Form.Item label="图标">
        <Input placeholder="图标" autoComplete="off" />
      </Form.Item>
      <Form.Item label="背景图">
        <Upload
          name="avatar"
          listType="picture-card"
          className="upload"
          showUploadList={false}
          action={`${import.meta.env.VITE_API_URL}/config/upload`}
          onChange={handleChange}
          style={{}}
        >
          {imageUrl ? (
            <img src={imageUrl} alt="avatar" style={{ width: '100%', height: '100%' }} />
          ) : (
            uploadButton
          )}
        </Upload>
        <Input
          placeholder="或直接输入图片地址"
          autoComplete="off"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </Form.Item>
    </Form>
  )
}

export default EditForm
