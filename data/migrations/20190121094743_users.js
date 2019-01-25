exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", t => {
    t.increments().primary();

    t.string("username", 128)
      .notNullable()
      .unique();

    t.string("password", 128).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users");
};
