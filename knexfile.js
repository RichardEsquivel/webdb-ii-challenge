// Update with your config settings.

module.exports = {
	//create some defaults including directories for Development build environment
	development: {
		client: 'sqlite3',
		connection: {
			filename: './data/car-dealer.db3'
		},
		//Setting null as default helps prevent crashes with default unassigned values being undefined
		useNullAsDefault: true,
		migrations: {
			directory: './data/migrations'
		},
		seeds: {
			directory: './seeds/001-vehSeed.js'
		}
	},

	staging: {
		client: 'postgresql',
		connection: {
			database: 'my_db',
			user: 'username',
			password: 'password'
		},
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			tableName: 'knex_migrations'
		}
	},

	production: {
		client: 'postgresql',
		connection: {
			database: 'my_db',
			user: 'username',
			password: 'password'
		},
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			tableName: 'knex_migrations'
		}
	}

};
