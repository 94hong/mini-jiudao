// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like: {
      type: Number,
      value: 0
    },
    count: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLikeClick(event) {
      let like = this.data.like;
      let count = this.data.count;
      count = like === 1 ? count - 1 : count + 1;
      this.setData({
        like: !like,
        count: count
      })

      let behavior = this.data.like ? 'like' : 'unlike';
      this.triggerEvent('myLikeClick', { behavior: behavior }, {});
    }
  }
})
