exports.up = async function (knex) {
    await knex.schema.createTable('user', (table) => {
        table.increments('id').primary();
        table.string('moneyQuantity').notNull();
        table.string('name').notNull();
        table.string('type').notNull();
        table.string('transactions').notNull();
    });
};
exports.down = (knex) => knex.schema.dropTableIfExists('user');
//# sourceMappingURL=00_users.js.map