class Blogcontroller {
    static display = async (req, res) => {
        try {
            res.render('admin/blog/display')
        } catch (error) {
            console.log(error)
        }
    }
}
module.exports = Blogcontroller