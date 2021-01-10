const User = require('../models/user')

module.exports = async function (req, res, next) {
    if (!req.session.user) {
        return next()
    }
    //Добавляем юзера в глобальную область видимости
    req.user = await User.findById(req.session.user._id)
    next()
}
