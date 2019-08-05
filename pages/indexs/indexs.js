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
	bind_tal:function(){
		wx.makePhoneCall({
			phoneNumber: '15311462220' //仅为示例，并非真实的电话号码
		})
	}
})
