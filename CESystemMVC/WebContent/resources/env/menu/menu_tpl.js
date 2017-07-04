var MENU_POS = [
{
	// item sizes
	'height': 25,
	'width': 140,
	// menu block offset from the origin:
	//	for root level origin is upper left corner of the page
	//	for other levels origin is upper left corner of parent item
	'block_top': 13,
	'block_left': 0,
	// offsets between items of the same level
	'top': 24,
	'left': 0,
	// time in milliseconds before menu is hidden after cursor has gone out
	// of any items
	'hide_delay': 10,
	'expd_delay': -1,
	'css' : {
		'outer' : ['m0l0oout', 'm0l0oover'],
		'inner' : ['m0l0iout', 'm0l0iover']
	}	
},
{
	'width': 140,
	'block_left': 20,
	'css' : {
		'outer' : ['m0l1oout', 'm0l1oover'],
		'inner' : ['m0l1iout', 'm0l1iover']
	}
},
{
	'width': 140,
	'block_left': 20,
	'css' : {
		'outer' : ['m0l2oout', 'm0l2oover'],
		'inner' : ['m0l2iout', 'm0l2iover']
	}	
}

];