const mockProducts = {
  products: [
    {
      _id: '6068c295b4485b3d41daf0df', title: 'OE Ford 2007 Mustang Part LH Left Driver Tail Light Lamp Assembly Taillight', make: 'Ford', year: '2007-01-01T00:00:00.000Z', borough: 'Brooklyn', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ', price: 96.98, sellerID: '60688c651d1599c6eb2b2aad', __v: 0,
    },
    {
      _id: '6068c2c0b4485b3d41daf0e0', title: '2016 2017 2018 2019 2020 Chevrolet Camaro ZL1 Front Bumper Cover OEM', make: 'Chevrolet', year: '2019-01-01T00:00:00.000Z', borough: 'Staten Island', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ', price: 445.67, __v: 0,
    },
    {
      _id: '6068c2eeb4485b3d41daf0e1', title: '2nd Row Seat 2015-2019 Chevy Chevrolet Tahoe Yukon Cadillac Escalade', make: 'Chevrolet', year: '2018-01-01T00:00:00.000Z', borough: 'Brooklyn', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ', price: 239.99, sellerID: '60688c651d1599c6eb2b2aad', __v: 0,
    },
    {
      _id: '6068c311b4485b3d41daf0e2', title: '2014-2018 GMC Sierra Denali 1500 Engine Motor 6.2L Vin J 8th Digit Option L86', make: 'Honda', year: '2020-01-01T00:00:00.000Z', borough: 'Queens', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', price: 367.98, __v: 0,
    },
    {
      _id: '6068c348b4485b3d41daf0e3', title: '2017-2018 Hyundai Elantra Left Driver Side Door Mirror 87610F3050S20', make: 'Hyundai', year: '2018-01-01T00:00:00.000Z', borough: 'Queens', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', price: 378.99, __v: 0,
    },
    {
      _id: '6068c45bb4485b3d41daf0e4', title: 'Front Grill \'H\' Emblem For Honda Accord 2008 2009 2010 2011 2012 2013 2014 2015', make: 'Honda', year: '2013-01-01T00:00:00.000Z', borough: 'Brooklyn', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', price: 13.93, __v: 0,
    },
    {
      _id: '6068c4edb4485b3d41daf0e5', title: '1 x Carbon Style Rear Lower Bumper Diffuser Fin Spoiler Lip Wing Splitter 34\'x6\'', make: 'Honda', year: '2013-01-01T00:00:00.000Z', borough: 'Brooklyn', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', price: 23.67, __v: 0,
    },
    {
      _id: '6068c556b4485b3d41daf0e6', title: 'For 2005-2014 Ford F150 F250 F350 FRONT GRILLE/TAILGATE 7/9 inch Oval Emblem 1pc', make: 'Ford', year: '2012-01-01T00:00:00.000Z', borough: 'Brooklyn', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', price: 16.89, __v: 0,
    },
    {
      _id: '6068c585b4485b3d41daf0e7', title: 'For 09-14 Ford F150 New Raptor Style Front Bumper Grille Hood Mesh Package ABS', make: 'Ford', year: '2009-01-01T00:00:00.000Z', borough: 'Queens', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', price: 137.99, __v: 0,
    },
    {
      _id: '6068c5e5b4485b3d41daf0e8', title: '1990 -1997 Ford Bronco / F150 F250 F350 Styleside Pickup Replacement Tail Light', make: 'Ford', year: '1997-01-01T00:00:00.000Z', borough: 'Staten Island', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', price: 23.96, __v: 0,
    },
    {
      _id: '6068c5f30726f3d838474c2d', title: 'Newas Testing', make: 'Ford', year: '2017-01-01T00:00:00.000Z', borough: 'Brooklyn', description: 'sdasd asdadsa', price: 12.99, sellerID: '60688c651d1599c6eb2b2aad', __v: 0,
    },
    {
      _id: '6068c606b4485b3d41daf0e9', title: 'For 2016 2017 Ford Explorer FB5Z-17K945-AA Front Bumper Lower Grille', make: 'Ford', year: '2018-01-01T00:00:00.000Z', borough: 'Brooklyn', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', price: 27.93, sellerID: '60688c651d1599c6eb2b2aad', __v: 0,
    },
    {
      _id: '6068c74bcf053dd8cff95159', title: 'Newas Testing 2 ', make: 'Dodge', year: '2017-01-01T00:00:00.000Z', borough: 'Bronx', description: 'sadsadas dasdas ', price: 110.02, sellerID: '60688c651d1599c6eb2b2aad', __v: 0,
    },
    {
      _id: '6068c8bbb4485b3d41daf0ea', title: 'FOR 1999-2004 FORD MUSTANG PAIR BLACK HOUSING AMBER CORNER HEADLIGHT', make: 'Ford', year: '2004-01-01T00:00:00.000Z', borough: 'Brooklyn', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', price: 62.15, sellerID: '606873371335441435360dec', __v: 0,
    },
    {
      _id: '6068c8ddb4485b3d41daf0eb', title: 'For 2015-2017 Ford F150 Black Horizontal Front Bumper Grill Grille ABS', make: 'Ford', year: '2015-01-01T00:00:00.000Z', borough: 'Manhattan', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', price: 76.34, sellerID: '606873371335441435360dec', __v: 0,
    },
    {
      _id: '6068cf5fb4485b3d41daf0ee', title: 'For 2015-2017 Ford F150 Black Horizontal Front Bumper Grill Grille ABS', make: 'Ford', year: '2019-01-01T00:00:00.000Z', borough: 'Manhattan', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', price: 12.32, sellerID: '606873371335441435360dec', __v: 0,
    },
    {
      _id: '6068d011a1ce1fdb3c610fef', title: 'TESTING TESTIN TESTING TESTING', make: 'Dodge', year: '2019-01-01T00:00:00.000Z', borough: 'Brooklyn', description: 'sadsadasda', price: 29.34, sellerID: '60688c651d1599c6eb2b2aad', __v: 0,
    },
    {
      _id: '6068d1d4d4bd26465fb24633', title: 'test', make: 'Dodge', year: '2020-01-01T00:00:00.000Z', borough: 'Brooklyn', description: 'asdfasdf', price: 1.45, sellerID: '606873371335441435360dec', __v: 0,
    },
  ],
};

module.exports = mockProducts;
