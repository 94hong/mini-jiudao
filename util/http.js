import { config } from '../config.js';

const tips = {
  1: '抱歉，出现了一个错误',
  1005: 'appk无效',
  3000: '期刊不存在'
}

class HTTP {
  request(params) {
    wx.request({
      url: config.apiBaseUrl + params.url,
      method: params.method || 'GET',
      data: params.data,
      header: {
        'content-type': 'application/json',
        'appkey': config.appkey
      },
      success: (res) => {
        let code = res.statusCode.toString();
        if (code.startsWith('2')) {
          params.success && params.success(res.data);
        } else {
          let errorCode = res.data.error_code;
          this._showError(errorCode);
        }
      },
      fail: (err) => {
        this._showError(err);
      }
    })
  }

  _showError(errorCode) {
    wx.showToast({
      title: tips[errorCode],
      icon: 'none',
      image: '',
      duration: 2000,
      mask: false,
      success: (result) => {
        
      },
      fail: () => {},
      complete: () => {}
    });
  }
}

export { HTTP };