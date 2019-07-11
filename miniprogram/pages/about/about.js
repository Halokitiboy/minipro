import store from '../../store';
import create from '../../utils/create';

const app = getApp();

create(store, {
    data: {
        motto: null,
        userInfo: null,
        hasUserInfo: null,
        canIUse: null,
        b: { arr: [ ] },
        firstName: null,
        lastName: null,
        pureProp: null
    },
    onLoad() {
        if (app.globalData.userInfo) {
            this.store.data.userInfo = app.globalData.userInfo;
            this.store.data.hasUserInfo = true;
            this.update()
        } else if (this.data.canIUse) {
            app.userInfoReadyCallback = res => {
                this.store.data.userInfo = res.userInfo;
                this.store.data.hasUserInfo = true;
                this.update();
            }
        } else {
            wx.getUserInfo({
                success: res => {
                    app.globalData.userInfo = res.userInfo;
                    this.store.data.userInfo = res.userInfo;
                    this.store.data.hasUserInfo = true;
                    this.update();
                },
            });
        }
        this.store.data.b.arr = ['name','xzzc'];
        this.store.update();
        console.log(this.store.data.fullName);
        console.log(this.data.b.arr);
        this.store.logMotto();
    },
    getUserInfo(e) {
        console.log(e);
    }
});
