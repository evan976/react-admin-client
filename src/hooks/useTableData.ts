import { TableResult } from '@/types'

function useTableData<T = any> (service: any) {
  const getTableData = async (
    { current, pageSize }: Record<string, number>,
    rest: Record<string, string | number>
  ): Promise<TableResult<T>> => {
    const query = {
      page: current,
      pageSize,
      ...rest
    }
    const res = await service?.findAll(query)
    return {
      total: res.data?.total as number,
      list: res.data?.data as T[]
    }
  }

  return [getTableData]
}

export default useTableData
