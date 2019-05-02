const db = require('../db.js');

module.exports = {
  getAllArt: (req, res, next) => {
    db.query('SELECT a.title, ac.firstname, ac.lastname, a.price, a.image, a.material, a.width, a.height, a.description FROM art a INNER JOIN accounts ac ON a.artist = ac.id', (err, result) => {
      if (err) res.locals.error = err;
      else res.locals.result = result;
      // console.log('+++GETALLART+++ Result', result.rows);
      return next();
    })
  },
  
  getArtPriceAscending: (req, res, next) => {
    db.query(`SELECT a.id, a.title, ac.firstname, ac.lastname, a.price, a.image, a.material, a.width, a.height, a.description FROM art a INNER JOIN accounts ac ON a.artist = ac.id WHERE (69 * SQRT((POW(${Number(req.query.longitude)}-a.lng,2))+(POW(${Number(req.query.latitude)}-a.lat,2))) < ${Number(req.query.distance)}) ORDER BY a.price ASC`, (err, result) => {
      if (err) res.locals.error = err;
      else res.locals.result = result;
      return next();
    })
  },

  getArtPriceDescending: (req, res, next) => {
    db.query(`SELECT a.id, a.title, ac.firstname, ac.lastname, a.price, a.image, a.material, a.width, a.height, a.description FROM art a INNER JOIN accounts ac ON a.artist = ac.id WHERE (69 * SQRT((POW(${Number(req.query.longitude)}-a.lng,2))+(POW(${Number(req.query.latitude)}-a.lat,2))) < ${Number(req.query.distance)}) ORDER BY a.price DESC`, (err, result) => {
      if (err) res.locals.error = err;
      else res.locals.result = result;
      return next();
    })
  },

  getArtSizeAscending: (req, res, next) => {
    db.query(`SELECT a.id, a.title, ac.firstname, ac.lastname, a.price, a.image, a.material, a.width, a.height, a.description FROM art a INNER JOIN accounts ac ON a.artist = ac.id WHERE (69 * SQRT((POW(${Number(req.query.longitude)}-a.lng,2))+(POW(${Number(req.query.latitude)}-a.lat,2))) < ${Number(req.query.distance)}) ORDER BY (a.width * a.height) ASC`, (err, result) => {
      if (err) res.locals.error = err;
      else res.locals.result = result;
      return next();
    })
  },

  getArtSizeDescending: (req, res, next) => {
    db.query(`SELECT a.id, a.title, ac.firstname, ac.lastname, a.price, a.image, a.material, a.width, a.height, a.description FROM art a INNER JOIN accounts ac ON a.artist = ac.id WHERE (69 * SQRT((POW(${Number(req.query.longitude)}-a.lng,2))+(POW(${Number(req.query.latitude)}-a.lat,2))) < ${Number(req.query.distance)}) ORDER BY (a.width * a.height) DESC`, (err, result) => {
      console.log("XXX", req.query);
      if (err) res.locals.error = err;
      else res.locals.result = result;
      return next();
    })
  },

  signIn: (req, res, next) => {
    console.log('+++req.BODY in signIn', req.body);
    // Make sure to only grab relevant information for security reasons
    db.query(`SELECT * FROM accounts WHERE ("username"='${req.body.username}')`, (err, result) => {
      if (err) res.locals.error = err;
      else {
        res.locals.result = result.rows[0]; 
        if (res.locals.result === undefined) res.locals.error = { error: 'Invalid username' };
        console.log('+++LOGIN QUERY RESULT+++', res.locals.result);
      }
      return next();
    })
  },

  signUp: (req, res, next) => {
    const queryValues = [req.body.firstname, req.body.lastname, req.body.password, req.body.username, req.body.email, req.body.lng, req.body.lat, req.body.bio];
    const insertQuery = `INSERT INTO accounts("firstname", "lastname", "password", "username", "email", "lng", "lat", "bio") VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`;

    db.query(insertQuery, queryValues, (err, result) => {
      if (err) res.locals.error = err;
      else {
        res.locals.result = result.rows[0];
      }
      return next();
    })
  },

  // This method has been tested in POSTMAN and it WORKS! Come see Jaime or Keith if any questions.
  findByDistance: (req, res, next) => {
    console.log('~~~RESULT in findbyDistance', res.locals.result);
    db.query(`SELECT * FROM art WHERE (69 * SQRT((POW(${res.locals.result.lng}-lng,2))+(POW(${res.locals.result.lat}-lat,2))) < ${req.body.distance})`, (err, result) => {
      if (err) {
        res.locals.error = err
        console.log('~~~~~Error inside findByDistance', err);
      }
      else {
        res.locals.result = result.rows;
        console.log(`+++++ Pulled array of artwork within ${req.body.distance} miles`);
      }
      return next();
    })
  },
}