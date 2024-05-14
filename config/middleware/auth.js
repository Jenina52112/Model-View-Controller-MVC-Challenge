// Authentication middleware
const isAuthenticated = (req, res, next) => {
    // Check if user is authenticated
    if (req.session.user) {
        // User is authenticated, continue with next middleware
        next();
    } else {
        // User is not authenticated, redirect to login page
        res.redirect('/login');
    }
};

module.exports = { isAuthenticated };
