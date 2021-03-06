/**
 * @class  DB
 * @author  Flavio De Stefano <flavio.destefano@caffeinalab.com>
 * Proxy for a single SQLite database access
 */

/**
 * @type {Object}
 */
var config = _.extend({}, Alloy.CFG.T.db);
exports.config = config;

var DB = null;

/**
 * Open the `app` database, or return current database instance
 *
 * @singleton
 * @return {Titanium.Database.DB}
 */
function open() {
	if (DB) return DB;

	try {
		DB = Ti.Database.open('app');
		return DB;
	} catch (ex) {
		Ti.API.error("DB: "+ex);
		return false;
	}
}
exports.open = open;