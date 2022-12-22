import { TableResult } from '@/types'

function usePagination<T = any>(service: any) {
  const getTableData = async (
    { current, pageSize }: Record<string, number>,
    rest: Record<string, string | number>
  ): Promise<TableResult<T>> => {
    const query = {
      page: current,
      page_size: pageSize,
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

export default usePagination
