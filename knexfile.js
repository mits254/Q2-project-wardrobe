// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/wardrobe',
  },
  test:{
    client: 'pg',
    connection: 'postgres://localhost/killbase_test',
    
  },
 production:{
   client: 'pg',
   connection: 'postgres://hrggxjyucnwwta:4edf629268e1b7be932d0af05a76ebebb7de8768f088fc0a41c8f791878e6b97@ec2-54-235-90-0.compute-1.amazonaws.com:5432/d6as0evuij62j0',
 }
}