import * as React from 'react'
import { useAntdTable, useSafeState } from 'ahooks'
import { Button, Form, Modal, notification, Space, Table, Tag, Typography } from 'antd'
import * as Icon from '@ant-design/icons'
import type { ColumnsType } from 'antd/lib/table'
import * as mainApi from '@/api'
import type { Wallpaper } from '@/types'
import { dateFormat } from '@/utils/dateFormat'
import useTableData from '@/hooks/useTableData'
import { wallpaperService } from '@/api'
import { oos, ws } from '@/enums'
import EditModal from './EditModal'

const AdvertisementPage: React.FC = () => {

  const [form] = Form.useForm<Wallpaper>()
  const [type, setType] = useSafeState<'create' | 'edit'>('create')
  const [url, setUrl] = useSafeState<string>('')
  const [visible, setVisible] = useSafeState<boolean>(false)
  const [selectedRowKeys, setSelectedRowKeys] = useSafeState<React.Key[]>([])
  const [getTableData] = useTableData<Wallpaper>(wallpaperService)

  const { tableProps, refresh } = useAntdTable(getTableData)

  const handleSubmit = async () => {
    const id = form.getFieldValue('id')
    const values = { ...form.getFieldsValue(), url }
    if (id) {
      await mainApi.wallpaperService.update(id, values)
      notification.success({ message: '修改广告成功' })
    } else {
      await mainApi.wallpaperService.create(values)
      notification.success({ message: '新增广告成功' })
    }
    setVisible(false)
    refresh()

  }

  const fetchWallpaperDetail = async (id: string) => {
    setVisible(true)
    const result = await mainApi.wallpaperService.findOne(id)
    form.setFieldsValue(result.data as Wallpaper)
    setUrl(result.data.url!)
    setType('edit')
  }

  const removeWallpaper = async (id: string) => {
    await mainApi.wallpaperService.remove(id)
    notification.success({ message: '删除广告成功' })
    refresh()
  }

  const columns: ColumnsType<Wallpaper> = [
    {
      title: '名称',
      width: 150,
      dataIndex: 'name'
    },
    {
      title: '图片',
      width: 150,
      dataIndex: 'url',
      render: (_, wallpaper) => (
        <img src={wallpaper.url} style={{ width: '160px' }} />
      )
    },
    {
      title: '链接地址',
      width: 150,
      dataIndex: 'link',
      render: (_, wallpaper) => {
        return <Typography.Paragraph
          style={{ width: 256 }}
          ellipsis
          copyable
        >
          {wallpaper.link}
        </Typography.Paragraph>
      }
    },
    {
      title: '其他',
      width: 180,
      dataIndex: 'weight',
      render: (_, wallpaper) => {
        const _status = oos(wallpaper.status as number)
        const _weight = ws(wallpaper.weight as number)
        return (
          <Space direction="vertical">
            <Space>
              <span>状态</span>
              <Tag color={_status.color}>{_status.name}</Tag>
            </Space>
            <Space>
              <span>权重</span>
              <Tag color={_weight.color}>{_weight.name}</Tag>
            </Space>
          </Space>
        )
      }
    },
    {
      title: '时间',
      dataIndex: 'createdAt',
      render(_, wallpaper) {
        return (
          <Space direction="vertical">
            <span>发布时间: {dateFormat(wallpaper.createdAt)}</span>
            <span>更新时间: {dateFormat(wallpaper.updatedAt)}</span>
          </Space>
        )
      }
    },
    {
      title: '操作',
      render(_, wallpaper) {
        return (
          <Space size={0}>
            <Button
              type="link"
              onClick={() => fetchWallpaperDetail(wallpaper.id!)}
            >
              编辑
            </Button>
            <Button
              type="link"
              danger
              onClick={() => {
                Modal.confirm({
                  title: '此操作将永久删除该广告，是否继续？',
                  icon: <Icon.QuestionCircleOutlined />,
                  okText: '确认',
                  cancelText: '取消',
                  centered: true,
                  onOk: () => {
                    removeWallpaper(wallpaper.id!)
                  }
                })
              }}
            >
              删除
            </Button>
          </Space>
        )
      }
    }
  ]

  return (
    <div>
      <Space size={20} style={{ marginBottom: 16 }}>
        <Button
          type="primary"
          icon={<Icon.PlusOutlined />}
          onClick={() => {
            setVisible(true)
            form.resetFields()
            setUrl('')
          }}
        >
          新增广告
        </Button>
        <Button
          danger
          icon={<Icon.DeleteOutlined />}
          disabled={!selectedRowKeys.length}
        >
          批量删除
        </Button>
      </Space>
      <Table
        rowKey='id'
        columns={columns}
        {...tableProps}
        rowSelection={{
          onChange: (selectedRowKeys: React.Key[]) => {
            setSelectedRowKeys(selectedRowKeys)
          }
        }}
      />
      <Modal
        title={type === 'create' ? '新增广告' : '编辑广告'}
        visible={visible}
        onOk={handleSubmit}
        onCancel={() => {
          setVisible(false)
          setType('create')
        }}
        afterClose={() => form.resetFields()}
        okText="确认"
        cancelText="取消"
      >
        <EditModal
          form={form}
          value={url}
          setValue={(v) => setUrl(v)}
        />
      </Modal>
    </div>
  )
}

export default AdvertisementPage
