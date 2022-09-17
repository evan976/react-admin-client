import { TableResult } from '@/types'

function useTableData<T = any>(service: any) {
  const getTableData = async (
    { current, page_size }: Record<string, number>,
    rest: Record<string, string | number>
  ): Promise<TableResult<T>> => {
    const query = {
      page: current,
      page_size,
      ...rest
    }
    const res = await service?.findAll(query)
    return {
      total: res.result?.total as number,
      list: res.result?.data as T[]
    }
  }

  return [getTableData]
}

export default useTableData
