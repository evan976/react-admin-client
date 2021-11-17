import * as actionType from '../action-type'

export const getTagSyncAction = tag => ({
  type: actionType.GET_TAG,
  payload: {
    tagList: tag.data,
    pages: tag.pages,
    total: tag.total
  }
})

export const resetTagSyncAction = () => ({
  type: actionType.RESET_TAG
})
