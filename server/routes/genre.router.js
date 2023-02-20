const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  console.log('inside router.get for genres', req.params.id);
  // Add query to get all genres
  const query = `SELECT "genres"."name" FROM "genres" 
                 JOIN "movies_genres" ON "movies_genres"."genre_id" = "genres"."id"
                 JOIN "movies" ON "movies_genres"."movie_id" = "movies"."id"
                 WHERE "movies"."id" = ${req.params.id}`;
  pool.query(query)
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all movies', err);
      res.sendStatus(500)
    })
});

module.exports = router;
