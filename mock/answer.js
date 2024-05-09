module.exports = [
  //收集答卷
  {
    url:'/api/answer',
    method: 'post',
    response(){
      return {
        errno: 0
      }
    }
  }
]