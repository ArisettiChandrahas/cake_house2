const homelist = (req, res) => {
    res.render('home', {
        title: 'CAKE HOUSE',
        pageHeader: {
            title: 'CAKE HOUSE',
            strapline: 'Find CAKES near you!'
        },
        
    });
};

    
module.exports = {
    homelist
}