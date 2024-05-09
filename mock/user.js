const Mock = require('mockjs')
// require - commonjs(nodejs的默认规范)

const Random = Mock.Random

module.exports = [
  {
    //获取用户信息
    url:'/api/user/info',
    method: 'get',
    response() {
      return {
        errno:0,
        data:{
          username: Random.title(),
          nickname: Random.cname(),
        }
      }
    }
  },
  {
    //注册
    url:'/api/user/register',
    method: 'post',
    response() {
      return {
        errno:0,
      }
    }
  },
  {
    //登录
    url:'/api/user/login',
    method: 'post',
    response() {
      return {
        errno:0,
        data:{
          token: Random.word(20),
        }
      }
    }
  }
]