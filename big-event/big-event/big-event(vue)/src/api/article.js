import request from '@/utils/request.js'
import { useTokenStore } from "@/stores/token.js"
//文章分类列表查询
export const articleCategoryListService = () => {
  // const tokenStore = useTokenStore();
  //在pinia中定义的响应式数据，都不需要.value，直接使用即可
  // return request.get('/category', { headers: { 'Authorization': tokenStore.token } })
  return request.get('/category')
}

//文章分类添加
export const articleCategoryAddService = (categoryData) => {
  return request.post('/category', categoryData);
}

//文章分类修改
export const articleCategoryUpdateService = (categoryData) => {
  return request.put('/category', categoryData);
}

//文章分类删除
export const articleCategoryDeleteService = (id) => {
  return request.delete('/category?id=' + id);
}

//文章列表查询
export const articleListService = (params) => {
  return request.get('/article', { params : params });
}

//添加文章
export const articleAddService = (articleModel)=>{
  return request.post('/article',articleModel)
}

//编辑文章
export const articleUpdateService = (articleData) => {
  return request.put('/article', articleData)
}

//删除文章
export const articleDeleteService = (id) => {
  return request.delete('/article?id=' + id)
}