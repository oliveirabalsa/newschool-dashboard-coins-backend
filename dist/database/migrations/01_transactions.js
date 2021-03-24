exports.up = async function (knex) {
    await knex.schema.createTable('transactions', (table) => {
        table.increments('id').primary();
        table.date('date').notNull();
        table.string('quantity').notNull();
        table.string('admin').nullable();
        table.integer('user_id').notNull();
        table.foreign('user_id').references('id').inTable('user');
    });
};
exports.down = (knex) => knex.schema.dropTableIfExists('transactions');
//# sourceMappingURL=01_transactions.js.map