var gates = [
 [],
 //level1
 [0,0,0,2],
//level2
 [0,1,6,3],
//level3
 [5,2,4,10],
//level4
 [3,6,0,0],
//level5
 [0,8,3,2],
//level6
 [2,7,0,4],
//level7
 [0,0,0,6],
//level8
 [0,9,0,5],
//level9
 [0,0,0,8],
//level10
 [11,3,12,0],
//level11
 [0,0,10,0],
//level12
  [10,0,0,0],
//level13
 [17,14,0,15],
//level14
 [16,0,22,13],
//level15
 [20,13,23,0],
//level16
 [18,0,14,17],
//level17
 [19,16,17,20],
//level18
 [0,0,16,19],
//level19
 [0,18,17,21],
//level20
 [21,17,15,0],
//level21
 [0,19,20,0],
//level22
 [14,0,0,24],
//level23
 [15,24,0,0],
//level24
 [0,22,0,23],
//level25
 [0,0,26,0],
//level26
 [25,27,0,0],
//level27
 [28,0,0,26],
//level28
 [0,29,27,0],
//level29
 [0,0,30,28],
//level30
 [30,31,0,0],
//level31
 [32,0,0,30],
//level32
 [33,0,31,0],
//level33
 [0,0,32,34],
//level34
 [0,33,0,35],
//level35
 [0,34,0,36],
//level36
 [0,35,25,0],
//level37
 [39,38,0,0],
//level38
 [40,0,0,37],
//level39
 [42,40,37,0],
//level40
 [41,45,38,39],
//level41
 [44,46,40,42],
//level42
 [43,41,39,0],
//level43
 [0,44,42,0],
//level44
 [0,46,41,43],
//level45
 [46,0,47,40],
//level46
 [48,0,45,41],
//level47
 [45,46,0,48],
//level48
 [0,0,46,0],
//level49
 [2,0,0,0],
//level50
 [2,0,0,0],
 
];
// 20x15
var checkpoints = [
	[
	    [3, 16, 6, 5],
		[14, 3, 4, 2,true,"left"],
		
	],
	// level 1
	[
		 [3, 16, 6, 5],
		 [14, 2, 4, 2],
		
	],
	
	// level 2
	[
		[14, 2, 4, 2],
		 [25, 5, 3, 3],
		 [28, 12, 1, 1],
		 [14, 20, 4, 2],
	],
	
	// level 3
	[
		[0, 12, 3, 4],
		[14, 20, 4, 2],
		[29, 12, 3, 4],
		
		
		
	],
	
	// level 4
	[
		[29, 12, 3, 4],
		[1, 6, 2, 2],
		[15, 2, 3, 5],
		[16, 8, 3, 3],
		[3, 20, 4, 2],
		
		
		
	],
	
	// level 5
	[
		[7, 18, 3, 3],
		[11, 3, 3, 3],
		[0,12,3,4]
		
	],
	
	// level 6
	[
		
		[3, 2, 4, 2],
		[2, 11, 2, 2],
		[10, 16, 2, 2],
		
		
		[26, 6, 4, 4],
		[25,20,4,2]
	],
	
	// level 7
	[
		[25, 2, 4, 2]
	],
	
	// level 8
	[
		[3, 20, 4, 2],
		[3,8,2,1],
		[16,10,1,1],
		[16,3,1,1],
		[26,9,1,1],
		[25,2,4,2]
		
		
	],
	
	// level 9
	[
		[3, 2, 4, 2]
		
	],
	
	// level 10
	[
		[0, 4, 2,2],
		[9, 16, 3,4],
		[14, 20, 4,2],
		[14, 6, 2,1],
		[30, 6, 2,2]
		
	],
	
	// level 11
	[
		[0, 6, 2, 2],
		[16, 18, 2, 2],
		[26, 4, 3, 3]
	],
	
	// level 12
	[
		[3, 4, 7, 5,true],
		[12, 9, 2, 2],
		[30,4, 2, 2]
		
	],
	
	// level 13
	[
		[18, 15, 6, 5],
		[1, 18, 2, 2],
		
		
		[9, 3, 2, 2]
	],
	
	// level 14
	[
		[25, 16, 4, 4]
	],
	
	// level 15
	[
		[3, 4, 4, 4],
		[10, 20, 1, 1],
		[20, 10, 1, 1],
		[30, 16, 2, 4]
	],
	
	// level 16
	[
		[22, 0, 2, 4],
		[29, 16, 3, 4]
	],
	
	// level 17
	[
		[3, 11, 6, 1],
		[22,20,2,2]
		
	],
	
	// level 18
	[
		
		[20, 4, 4, 4],
		[0, 16, 3, 4]
	],
	
	// level 19
	[
		[10, 2, 2, 2],
		[10,20,2,2],
		[25,10,4,4]
 		
	],
	
	// level 20
	[
		[16, 4, 2, 4],
		[14, 10, 4, 3],
		[0, 16, 3, 4],
		
	],
	
	// level 21
	[
	
		[7, 20, 3, 2]
	],
	
	// level 22
	[
		
		[3, 16, 4, 4],
		[25, 2, 4, 2],
	],
	
	// level 23
	[
		[7, 4, 2, 2],
		[7, 18, 2, 2],
		[7, 4, 2, 2],
		
		[21, 20, 4, 2],
		
		
		
	],
	
	// level 24
	[
		[3, 14, 8, 6,true],
		
		[21, 2, 4, 2],
		[19, 10, 2, 2],
		[25, 20, 4, 2],
	],
	
	// level 25
	[
		[24, 4, 5, 16]
	],
	
	// level 26
	[
		[19, 4, 5, 5],
		
		
	],
	
	// level 27
	[
		[10, 5, 7, 4]
		
	],
	
	// level 28
	[
		[3, 4, 4, 4]
	],
	
	// level 29
	[
		[10, 4, 12, 4],
		
	],
	
	// level 30
	[
		[25, 3, 4, 4],
		
	],
	// level 31
	[
		[8, 1, 4, 4],
		[3, 16, 4, 4],
		
	],
	// level 32
	[
		[3, 10, 4, 4],
		
		[23, 10, 4, 4]
		
	],
	// level 33
	[
		
		
	],
	// level 34
	[
		[14, 1, 4, 2],
		
	],
	// level 35
	[
		[14, 20, 4, 2],
		
	],
	// level 36
	[
		[23, 4, 6, 16,true]
		
	],
	// level 37
	[
		[13, 4, 6, 6]
		
	],
	// level 38
	[
		[18, 18, 2, 2],
		[30, 16, 2, 4],
		
		
		
	],
	// level 39
	[
		[14, 10, 4, 4],
		[31, 4, 1, 4]
		
		
	],
	// level 40
	[
		[0, 16, 2, 4]
		
	],
	// level 41
	[
		[20, 4, 4, 4],
		[30,4,2,4]
	],
	// level 42
	[
		[0, 4, 2, 4],
		[30,4,2,4]
		
	],
	// level 43
	[
		
		[0,4,2,4]
		
	],
	// level 44
	[
		[0,4,2,4]
		
	],
	// level 45
	[
		
		[0,4,2,2],
		[30,17,2,4],
		
		
	],
	// level 46
	[
		[0, 17, 2, 4],
		[30, 10, 2, 4]
		
	],
	// level 47
	[
		[29, 4, 3, 2]
	],
	// level 48
	[
		[0, 10, 3, 4],
		[25, 9, 4, 6],
		[23, 16, 6, 4]
		
		
		
		
	],
	// level 49
	[
		[3, 15, 2, 2],
		[23,3,2,2,true]
		
	],
	// level 50
	[
		[5, 9, 2, 2],
		[21,9,2,2,true]
		
	]
];

function drawChecks() {
	for (var i = 0; i < checkpoints[level].length; i++) {
		canvas.beginPath();
		canvas.rect(
			checkpoints[level][i][0] * cwh(TILE_SIZE) + os.x,
			checkpoints[level][i][1] * cwh(TILE_SIZE) + os.y,
			checkpoints[level][i][2] * cwh(TILE_SIZE),
			checkpoints[level][i][3] * cwh(TILE_SIZE)
		);
		canvas.fillStyle = CHECK_COLOR;
		canvas.fill();
	}
	drawCheckFlash();
}

function drawCheckFlash() {
	if (checkFlashAlpha > 0 && state == "game" && checkpoints[level].length >= (curCheck+1)  ) {
		canvas.beginPath();
		canvas.rect(
			checkpoints[level][curCheck][0] * cwh(TILE_SIZE) + os.x,
			checkpoints[level][curCheck][1] * cwh(TILE_SIZE) + os.y,
			checkpoints[level][curCheck][2] * cwh(TILE_SIZE),
			checkpoints[level][curCheck][3] * cwh(TILE_SIZE)
		);
		canvas.fillStyle = CHECK_FLASH_COLOR + checkFlashAlpha + ")";
		canvas.fill();
		checkFlashAlpha -= CHECK_FLASH_FADE_SPEED;
	}
}