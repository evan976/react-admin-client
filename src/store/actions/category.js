import * as actionType from '../action-type'

export const getCategorySyncAction = category => ({
  type: actionType.GET_CATEGORY,
  payload: {
    categoryList: category.data
  }
})

export const resetCategorySyncAction = () => ({
  type: actionType.RESET_CATEGORY
})
