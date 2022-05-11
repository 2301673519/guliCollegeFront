import request from '@/utils/request'

export default{
  getTeacherPageList(current,pageSize,teacherQuery) {
    return request({
      url: `/eduservice/eduteacher/pageTeacherCondition/${current}/${pageSize}`,
      method: 'post',
      data: teacherQuery
    })
  },
  deleteTeacherId(id){
    return request({
      url: `/eduservice/eduteacher/${id}`,
      method: 'delete'
    })
  },
  //添加讲师
  addTeacher(teacher) {
    return request({
        url: `/eduservice/eduteacher/insert`,
        method: 'post',
        data: teacher
    })
},
  //根据id查询讲师，做回显
  getTeacherInfo(id) {
      return request({
          url: `/eduservice/eduteacher/findById/${id}`,
          method: 'get',
      })
  },

  //修改讲师
  updateTeacher(teacher) {
      return request({
          url: `/eduservice/eduteacher/update`,
          method: 'post',
          data: teacher
      })
    }
}