const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build'), {
    cacheControl: true, setHeaders: function (res, path) {
        res.setHeader("Cache-Control", "no-cache, no-data, must-revalidate");
    }
}));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
    res.setHeader("Cache-Control", "no-cache, no-data, must-revalidate");
});

app.listen(3000);
