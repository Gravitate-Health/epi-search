const express = require('express');

const searchRoutes = require('./routes/search-routes');

const app = express();

const PORT = process.env.PORT || 3000

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use('/epi-search', searchRoutes);


app.listen(PORT,'0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});