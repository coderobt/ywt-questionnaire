const Mock = require('mockjs')
// require - commonjs(nodejs的默认规范)

const Random = Mock.Random

module.exports = [
  {
    url:'/api/test',
    method: 'get',
    response() {
      return {
        errno:0,
        data:{
          name: Random.cname()
        }
      }
    }
  }
]