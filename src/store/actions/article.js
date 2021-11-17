import * as actionType from '../action-type'

export const getArticleSyncAction = article => ({
  type: actionType.GET_ARTICLE,
  payload: {
    articleList: article.data,
    pages: article.pages,
    total: article.total
  }
})

export const resetArticleSyncAction = () => ({
  type: actionType.RESET_ARTICLE
})
