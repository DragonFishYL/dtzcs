//index.js
//获取应用实例
const app = getApp()

Page({
	data: {
        bannerImages: [ {
            img: app.globalData.publicurl+'/Public/dtzc/image/dtzc1564650870.jpg'
        }, {
            img: app.globalData.publicurl+'/Public/dtzc/image/dtzc1564650748.jpg'
        } , {
            img: app.globalData.publicurl+'/Public/dtzc/image/dtzc1564650774.jpg'
        }],
		service:app.globalData.publicurl+'/Public/dtzc/image',
	},
})
