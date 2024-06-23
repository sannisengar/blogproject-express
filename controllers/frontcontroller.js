class frontcontroller {
    static home = async (req, res) => {
        try {
            res.render('home')
        } catch (error) {
            console.log(error)
        }
    }
    static about = async (req, res) => {
        try {
            res.render('about')
        } catch (error) {
            console.log(error)
        }
    }
    static bloglist = async (req, res) => {
        try {
            res.render('bloglist')
        } catch (error) {
            console.log(error)
        }
    }
    static contact = async (req, res) => {
        try {
            res.render('contact')
        } catch (error) {
            console.log(error)
        }
    }
    static login = async (req, res) => {
        try {
            res.render('login')
        } catch (error) {
            console.log(error)
        }
    }
    
}

module.exports = frontcontroller