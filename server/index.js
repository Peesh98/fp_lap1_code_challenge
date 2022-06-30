const app = require('./app');
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`lap1_coding_challenge API server listening at http://localhost:${port}`);
});