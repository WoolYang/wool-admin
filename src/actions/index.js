
import * as types from '../constants/ActionTypes'

/**
 * @author allen zhang
 * @version v1.0
 * @function checkLogin
 * @description 校验是否登录
 * @param {password} params 
 */
export const checkLogin =(params)=>({
  type:types.CHECK_LOGIN,
  data:params
})

const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products: products
})

export const getAllProducts = () => dispatch => {
  fetch('../api/shop.json')
    .then(response => response.json())
    .then(json => dispatch(receiveProducts(json)))
}

export const inaddproduct = productId => ({
  type: types.ADD_PRODUCT,
  productId: productId
})

export const decproduct = productId => ({
  type: types.DEL_PRODUCT,
  productId: productId
})

export const deccount = productId => ({
  type: types.DEL_COUNT,
  productId: productId
})

export const clearproduct = () => ({
  type: types.CLEAR_PRODUCT
})

export const addhistory = (order,id) => ({
  type:types.ADD_HISTORY,
  id: id,
  order: order
})


