export function AuthenticateUser({ email, password }) {

    var delay = (0.7 * Math.random() * 2) * 1000;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (password === 'password12345' && !!email) {
                resolve('user login success');
            } else {
                reject(new Error('please verify your email and password'))
            }
        }, delay)
    })

}