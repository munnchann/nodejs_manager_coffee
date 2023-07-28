let getHomepage = (req, res) => {
    //logic code (db,...)
    return res.render('index.ejs')
}

module.exports = {
    getHomepage
}