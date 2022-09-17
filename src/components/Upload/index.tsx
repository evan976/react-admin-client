import * as React from 'react'
import { useSafeState } from 'ahooks'
import { useSelector } from 'react-redux'
import classNames from 'classnames'
import { Input, notification, Upload } from 'antd'
import * as Icon from '@ant-design/icons'

type Props = {
  value: string
  setValue: (value: string) => void
  className?: string
  style?: React.CSSProperties
}

const AwesomeUpload: React.FC<Props> = (props) => {
  const { token } = useSelector(state => state.account)
  const [loading, setLoading] = useSafeState<boolean>(false)

  const uploadButton = (
    <div>
      {loading ? <Icon.LoadingOutlined /> : <Icon.PlusOutlined />}
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
      props.setValue(info.file.response.result.url)
      setLoading(false)
      notification.success({ message: '上传成功' })
    }
  }

  return (
    <>
      <Upload
        name="file"
        listType="picture-card"
        className={classNames('upload', props.className)}
        showUploadList={false}
        headers={{
          authorization: `Bearer ${token}`
        }}
        action={`${import.meta.env.VITE_API_URL}/config/upload`}
        onChange={handleChange}
        style={props.style}
      >
        {props.value ? (
          <img src={props.value} style={{ width: '100%', height: '100%' }} />
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
    </>
  )
}

export default AwesomeUpload
