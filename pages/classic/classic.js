// pages/classic/classic.js
import { ClassicModel } from '../../models/classic.js';
import { LikeModel } from '../../models/like.js';
let classicModel = new ClassicModel();
let likeModel = new LikeModel();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    classicInfo: ''
  },

  methods: {
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    classicModel.getLatestInfo(res => {
      // console.log('getInfo:', res);
      this.setData({
        classicInfo: res
      })
    });
  },

  onMyLikeClick: function(event) {
    let behavior = event.detail.behavior;
    let artID = this.data.classicInfo.id;
    let category = this.data.classicInfo.type;
    likeModel.like(behavior, artID, category);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})