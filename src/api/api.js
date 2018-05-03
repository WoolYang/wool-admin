/* 登陆 */
export function getCheckLogin(data) {
    return new Promise(function (resolve, reject) {
        const result = {
            'code': (data.name == 'admin' && data.password == '123456') ? 200 : 401,
            'msg': (data.name == 'admin' && data.password == '123456') ? '登录成功' : '没有权限',
        };
        if (data.name == 'admin' && data.password == '123456') {
            resolve(result);
        } else {
            reject(result);
        }

    });
}