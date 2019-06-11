// components/epsoide/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index: {
      type: Number,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    month: 0,
    year: '三月'
  },

  observers: {
    'index': function(index) {
      let val = index < 10 ? '0' + index : index;
      this.setData({
        parseIndex: val
      })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
