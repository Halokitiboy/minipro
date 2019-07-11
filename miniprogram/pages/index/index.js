// Page Object
Page({
    data: {
        motto: null,
        userInfo: null,
        hasUserInfo: null,
        canIUse: null,
        b: { arr: [ ] },
        firstName: null,
        lastName: null,
        pureProp: null,
        //privateProp 你也可以定义 store.data 没有的属性，该属性的变更只能通过 this.setData 进行更新视图
        privateProp: '私有数据',
        xxxx: '私有数据2',
    },
    // options(Object)
    onLoad() {
        console.log('ok');
    },
    onReady() {  
    },
    onShow() {
    },
    onHide() {

    },
    onUnload() {
    },
    onPullDownRefresh() {

    },
    onReachBottom() {

    },
    onShareAppMessage() {

    },
    onPageScroll() {

    },
    // item(index,pagePath,text)
    onTabItemTap() {

    },
});
