var gith = require('gith').create(); // ensure to match the port you entered in Github

gith({
  repo: 'hardgreaves/fullstack'
}).on( 'all', function( payload ) {
  console.log( 'Post-receive happened!' );
});

//please work haha.
gith.listen(9004);