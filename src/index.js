// nunjucks-loader allows us to import nunjucks templates and later
// render them
const MainTemplate = require('./main.njk');

// MainTemplate has a .render method you can pass a data object to for
// rendering.
document.getElementById('content').innerHTML = MainTemplate.render({});