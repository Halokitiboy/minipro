// import { tdw } from '@tencent/imwxutils';

App({
    globalData: {
        userInfo: '',
    },
    onLaunch() {
    // 设置上报渠道信息
    // tdw.configSource(options);
    // tdw.config({}, { debug: false });
    },
    onError(err) {
        console.log('App.onError', err);
    },
    onPageNotFound(err) {
        console.log('App.onPageNotFound', err);
    },
});
