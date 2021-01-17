const keys = require('../keys')

module.exports = function (email) {
    return {
        to: email,
        from: keys.EMAIL_FROM,
        subject: 'Аккаунт создан',
        html: `
        <h1>Регистрация завершена!</h1>
        <hr />
        <p>Аккаунт успешно создан c mail - ${email}</p>
        <a href="${keys.BASE_URL}">В магазин</a>
        `
    }
}
