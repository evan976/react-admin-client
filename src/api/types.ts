export type QueryParams = {
  [key: string]: string | number
}

export enum PathEnum {
  Login = '/auth/login',
  User = '/users',
  Post = '/posts',
  Category = '/categories',
  Tag = '/tags',
  Config = '/config'
}

export enum Methods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE'
}
