/* 登陆 */
export function getCheckLogin(data) {

    return new Promise(function (resolve, reject) {
        const result = {
            'code': (data.name == 'admin' && data.password == '123456') ? 200 : 401,
        };
        resolve(result);
    });
}