module.exports = {
  async up(db, client) {
    await db.createCollection('users', {
      validator: {
        $jsonSchema: {
          bsonType: 'object',
          required: [
            'email',
            'fullname',
          ],
          properties: {
            email: {
              bsonType: 'string',
              description: 'must be email format, be unique and be required',
            },
            fullname: {
              bsonType: 'string',
              description: 'must be string and be required',
            },
          }
        }
      }
    });

    await db.collection('users').createIndex({
      email: 1,
    }, { unique: true });
  },

  async down(db, client) {
    return await db.collection('books').drop();
  }
};
