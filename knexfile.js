// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/wardrobe',
  },
  test:{
    client: 'pg',
    connection: 'postgres://localhost/killbase_test',
    
  }

}