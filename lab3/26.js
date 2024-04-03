// Runs 
if (-1 || 0) alert( 'first' );

// Doesn't run 
if (-1 && 0) alert( 'second' );

// Runs
if (null || -1 && 1) alert( 'third' );