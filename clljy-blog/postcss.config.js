/*
 * @Descripttion: 
 * @version: 
 * @Author: 程
 * @Date: 2023-09-07 17:16:20
 * @LastEditors: 程
 * @LastEditTime: 2023-09-07 17:57:39
 */
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-pxtorem': {
      rootValue: 16,
      propList: ['*'],
    }
  },
}
