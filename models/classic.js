import { HTTP } from '../util/http.js';
let http = new HTTP();

class ClassicModel {
  getLatestInfo(callback) {
    http.request({
      method: 'GET',
      url: 'classic/latest',
      success: (res) => {
        callback(res);
      }
    })
  }
}

export { ClassicModel };