import * as React from 'react'
import { Form, FormInstance, Input, notification, Upload } from 'antd'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'

type Props = {
  form: FormInstance<any>
  value: string
  setValue: (value: string) => void
}

const EditForm: React.FC<Props> = (props) => {
  const [loading, setLoading] = React.useState<boolean>(false)

  const token = localStorage.getItem('token')

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
      console.log(info.file)
      notification.error({ message: '上传失败' })
      return
    }
    if (info.file.status === 'done') {
      props.setValue(info.file.response.data.url)
      setLoading(false)
      notification.success({ message: '上传成功' })
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
      <Form.Item name="icon" label="图标">
        <Input placeholder="图标" autoComplete="off" />
      </Form.Item>
      <Form.Item label="背景图">
        <Upload
          name="file"
          listType="picture-card"
          className="upload"
          showUploadList={false}
          headers={{
            authorization: `Bearer ${token}`
          }}
          action={`${import.meta.env.VITE_API_URL}/config/upload`}
          onChange={handleChange}
          style={{}}
        >
          {props.value ? (
            <img src={props.value} alt="avatar" style={{ width: '100%', height: '100%' }} />
          ) : (
            uploadButton
          )}
        </Upload>
        <Input
          placeholder="或直接输入图片地址"
          autoComplete="off"
          value={props.value}
          onChange={(e) => props.setValue(e.target.value)}
        />
      </Form.Item>
    </Form>
  )
}

export default EditForm
