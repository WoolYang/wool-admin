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

export function getDashboardData() {
    return new Promise(function (resolve, reject) {
        const result = {
            cardList:[
                {
                    name:'总销售额',
                    value:'¥122000'
                },
                {
                    name:'总利润',
                    value:'¥5330'
                },
                {
                    name:'转化率',
                    value:'23.7%'
                },
                {
                    name:'总数额',
                    value:'780'
                }
            ]
        };
        resolve(result);
    });
}