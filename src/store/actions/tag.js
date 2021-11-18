import * as actionType from '../action-type'

export const getTagSyncAction = tag => ({
  type: actionType.GET_TAG,
  payload: {
    tagList: tag.data
  }
})

export const resetTagSyncAction = () => ({
  type: actionType.RESET_TAG
})
