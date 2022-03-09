import { Table } from 'antd'
import * as React from 'react'
import SearchForm from './SearchForm'

const Comment: React.FC = () => {
  return (
    <div>
      <SearchForm />
      <Table />
    </div>
  )
}

export default Comment
