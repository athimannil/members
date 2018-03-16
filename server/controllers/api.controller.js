// Module dependencies.
import fs from 'fs';
import path from 'path';

// Variables
const data = JSON.parse(fs.readFileSync(path.resolve(__dirname + '/../data.json'), 'utf8'));

// Get content.
exports.getContent = function (req, res) {
	var returnValue = data.data,
		page = req.query.page - 1 || 0,
		limit = req.query.limit || 10,
		tag = req.query.tag || false;

	// Filter on tag
	if (tag) {
		returnValue = data.news.filter(function (news) {
			return news.tags.indexOf(tag) !== -1;
		});
	}

	// Paging
	returnValue = returnValue.slice(page * limit, (page * limit) + limit);

	// Just a bit delay to simulate loading times...
	setTimeout(function () {
		res.json(returnValue);
	}, 500);
};
