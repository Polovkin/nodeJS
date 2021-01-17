const keys = require('../keys')

module.exports = function (email,token) {
    return {
        to: email,
        from: keys.EMAIL_FROM,
        subject: 'Восстановление пароля',
        html: `
        <h1>Вы забыли пароль?</h1>
        <hr />
        <p>Восстановление пароля</p>
        <p><a href="${keys.BASE_URL}/auth/password/${token}">В магазин</a></p>
        `
    }
}
