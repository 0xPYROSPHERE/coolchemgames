
var enemies = [
	[
		
		
	],
	// level 1
	[
		new simpleEnemy(83, 320, 163, 163, 2.95,0),
		new simpleEnemy(83, 320, 188, 188, 2.95,0),
		new simpleEnemy(83, 320, 213, 213, 2.95,0),
		
		new simpleEnemy(320, 83, 238, 238, 2.95,0),
		new simpleEnemy(320, 83, 263, 263, 2.95,0),
		new simpleEnemy(320, 83, 288, 288, 2.95,0),
		
		new simpleEnemy(83, 320, 313, 313, 2.95,0),
		new simpleEnemy(83, 320, 338, 338, 2.95,0),
		new simpleEnemy(83, 320, 363, 363, 2.95,0),
		//
		
		new simpleEnemy(263, 263, 520, 409, 0,1.5),
		new simpleEnemy(288, 288, 520, 409, 0,1.5),
		
		
		new simpleEnemy(313, 313, 409,520, 0,1.5),
		new simpleEnemy(338, 338, 409,520, 0,1.5),
		
		new simpleEnemy(363, 363, 520, 409, 0,1.5),
		new simpleEnemy(388, 388, 520, 409, 0,1.5),
		
		new simpleEnemy(488, 488, 520, 409, 0,1.5),
		new simpleEnemy(513, 513, 520, 409, 0,1.5),
		
		new simpleEnemy(613, 613, 520, 409, 0,1.5),
		new simpleEnemy(638, 638, 520, 409, 0,1.5),
		
		
		new simpleEnemy(438, 438, 409,520, 0,1.5),
		
		new simpleEnemy(563, 563, 409,520, 0,1.5),
		new simpleEnemy(588, 588, 409,520, 0,1.5),
		
		
		
		
	
		
	],

	// level 2
	[
	
		new simpleEnemy(487, 487, 258,494, 0,1.44),
		new simpleEnemy(587, 587, 258,494, 0,1.44),
		new simpleEnemy(687, 687, 258,494, 0,1.44),
		
		new simpleEnemy(537, 537, 494,258, 0,1.44),
		new simpleEnemy(637, 637, 494,258, 0,1.44),
	    
		new staticEnemy(238, 263),
	    new staticEnemy(138, 313),
	
	    new linearEnemy([
			[112, 112, 300, 108, 0, 3.6],
			[112, 112, 108, 495, 0, 3.6],
			[112, 112, 495, 300, 0, 3.6]
		]),
	    
		new linearEnemy([
			[183, 108 , 288, 288, 5.74, 0],
			[108, 719, 288, 288, 5.74, 0],
			[719, 183, 288, 288, 5.74, 0]
		]),
		
	],
	
	// level 3
	[
		
		
		
	],
	
	// level 4
	[
		
		new simpleEnemy(113, 113, 494,207, 0,2.27),
		new simpleEnemy(163, 163, 494,207, 0,2.27),
		new simpleEnemy(213, 213, 494,207, 0,2.27),
		new simpleEnemy(263, 263, 494,207, 0,2.27),
		new simpleEnemy(313, 313, 494,207, 0,2.27),
		new simpleEnemy(363, 363, 494,207, 0,2.27),
		
		//
		
		new simpleEnemy(513, 513, 108,545, 0,3.45),
		new simpleEnemy(588, 588, 83,520, 0,3.45),
		new simpleEnemy(663, 663, 58,495, 0,3.45),
		
		
		
	],
	
	// level 5
	[
		new linearEnemy([
			[526, 388 , 87, 87, 2.6, 0],
			[108, 662, 87, 87, 2.6, 0],
			[662, 526, 87, 87, 2.6, 0]
		]),
		
		new linearEnemy([
			[526, 662 , 112, 112, 2.6, 0],
			[662, 388, 112, 112, 2.6, 0],
			[388, 526, 112, 112, 2.6, 0]
		]),
		
		new simpleEnemy(288, 288, 163,438, 0,2.25),
		new simpleEnemy(313, 313, 163,438, 0,2.25),
		
		
		new simpleEnemy(363, 363, 420,158, 0,1.95),
		new simpleEnemy(388, 388, 420,158, 0,1.95),
		new simpleEnemy(413, 413, 420,158, 0,1.95),
		
		new simpleEnemy(357, 620, 163,163,1.95,0),
		new simpleEnemy(357, 620, 188,188,1.95,0),
		new simpleEnemy(357, 620, 213,213,1.95,0),
		//my 
		new simpleCircularEnemy(212, 287, 30, -90, 4.5),
		new simpleCircularEnemy(212, 187, 30, -90, -4.5),
		new simpleCircularEnemy(212, 387, 30, -90, -4.5),
		
		new simpleEnemy(712,712, 83,443, 0,3.2),
		new simpleEnemy(737,737,442, 83, 0,3.2),
		
		//
		
		new simpleCircularEnemy(75, 100, 13, -90, -4.5),
		new simpleCircularEnemy(75, 225, 13, 90, 4.5),
		new simpleCircularEnemy(125, 250, 13, -90, 4.5),
		new simpleCircularEnemy(125, 450, 13, 90, 4.5),
		
		new simpleCircularEnemy(163, 163, 25, -90, 4.5),
		
		
		
		new simpleCircularEnemy(538, 338, 63, 0, 1.12),
		new simpleCircularEnemy(538, 338, 63, 15, 1.12),
		new simpleCircularEnemy(538, 338, 63, 30, 1.12),
		new simpleCircularEnemy(538, 338, 63, 45, 1.12),
		new simpleCircularEnemy(538, 338, 63, 60, 1.12),
		
		new simpleCircularEnemy(538, 338, 63, -15, 1.12),
		new simpleCircularEnemy(538, 338, 63, -30, 1.12),
		new simpleCircularEnemy(538, 338, 63, -45, 1.12),
		new simpleCircularEnemy(538, 338, 63, -60, 1.12),
		
		
		
		
		new simpleCircularEnemy(538, 338, 63, 180, 1.12),
		new simpleCircularEnemy(538, 338, 63, 195, 1.12),
		new simpleCircularEnemy(538, 338, 63, 210, 1.12),
		new simpleCircularEnemy(538, 338, 63, 225, 1.12),
		new simpleCircularEnemy(538, 338, 63, 240, 1.12),
		
		new simpleCircularEnemy(538, 338, 63, 165, 1.12),
		new simpleCircularEnemy(538, 338, 63, 150, 1.12),
		new simpleCircularEnemy(538, 338, 63, 135, 1.12),
		new simpleCircularEnemy(538, 338, 63, 120, 1.12),
		
		/*new circularEnemyLinear([
			
			[150, 150, 200, 400, 0, 0.9],
			[150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 150, 200, 200, 0.9, 0]
			
		],72,135,2,0),
		*/
		
		//new simpleCircularEnemyXY(135, 190, 52, 30, 2.5,0,null,135,316,0,1.7), 
		
		//new simpleCircularEnemy(538, 338, 63, -90, 1.12),
			
		
		
		
		
	],
	
	// level 6
	[
		
		new simpleCircularEnemy(150, 200, 0, 0, 0),
		
		new simpleCircularEnemy(150, 200, 18, 45, 1.35),
		new simpleCircularEnemy(150, 200, 36, 45, 1.35),
		new simpleCircularEnemy(150, 200, 54, 45, 1.35),
		new simpleCircularEnemy(150, 200, 72, 45, 1.35),
		new simpleCircularEnemy(150, 200, 90, 45, 1.35),
		
		new simpleCircularEnemy(150, 200, 18, 135, 1.35),
		new simpleCircularEnemy(150, 200, 36, 135, 1.35),
		new simpleCircularEnemy(150, 200, 54, 135, 1.35),
		new simpleCircularEnemy(150, 200, 72, 135, 1.35),
		new simpleCircularEnemy(150, 200, 90, 135, 1.35),
		
		new simpleCircularEnemy(150, 200, 18, -45, 1.35),
		new simpleCircularEnemy(150, 200, 36, -45, 1.35),
		new simpleCircularEnemy(150, 200, 54, -45, 1.35),
		new simpleCircularEnemy(150, 200, 72, -45, 1.35),
		new simpleCircularEnemy(150, 200, 90, -45, 1.35),
		
		new simpleCircularEnemy(150, 200, 18, -135, 1.35),
		new simpleCircularEnemy(150, 200, 36, -135, 1.35),
		new simpleCircularEnemy(150, 200, 54, -135, 1.35),
		new simpleCircularEnemy(150, 200, 72, -135, 1.35),
		new simpleCircularEnemy(150, 200, 90, -135, 1.35),
		
		///
		
		
		new simpleCircularEnemy(150, 400, 0, 0, 0),
		
		new simpleCircularEnemy(150, 400, 18, 0, 2.7),
		new simpleCircularEnemy(150, 400, 36, 0, 2.7),
		new simpleCircularEnemy(150, 400, 54, 0, 2.7),
		new simpleCircularEnemy(150, 400, 72, 0, 2.7),
		new simpleCircularEnemy(150, 400, 90, 0, 2.7),
		
		new simpleCircularEnemy(150, 400, 18, 90, 2.7),
		new simpleCircularEnemy(150, 400, 36, 90, 2.7),
		new simpleCircularEnemy(150, 400, 54, 90, 2.7),
		new simpleCircularEnemy(150, 400, 72, 90, 2.7),
		new simpleCircularEnemy(150, 400, 90, 90, 2.7),
		
		new simpleCircularEnemy(150, 400, 18, -90, 2.7),
		new simpleCircularEnemy(150, 400, 36, -90, 2.7),
		new simpleCircularEnemy(150, 400, 54, -90, 2.7),
		new simpleCircularEnemy(150, 400, 72, -90, 2.7),
		new simpleCircularEnemy(150, 400, 90, -90, 2.7),
		
		new simpleCircularEnemy(150, 400, 18, 180, 2.7),
		new simpleCircularEnemy(150, 400, 36, 180, 2.7),
		new simpleCircularEnemy(150, 400, 54, 180, 2.7),
		new simpleCircularEnemy(150, 400, 72, 180, 2.7),
		new simpleCircularEnemy(150, 400, 90, 180, 2.7),
		
		//
		
		new simpleCircularEnemy(438, 288, 0, 0, 0),
        
		new simpleCircularEnemy(438, 288, 18, 0, 1.35),
		new simpleCircularEnemy(438, 288, 36, 0, 1.35),
		new simpleCircularEnemy(438, 288, 54, 0, 1.35),
		new simpleCircularEnemy(438, 288, 72, 0, 1.35),
		new simpleCircularEnemy(438, 288, 90, 0, 1.35),
		new simpleCircularEnemy(438, 288, 108, 0, 1.35),
		new simpleCircularEnemy(438, 288, 124, 0, 1.35),
		new simpleCircularEnemy(438, 288, 142, 0, 1.35),
		new simpleCircularEnemy(438, 288, 160, 0, 1.35),
		new simpleCircularEnemy(438, 288, 178, 0, 1.35),
		
		new simpleCircularEnemy(438, 288, 18, 90, 1.35),
		new simpleCircularEnemy(438, 288, 36, 90, 1.35),
		new simpleCircularEnemy(438, 288, 54, 90, 1.35),
		new simpleCircularEnemy(438, 288, 72, 90, 1.35),
		new simpleCircularEnemy(438, 288, 90, 90, 1.35),
		new simpleCircularEnemy(438, 288, 108, 90, 1.35),
		new simpleCircularEnemy(438, 288, 124, 90, 1.35),
		new simpleCircularEnemy(438, 288, 142, 90, 1.35),
		new simpleCircularEnemy(438, 288, 160, 90, 1.35),
		new simpleCircularEnemy(438, 288, 178, 90, 1.35),
		
		new simpleCircularEnemy(438, 288, 18, -90, 1.35),
		new simpleCircularEnemy(438, 288, 36, -90, 1.35),
		new simpleCircularEnemy(438, 288, 54, -90, 1.35),
		new simpleCircularEnemy(438, 288, 72, -90, 1.35),
		new simpleCircularEnemy(438, 288, 90, -90, 1.35),
		new simpleCircularEnemy(438, 288, 108, -90, 1.35),
		new simpleCircularEnemy(438, 288, 124, -90, 1.35),
		new simpleCircularEnemy(438, 288, 142, -90, 1.35),
		new simpleCircularEnemy(438, 288, 160, -90, 1.35),
		new simpleCircularEnemy(438, 288, 178, -90, 1.35),
		
		new simpleCircularEnemy(438, 288, 18, 180, 1.35),
		new simpleCircularEnemy(438, 288, 36, 180, 1.35),
		new simpleCircularEnemy(438, 288, 54, 180, 1.35),
		new simpleCircularEnemy(438, 288, 72, 180, 1.35),
		new simpleCircularEnemy(438, 288, 90, 180, 1.35),
		new simpleCircularEnemy(438, 288, 108, 180, 1.35),
		new simpleCircularEnemy(438, 288, 124, 180, 1.35),
		new simpleCircularEnemy(438, 288, 142, 180, 1.35),
		new simpleCircularEnemy(438, 288, 160, 180, 1.35),
		new simpleCircularEnemy(438, 288, 178, 180, 1.35),
		
		
		

		
		
	],
	
	// level 7
	[
		
	],

	// level 8
	[
		new simpleCircularEnemy(287, 163, 0, 0, 0),
		
		new simpleCircularEnemy(287, 163, 12.5, -90, -2.7),
		new simpleCircularEnemy(287, 163, 25, -90, -2.7),
		new simpleCircularEnemy(287, 163, 37.5, -90, -2.7),
		new simpleCircularEnemy(287, 163, 50, -90, -2.7),
		
		new simpleCircularEnemy(287, 163, 12.5, 90, -2.7),
		new simpleCircularEnemy(287, 163, 25 ,90, -2.7),
		new simpleCircularEnemy(287, 163, 37.5, 90, -2.7),
		new simpleCircularEnemy(287, 163, 50, 90, -2.7),
		
		//
		
		new simpleCircularEnemy(413, 163, 0, 0, 0),
		
		new simpleCircularEnemy(413, 163, 12.5, -90, 2.7),
		new simpleCircularEnemy(413, 163, 25, -90, 2.7),
		new simpleCircularEnemy(413, 163, 37.5, -90, 2.7),
		new simpleCircularEnemy(413, 163, 50, -90, 2.7),
		
		new simpleCircularEnemy(413, 163, 12.5, 90, 2.7),
		new simpleCircularEnemy(413, 163, 25 ,90, 2.7),
		new simpleCircularEnemy(413, 163, 37.5, 90, 2.7),
		new simpleCircularEnemy(413, 163, 50, 90, 2.7),
		
		//
		
		new simpleCircularEnemy(537, 163, 0, 0, 0),
		
		new simpleCircularEnemy(537, 163, 12.5, -90, -2.7),
		new simpleCircularEnemy(537, 163, 25, -90, -2.7),
		new simpleCircularEnemy(537, 163, 37.5, -90, -2.7),
		new simpleCircularEnemy(537, 163, 50, -90, -2.7),
		
		new simpleCircularEnemy(537, 163, 12.5, 90, -2.7),
		new simpleCircularEnemy(537, 163, 25 ,90, -2.7),
		new simpleCircularEnemy(537, 163, 37.5, 90, -2.7),
		new simpleCircularEnemy(537, 163, 50, 90, -2.7),
		//
		
		new simpleCircularEnemy(663, 163, 0, 0, 0),
		
		new simpleCircularEnemy(663, 163, 12.5, -90, 2.7),
		new simpleCircularEnemy(663, 163, 25, -90, 2.7),
		new simpleCircularEnemy(663, 163, 37.5, -90, 2.7),
		new simpleCircularEnemy(663, 163, 50, -90, 2.7),
		
		new simpleCircularEnemy(663, 163, 12.5, 90, 2.7),
		new simpleCircularEnemy(663, 163, 25 ,90, 2.7),
		new simpleCircularEnemy(663, 163, 37.5, 90, 2.7),
		new simpleCircularEnemy(663, 163, 50, 90, 2.7),
		
		//
		
		new simpleCircularEnemy(187, 387, 0, 0, 0),
		new reverseCircularEnemy(187, 387, 12.5, 0, 360,1.37 ),
		new reverseCircularEnemy(187, 387, 25, 0, 360,1.37 ),
		new reverseCircularEnemy(187, 387, 37.5, 0, 360,1.37 ),
		new reverseCircularEnemy(187, 387, 50, 0, 360,1.37 ),
		new reverseCircularEnemy(187, 387, 62.5, 0, 360,1.37 ),
		new reverseCircularEnemy(187, 387, 75, 0, 360,1.37 ),
		new reverseCircularEnemy(187, 387, 87.5, 0, 360,1.37 ),
		new reverseCircularEnemy(187, 387, 100, 0, 360,1.37 ),
		
		new reverseCircularEnemy(187, 387, 12.5, 90, 450,1.37 ),
		new reverseCircularEnemy(187, 387, 25, 90, 450,1.37 ),
		new reverseCircularEnemy(187, 387, 37.5, 90, 450,1.37 ),
		new reverseCircularEnemy(187, 387, 50, 90, 450,1.37 ),
		new reverseCircularEnemy(187, 387, 62.5, 90, 450,1.37 ),
		new reverseCircularEnemy(187, 387, 75, 90, 450,1.37 ),
		new reverseCircularEnemy(187, 387, 87.5, 90, 450,1.37 ),
		new reverseCircularEnemy(187, 387, 100, 90, 450,1.37 ),
		
		new reverseCircularEnemy(187, 387, 12.5, 180, 540,1.37 ),
		new reverseCircularEnemy(187, 387, 25, 180, 540,1.37 ),
		new reverseCircularEnemy(187, 387, 37.5,180, 540,1.37 ),
		new reverseCircularEnemy(187, 387, 50, 180, 540,1.37 ),
		new reverseCircularEnemy(187, 387, 62.5, 180, 540,1.37 ),
		new reverseCircularEnemy(187, 387, 75, 180, 540,1.37 ),
		new reverseCircularEnemy(187, 387, 87.5, 180, 540,1.37 ),
		new reverseCircularEnemy(187, 387, 100, 180, 540,1.37 ),
		
		
		new reverseCircularEnemy(187, 387, 12.5, 270, 630,1.37 ),
		new reverseCircularEnemy(187, 387, 25, 270, 630,1.37 ),
		new reverseCircularEnemy(187, 387, 37.5,270, 630,1.37 ),
		new reverseCircularEnemy(187, 387, 50, 270, 630,1.37 ),
		new reverseCircularEnemy(187, 387, 62.5, 270, 630,1.37 ),
		new reverseCircularEnemy(187, 387, 75, 270, 630,1.37 ),
		new reverseCircularEnemy(187, 387, 87.5, 270, 630,1.37 ),
		new reverseCircularEnemy(187, 387, 100, 270, 630,1.37 ),
		
		//
	
	    new simpleCircularEnemy(413, 387, 0, 0, 0),
		new reverseCircularEnemy(413, 387, 12.5, 0, 360,-1.37 ),
		new reverseCircularEnemy(413, 387, 25, 0, 360,-1.37 ),
		new reverseCircularEnemy(413, 387, 37.5, 0, 360,-1.37 ),
		new reverseCircularEnemy(413, 387, 50, 0, 360,-1.37 ),
		new reverseCircularEnemy(413, 387, 62.5, 0, 360,-1.37 ),
		new reverseCircularEnemy(413, 387, 75, 0, 360,-1.37 ),
		new reverseCircularEnemy(413, 387, 87.5, 0, 360,-1.37 ),
		new reverseCircularEnemy(413, 387, 100, 0, 360,-1.37 ),
		
		new reverseCircularEnemy(413, 387, 12.5, 90, 450,-1.37 ),
		new reverseCircularEnemy(413, 387, 25, 90, 450,-1.37 ),
		new reverseCircularEnemy(413, 387, 37.5, 90, 450,-1.37 ),
		new reverseCircularEnemy(413, 387, 50, 90, 450,-1.37 ),
		new reverseCircularEnemy(413, 387, 62.5, 90, 450,-1.37 ),
		new reverseCircularEnemy(413, 387, 75, 90, 450,-1.37 ),
		new reverseCircularEnemy(413, 387, 87.5, 90, 450,-1.37 ),
		new reverseCircularEnemy(413, 387, 100, 90, 450,-1.37 ),
		
		new reverseCircularEnemy(413, 387, 12.5, 180, 540,-1.37 ),
		new reverseCircularEnemy(413, 387, 25, 180, 540,-1.37 ),
		new reverseCircularEnemy(413, 387, 37.5,180, 540,-1.37 ),
		new reverseCircularEnemy(413, 387, 50, 180, 540,-1.37 ),
		new reverseCircularEnemy(413, 387, 62.5, 180, 540,-1.37 ),
		new reverseCircularEnemy(413, 387, 75, 180, 540,-1.37 ),
		new reverseCircularEnemy(413, 387, 87.5, 180, 540,-1.37 ),
		new reverseCircularEnemy(413, 387, 100, 180, 540,-1.37 ),
		
		
		new reverseCircularEnemy(413, 387, 12.5, 270, 630,-1.37 ),
		new reverseCircularEnemy(413, 387, 25, 270, 630,-1.37 ),
		new reverseCircularEnemy(413, 387, 37.5,270, 630,-1.37 ),
		new reverseCircularEnemy(413, 387, 50, 270, 630,-1.37 ),
		new reverseCircularEnemy(413, 387, 62.5, 270, 630,-1.37 ),
		new reverseCircularEnemy(413, 387, 75, 270, 630,-1.37 ),
		new reverseCircularEnemy(413, 387, 87.5, 270, 630,-1.37 ),
		new reverseCircularEnemy(413, 387, 100, 270, 630,-1.37 ),
	    
		//
		
		new simpleCircularEnemy(637, 387, 0, 0, 0),
		new reverseCircularEnemy(637, 387, 12.5, 0, 360,1.37 ),
		new reverseCircularEnemy(637, 387, 25, 0, 360,1.37 ),
		new reverseCircularEnemy(637, 387, 37.5, 0, 360,1.37 ),
		new reverseCircularEnemy(637, 387, 50, 0, 360,1.37 ),
		new reverseCircularEnemy(637, 387, 62.5, 0, 360,1.37 ),
		new reverseCircularEnemy(637, 387, 75, 0, 360,1.37 ),
		new reverseCircularEnemy(637, 387, 87.5, 0, 360,1.37 ),
		new reverseCircularEnemy(637, 387, 100, 0, 360,1.37 ),
		
		new reverseCircularEnemy(637, 387, 12.5, 90, 450,1.37 ),
		new reverseCircularEnemy(637, 387, 25, 90, 450,1.37 ),
		new reverseCircularEnemy(637, 387, 37.5, 90, 450,1.37 ),
		new reverseCircularEnemy(637, 387, 50, 90, 450,1.37 ),
		new reverseCircularEnemy(637, 387, 62.5, 90, 450,1.37 ),
		new reverseCircularEnemy(637, 387, 75, 90, 450,1.37 ),
		new reverseCircularEnemy(637, 387, 87.5, 90, 450,1.37 ),
		new reverseCircularEnemy(637, 387, 100, 90, 450,1.37 ),
		
		new reverseCircularEnemy(637, 387, 12.5, 180, 540,1.37 ),
		new reverseCircularEnemy(637, 387, 25, 180, 540,1.37 ),
		new reverseCircularEnemy(637, 387, 37.5,180, 540,1.37 ),
		new reverseCircularEnemy(637, 387, 50, 180, 540,1.37 ),
		new reverseCircularEnemy(637, 387, 62.5, 180, 540,1.37 ),
		new reverseCircularEnemy(637, 387, 75, 180, 540,1.37 ),
		new reverseCircularEnemy(637, 387, 87.5, 180, 540,1.37 ),
		new reverseCircularEnemy(637, 387, 100, 180, 540,1.37 ),
		
		
		new reverseCircularEnemy(637, 387, 12.5, 270, 630,1.37 ),
		new reverseCircularEnemy(637, 387, 25, 270, 630,1.37 ),
		new reverseCircularEnemy(637, 387, 37.5,270, 630,1.37 ),
		new reverseCircularEnemy(637, 387, 50, 270, 630,1.37 ),
		new reverseCircularEnemy(637, 387, 62.5, 270, 630,1.37 ),
		new reverseCircularEnemy(637, 387, 75, 270, 630,1.37 ),
		new reverseCircularEnemy(637, 387, 87.5, 270, 630,1.37 ),
		new reverseCircularEnemy(637, 387, 100, 270, 630,1.37 ),
	],

	// level 9
	[
		
		 
	],

	// level 10
	[
		new simpleEnemy(63, 63, 493, 108, 0,2.89),
		new simpleEnemy(113, 113, 493, 108, 0,2.89),
		new simpleEnemy(163, 163, 493, 108, 0,2.89),
		new simpleEnemy(213, 213, 493, 108, 0,2.89),
		
		
		new simpleEnemy(513, 513, 493, 108, 0,2.89),
		new simpleEnemy(563, 563, 493, 108, 0,2.89),
		new simpleEnemy(613, 613, 493, 108, 0,2.89),
		new simpleEnemy(663, 663, 493, 108, 0,2.89),
		new simpleEnemy(713, 713, 493, 108, 0,2.89),
		
		
		
		new simpleEnemy(88, 88,  108,493, 0,2.89),
		new simpleEnemy(138, 138,  108,493, 0,2.89),
		new simpleEnemy(188, 188,  108,493, 0,2.89),
		
		new simpleEnemy(538, 538,  108,493, 0,2.89),
		new simpleEnemy(588, 588,  108,493, 0,2.89),
		new simpleEnemy(638, 638,  108,493, 0,2.89),
		new simpleEnemy(688, 688,  108,493, 0,2.89),
		new simpleEnemy(738, 738,  108,493, 0,2.89),
		
		
	],
	
	// level 11
	[
		
		new linearEnemy([
			[63, 63 , 338, 108, 0,2.88],
			[63, 63, 108, 495, 0,2.88],
			[63, 63, 495, 338, 0,2.88]
		]),
		new linearEnemy([
			[88, 88 , 338, 108, 0,2.88],
			[88, 88, 108, 495, 0,2.88],
			[88, 88, 495, 338, 0,2.88]
		]),
		
		new linearEnemy([
			[113, 113 , 438, 495, 0,2.88],
			[113, 113, 495, 108, 0,2.88],
			[113, 113, 108, 438, 0,2.88]
		]),
		new linearEnemy([
			[138, 138 , 438, 495, 0,2.88],
			[138, 138, 495, 108, 0,2.88],
			[138, 138, 108, 438, 0,2.88]
		]),
		
		new linearEnemy([
			[163, 163 , 219, 495, 0,2.88],
			[163, 163, 495, 108, 0,2.88],
			[163, 163, 108, 219, 0,2.88]
		]),
		
	    new linearEnemy([
			[188, 188 , 219, 495, 0,2.88],
			[188, 188, 495, 108, 0,2.88],
			[188, 188, 108, 219, 0,2.88]
		]),
		
		new linearEnemy([
			[213, 213 , 219, 108, 0,2.88],
			[213, 213, 108, 495, 0,2.88],
			[213, 213, 495, 219, 0,2.88]
		]),
		
		new linearEnemy([
			[238, 238 , 219, 108, 0,2.88],
			[238, 238, 108, 495, 0,2.88],
			[238, 238, 495, 219, 0,2.88]
		]),
		
		new linearEnemy([
			[263, 263 , 439, 108, 0,2.88],
			[263, 263, 108, 495, 0,2.88],
			[263, 263, 495, 439, 0,2.88]
		]),
		new linearEnemy([
			[288, 288 , 439, 108, 0,2.88],
			[288, 288, 108, 495, 0,2.88],
			[288, 288, 495, 439, 0,2.88]
		]),
		new linearEnemy([
			[313, 313 , 329, 495, 0,2.88],
			[313, 313, 495, 108, 0,2.88],
			[313, 313, 108, 329, 0,2.88]
		]),
		new linearEnemy([
			[338, 338 , 329, 495, 0,2.88],
			[338, 338, 495, 108, 0,2.88],
			[338, 338, 108, 329, 0,2.88]
		]),
		
		new linearEnemy([
			[338, 338 , 329, 495, 0,2.88],
			[338, 338, 495, 108, 0,2.88],
			[338, 338, 108, 329, 0,2.88]
		]),
		new simpleEnemy(363, 363, 108, 495, 0, 2.88),
		new simpleEnemy(388, 388, 108, 495, 0, 2.88),
		
	],

	// level 12
	[
	    new simpleEnemy(88, 88, 282, 495, 0, 3.2),
		new simpleEnemy(113, 113, 282, 495, 0, 3.2),
		
		new simpleEnemy(212, 212,  495,282, 0, 3.2),
		new simpleEnemy(237, 237,  495,282, 0, 3.2),
		
		new linearEnemy([
			[138, 138 , 388, 495, 0,3.2],
			[138, 138 , 495, 282, 0,3.2],
			[138, 138 , 282, 388, 0,3.2]
		]),
		new linearEnemy([
			[163, 163 , 388, 495, 0,3.2],
			[163, 163 , 495, 282, 0,3.2],
			[163, 163 , 282, 388, 0,3.2]
		]),
		
		new linearEnemy([
			[263, 263 , 388, 282, 0,3.2],
			[263, 263 , 282, 495, 0,3.2],
			[263, 263 , 495, 388, 0,3.2]
		]),
		new linearEnemy([
			[288, 288 , 388, 282, 0,3.2],
			[288, 288 , 282, 495, 0,3.2],
			[288, 288 , 495, 388, 0,3.2]
		]),
		
		 new simpleEnemy(382, 744 , 114, 114, 2.7,0),
		
		new linearEnemy([
			[527, 744 , 137, 137, 2.7,0],
			[744, 382 , 137, 137, 2.7,0],
			[382, 527 , 137, 137, 2.7,0]
		]),
		
		new linearEnemy([
			[671, 744 , 162, 162, 2.7,0],
			[744, 382 , 162, 162, 2.7,0],
			[382, 671 , 162, 162, 2.7,0]
		]),
		
		new linearEnemy([
			[671, 382 , 187, 187, 2.7,0],
			[382, 744 , 187, 187, 2.7,0],
			[744, 671 , 187, 187, 2.7,0]
		]),
		
		new linearEnemy([
			[525, 382 , 212, 212, 2.7,0],
			[382, 744 , 212, 212, 2.7,0],
			[744, 525 , 212, 212, 2.7,0]
		]),
		 
		
	],

	// level 13
	[
		new simpleCircularEnemy(412, 440, 40, 0, 3),
		
		new simpleCircularEnemy(312, 440, 40, 0, -3),
		new simpleCircularEnemy(237, 440, 40, 45, -3),
		
		new simpleCircularEnemy(187, 440, 40, 90, 3),
		new simpleCircularEnemy(287, 440, 40, 90, 3),
		
		new simpleCircularEnemy(137, 340, 40, 0, -3),
		new simpleCircularEnemy(162, 340, 40, -45, 3),
		
		new simpleCircularEnemy(137, 262, 50, -45, -4),
		
		new simpleCircularEnemy(137, 212, 40, 90, 4),
        
        new simpleCircularEnemy(675, 450, 40, 45, 3),
		
		new simpleCircularEnemy(675, 425, 40, 90, -3),
		
		new simpleCircularEnemy(675, 350, 40, -45, 3),
		
		new simpleCircularEnemy(537, 262, 40, 45, -3),
		
        new simpleCircularEnemy(437, 287, 40, 0, 3),
		
		new simpleCircularEnemy(387, 312, 40, 45, -3),
		
		 new simpleCircularEnemy(337, 187, 40, -45, 3),
		 
		 new simpleCircularEnemy(463, 187, 40, 45, -3),
		 
		 new simpleCircularEnemy(463, 216, 65, 90, 3),
		
		
	],
	
	// level 14
	[
		new simpleEnemy(114, 114, 208, 494, 0, 1.075),
		new simpleEnemy(214, 214, 233, 494, 0, 0.98),
		new simpleEnemy(314, 314, 183, 494, 0, 1.17),
		new simpleEnemy(414, 414, 158, 494, 0, 1.26),
		
		new simpleEnemy(162, 162, 520, 208, 0, 1.17),
		new simpleEnemy(262, 262, 495, 83, 0, 1.54),
		new simpleEnemy(362, 362, 495, 208, 0, 1.078),
		new simpleEnemy(462, 462, 495, 233, 0, 0.98),
		
		new simpleEnemy(632, 768, 262, 262, 1.67, 0),
		new simpleEnemy(632, 768, 362, 362, 1.67, 0),
		
		new simpleEnemy(718, 632 , 212, 212, 0.91, 0),
		new simpleEnemy(743, 632 , 312, 312, 1.29, 0),
		
		
		
		
	],

	// level 15
	[
		
		 new simpleEnemy(82, 318, 337, 337, 3.5, 0),
		  new simpleEnemy(318, 82, 287, 287, 3.5, 0),
		 new simpleEnemy(82, 318, 237, 237, 3.5, 0),
		  new simpleEnemy(318, 82, 387, 387, 3.5, 0),
		  
		 new simpleEnemy( 594,357, 337, 337, 3.5, 0),
		  new simpleEnemy( 357,594, 287, 287, 3.5, 0),
		 new simpleEnemy(594,357, 237, 237, 3.5, 0),
		  new simpleEnemy(357,594, 387, 387, 3.5, 0),
		 

          new simpleCircularEnemy(675, 450, 40, -45, -2.7),	
          new simpleCircularEnemy(125, 450, 40, -45, 2.7),
		   new simpleCircularEnemy(325, 450, 40, -45, 2.7),
		    new simpleCircularEnemy(475, 450, 40, -45, -2.7),
			
			 new simpleCircularEnemy(462, 150, 38, -45, 2.7),
			 new simpleCircularEnemy(462, 150, 13, 45, 2.7),
			 
			  new simpleCircularEnemy(675, 250, 40, 0, -2.7),
			 
			
			new circularEnemyLinear([
			
			[325, 125, 450, 450, 0.6, 0],
			[125, 325, 400, 400, 0.6, 0]
			
		    ],25,0,2.7,0),
			
			new circularEnemyLinear([
			
			[475, 675, 450, 450, 0.6, 0],
			[675, 475, 450, 450, 0.6, 0]
			
		    ],25,90,-2.7,0),
			
		  new circularEnemyLinear([
			
			[675, 675, 450, 250, 0, 0.6],
			[675, 675, 250, 450, 0, 0.6]
			
		    ],25,45,-2.7,0),
			
		   new circularEnemyLinear([
			
			[675, 550, 150, 150,  0.9,0],
			[550, 675, 150, 150,  0.9,0]
			
		    ],13,45,-2.7,0),
			
			  new circularEnemyLinear([
			
			[675, 550, 150, 150,  0.9,0],
			[550, 675, 150, 150,  0.9,0]
			
		    ],40,-45,-2.7,0),
			
			
		  new circularEnemyLinear([
			
			[250, 375, 150, 150,  0.9,0],
			[375, 250, 150, 150,  0.9,0]
			
		    ],13,45,-2.7,0),
			
			  new circularEnemyLinear([
			
			[250, 375, 150, 150,  0.9,0],
			[375, 250, 150, 150,  0.9,0]
			
		    ],40,-45,-2.7,0),	
	],

	// level 16
	[
	 new simpleEnemy(87, 87 , 108, 268, 0, 2.4),
	 new simpleEnemy(287, 287 , 108, 268, 0, 2.4),
	  new simpleEnemy(463, 463 , 108, 268, 0, 2.4),
	  
	  new simpleEnemy(187, 187 , 268, 108, 0, 2.4),
	   new simpleEnemy(387, 387 , 268, 108, 0, 2.4),
	   new simpleEnemy(487, 487 , 268, 108, 0, 2.4),
	   
	    new simpleEnemy(87, 87 , 332, 492, 0, 2.4),
		new simpleEnemy(187, 187 , 332, 492, 0, 2.4),
		new simpleEnemy(287, 287 , 332, 492, 0, 2.4),
		new simpleEnemy(387, 387 , 332, 492, 0, 2.4),
		new simpleEnemy(487, 487 , 332, 492, 0, 2.4),
		
		 new simpleEnemy(137, 137 , 492, 332, 0, 2.4),
		 new simpleEnemy(237, 237 , 492, 332, 0, 2.4),
		 new simpleEnemy(337, 337 , 492, 332, 0, 2.4),
		 new simpleEnemy(437, 437 , 492, 332, 0, 2.4),
		
		
		
		new circularEnemyLinear([
			
			[635, 635, 312, 188, 0,0.46],
			[635, 635, 188, 312, 0,0.46]
			
		    ],25,90,-2.7,0),
		new circularEnemyLinear([
			
			[635, 635, 312, 188, 0,0.46],
			[635, 635, 188, 312, 0,0.46]
			
		    ],50,90,2.7,0),
		new circularEnemyLinear([
			
			[635, 635, 312, 188, 0,0.46],
			[635, 635, 188, 312, 0,0.46]
			
		    ],75,90,-2.7,0),	
	  
	],

	// level 17
	[
		new simpleEnemy(83, 493 , 463, 463, 3, 0),
		new simpleEnemy(83, 493 , 488, 488, 3, 0),
		
		new simpleEnemy(493, 83 , 263, 263, 3, 0),
		new simpleEnemy(493,83 , 288, 288, 3, 0),
		
		
		new linearEnemy([
			[185, 493 , 412, 412, 3,0],
			[493, 83 , 412, 412, 3,0],
			[83, 185 , 412, 412, 3,0]
		]),
		
		new linearEnemy([
			[185, 493 , 437, 437, 3,0],
			[493, 83 , 437, 437, 3,0],
			[83, 185 , 437, 437, 3,0]
		]),
		
		new linearEnemy([
			[288, 493 , 363, 363, 3,0],
			[493, 83 , 363, 363, 3,0],
			[83, 288 , 363, 363, 3,0]
		]),
		
		new linearEnemy([
			[288, 493  , 388, 388, 3,0],
			[493, 83 , 388, 388, 3,0],
			[83, 288 , 388, 388, 3,0]
		]),
		
		new linearEnemy([
			[388, 493 , 312, 312, 3,0],
			[493, 83 , 312, 312, 3,0],
			[83, 388 , 312, 312, 3,0]
		]),
		
		new linearEnemy([
			[388, 493  , 337, 337, 3,0],
			[493, 83 , 337, 337, 3,0],
			[83, 388 , 337, 337, 3,0]
		]),
		
		//
		new linearEnemy([
			[388, 83 , 212, 212, 3,0],
			[83, 493 , 212, 212, 3,0],
			[493, 388 , 212, 212, 3,0]
		]),
		
		new linearEnemy([
			[388, 83  , 237, 237, 3,0],
			[83, 493 , 237, 237, 3,0],
			[493, 388 , 237, 237, 3,0]
		]),
		
		//
		
		new linearEnemy([
			[288, 83 , 163, 163, 3,0],
			[83, 493 , 163, 163, 3,0],
			[493, 288 , 163, 163, 3,0]
		]),
		
		new linearEnemy([
			[288, 83  , 188, 188, 3,0],
			[83, 493 , 188, 188, 3,0],
			[493, 288 , 188, 188, 3,0]
		]),
		//
		
		new linearEnemy([
			[188, 83 , 113, 113, 3,0],
			[83, 493 , 113, 113, 3,0],
			[493, 188 , 113, 113, 3,0]
		]),
		
		new linearEnemy([
			[188, 83  , 138, 138, 3,0],
			[83, 493 , 138, 138, 3,0],
			[493, 188 , 138, 138, 3,0]
		]),
	],
	
	// level 18
	[
		
		new simpleEnemy(87, 87, 357, 495, 0, 2.3),
		new simpleEnemy(112, 112, 357, 495, 0, 2.3),
		
		new simpleEnemy(187, 187, 357, 495, 0, 2.3),
		new simpleEnemy(212, 212, 357, 495, 0, 2.3),
		
		new simpleEnemy(287, 287, 357, 495, 0, 2.3),
		new simpleEnemy(312, 312, 357, 495, 0, 2.3),
		
		new simpleEnemy(137, 137, 495,357, 0, 2.3),
		new simpleEnemy(162, 162, 495,357, 0, 2.3),
		
		new simpleEnemy(237, 237, 495,357, 0, 2.3),
		new simpleEnemy(262, 262, 495,357, 0, 2.3),
		//
		
		new simpleEnemy(388, 388, 233,518, 0, 3),
		new simpleEnemy(413, 413, 233,518, 0, 3),
		
		new simpleEnemy(488, 488, 233,518, 0, 3),
		new simpleEnemy(513, 513, 233,518, 0, 3),
		
		new simpleEnemy(588, 588, 233,518, 0, 3),
		new simpleEnemy(613, 613, 233,518, 0, 3),
		
		//
		
		new simpleEnemy(338, 338, 518,233, 0, 3),
		new simpleEnemy(363, 363, 518,233, 0, 3),
		
		new simpleEnemy(438, 438, 518,233, 0, 3),
		new simpleEnemy(463, 463, 518,233, 0, 3),
		
		new simpleEnemy(538, 538, 518,233, 0, 3),
		new simpleEnemy(563, 563, 518,233, 0, 3),
		//
		
		new simpleEnemy(332, 613 , 238,238, 3, 0),
		new simpleEnemy(332, 613 , 263,263, 3, 0),
		
		new simpleEnemy(332, 613 , 338,338, 3, 0),
		new simpleEnemy(332, 613 , 363,363, 3, 0),
		
		new simpleEnemy(332, 613 , 438,438, 3, 0),
		new simpleEnemy(332, 613 , 463,463, 3, 0),
		//
		
		new simpleEnemy(613 ,332, 288, 288, 3, 0),
		new simpleEnemy(613, 332 , 313,313, 3, 0),
		
		new simpleEnemy(613 ,332, 388, 388, 3, 0),
		new simpleEnemy(613, 332 , 413,413, 3, 0),
		
		new simpleEnemy(613 ,332, 488, 488, 3, 0),
		new simpleEnemy(613, 332 , 513,513, 3, 0),
		
		
		new circularEnemyLinear([
			
			[250, 425 , 150, 150, 1.85, 0],
			[425, 250, 150, 150, 1.85, 0]
			
		    ],40,0,2.25,0),
			
		new circularEnemyLinear([
			
			[250, 425 , 150, 150, 1.85, 0],
			[425, 250, 150, 150, 1.85, 0]
			
		    ],40,180,2.25,0),
        
		new circularEnemyLinear([
			
			[250, 250 , 150, 275, 0, 2.3],
			[250, 125, 275, 275, 2.3, 0],
			[125, 125, 275, 150, 0, 2.3],
			[125, 125, 150, 275, 0, 2.3],
			[125, 250, 275, 275, 2.3, 0],
			[250, 250 , 275, 150, 0, 2.3],
			
		    ],40,0,2.25,0),
			
		new circularEnemyLinear([
			
			[250, 250 , 150, 275, 0, 2.3],
			[250, 125, 275, 275, 2.3, 0],
			[125, 125, 275, 150, 0, 2.3],
			[125, 125, 150, 275, 0, 2.3],
			[125, 250, 275, 275, 2.3, 0],
			[250, 250 , 275, 150, 0, 2.3],
			
		    ],40,180,2.25,0),	
		
       new circularEnemyLinear([
			
			
			[125, 125, 150, 275, 0, 2.3],
			[125, 250, 275, 275, 2.3, 0],
			[250, 250 , 275, 150, 0, 2.3],
			[250, 250 , 150, 275, 0, 2.3],
			[250, 125, 275, 275, 2.3, 0],
			[125, 125, 275, 150, 0, 2.3]
			
		    ],40,0,2.25,0),
			
        new circularEnemyLinear([
			
			
			[125, 125, 150, 275, 0, 2.3],
			[125, 250, 275, 275, 2.3, 0],
			[250, 250 , 275, 150, 0, 2.3],
			[250, 250 , 150, 275, 0, 2.3],
			[250, 125, 275, 275, 2.3, 0],
			[125, 125, 275, 150, 0, 2.3]
			
		    ],40,180,2.25,0),				
	],
	
	// level 19
	[
		new simpleEnemy(63, 63, 108, 195, 0, 1.3),
		new simpleEnemy(113, 113, 108, 195, 0, 1.3),
		
		new simpleEnemy(63, 63, 208, 295, 0, 1.3),
		new simpleEnemy(113, 113, 208, 295, 0, 1.3),
		
		new simpleEnemy(63, 63, 308, 395, 0, 1.3),
		new simpleEnemy(113, 113, 308, 395, 0, 1.3),
		
		new simpleEnemy(63, 63, 408, 495, 0, 1.3),
		new simpleEnemy(113, 113, 408, 495, 0, 1.3),
		
		//
		
		new simpleEnemy(363, 363, 108, 195, 0, 1.3),
		new simpleEnemy(413, 413, 108, 195, 0, 1.3),
		
		new simpleEnemy(363, 363, 208, 295, 0, 1.3),
		new simpleEnemy(413, 413, 208, 295, 0, 1.3),
		
		new simpleEnemy(363, 363, 308, 395, 0, 1.3),
		new simpleEnemy(413, 413, 308, 395, 0, 1.3),
		
		new simpleEnemy(363, 363, 408, 495, 0, 1.3),
		new simpleEnemy(413, 413, 408, 495, 0, 1.3),
		//
		
		new simpleEnemy(138, 138, 108, 170, 0, 0.93),
		new simpleEnemy(138, 138, 133, 195, 0, 0.93),
		new simpleEnemy(138, 138, 158, 220, 0, 0.93),
		new simpleEnemy(138, 138, 183, 245, 0, 0.93),
		new simpleEnemy(138, 138, 208, 270, 0, 0.93),
		new simpleEnemy(138, 138, 233, 295, 0, 0.93),
		
		new simpleEnemy(138, 138, 368, 306, 0, 0.93),
		new simpleEnemy(138, 138, 393, 331, 0, 0.93),
		new simpleEnemy(138, 138, 418, 356, 0, 0.93),
		new simpleEnemy(138, 138, 443, 381, 0, 0.93),
		new simpleEnemy(138, 138, 468, 406, 0, 0.93),
		new simpleEnemy(138, 138, 493, 431, 0, 0.93),
		
		//
		new simpleEnemy(338, 338, 108, 170, 0, 0.93),
		new simpleEnemy(338, 338, 133, 195, 0, 0.93),
		new simpleEnemy(338, 338, 158, 220, 0, 0.93),
		new simpleEnemy(338, 338, 183, 245, 0, 0.93),
		new simpleEnemy(338, 338, 208, 270, 0, 0.93),
		new simpleEnemy(338, 338, 233, 295, 0, 0.93),
		
		new simpleEnemy(338, 338, 368, 306, 0, 0.93),
		new simpleEnemy(338, 338, 393, 331, 0, 0.93),
		new simpleEnemy(338, 338, 418, 356, 0, 0.93),
		new simpleEnemy(338, 338, 443, 381, 0, 0.93),
		new simpleEnemy(338, 338, 468, 406, 0, 0.93),
		new simpleEnemy(338, 338, 493, 431, 0, 0.93),
		
		//
		new simpleEnemy(463, 463, 108, 170, 0, 0.93),
		new simpleEnemy(463, 463, 133, 195, 0, 0.93),
		new simpleEnemy(463, 463, 158, 220, 0, 0.93),
		new simpleEnemy(463, 463, 183, 245, 0, 0.93),
		new simpleEnemy(463, 463, 208, 270, 0, 0.93),
		new simpleEnemy(463, 463, 233, 295, 0, 0.93),
		
		new simpleEnemy(463, 463, 368, 306, 0, 0.93),
		new simpleEnemy(463, 463, 393, 331, 0, 0.93),
		new simpleEnemy(463, 463, 418, 356, 0, 0.93),
		new simpleEnemy(463, 463, 443, 381, 0, 0.93),
		new simpleEnemy(463, 463, 468, 406, 0, 0.93),
		new simpleEnemy(463, 463, 493, 431, 0, 0.93),
		
		//
		
		new simpleEnemy(163, 163, 195, 108, 0, 1.3),
		new simpleEnemy(163, 163, 220, 133, 0, 1.3),
		new simpleEnemy(163, 163, 245, 158, 0, 1.3),
		new simpleEnemy(163, 163, 270, 183, 0, 1.3),
		new simpleEnemy(163, 163, 295, 208, 0, 1.3),
		
		new simpleEnemy(163, 163, 395, 308, 0, 1.3),
		new simpleEnemy(163, 163, 420, 333, 0, 1.3),
		new simpleEnemy(163, 163, 445, 358, 0, 1.3),
		new simpleEnemy(163, 163, 470, 383, 0, 1.3),
		new simpleEnemy(163, 163, 495, 408, 0, 1.3),
		
		//
		
		new simpleEnemy(313, 313, 195, 108, 0, 1.3),
		new simpleEnemy(313, 313, 220, 133, 0, 1.3),
		new simpleEnemy(313, 313, 245, 158, 0, 1.3),
		new simpleEnemy(313, 313, 270, 183, 0, 1.3),
		new simpleEnemy(313, 313, 295, 208, 0, 1.3),
		
		new simpleEnemy(313, 313, 395, 308, 0, 1.3),
		new simpleEnemy(313, 313, 420, 333, 0, 1.3),
		new simpleEnemy(313, 313, 445, 358, 0, 1.3),
		new simpleEnemy(313, 313, 470, 383, 0, 1.3),
		new simpleEnemy(313, 313, 495, 408, 0, 1.3),
		//
		new simpleEnemy(438, 438, 195, 108, 0, 1.3),
		new simpleEnemy(438, 438, 220, 133, 0, 1.3),
		new simpleEnemy(438, 438, 245, 158, 0, 1.3),
		new simpleEnemy(438, 438, 270, 183, 0, 1.3),
		new simpleEnemy(438, 438, 295, 208, 0, 1.3),
		
		new simpleEnemy(438, 438, 395, 308, 0, 1.3),
		new simpleEnemy(438, 438, 420, 333, 0, 1.3),
		new simpleEnemy(438, 438, 445, 358, 0, 1.3),
		new simpleEnemy(438, 438, 470, 383, 0, 1.3),
		new simpleEnemy(438, 438, 495, 408, 0, 1.3),
		//
		
		new simpleEnemy(188, 188, 108, 194, 0, 1.3),
		new simpleEnemy(188, 188, 133, 219, 0, 1.3),
		new simpleEnemy(188, 188, 158, 244, 0, 1.3),
		new simpleEnemy(188, 188, 183, 269, 0, 1.3),
		new simpleEnemy(188, 188, 208, 294, 0, 1.3),
		
		new simpleEnemy(188, 188, 308, 394, 0, 1.3),
		new simpleEnemy(188, 188, 333, 419, 0, 1.3),
		new simpleEnemy(188, 188, 358, 444, 0, 1.3),
		new simpleEnemy(188, 188, 383, 469, 0, 1.3),
		new simpleEnemy(188, 188, 408, 494, 0, 1.3),
		
		//
		
		new simpleEnemy(488, 488, 108, 194, 0, 1.3),
		new simpleEnemy(488, 488, 133, 219, 0, 1.3),
		new simpleEnemy(488, 488, 158, 244, 0, 1.3),
		new simpleEnemy(488, 488, 183, 269, 0, 1.3),
		new simpleEnemy(488, 488, 208, 294, 0, 1.3),
		
		new simpleEnemy(488, 488, 308, 394, 0, 1.3),
		new simpleEnemy(488, 488, 333, 419, 0, 1.3),
		new simpleEnemy(488, 488, 358, 444, 0, 1.3),
		new simpleEnemy(488, 488, 383, 469, 0, 1.3),
		new simpleEnemy(488, 488, 408, 494, 0, 1.3),
		
		//
		new simpleEnemy(213, 213, 105, 194, 0, 1.3),
		new simpleEnemy(263, 263, 105, 194, 0, 1.3),
		
		new simpleEnemy(213, 213, 205, 294, 0, 1.3),
		new simpleEnemy(263, 263, 205, 294, 0, 1.3),
		
		new simpleEnemy(213, 213, 305, 394, 0, 1.3),
		new simpleEnemy(263, 263, 305, 394, 0, 1.3),
		
		new simpleEnemy(213, 213, 405, 494, 0, 1.3),
		new simpleEnemy(263, 263, 405, 494, 0, 1.3),
		
	],
	
	// level 20
	[
		//1
		
	  new simpleEnemy(112, 112, 108, 245, 0, 2),
	  new simpleEnemy(212, 212, 108, 245, 0, 2),
	  new simpleEnemy(312, 312, 108, 245, 0, 2),
	  
	   new simpleEnemy(137, 137, 183, 320, 0, 2),
	   new simpleEnemy(237, 237, 183, 320, 0, 2),
	   new simpleEnemy(337, 337, 183, 320, 0, 2),
	   
	  new simpleEnemy(112, 112, 283, 420, 0, 2),
	  
	  new simpleEnemy(312, 312, 283, 420, 0, 2),
	  
	  
	  new simpleEnemy(137, 137, 357, 494, 0, 2),
	   new simpleEnemy(237, 237, 357, 494, 0, 2),
	   new simpleEnemy(337, 337, 357, 494, 0, 2),
	   
	   new simpleEnemy(162, 162, 244, 108, 0, 2),
	   new simpleEnemy(262, 262, 244, 108, 0, 2),
	   
	   new simpleEnemy(287, 287, 313, 183, 0, 2),
	   new simpleEnemy(187, 187, 313, 183, 0, 2),
	   
	   new simpleEnemy(162, 162, 413, 283, 0, 2),
	   new simpleEnemy(262, 262, 413, 283, 0, 2),
	   
	   new simpleEnemy(189, 189, 495, 358, 0, 2),
	   new simpleEnemy(289, 289, 495, 358, 0, 2),
	   //
	   new simpleEnemy(487, 487, 195, 107, 0, 2.2),
	   new simpleEnemy(637, 637, 195, 107, 0, 2.2),
	   new simpleEnemy(787, 787, 195, 107, 0, 2.2),
	   
	   
	   new simpleEnemy(562, 562,  107,195, 0, 2.2),
	   new simpleEnemy(712, 712,  107,195, 0, 2.2),
	   
	   //
	   
	   new linearEnemy([
			[512, 512 , 165, 195, 0,2.2],
			[512, 512 , 195, 107, 0,2.2],
			[512, 512 , 107, 165, 0,2.2]
		]),
		
	    new linearEnemy([
			[537, 537 , 139, 195, 0,2.2],
			[537, 537 , 195, 107, 0,2.2],
			[537, 537 , 107, 139, 0,2.2]
		]),	
		
		new linearEnemy([
			[587, 587 , 139, 107, 0,2.2],
			[587, 587 , 107, 195, 0,2.2],
			[587, 587 , 195, 139, 0,2.2]
		]),	
		
		
		new linearEnemy([
			[613, 613 , 165, 107, 0,2.2],
			[613, 613 , 107, 195, 0,2.2],
			[613, 613 , 195, 165, 0,2.2]
		]),	
		
		new linearEnemy([
			[663, 663 , 165, 195, 0,2.2],
			[663, 663 , 195, 107, 0,2.2],
			[663, 663 , 107, 165, 0,2.2]
		]),	
		new linearEnemy([
			[688, 688 , 139, 195, 0,2.2],
			[688, 688 , 195, 107, 0,2.2],
			[688, 688 , 107, 139, 0,2.2]
		]),
		
		new linearEnemy([
			[738, 738 , 139, 107, 0,2.2],
			[738, 738 , 107, 195, 0,2.2],
			[738, 738 , 195, 139, 0,2.2]
		]),
		
		new linearEnemy([
			[763, 763 , 165, 107, 0,2.2],
			[763, 763 , 107, 195, 0,2.2],
			[763, 763 , 195, 165, 0,2.2]
		]),
		
		 new simpleCircularEnemy(600, 375, 0, 0, 0),
		 
		 new simpleCircularEnemy(600, 375, 13,0,2.25),
		 new simpleCircularEnemy(600, 375, 25,0,2.25),
		 new simpleCircularEnemy(600, 375, 38,0,2.25),
		 new simpleCircularEnemy(600, 375, 50,0,2.25),
		 new simpleCircularEnemy(600, 375, 63,0,2.25),
		 new simpleCircularEnemy(600, 375, 75,0,2.25),
		 new simpleCircularEnemy(600, 375, 88,0,2.25),
		 new simpleCircularEnemy(600, 375, 100,0,2.25),
		 new simpleCircularEnemy(600, 375, 113,0,2.25),
		 new simpleCircularEnemy(600, 375, 125,0,2.25),
		 
		 new simpleCircularEnemy(600, 375, 13,180,2.25),
		 new simpleCircularEnemy(600, 375, 25,180,2.25),
		 new simpleCircularEnemy(600, 375, 38,180,2.25),
		 new simpleCircularEnemy(600, 375, 50,180,2.25),
		 new simpleCircularEnemy(600, 375, 63,180,2.25),
		 new simpleCircularEnemy(600, 375, 75,180,2.25),
		 new simpleCircularEnemy(600, 375, 88,180,2.25),
		 new simpleCircularEnemy(600, 375, 100,180,2.25),
		 new simpleCircularEnemy(600, 375, 113,180,2.25),
		 new simpleCircularEnemy(600, 375, 125,180,2.25),
		 
		 
		 new simpleCircularEnemy(600, 375, 13,-90,2.25),
		 new simpleCircularEnemy(600, 375, 25,-90,2.25),
		 new simpleCircularEnemy(600, 375, 38,-90,2.25),
		 new simpleCircularEnemy(600, 375, 50,-90,2.25),
		 new simpleCircularEnemy(600, 375, 63,-90,2.25),
		 new simpleCircularEnemy(600, 375, 75,-90,2.25),
		 new simpleCircularEnemy(600, 375, 88,-90,2.25),
		 new simpleCircularEnemy(600, 375, 100,-90,2.25),
		 new simpleCircularEnemy(600, 375, 113,-90,2.25),
		 new simpleCircularEnemy(600, 375, 125,-90,2.25),
		 
		 new simpleCircularEnemy(600, 375, 13,90,2.25),
		 new simpleCircularEnemy(600, 375, 25,90,2.25),
		 new simpleCircularEnemy(600, 375, 38,90,2.25),
		 new simpleCircularEnemy(600, 375, 50,90,2.25),
		 new simpleCircularEnemy(600, 375, 63,90,2.25),
		 new simpleCircularEnemy(600, 375, 75,90,2.25),
		 new simpleCircularEnemy(600, 375, 88,90,2.25),
		 new simpleCircularEnemy(600, 375, 100,90,2.25),
		 new simpleCircularEnemy(600, 375, 113,90,2.25),
		 new simpleCircularEnemy(600, 375, 125,90,2.25),
	],
	
	
	// level 21
	[
		 new simpleEnemy(518, 82 , 213, 213, 3.25, 0),
		 new simpleEnemy(518, 82 , 238, 238, 3.25, 0),
		 
		 new simpleEnemy(518, 82 , 338, 338, 3.25, 0),
		 new simpleEnemy(518, 82 , 363, 363, 3.25, 0),
		 
		 new simpleEnemy(518, 82 , 463, 463, 3.25, 0),
		 new simpleEnemy(518, 82 , 488, 488, 3.25, 0),
		 
		 new simpleEnemy(82,518 , 263, 263, 3.25, 0),
		 new simpleEnemy(82,518 , 288, 288, 3.25, 0),
		 
		 new simpleEnemy(82,518 , 388, 388, 3.25, 0),
		 new simpleEnemy(82,518 , 413, 413, 3.25, 0),
		 
		 //
		 
		 new simpleEnemy(15,15 , 195, 105, 0, 2),
		 
		 new linearEnemy([
			[37, 37 , 165, 195, 0,2],
			[37, 37 , 195, 105, 0,2],
			[37, 37 , 105, 165, 0,2]
		]),
		 new linearEnemy([
			[62, 62 , 135, 195, 0,2],
			[62, 62 , 195, 105, 0,2],
			[62, 62 , 105, 135, 0,2]
		]),
		
		 new simpleEnemy(87,87 , 105, 195, 0, 2),
		 
		 
		 new linearEnemy([
			[112, 112 , 135, 105, 0,2],
			[112, 112 , 105, 195, 0,2],
			[112, 112 , 195, 135, 0,2]
		]),
		
		new linearEnemy([
			[137, 137 , 165, 105, 0,2],
			[137, 137 , 105, 195, 0,2],
			[137, 137 , 195, 165, 0,2]
		]), 
		
		///2
		
		
		 new simpleEnemy(165,165 , 195, 105, 0, 2),
		 
		 new linearEnemy([
			[187, 187 , 165, 195, 0,2],
			[187, 187 , 195, 105, 0,2],
			[187, 187 , 105, 165, 0,2]
		]),
		 new linearEnemy([
			[212, 212 , 135, 195, 0,2],
			[212, 212 , 195, 105, 0,2],
			[212, 212 , 105, 135, 0,2]
		]),
		
		 new simpleEnemy(237,237 , 105, 195, 0, 2),
		 
		 
		 new linearEnemy([
			[262, 262 , 135, 105, 0,2],
			[262, 262 , 105, 195, 0,2],
			[262, 262 , 195, 135, 0,2]
		]),
		
		new linearEnemy([
			[287, 287 , 165, 105, 0,2],
			[287, 287 , 105, 195, 0,2],
			[287, 287 , 195, 165, 0,2]
		]), 
		
	
	//3
	 
	  new simpleEnemy(312,312 , 195, 108, 0, 2),
		 
		 new linearEnemy([
			[337, 337 , 165, 195, 0,2],
			[337, 337 , 195, 105, 0,2],
			[337, 337 , 105, 165, 0,2]
		]),
		 new linearEnemy([
			[362, 362 , 135, 195, 0,2],
			[362, 362 , 195, 105, 0,2],
			[362, 362 , 105, 135, 0,2]
		]),
		
		 new simpleEnemy(387,387 , 105, 195, 0, 2),
		 
		 
		 new linearEnemy([
			[412, 412 , 135, 105, 0,2],
			[412, 412 , 105, 195, 0,2],
			[412, 412 , 195, 135, 0,2]
		]),
		
		new linearEnemy([
			[437, 437 , 165, 105, 0,2],
			[437, 437 , 105, 195, 0,2],
			[437, 437 , 195, 165, 0,2]
		]), 
	 //
	 ///2
		
		
		 new simpleEnemy(462,462 , 195, 105, 0, 2),
		 
		 new linearEnemy([
			[487, 487 , 165, 195, 0,2],
			[487, 487 , 195, 105, 0,2],
			[487, 487 , 105, 165, 0,2]
		]),
		 new linearEnemy([
			[512, 512 , 135, 195, 0,2],
			[512, 512 , 195, 105, 0,2],
			[512, 512 , 105, 135, 0,2]
		]),
		
		 new simpleEnemy(537,537 , 105, 195, 0, 2),
		 
		 
		 new linearEnemy([
			[562, 562 , 135, 105, 0,2],
			[562, 562 , 105, 195, 0,2],
			[562, 562 , 195, 135, 0,2]
		]),
		
		new linearEnemy([
			[587, 587 , 165, 105, 0,2],
			[587, 587 , 105, 195, 0,2],
			[587, 587 , 195, 165, 0,2]
		]), 
		
	//
 new simpleEnemy(720,630 , 112, 112, 2, 0),
		 
		 new linearEnemy([
			[690, 720 , 137, 137, 2, 0],
			[720, 630 , 137, 137, 2, 0],
			[630, 690 , 137, 137, 2, 0]
		]),
		 new linearEnemy([
			[660, 720 , 162, 162, 2, 0],
			[720, 630 , 162, 162, 2, 0],
			[630, 660 , 162, 162, 2, 0]
		]),
		
		 new simpleEnemy(630,720 , 187, 187, 2, 0),
		 
		 
		 new linearEnemy([
			[660, 630 , 212, 212, 2, 0],
			[630, 720 , 212, 212, 2, 0],
			[720, 660 , 212, 212, 2, 0]
		]),
		
		new linearEnemy([
			[690, 630 , 237, 237, 2, 0],
			[630, 720 , 237, 237, 2, 0],
			[720, 690 , 237, 237, 2, 0]
		]), 

    //2
    
	new simpleEnemy(720,630 , 262, 262, 2, 0),
		 
		 new linearEnemy([
			[690, 720 , 287, 287, 2, 0],
			[720, 630 , 287, 287, 2, 0],
			[630, 690 , 287, 287, 2, 0]
		]),
		 new linearEnemy([
			[660, 720 , 312, 312, 2, 0],
			[720, 630 , 312, 312, 2, 0],
			[630, 660 , 312, 312, 2, 0]
		]),
		
		 new simpleEnemy(630,720 , 337, 337, 2, 0),
		 
		 
		 new linearEnemy([
			[660, 630 , 362, 362, 2, 0],
			[630, 720 , 362, 362, 2, 0],
			[720, 660 , 362, 362, 2, 0]
		]),
		
		new linearEnemy([
			[690, 630 , 387, 387, 2, 0],
			[630, 720 , 387, 387, 2, 0],
			[720, 690 , 387, 387, 2, 0]
		]), 
      	//
		new simpleEnemy(720,630 , 412, 412, 2, 0),
		 
		 new linearEnemy([
			[690, 720 , 437, 437, 2, 0],
			[720, 630 , 437, 437, 2, 0],
			[630, 690 , 437, 437, 2, 0]
		]),
		 new linearEnemy([
			[660, 720 , 462, 462, 2, 0],
			[720, 630 , 462, 462, 2, 0],
			[630, 660 , 462, 462, 2, 0]
		]),
		
		 new simpleEnemy(630,720 , 487, 487, 2, 0),
		 
		 
		
		
	],
	// level 22
	[
		new simpleEnemy(312,312 , 106, 220, 0, 1.7),
		new simpleEnemy(412,412 , 220, 106, 0, 1.7),
		
		new staticEnemy(188, 488),
		new staticEnemy(238, 413),
		
		new staticEnemy(312, 462),
		new staticEnemy(362, 438),
		
		new staticEnemy(462, 312),
		new staticEnemy(562, 238),
		
		new staticEnemy(638, 312),
		new staticEnemy(488, 412),
		
		new staticEnemy(612, 388),
		new staticEnemy(538, 462),
		
		
		
		
		
	
	],
	
	// level 23
	[
		new simpleEnemy(82, 720, 188, 188, 3.2, 0),
		new simpleEnemy( 720,82, 263, 263, 3.2, 0),
		
		new simpleEnemy(82, 720, 338, 338, 3.2, 0),
		new simpleEnemy( 720,82, 413, 413, 3.2, 0),
		
		new staticEnemy(462, 162),
		new staticEnemy(487, 162),
		
		new staticEnemy(587, 162),
		new staticEnemy(612, 162),
		
		new staticEnemy(237, 187),
		new staticEnemy(312, 187),
		
		new staticEnemy(338, 187),
		new staticEnemy(363, 187),
		
		new staticEnemy(388, 187),
		new staticEnemy(413, 187),
		//
		
		new staticEnemy(237, 212),
		new staticEnemy(462, 212),
		
		new staticEnemy(537, 212),
		new staticEnemy(562, 212),
		
		new staticEnemy(588, 212),
		new staticEnemy(613, 212),
		
		new staticEnemy(688, 212),
		//
		new staticEnemy(612, 237),
		
		new staticEnemy(712, 237),
		//
		new staticEnemy(263, 262),
		new staticEnemy(288, 262),
		new staticEnemy(313, 262),
		new staticEnemy(338, 262),
		
		new staticEnemy(413, 262),
		new staticEnemy(438, 262),
		new staticEnemy(463, 262),
		new staticEnemy(488, 262),
		
		new staticEnemy(563, 262),
		new staticEnemy(663, 262),
		//
		new staticEnemy(612, 287),
		
		new staticEnemy(712, 287),
		//
		new staticEnemy(238, 312),
		new staticEnemy(263, 312),
		new staticEnemy(288, 312),
		new staticEnemy(313, 312),
		new staticEnemy(338, 312),
		new staticEnemy(363, 312),
		
		new staticEnemy(438, 312),
		new staticEnemy(463, 312),
		new staticEnemy(488, 312),
		
		new staticEnemy(612, 312),
		
		new staticEnemy(712, 312),
		
		//
		new staticEnemy(362, 337),
		
		new staticEnemy(536, 337),
		
		//
		new staticEnemy(362, 362),
		new staticEnemy(462, 362),
		
		new staticEnemy(537, 362),
		new staticEnemy(562, 362),
		new staticEnemy(587, 362),
		new staticEnemy(612, 362),
		
		new staticEnemy(712, 362),
		//
		new staticEnemy(238, 387),
		new staticEnemy(263, 387),
		new staticEnemy(288, 387),
		
		new staticEnemy(363, 387),
		new staticEnemy(388, 387),
		
		new staticEnemy(463, 387),
		new staticEnemy(613, 387),
		
		new staticEnemy(613, 387),
		new staticEnemy(713, 387),
		//
		new staticEnemy(463, 412),
		new staticEnemy(488, 412),
		new staticEnemy(512, 412),
		
		new staticEnemy(588, 412),
		new staticEnemy(613, 412),
		
		//
		new staticEnemy(312, 437),
		new staticEnemy(463, 437),
		new staticEnemy(488, 437),
		new staticEnemy(512, 437),
		
		new staticEnemy(588, 437),
		new staticEnemy(613, 437),
		
	],
	
	// level 24
	[
		 new linearEnemy([
			[87, 112 , 112, 112, 0.75, 0],
			[112, 112 , 112, 137, 0, 0.75],
			[112, 87 , 137, 137, 0.75, 0],
			[87, 87 , 137, 112, 0, 0.75],
		]),
		
		 new linearEnemy([
			[162, 137 , 137, 137, 0.75, 0],
			[137, 137 , 137, 112, 0, 0.75],
			[137, 162 , 112, 112, 0.75, 0],
			[162, 162 , 112, 137, 0, 0.75],
		]),
		 new linearEnemy([
			[187, 212 , 112, 112, 0.75, 0],
			[212, 212 , 112, 137, 0, 0.75],
			[212, 187 , 137, 137, 0.75, 0],
			[187, 187 , 137, 112, 0, 0.75],
		]),
		
		 new linearEnemy([
			[88, 113 , 212, 212, 0.75, 0],
			[113, 113 , 212, 237, 0, 0.75],
			[113, 88 , 237, 237, 0.75, 0],
			[88, 88 , 237, 212, 0, 0.75],
		]),
		
		new linearEnemy([
			[112, 87 , 187, 187, 0.75, 0],
			[87, 87 , 187, 162, 0, 0.75],
			[87, 112 , 162, 162, 0.75, 0],
			[112, 112 , 162, 187, 0, 0.75],
		]),
		
		new linearEnemy([
			[112, 87 , 287, 287, 0.75, 0],
			[87, 87 , 287, 262, 0, 0.75],
			[87, 112 , 262, 262, 0.75, 0],
			[112, 112 , 262, 287, 0, 0.75],
		]),
		new linearEnemy([
			[137, 162 , 262, 262, 0.75, 0],
			[162, 162 , 262, 287, 0, 0.75],
			[162, 137 , 287, 287, 0.75, 0],
			[137, 137 , 287, 262, 0, 0.75],
		]),
		
		new linearEnemy([
			[262, 237 , 137, 137, 0.75, 0],
			[237, 237 , 137, 112, 0, 0.75],
			[237, 262 , 112, 112, 0.75, 0],
			[262, 262 , 112, 137, 0, 0.75],
		]),
		
		new linearEnemy([
			[212, 187 , 287, 287, 0.75, 0],
			[187, 187 , 287, 262, 0, 0.75],
			[187, 212 , 262, 262, 0.75, 0],
			[212, 212 , 262, 287, 0, 0.75],
		]),
        
        new linearEnemy([
			[238, 263 , 263, 263, 0.75, 0],
			[263, 263 , 263, 288, 0, 0.75],
			[263, 238 , 288, 288, 0.75, 0],
			[238, 238 , 288, 263, 0, 0.75],
		]),	

        new linearEnemy([
			[287, 312 , 113, 113, 0.75, 0],
			[312, 312 , 113, 138, 0, 0.75],
			[312, 287 , 138, 138, 0.75, 0],
			[287, 287 , 138, 113, 0, 0.75],
		]),	
         new linearEnemy([
			[337, 362 , 113, 113, 0.75, 0],
			[362, 362 , 113, 138, 0, 0.75],
			[362, 337 , 138, 138, 0.75, 0],
			[337, 337 , 138, 113, 0, 0.75],
		]),	

        new linearEnemy([
			[387, 412 , 113, 113, 0.75, 0],
			[412, 412 , 113, 138, 0, 0.75],
			[412, 387 , 138, 138, 0.75, 0],
			[387, 387 , 138, 113, 0, 0.75],
		]),	

         new linearEnemy([
			[437, 462 , 113, 113, 0.75, 0],
			[462, 462 , 113, 138, 0, 0.75],
			[462, 437 , 138, 138, 0.75, 0],
			[437, 437 , 138, 113, 0, 0.75],
		]),	

        new linearEnemy([
			[487, 512 , 113, 113, 0.75, 0],
			[512, 512 , 113, 138, 0, 0.75],
			[512, 487 , 138, 138, 0.75, 0],
			[487, 487 , 138, 113, 0, 0.75],
		]),			
		//
		new linearEnemy([
			[287, 312 , 163, 163, 0.75, 0],
			[312, 312 , 183, 188, 0, 0.75],
			[312, 287 , 188, 188, 0.75, 0],
			[287, 287 , 188, 163, 0, 0.75],
		]),	
         new linearEnemy([
			[337, 362 , 163, 163, 0.75, 0],
			[362, 362 , 163, 188, 0, 0.75],
			[362, 337 , 188, 188, 0.75, 0],
			[337, 337 , 188, 163, 0, 0.75],
		]),	
		
		//
		  new linearEnemy([
			[287, 337 , 212, 212, 1.5, 0],
			[337, 337 , 212, 262, 0, 1.5],
			[337, 287 , 262, 262, 1.5, 0],
			[287, 287 , 262, 212, 0, 1.5],
		]),	
		 new linearEnemy([
			[312, 362 , 212, 212, 1.5, 0],
			[362, 362 , 212, 262, 0, 1.5],
			[362, 312 , 262, 262, 1.5, 0],
			[312, 312 , 262, 212, 0, 1.5],
		]),	
		
		 new linearEnemy([
			[287, 337 , 237, 237, 1.5, 0],
			[337, 337 , 237, 287, 0, 1.5],
			[337, 287 , 287, 287, 1.5, 0],
			[287, 287 , 287, 237, 0, 1.5],
		]),	
		 new linearEnemy([
			[312, 362 , 237, 237, 1.5, 0],
			[362, 362 , 237, 287, 0, 1.5],
			[362, 312 , 287, 287, 1.5, 0],
			[312, 312 , 287, 237, 0, 1.5],
		]),	
		
		 new linearEnemy([
			[637, 712 , 112, 112, 1.5, 0],
			[712, 712 , 112, 187, 0, 1.5],
			[712, 637 , 187, 187, 1.5, 0],
			[637, 637 , 187, 112, 0, 1.5],
		]),	
		 new linearEnemy([
			[387, 412 , 212, 212, 0.75, 0],
			[412, 412 , 212, 237, 0, 0.75],
			[412, 387 , 237, 237, 0.75, 0],
			[387, 387 , 237, 212, 0, 0.75],
		]),	
		
		 new linearEnemy([
			[537, 562 , 212, 212, 0.75, 0],
			[562, 562 , 212, 237, 0, 0.75],
			[562, 537 , 237, 237, 0.75, 0],
			[537, 537 , 237, 212, 0, 0.75],
		]),	
		
		 new linearEnemy([
			[537, 562 , 363, 363, 0.75, 0],
			[562, 562 , 363, 388, 0, 0.75],
			[562, 537 , 388, 388, 0.75, 0],
			[537, 537 , 388, 363, 0, 0.75],
		]),	
		new linearEnemy([
			[437, 487 , 213, 213, 0.75, 0],
			[487, 487 , 213, 238, 0, 0.75],
			[487, 437 , 238, 238, 0.75, 0],
			[437, 437 , 238, 213, 0, 0.75],
		]),	
		
		new linearEnemy([
			[337, 362 , 312, 312, 0.75, 0],
			[362, 362 , 312, 338, 0, 0.75],
			[362, 337 , 338, 338, 0.75, 0],
			[337, 337 , 338, 312, 0, 0.75],
		]),	
		
		new linearEnemy([
			[387, 412 , 462, 462, 0.75, 0],
			[412, 412 , 462, 487, 0, 0.75],
			[412, 387 , 487, 487, 0.75, 0],
			[387, 387 , 487, 462, 0, 0.75],
		]),	
		new linearEnemy([
			[437, 462 , 462, 462, 0.75, 0],
			[462, 462 , 462, 487, 0, 0.75],
			[462, 437 , 487, 487, 0.75, 0],
			[437, 437 , 487, 462, 0, 0.75],
		]),
		new linearEnemy([
			[487, 512 , 462, 462, 0.75, 0],
			[512, 512 , 462, 487, 0, 0.75],
			[512, 487 , 487, 487, 0.75, 0],
			[487, 487 , 487, 462, 0, 0.75],
		]),	
		new linearEnemy([
			[537, 562 , 462, 462, 0.75, 0],
			[562, 562 , 462, 487, 0, 0.75],
			[562, 537 , 487, 487, 0.75, 0],
			[537, 537 , 487, 462, 0, 0.75],
		]),
		new linearEnemy([
			[587, 612 , 462, 462, 0.75, 0],
			[612, 612 , 462, 487, 0, 0.75],
			[612, 587 , 487, 487, 0.75, 0],
			[587, 587 , 487, 462, 0, 0.75],
		]),	
		
		
		new linearEnemy([
			[437, 462 , 412, 412, 0.75, 0],
			[462, 462 , 412, 437, 0, 0.75],
			[462, 437 , 437, 437, 0.75, 0],
			[437, 437 , 437, 412, 0, 0.75],
		]),
		new linearEnemy([
			[487, 512 , 462, 462, 0.75, 0],
			[512, 512 , 462, 487, 0, 0.75],
			[512, 487 , 487, 487, 0.75, 0],
			[487, 487 , 487, 462, 0, 0.75],
		]),	
		
		new linearEnemy([
			[437, 487 , 312, 312, 0.75, 0],
			[487, 487 , 312, 362, 0, 0.75],
			[487, 437 , 362, 362, 0.75, 0],
			[437, 437 , 362, 312, 0, 0.75],
		]),	
		
		new linearEnemy([
			[462, 512 , 312, 312, 0.75, 0],
			[512, 512 , 312, 362, 0, 0.75],
			[512, 462 , 362, 362, 0.75, 0],
			[462, 462 , 362, 312, 0, 0.75],
		]),	
		
		new linearEnemy([
			[437, 487 , 337, 337, 0.75, 0],
			[487, 487 , 337, 387, 0, 0.75],
			[487, 437 , 387, 387, 0.75, 0],
			[437, 437 , 387, 337, 0, 0.75],
		]),	
		
		new linearEnemy([
			[462, 512 , 337, 337, 0.75, 0],
			[512, 512 , 337, 387, 0, 0.75],
			[512, 462 , 387, 387, 0.75, 0],
			[462, 462 , 387, 337, 0, 0.75],
		]),	
		
		new linearEnemy([
			[587, 637 , 212, 212, 2, 0],
			[637, 637 , 212, 362, 0, 2],
			[637, 587 , 362, 362, 2, 0],
			[587, 587 , 362, 212, 0, 2],
		]),	
		
		new linearEnemy([
			[612, 662 , 212, 212, 2, 0],
			[662, 662 , 212, 362, 0, 2],
			[662, 612 , 362, 362, 2, 0],
			[612, 612 , 362, 212, 0, 2],
		]),	
		
		new linearEnemy([
			[587, 637 , 237, 237, 2, 0],
			[637, 637 , 237, 387, 0, 2],
			[637, 587 , 387, 387, 2, 0],
			[587, 587 , 387, 237, 0, 2],
		]),	
		
		new linearEnemy([
			[612, 662 , 237, 237, 2, 0],
			[662, 662 , 237, 387, 0, 2],
			[662, 612 , 387, 387, 2, 0],
			[612, 612 , 387, 237, 0, 2],
		]),	
	],
	
	// level 25
	[
		
		 new linearEnemy([
			[338, 338 , 112, 212, 0, 3],
			[338, 438 , 212, 212, 3, 0],
			[438, 438 , 212, 112, 0, 3],
			[438, 338 , 112, 112, 3, 0],
		]),
		
		 new linearEnemy([
			[462, 462 , 238, 138, 0, 3],
			[462, 362 , 138, 138, 3, 0],
			[362, 362 , 138, 238, 0, 3],
			[362, 462 , 238, 238, 3, 0],
		]),
		
		 new linearEnemy([
			[362, 212  , 437, 437, 1.5, 0],
			[212, 212 , 437, 487, 0, 1.5],
			[212, 512 , 487, 487, 1.5, 0],
			[512, 512 , 487, 437, 0, 1.5],
			[512, 362 , 437, 437, 1.5, 0],
			
		]),
		
		 new linearEnemy([
			[362, 512  , 462, 462, 1.5, 0],
			[512, 512 , 462, 412, 0, 1.5],
			[512, 212 , 412, 412, 1.5, 0],
			[212, 212 , 412, 462, 0, 1.5],
			[212, 362 , 462, 462, 1.5, 0],
			
		]),
		
		 new linearEnemy([
			[188, 188  , 412, 462, 0, 1.5],
			[188, 488 , 462, 462,  1.5,0],
			[488, 488 , 462, 412,  0,1.5],
			[488, 188 , 412, 412,  1.5,0],
		]),
		
		 new linearEnemy([
			[488, 488  , 488, 438, 0, 1.5],
			[488, 188 , 438, 438,  1.5,0],
			[188, 188 , 438, 488,  0,1.5],
			[188, 488 , 488, 488,  1.5,0],
		]),
	],
	
	// level 26
	[
	  
     new circularEnemyLinear([
			
			
			[137, 337, 462, 462,  2.3,0],
			[337, 337, 462, 312, 0,2.3],
			[337, 137 , 312, 312, 2.3,0],
			[137, 137 , 312, 162, 0, 2.3],
			[137, 337, 162, 162, 2.3, 0],
			[337, 137, 162, 162, 2.3, 0],
			[137, 137 , 162,312, 0, 2.3],
			[137, 337 , 312, 312, 2.3,0],
			[337, 337, 312, 462, 0, 2.3,],
			[337, 137, 462, 462, 2.3, 0],
			
		    ],50,0,1.35,0),	
			
			
	  new circularEnemyLinear([
			
			
			[137, 337, 462, 462,  2.3,0],
			[337, 337, 462, 312, 0,2.3],
			[337, 137 , 312, 312, 2.3,0],
			[137, 137 , 312, 162, 0, 2.3],
			[137, 337, 162, 162, 2.3, 0],
			[337, 137, 162, 162, 2.3, 0],
			[137, 137 , 162,312, 0, 2.3],
			[137, 337 , 312, 312, 2.3,0],
			[337, 337, 312, 462, 0, 2.3,],
			[337, 137, 462, 462, 2.3, 0],
			
		    ],50,180,1.35,0),				
		
    
	  new circularEnemyLinear([
			
			
			
			[137, 137 , 238, 162, 0, 2.3],
			[137, 388, 162, 162, 2.3, 0],
			[388, 137, 162, 162, 2.3, 0],
			[137, 137 , 162,312, 0, 2.3],
			[137, 337 , 312, 312, 2.3,0],
			[388, 388, 312, 462, 0, 2.3,],
			[388, 137, 462, 462, 2.3, 0],
			[137, 388, 462, 462, 2.3, 0],
			[388, 388, 462, 312, 0,2.3],
			[388, 137 , 312, 312, 2.3,0],
			[137, 137 , 312, 238, 0, 2.3],
			
		    ],50,0,-1.35,0),	
			
		new circularEnemyLinear([
			
			
			
			[137, 137 , 238, 162, 0, 2.3],
			[137, 388, 162, 162, 2.3, 0],
			[388, 137, 162, 162, 2.3, 0],
			[137, 137 , 162,312, 0, 2.3],
			[137, 337 , 312, 312, 2.3,0],
			[388, 388, 312, 462, 0, 2.3,],
			[388, 137, 462, 462, 2.3, 0],
			[137, 388, 462, 462, 2.3, 0],
			[388, 388, 462, 312, 0,2.3],
			[388, 137 , 312, 312, 2.3,0],
			[137, 137 , 312, 238, 0, 2.3],
			
		    ],50,180,-1.35,0),
            //  
         new circularEnemyLinear([

			[137, 388, 462, 462, 2.3, 0],
			[388, 388, 462, 312, 0,2.3],
			[388, 137 , 312, 312, 2.3,0],
			[137, 137 , 312, 162, 0, 2.3],
			[137, 388, 162, 162, 2.3, 0],
			[388, 137, 162, 162, 2.3, 0],
			[137, 137 , 162,312, 0, 2.3],
			[137, 388 , 312, 312, 2.3,0],
			[388, 388, 312, 462, 0, 2.3,],
			[388, 137, 462, 462, 2.3, 0],
		    ],50,0,1.35,0),
			
         new circularEnemyLinear([

			[137, 388, 462, 462, 2.3, 0],
			[388, 388, 462, 312, 0,2.3],
			[388, 137 , 312, 312, 2.3,0],
			[137, 137 , 312, 162, 0, 2.3],
			[137, 388, 162, 162, 2.3, 0],
			[388, 137, 162, 162, 2.3, 0],
			[137, 137 , 162,312, 0, 2.3],
			[137, 388 , 312, 312, 2.3,0],
			[388, 388, 312, 462, 0, 2.3,],
			[388, 137, 462, 462, 2.3, 0],
		    ],50,180,1.35,0),

        //
        new circularEnemyLinear([

			[388, 388, 350, 312, 0, 2.3],
			[388, 137, 312, 312, 2.3,0],
			[137, 137, 312, 162, 0,2.3],
			[137, 388 , 162, 162, 2.3,0],
			[388, 137, 162, 162, 2.3, 0],
			[137, 137, 162, 312, 0, 2.3],
			[137, 388 , 312,312, 2.3, 0],
			[388, 388 , 312, 462, 0,2.3],
			[388, 137, 462, 462, 2.3, 0],
			[137, 388, 462, 462, 2.3, 0],
			
			[388, 388, 462, 350, 0, 2.3],
			
		    ],50,180,-1.35,0),

        new circularEnemyLinear([

			[388, 388, 350, 312, 0, 2.3],
			[388, 137, 312, 312, 2.3,0],
			[137, 137, 312, 162, 0,2.3],
			[137, 388 , 162, 162, 2.3,0],
			[388, 137, 162, 162, 2.3, 0],
			[137, 137, 162, 312, 0, 2.3],
			[137, 388 , 312,312, 2.3, 0],
			[388, 388 , 312, 462, 0,2.3],
			[388, 137, 462, 462, 2.3, 0],
			[137, 388, 462, 462, 2.3, 0],
			
			[388, 388, 462, 350, 0, 2.3],
			
		    ],50,0,-1.35,0),			
	 	
	],
	
	// level 27
	[
		
		new simpleEnemy(87, 87, 257, 495, 0, 2.2),
		new simpleEnemy(137, 137, 495, 257, 0, 2.2),
		
		 new linearEnemy([
			[113, 113 , 375, 495,  0,2.2],
			[113, 113 , 495, 257,  0,2.2],
			[113, 113 , 257, 375,  0,2.2]
		]),
		 new linearEnemy([
			[163, 163 , 375, 257,  0,2.2],
			[163, 163 , 257, 495,  0,2.2],
			[163, 163 , 495, 375,  0,2.2]
		]),
		
		new simpleEnemy(82, 568, 287, 287, 2.2, 0),
		new simpleEnemy(568, 82, 337, 337, 2.2, 0),
		
		new linearEnemy([
			[325, 82 , 263, 263,  2.2,0],
			[82, 568 , 263, 263, 2.2,0],
			[568,325, 263, 263, 2.2,0]
		]),
		
		new linearEnemy([
			[325, 568 , 313, 313,  2.2,0],
			[568, 82 , 313, 313, 2.2,0],
			[82,325, 313, 313, 2.2,0]
		]),
		
		new simpleEnemy(82, 368, 488, 488, 2.2, 0),
		new simpleEnemy(368, 82, 438, 438, 2.2, 0),
		
		new linearEnemy([
			[222, 82 , 413, 413,  2.2,0],
			[82, 368 , 413, 413, 2.2,0],
			[368, 222, 413, 413, 2.2,0]
		]),
		new linearEnemy([
			[222, 368 , 463, 463,  2.2,0],
			[368, 82 , 463, 463, 2.2,0],
			[82, 222, 463, 463, 2.2,0]
		]),
		
		new simpleEnemy(432, 720, 462, 462, 2.2, 0),
		new simpleEnemy(720, 432, 412, 412, 2.2, 0),
		
		new linearEnemy([
			[568, 432 , 438, 438,  2.2,0],
			[432, 720 , 438, 438, 2.2,0],
			[720, 568, 438, 438, 2.2,0]
		]),
		
		new linearEnemy([
			[568, 720 , 488, 488,  2.2,0],
			[720, 432 , 488, 488, 2.2,0],
			[432, 568, 488, 488, 2.2,0]
		]),
		
		new simpleEnemy(487, 487, 108, 344, 0,2.2),
		new simpleEnemy(537, 537, 344, 108, 0,2.2),
		
		new linearEnemy([
			[512, 512 , 222, 344,  0,2.2],
			[512, 512 , 344, 108, 0,2.2],
			[512, 512, 108, 222, 0,2.2]
		]),
		new linearEnemy([
			[562, 562 , 222, 108,  0,2.2],
			[562, 562 , 108, 344, 0,2.2],
			[562, 562, 344, 222, 0,2.2]
		]),
		
		new simpleEnemy(720, 482, 112, 112, 2.2,0),
		new simpleEnemy(482, 720, 162, 162, 2.2,0),
		
		new linearEnemy([
			[600, 482 , 138, 138,  2.2,0],
			[482, 720 , 138, 138, 2.2,0],
			[720, 600, 138, 138, 2.2,0]
		]),
		new linearEnemy([
			[600, 720 , 188, 188,  2.2,0],
			[720, 482 , 188, 188, 2.2,0],
			[482, 600, 188, 188, 2.2,0]
		]),
		
		new simpleEnemy(687, 687, 108, 494, 0,2.2),
		new simpleEnemy(637, 637, 494, 108, 0,2.2),
		
		new linearEnemy([
			[662, 662 , 300, 108,  0,2.2],
			[662, 662 , 108, 494, 0,2.2],
			[662, 662, 494, 300, 0,2.2]
		]),
		
		new linearEnemy([
			[712, 712 , 300, 494,  0,2.2],
			[712, 712 , 494, 108, 0,2.2],
			[712, 712, 108, 300, 0,2.2]
		]),
		
	],
	
	// level 28
	[
	 
	 new simpleEnemy(187, 187, 108,468,0, 5.4),
	 new simpleEnemy(212, 212, 108,468,0, 5.4),
	 new simpleEnemy(237, 237, 108,468,0, 5.4),
	 
	 new simpleEnemy(262, 262, 108,468,0, 3.6),
	 new simpleEnemy(287, 287, 108,468,0, 3.6),
	 new simpleEnemy(312, 312, 108,468,0, 3.6),
	 
	 new simpleEnemy(337, 337, 108,468, 0,2.7),
	 new simpleEnemy(362, 362, 108,468,0, 2.7),
	 new simpleEnemy(387, 387, 108,468,0, 2.7),
	 
	 new simpleEnemy(412, 412, 108,468,0, 5.4),
	 new simpleEnemy(437, 437, 108,468,0, 5.4),
	 new simpleEnemy(462, 462, 108,468,0, 5.4),
	 
	 new simpleEnemy(487, 487, 108,468,0, 3.6),
	 new simpleEnemy(512, 512, 108,468,0, 3.6),
	 new simpleEnemy(537, 537, 108,468,0, 3.6),
	 
	 new simpleEnemy(562, 562, 108,468,0, 2.7),
	 new simpleEnemy(587, 587, 108,468,0, 2.7),
	 new simpleEnemy(612, 612, 108,468,0, 2.7),
	 
	 new simpleEnemy(637, 637, 108,468,0, 5.4),
	 new simpleEnemy(662, 662, 108,468,0, 5.4),
	 new simpleEnemy(687, 687, 108,468,0, 5.4),
	 
	 new simpleEnemy(712, 712, 108,468,0, 3.6),
	 new simpleEnemy(737, 737, 108,468,0, 3.6),
	 new simpleEnemy(762, 762, 108,468,0, 3.6),
	 
	],
	
	// level 29
	[
		 
		new simpleEnemy(57, 744, 238,238,1.5, 0), 
		new simpleEnemy(57, 744, 263,263,1.5, 0), 
		
		new simpleEnemy(57, 744, 438,438,1.5, 0), 
		new simpleEnemy(57, 744, 463,463,1.5, 0), 
		
		new linearEnemy([
			[307, 744 , 288, 288,  1.5, 0],
			[744, 57 , 288, 288, 1.5, 0],
			[57, 307 , 288, 288, 1.5, 0]
		]),
		new linearEnemy([
			[307, 744 , 313, 313,  1.5, 0],
			[744, 57 , 313, 313, 1.5, 0],
			[57, 307 , 313, 313, 1.5, 0]
		]),
		
		new linearEnemy([
			[307, 744 , 488, 488,  1.5, 0],
			[744, 57 , 488, 488, 1.5, 0],
			[57, 307 , 488, 488, 1.5, 0]
		]),
		new linearEnemy([
			[307, 744 , 513, 513,  1.5, 0],
			[744, 57 , 513, 513, 1.5, 0],
			[57, 307 , 513, 513, 1.5, 0]
		]),
		
		new linearEnemy([
			[577, 744 , 338, 338,  1.5, 0],
			[744, 57 , 338, 338, 1.5, 0],
			[57, 577 , 338, 338, 1.5, 0]
		]),
		new linearEnemy([
			[577, 744 , 363, 363,  1.5, 0],
			[744, 57 , 363, 363, 1.5, 0],
			[57, 577 , 363, 363, 1.5, 0]
		]),
		
		
		new linearEnemy([
			[680, 57 , 388, 388,  1.5, 0],
			[57, 744 , 388, 388, 1.5, 0],
			[744, 680 , 388, 388, 1.5, 0]
		]),
		
		new linearEnemy([
			[680, 57 , 413, 413,  1.5, 0],
			[57, 744 , 413, 413, 1.5, 0],
			[744, 680 , 413, 413, 1.5, 0]
		]),
	],
	
	// level 30
	[
		new simpleEnemy(87, 87, 82,492,0, 1.54),
		new simpleEnemy(562, 562, 82,492,0, 1.54),
		
		new linearEnemy([
			[113, 113 , 227, 492,  0,1.54],
			[113, 113 , 492, 87, 0,1.54],
			[113, 113 , 87, 227, 0,1.54]
		]),
		new linearEnemy([
			[138, 138 , 390, 492,  0,1.54],
			[138, 138 , 492, 87, 0,1.54],
			[138, 138 , 87, 392, 0,1.54]
		]),
		
		new linearEnemy([
			[163, 163 , 442, 87,  0,1.54],
			[163, 163 , 87, 492, 0,1.54],
			[163, 163 , 492, 442, 0,1.54]
		]),
		new linearEnemy([
			[188, 188 , 287, 87,  0,1.54],
			[188, 188 , 87, 492, 0,1.54],
			[188, 188 , 492, 287, 0,1.54]
		]),
		
		new linearEnemy([
			[213, 213 , 132, 87,  0,1.54],
			[213, 213 , 87, 492, 0,1.54],
			[213, 213 , 492, 132, 0,1.54]
		]),
		
		new linearEnemy([
			[238, 238 , 188, 492,  0,1.54],
			[238, 238 , 492, 87, 0,1.54],
			[238, 238 , 87, 188, 0,1.54]
		]),
		
		new linearEnemy([
			[263, 263 , 338, 492,  0,1.54],
			[263, 263 , 492, 87, 0,1.54],
			[263, 263 , 87, 338, 0,1.54]
		]),
		new linearEnemy([
			[263, 263 , 338, 492,  0,1.54],
			[263, 263 , 492, 87, 0,1.54],
			[263, 263 , 87, 338, 0,1.54]
		]),
		new simpleEnemy(288, 288, 492,87,0, 1.54),
		
		new linearEnemy([
			[388, 388 , 338, 87,  0,1.54],
			[388, 388 , 87, 492, 0,1.54],
			[388, 388 , 492, 338, 0,1.54]
		]),
		
		new linearEnemy([
			[413, 413 , 187, 87,  0,1.54],
			[413, 413 , 87, 492, 0,1.54],
			[413, 413 , 492, 187, 0,1.54]
		]),
		
		new linearEnemy([
			[438, 438 , 132, 492,  0,1.54],
			[438, 438 , 492,87, 0,1.54],
			[438, 438 , 87, 132, 0,1.54]
		]),
		
		new linearEnemy([
			[463, 463 , 288, 492,  0,1.54],
			[463, 463 , 492,87, 0,1.54],
			[463, 463 , 87, 288, 0,1.54]
		]),
		
		new simpleEnemy(488, 488, 87,492,0, 1.54),
		
		new linearEnemy([
			[512, 512 , 388, 87,  0,1.54],
			[512, 512 , 87, 492, 0,1.54],
			[512, 512 , 492, 388, 0,1.54]
		]),
		
		new linearEnemy([
			[537, 537 , 238, 87,  0,1.54],
			[537, 537 , 87, 492, 0,1.54],
			[537, 537 , 492, 238, 0,1.54]
		]),
		
		new linearEnemy([
			[562, 562 , 238, 492,  0,1.54],
			[562, 562 , 492,87, 0,1.54],
			[562, 562 , 87, 238, 0,1.54]
		]),
		
		 new simpleCircularEnemy(675, 475, 10,90,3.6),
		 new simpleCircularEnemy(675, 475, 20,90,3.6),
		 new simpleCircularEnemy(675, 475, 30,90,3.6),
		 new simpleCircularEnemy(675, 475, 40,90,3.6),
		 
		new simpleCircularEnemy(675, 475, 10,-90,3.6),
		 new simpleCircularEnemy(675, 475, 20,-90,3.6),
		 new simpleCircularEnemy(675, 475, 30,-90,3.6),
		 new simpleCircularEnemy(675, 475, 40,-90,3.6),
		 
	],
	
	// level 31
	[
		new staticEnemy(87, 162),
		new staticEnemy(112, 162),
		
		new staticEnemy(137, 238),
		new staticEnemy(162, 238),
		
		new staticEnemy(87, 262),
		new staticEnemy(112, 262),
		
		new staticEnemy(437, 162),
		new staticEnemy(462, 162),
		new staticEnemy(487, 162),
		
		new staticEnemy(263, 187),
		new staticEnemy(537, 187),
		new staticEnemy(562, 187),
		new staticEnemy(587, 187),
		new staticEnemy(612, 187),
		new staticEnemy(637, 187),
		new staticEnemy(663, 187),
		
		new staticEnemy(337, 212),
		new staticEnemy(637, 212),
		new staticEnemy(663, 212),
		
		new staticEnemy(237, 237),
		new staticEnemy(262, 237),
		new staticEnemy(287, 237),
		new staticEnemy(312, 237),
		new staticEnemy(337, 237),
		
		new staticEnemy(663, 237),
		
		new staticEnemy(237, 262),
		new staticEnemy(362, 262),
		
		new staticEnemy(562, 262),
		new staticEnemy(587, 262),
		
		new staticEnemy(237, 287),
		new staticEnemy(412, 287),
		new staticEnemy(487, 287),
		
		new staticEnemy(587, 287),
		new staticEnemy(612, 287),
		
		new staticEnemy(237, 312),
		new staticEnemy(262, 312),
		new staticEnemy(287, 312),
		new staticEnemy(312, 312),
		
		new staticEnemy(437, 312),
		new staticEnemy(512, 312),
		
		new staticEnemy(612, 312),
		new staticEnemy(637, 312),
		
		new staticEnemy(712, 312),
		
		new staticEnemy(337, 337),
		new staticEnemy(362, 337),
		
		new staticEnemy(463, 337),
		new staticEnemy(712, 337),
		
		new staticEnemy(463, 362),
		new staticEnemy(563, 362),
		
		new staticEnemy(212, 387),
		new staticEnemy(237, 387),
		new staticEnemy(262, 387),
		new staticEnemy(287, 387),
		
		new staticEnemy(463, 387),
		new staticEnemy(487, 387),
		new staticEnemy(587, 387),
		new staticEnemy(687, 387),
		
		new staticEnemy(312, 412),
		new staticEnemy(337, 412),
		
		new staticEnemy(462, 412),
		
		new staticEnemy(637, 412),
		new staticEnemy(662, 412),
		new staticEnemy(687, 412),
		
		new staticEnemy(237, 437),
		new staticEnemy(337, 437),
		new staticEnemy(387, 437),
		new staticEnemy(687, 437),
		
		new staticEnemy(237, 462),
		new staticEnemy(262, 462),
		
		new staticEnemy(562, 462),
		new staticEnemy(587, 462),
		new staticEnemy(612, 462),
		
		new staticEnemy(562, 487),
		new staticEnemy(587, 487),
		new staticEnemy(612, 487),
		new staticEnemy(637, 487),
		
		new staticEnemy(262, 487),
		new staticEnemy(237, 487),
		new staticEnemy(287, 487),
		
		
		
		
		
		
		
		
		
	],
	
	// level 32
	[
	   
		
		new simpleEnemy(188, 188, 494,108,0,2.6),
		new simpleEnemy(238, 238, 494,108,0,2.6),
		new simpleEnemy(288, 288, 494,108,0,2.6),
		new simpleEnemy(338, 338, 494,108,0,2.6),
		new simpleEnemy(388, 388, 494,108,0,2.6),
		new simpleEnemy(438, 438, 494,108,0,2.6),
		new simpleEnemy(488, 488, 494,108,0,2.6),
		new simpleEnemy(538, 538, 494,108,0,2.6),
		
		new simpleEnemy(213, 213, 108, 494,0,2.6),
		new simpleEnemy(263, 263, 108, 494,0,2.6),
		new simpleEnemy(313, 313, 108, 494,0,2.6),
		new simpleEnemy(363, 363, 108, 494,0,2.6),
		new simpleEnemy(413, 413, 108, 494,0,2.6),
		new simpleEnemy(463, 463, 108, 494,0,2.6),
		new simpleEnemy(513, 513, 108, 494,0,2.6),
		new simpleEnemy(568, 568, 108, 494,0,2.6),
		//--
		
	    new simpleEnemy(182, 570 , 113,113,2.6,0),
		new simpleEnemy(182, 570 , 163,163,2.6,0),
		new simpleEnemy(182, 570 , 213,213,2.6,0),
		new simpleEnemy(182, 570 , 263,263,2.6,0),
		new simpleEnemy(182, 570 , 313,313,2.6,0),
		new simpleEnemy(182, 570 , 363,363,2.6,0),
		new simpleEnemy(182, 570 , 413,413,2.6,0),
		new simpleEnemy(182, 570 , 463,463,2.6,0),
		
		new simpleEnemy(570,182 , 138,138,2.6,0),
		new simpleEnemy(570,182 , 188,188,2.6,0),
		new simpleEnemy(570,182, 238,238,2.6,0),
		new simpleEnemy(570,182, 288,288,2.6,0),
		new simpleEnemy(570,182, 338,338,2.6,0),
		new simpleEnemy(570,182, 388,388,2.6,0),
		new simpleEnemy(570,182, 438,438,2.6,0),
		new simpleEnemy(570,182, 488,488,2.6,0),
		
		
	],
	
	// level 33
	[
		
		new simpleEnemy(637,637, 492,45,0,3),
		new simpleEnemy(662,662, 492,45,0,3),
		
		new simpleEnemy(687,687, 45,492,0,3),
		new simpleEnemy(716,716, 45,492,0,3),
		
		
		new simpleEnemy(82,720, 413,413,6,0),
		new simpleEnemy(82,720, 438,438,6,0),
		
		new simpleEnemy(720,82, 463,463,6,0),
		new simpleEnemy(720,82, 488,488,6,0),
		
		
	],
	
	// level 34
	[
	 new simpleEnemy(82,718, 262,262,3.2,0),
	 new simpleEnemy(82,718, 362,362,3.2,0),
	 
	 new simpleEnemy(718,82, 312,312,3.2,0),
	 
	 new linearEnemy([
			[400, 82 , 288, 288,  3.2,0],
			[82, 718 ,288, 288, 3.2,0],
			[718, 400 ,288, 288, 3.2,0]
		]),
	new linearEnemy([
			[400, 82 , 388, 388,  3.2,0],
			[82, 718 ,388, 388, 3.2,0],
			[718, 400 ,388, 388, 3.2,0]
		]),
		
	 new linearEnemy([
			[400, 718 , 338, 338,  3.2,0],
			[718,82 ,338, 338, 3.2,0],
			[82, 400 ,338, 338, 3.2,0]
		]),	
		
	 new simpleEnemy(637,637, 557,107,0,3),
	 new simpleEnemy(662,662, 557,107,0,3),
		
	 new simpleEnemy(687,687, 107,557,0,3),
	 new simpleEnemy(716,716, 107,557,0,3),
	 
    ],
	
	// level 35
	[
		
	],
	
	// level 36
	[
		
		
	],
	
	// level 37
	[
		 new simpleEnemy(62,62, 494,108,0,3.5),
		 new simpleEnemy(162,162, 494,108,0,3.5),
		 new simpleEnemy(262,262, 494,108,0,3.5),
		 
		 new simpleEnemy(112,112, 108,494,0,3.5),
		 new simpleEnemy(212,212, 108,494,0,3.5),
		 
		  new linearEnemy([
			[88, 88 , 300, 108,  0,3.5],
			[88, 88 ,108, 494, 0,3.5],
			[88, 88 ,494, 300, 0,3.5]
		]),	
		  new linearEnemy([
			[188, 188 , 300, 108,  0,3.5],
			[188, 188 ,108, 494, 0,3.5],
			[188, 188 ,494, 300, 0,3.5]
		]), 
	    new linearEnemy([
			[138, 138 , 300, 494,  0,3.5],
			[138, 138 ,494, 108, 0,3.5],
			[138, 138 ,108, 300, 0,3.5]
		]),	
		new linearEnemy([
			[238, 238 , 300, 494,  0,3.5],
			[238, 238 ,494, 108, 0,3.5],
			[238, 238 ,108, 300, 0,3.5]
		]),
		
		 new simpleEnemy(537,537, 444,108,0,6),
		 new simpleEnemy(562,562, 444,108,0,6),
		 new simpleEnemy(587,587, 444,108,0,6),
		 
		 new simpleEnemy(537,537, 469,133,0,6),
		 new simpleEnemy(562,562, 469,133,0,6),
		 new simpleEnemy(587,587, 469,133,0,6),
		 
		 new simpleEnemy(537,537, 494,158,0,6),
		 new simpleEnemy(562,562, 494,158,0,6),
		 new simpleEnemy(587,587, 494,158,0,6),
		 
		 
		 new simpleEnemy(612,612, 108,444, 0,6),
		 new simpleEnemy(637,637, 108,444,0,6),
		 new simpleEnemy(662,662, 108,444,0,6),
		 
		 new simpleEnemy(612,612, 133,469, 0,6),
		 new simpleEnemy(637,637, 133,469,0,6),
		 new simpleEnemy(662,662, 133,469,0,6),
		 
		 new simpleEnemy(612,612, 158,494,0,6),
		 new simpleEnemy(637,637, 158,494,0,6),
		 new simpleEnemy(662,662, 158,494,0,6),
		 
		 
		 
		 new simpleEnemy(687,687, 444,108,0,6),
		 new simpleEnemy(712,712, 444,108,0,6),
		 new simpleEnemy(737,737, 444,108,0,6),
		 
		 new simpleEnemy(687,687, 469,133,0,6),
		 new simpleEnemy(712,712, 469,133,0,6),
		 new simpleEnemy(737,737, 469,133,0,6),
		 
		 new simpleEnemy(687,687, 494,158,0,6),
		 new simpleEnemy(712,712, 494,158,0,6),
		 new simpleEnemy(737,737, 494,158,0,6),
		 
		 
	],
	
	// level 38
	[
	  
	  new simpleEnemy(137,137, 157,317,0,1.5),
	  new simpleEnemy(212,212, 157,317,0,1.5),
	  
	  new simpleEnemy(137,137, 317,157,0,1.5),
	  new simpleEnemy(212,212, 317,157,0,1.5),
	  
	  new simpleEnemy(282,443, 361,336,1.5,0.25),
	  new simpleEnemy(443,282, 336,361,1.5,0.25),
	  
	  new simpleEnemy(262,414, 438,413,1.5,0.25),
	  new simpleEnemy(414,262, 413,438,1.5,0.25),
	 
      new simpleEnemy(308,742, 112,112,1.85,0),
	  new simpleEnemy(308,742, 137,137,1.85,0),
	  
	  new simpleEnemy(308,742, 212,212,1.85,0),
	  new simpleEnemy(308,742, 237,237,1.85,0),
	  
	  new simpleEnemy(742,308, 162,162,1.85,0),
	  new simpleEnemy(742,308, 187,187,1.85,0),
	  
	  
	  new simpleEnemy(312,312, 242,108,0,1.85),
	  new simpleEnemy(337,337, 242,108,0,1.85),
	  new simpleEnemy(362,362, 242,108,0,1.85),
	  
	  new simpleEnemy(387,387,108, 242,0,1.85),
	  new simpleEnemy(412,412,108, 242,0,1.85),
	  new simpleEnemy(437,437,108, 242,0,1.85),
	 
	  new simpleEnemy(462,462, 242,108,0,1.85),
	  new simpleEnemy(487,487, 242,108,0,1.85),
	  new simpleEnemy(512,512, 242,108,0,1.85),
	  
	  
	  new simpleEnemy(612,612,108, 494,0,1.85),
	  new simpleEnemy(637,637,108, 494,0,1.85),
	  new simpleEnemy(662,662,108, 494,0,1.85),
	  
	  new simpleEnemy(537,537,494,108,0,1.85),
	  new simpleEnemy(562,562,494,108,0,1.85),
	  new simpleEnemy(587,587,494,108,0,1.85),
	  
	  new simpleEnemy(687,687,494,108,0,1.85),
	  new simpleEnemy(712,712,494,108,0,1.85),
	  new simpleEnemy(737,737,494,108,0,1.85),
	  
	  new simpleEnemy(742,532,287,287,3.75,0),
	  new simpleEnemy(742,532,262,262,3.75,0),
	  
	  new simpleEnemy(742,532,387,387,3.75,0),
	  new simpleEnemy(742,532,362,362,3.75,0),
      
	  new simpleEnemy(742,532,487,487,3.75,0),
	  new simpleEnemy(742,532,462,462,3.75,0),	  
	  
      new simpleEnemy(532,742,337,337,3.75,0),
	  new simpleEnemy(532,742,312,312,3.75,0),
 	  
	  new simpleEnemy(532,742,437,437,3.75,0),
	  new simpleEnemy(532,742,412,412,3.75,0),
 	  
	],
	
	// level 39
	[
		new simpleEnemy(83,294,88,88,0.9,0),
		new simpleEnemy(83,294,188,188,0.9,0),
		new simpleEnemy(83,294,288,288,0.9,0),
		new simpleEnemy(83,294,388,388,0.9,0),
		new simpleEnemy(83,294,488,488,0.9,0),
		
		new simpleEnemy(294,83,138,138,0.9,0),
		new simpleEnemy(294,83,238,238,0.9,0),
		new simpleEnemy(294,83,338,338,0.9,0),
		new simpleEnemy(294,83,438,438,0.9,0),
		
		new simpleEnemy(508,712,163,163,0.9,0),
		new simpleEnemy(508,712,263,263,0.9,0),
		new simpleEnemy(508,712,363,363,0.9,0),
		new simpleEnemy(508,712,463,463,0.9,0),
		
		new simpleEnemy(712,508,113,113,0.9,0),
		new simpleEnemy(712,508,213,213,0.9,0),
		new simpleEnemy(712,508,313,313,0.9,0),
		new simpleEnemy(712,508,413,413,0.9,0),
		new simpleEnemy(712,508,513,513,0.9,0),
		
		
		
	],
	
	// level 40
	[
	   new simpleCircularEnemy(225, 300, 50, 0, 1.35),
	   new simpleCircularEnemy(225, 300, 100, 0, 1.35),
	   new simpleCircularEnemy(225, 300, 150, 0, 1.35),
	   
	   new simpleCircularEnemy(225, 300, 50, 180, 1.35),
	   new simpleCircularEnemy(225, 300, 100, 180, 1.35),
	   new simpleCircularEnemy(225, 300, 150, 180, 1.35),
	   
	   new simpleCircularEnemy(225, 300, 75, 90, 1.35),
	   new simpleCircularEnemy(225, 300, 125, 90, 1.35),
	   new simpleCircularEnemy(225, 300, 175, 90, 1.35),
	   
	   new simpleCircularEnemy(225, 300, 75, -90, 1.35),
	   new simpleCircularEnemy(225, 300, 125, -90, 1.35),
	   new simpleCircularEnemy(225, 300, 175, -90, 1.35),
	   
	   
	   new simpleCircularEnemy(575, 300, 50, 0, 1.35),
	   new simpleCircularEnemy(575, 300, 100, 0, 1.35),
	   new simpleCircularEnemy(575, 300, 150, 0, 1.35),
	   
	   new simpleCircularEnemy(575, 300, 50, 180, 1.35),
	   new simpleCircularEnemy(575, 300, 100, 180, 1.35),
	   new simpleCircularEnemy(575, 300, 150, 180, 1.35),
	   
	   new simpleCircularEnemy(575, 300, 75, 90, 1.35),
	   new simpleCircularEnemy(575, 300, 125, 90, 1.35),
	   new simpleCircularEnemy(575, 300, 175, 90, 1.35),
	   
	   new simpleCircularEnemy(575, 300, 75, -90, 1.35),
	   new simpleCircularEnemy(575, 300, 125, -90, 1.35),
	   new simpleCircularEnemy(575, 300, 175, -90, 1.35),
	],
	
	// level 41
	[
          	    
		
		new simpleEnemy(57,143,212,212,3,0),
		new simpleEnemy(207,293,212,212,3,0),
		new simpleEnemy(357,443,212,212,3,0),
		new simpleEnemy(507,593,212,212,3,0),
		new simpleEnemy(657,743,212,212,3,0),
		
		new simpleEnemy(143,57,237,237,3,0),
		new simpleEnemy(293,207,237,237,3,0),
		new simpleEnemy(443,357,237,237,3,0),
		new simpleEnemy(593,507,237,237,3,0),
		new simpleEnemy(743,657,237,237,3,0),
		
		new simpleEnemy(57,143,362,362,3,0),
		new simpleEnemy(143,57,387,387,3,0),
		
		new simpleEnemy(657,743,362,362,3,0),
		new simpleEnemy(743,657,387,387,3,0),
		
		///
		
		new simpleEnemy(207,443,112,112,3,0),
		new simpleEnemy(207,443,162,162,3,0),
		
		new simpleEnemy(443,207,137,137,3,0),
		new simpleEnemy(443,207,187,187,3,0),
		
		//
		new simpleEnemy(57,293,262,262,3,0),
		new simpleEnemy(57,293,312,312,3,0),
		
		new simpleEnemy(293,57,287,287,3,0),
		new simpleEnemy(293,57,337,337,3,0),
		//
		new simpleEnemy(357,593,262,262,3,0),
		new simpleEnemy(357,593,312,312,3,0),
		
		new simpleEnemy(593,357,287,287,3,0),
		new simpleEnemy(593,357,337,337,3,0),
		
		//
		new simpleEnemy(632,768,263,263,3,0),
		new simpleEnemy(632,768,288,288,3,0),
		
		new simpleEnemy(768,632,288,288,3,0),
		new simpleEnemy(768,632,338,338,3,0),
		
		//
		new simpleEnemy(57,368,412,412,3,0),
		new simpleEnemy(57,368,462,462,3,0),
		
		new simpleEnemy(368,57,437,437,3,0),
		new simpleEnemy(368,57,487,487,3,0),
		//
		
		new simpleEnemy(432,744,412,412,3,0),
		new simpleEnemy(432,744,462,462,3,0),
		
		new simpleEnemy(744,432,437,437,3,0),
		new simpleEnemy(744,432,487,487,3,0),
		
	],
	
	// level 42
	[
		
		new simpleEnemy(87,87,107,494,0,2.8),
		new simpleEnemy(137,137,107,494,0,2.8),
		new simpleEnemy(187,187,107,494,0,2.8),
		new simpleEnemy(237,237,107,494,0,2.8),
		new simpleEnemy(287,287,107,494,0,2.8),
		new simpleEnemy(337,337,107,494,0,2.8),
		new simpleEnemy(387,387,107,494,0,2.8),
		new simpleEnemy(437,437,107,494,0,2.8),
		new simpleEnemy(487,487,107,494,0,2.8),
		new simpleEnemy(537,537,107,494,0,2.8),
		new simpleEnemy(587,587,107,494,0,2.8),
		new simpleEnemy(637,637,107,494,0,2.8),
		new simpleEnemy(687,687,107,494,0,2.8),
		
		new simpleEnemy(112,112,494,107,0,2.8),
		new simpleEnemy(162,162,494,107,0,2.8),
		new simpleEnemy(212,212,494,107,0,2.8),
		new simpleEnemy(262,262,494,107,0,2.8),
		new simpleEnemy(312,312,494,107,0,2.8),
		new simpleEnemy(362,362,494,107,0,2.8),
		new simpleEnemy(412,412,494,107,0,2.8),
		new simpleEnemy(462,462,494,107,0,2.8),
		new simpleEnemy(512,512,494,107,0,2.8),
		new simpleEnemy(562,562,494,107,0,2.8),
		new simpleEnemy(612,612,494,107,0,2.8),
		new simpleEnemy(662,662,494,107,0,2.8),
		new simpleEnemy(712,712,494,107,0,2.8),
		//
		new linearEnemy([
			[87, 687 , 113, 113,  3.75,0],
			[687, 687 ,113, 463, 0,3.75],
			[687, 87 ,463, 463,3.75,0],
			[87, 87 ,463, 113, 0,3.75],
			
		]),
		
		new linearEnemy([
			[112, 712 , 113, 113,  3.75,0],
			[712, 712 ,113, 463, 0,3.75],
			[712, 112 ,463, 463,3.75,0],
			[112, 112 ,463, 113, 0,3.75],
			
		]),
       
        new linearEnemy([
			[87, 687 , 138, 138,  3.75,0],
			[687, 687 ,138, 488, 0,3.75],
			[687, 87 ,488, 488,3.75,0],
			[87, 87 ,488, 138, 0,3.75],
			
		]),
		
		new linearEnemy([
			[112, 712 , 138, 138,  3.75,0],
			[712, 712 ,138, 488, 0,3.75],
			[712, 112 ,488, 488,3.75,0],
			[112, 112 ,488, 138, 0,3.75],
			
		]),
 	   ////
	   
	   new linearEnemy([
			[687, 87 ,463, 463,3.75,0],
			[87, 87 ,463, 113, 0,3.75],
			[87, 687 , 113, 113,  3.75,0],
			[687, 687 ,113, 463, 0,3.75],
			
			
		]),
		
		new linearEnemy([
			[712, 112 ,463, 463,3.75,0],
			[112, 112 ,463, 113, 0,3.75],
			[112, 712 , 113, 113,  3.75,0],
			[712, 712 ,113, 463, 0,3.75],
			
			
		]),
       
        new linearEnemy([
			[687, 87 ,488, 488,3.75,0],
			[87, 87 ,488, 138, 0,3.75],
			[87, 687 , 138, 138,  3.75,0],
			[687, 687 ,138, 488, 0,3.75],
			
			
		]),
		
		new linearEnemy([
			[712, 112 ,488, 488,3.75,0],
			[112, 112 ,488, 138, 0,3.75],
			[112, 712 , 138, 138,  3.75,0],
			[712, 712 ,138, 488, 0,3.75],
			
			
		]),
	   ////////////
	    new linearEnemy([
			[137, 637 ,163, 163,3.75,0],
			[637, 637 ,163, 413, 0,3.75],
			[637, 137 , 413, 413,  3.75,0],
			[137, 137 ,413, 163, 0,3.75],
				
		]),
		
		new linearEnemy([
			[162, 662 ,163, 163,3.75,0],
			[662, 662 ,163, 413,0,3.75],
			[662, 162 , 413, 413,  3.75,0],
			[162, 162 ,413, 163, 0,3.75],
				
		]),
		
		 new linearEnemy([
			[137, 637 ,188, 188,3.75,0],
			[637, 637 ,188, 438, 0,3.75],
			[637, 137 , 438, 438,  3.75,0],
			[137, 137 ,438, 188, 0,3.75],
				
		]),
		
		new linearEnemy([
			[162, 662 ,188, 188,3.75,0],
			[662, 662 ,188, 438,0,3.75],
			[662, 162 , 438, 438,  3.75,0],
			[162, 162 ,438, 188, 0,3.75],
				
		]),
		
		 ////////////
	    new linearEnemy([
			[637, 137 , 413, 413,  3.75,0],
			[137, 137 ,413, 163, 0,3.75],
			[137, 637 ,163, 163,3.75,0],
			[637, 637 ,163, 413, 0,3.75],
			
				
		]),
		
		new linearEnemy([
			
			[662, 162 , 413, 413,  3.75,0],
			[162, 162 ,413, 163, 0,3.75],
			[162, 662 ,163, 163,3.75,0],
			[662, 662 ,163, 413,0,3.75],	
		]),
		
		 new linearEnemy([
			
			[637, 137 , 438, 438,  3.75,0],
			[137, 137 ,438, 188, 0,3.75],
			[137, 637 ,188, 188,3.75,0],
			[637, 637 ,188, 438, 0,3.75],	
		]),
		
		new linearEnemy([
			[662, 162 , 438, 438,  3.75,0],
			[162, 162 ,438, 188, 0,3.75],
			[162, 662 ,188, 188,3.75,0],
			[662, 662 ,188, 438,0,3.75],
			
				
		]),
		
		/////////////////
		 new linearEnemy([
			[187, 587 ,212, 212,3.75,0],
			[587, 587 ,212, 362, 0,3.75],
			[587, 187 , 362, 362,  3.75,0],
			[187, 187 ,362, 212, 0,3.75],
				
		]),
		
		new linearEnemy([
			[212, 612 ,212, 212,3.75,0],
			[612, 612 ,212, 362, 0,3.75],
			[612, 212 , 362, 362,  3.75,0],
			[212, 212 ,362, 212, 0,3.75],
				
		]),
		
		 new linearEnemy([
			[187, 587 ,237, 237,3.75,0],
			[587, 587 ,237, 387, 0,3.75],
			[587, 187 , 387, 387,  3.75,0],
			[187, 187 ,387, 237, 0,3.75],
				
		]),
		
		new linearEnemy([
			[212, 612 ,237, 237,3.75,0],
			[612, 612 ,237, 387, 0,3.75],
			[612, 212 , 387, 387,  3.75,0],
			[212, 212 ,387, 237, 0,3.75],
				
		]),
		/////////////////
		 new linearEnemy([
			[587, 187 , 362, 362,  3.75,0],
			[187, 187 ,362, 212, 0,3.75],
			[187, 587 ,212, 212,3.75,0],
			[587, 587 ,212, 362, 0,3.75],
				
		]),
		
		new linearEnemy([
			
			[612, 212 , 362, 362,  3.75,0],
			[212, 212 ,362, 212, 0,3.75],
			[212, 612 ,212, 212,3.75,0],
			[612, 612 ,212, 362, 0,3.75],	
		]),
		
		 new linearEnemy([
			
			[587, 187 , 387, 387,  3.75,0],
			[187, 187 ,387, 237, 0,3.75],
			[187, 587 ,237, 237,3.75,0],
			[587, 587 ,237, 387, 0,3.75],	
		]),
		
		new linearEnemy([
			
			[612, 212 , 387, 387,  3.75,0],
			[212, 212 ,387, 237, 0,3.75],
			[212, 612 ,237, 237,3.75,0],
			[612, 612 ,237, 387, 0,3.75],	
		]),
		///////////////
		 new linearEnemy([
			[237, 537 , 262, 262,  3.75,0],
			[537, 537 ,262, 312, 0,3.75],
			[537, 237 ,312, 312,3.75,0],
			[237, 237 ,312, 262, 0,3.75],
				
		]),
		
		new linearEnemy([
			[262, 562 , 262, 262,  3.75,0],
			[562, 562 , 262, 312, 0,3.75],
			[562, 262 , 312, 312,3.75,0],
			[262, 262 , 312, 262, 0,3.75],
				
		]),
		 new linearEnemy([
			[237, 537 , 287, 287,  3.75,0],
			[537, 537 ,287, 337, 0,3.75],
			[537, 237 ,337, 337,3.75,0],
			[237, 237 ,337, 262, 0,3.75],
				
		]),
		
		new linearEnemy([
			[262, 562 , 287, 287,  3.75,0],
			[562, 562 , 287, 337, 0,3.75],
			[562, 262 , 337, 337,3.75,0],
			[262, 262 , 337, 262, 0,3.75],
				
		]),
		///////////////
		 new linearEnemy([
			[537, 237 ,312, 312,3.75,0],
			[237, 237 ,312, 262, 0,3.75],
			[237, 537 , 262, 262,  3.75,0],
			[537, 537 ,262, 312, 0,3.75],
			
				
		]),
		
		new linearEnemy([
			
			[562, 262 , 312, 312,3.75,0],
			[262, 262 , 312, 262, 0,3.75],
			[262, 562 , 262, 262,  3.75,0],
			[562, 562 , 262, 312, 0,3.75],	
		]),
		 new linearEnemy([
			
			[537, 237 ,337, 337,3.75,0],
			[237, 237 ,337, 262, 0,3.75],
			[237, 537 , 287, 287,  3.75,0],
			[537, 537 ,287, 337, 0,3.75],	
		]),
		
		new linearEnemy([
			
			[562, 262 , 337, 337,3.75,0],
			[262, 262 , 337, 262, 0,3.75],
			[262, 562 , 287, 287,  3.75,0],
			[562, 562 , 287, 337, 0,3.75],	
		]),
	],
	
	// level 43
	[
		new circularEnemyLinear([

			[162, 638, 212, 212, 1.85,0],
			[638, 638, 212, 387, 0,1.85],
			[638, 162, 387, 387, 1.85,0],
			[162, 162 , 387, 212, 0,1.85],
			
			
		    ],0,0,1.25,0),
         	
         new circularEnemyLinear([

			[162, 638, 212, 212,  1.85,0],
			[638, 638, 212, 387, 0,1.85],
			[638, 162, 387, 387,  1.85,0],
			[162, 162 , 387, 212, 0,1.85],
			
			
		    ],50,0,1.25,0),
		
         new circularEnemyLinear([

			[162, 638, 212, 212,  1.85,0],
			[638, 638, 212, 387, 0,1.85],
			[638, 162, 387, 387,  1.85,0],
			[162, 162 , 387, 212, 0,1.85],
			
			
		    ],100,0,1.25,0),		
		
          new circularEnemyLinear([

			[162, 638, 212, 212,  1.85,0],
			[638, 638, 212, 387, 0,1.85],
			[638, 162, 387, 387,  1.85,0],
			[162, 162 , 387, 212, 0,1.85],
			
			
		    ],50,90,1.25,0),
		
         new circularEnemyLinear([

			[162, 638, 212, 212,  1.85,0],
			[638, 638, 212, 387, 0,1.85],
			[638, 162, 387, 387,  1.85,0],
			[162, 162 , 387, 212, 0,1.85],
			
			
		    ],100,90,1.25,0),	
			
		 new circularEnemyLinear([

			[162, 638, 212, 212,  1.85,0],
			[638, 638, 212, 387, 0,1.85],
			[638, 162, 387, 387,  1.85,0],
			[162, 162 , 387, 212, 0,1.85],
			
			
		    ],50,-90,1.25,0),
		
         new circularEnemyLinear([

			[162, 638, 212, 212,  1.85,0],
			[638, 638, 212, 387, 0,1.85],
			[638, 162, 387, 387,  1.85,0],
			[162, 162 , 387, 212, 0,1.85],
			
			
		    ],100,-90,1.25,0),		
		 new circularEnemyLinear([

			[162, 638, 212, 212,  1.85,0],
			[638, 638, 212, 387, 0,1.85],
			[638, 162, 387, 387,  1.85,0],
			[162, 162 , 387, 212, 0,1.85],
			
			
		    ],50,180,1.25,0),
		
         new circularEnemyLinear([

			[162, 638, 212, 212,  1.85,0],
			[638, 638, 212, 387, 0,1.85],
			[638, 162, 387, 387,  1.85,0],
			[162, 162 , 387, 212, 0,1.85],
			
			
		    ],100,180,1.25,0),	
			
			
			///
			
			new circularEnemyLinear([

			
			[638, 162, 387, 387, 1.85,0],
			[162, 162 , 387, 212, 0,1.85],
			[162, 638, 212, 212, 1.85,0],
			[638, 638, 212, 387, 0,1.85],
			
			
		    ],0,0,1.25,0),
			
			new circularEnemyLinear([

			
			[638, 162, 387, 387, 1.85,0],
			[162, 162 , 387, 212, 0,1.85],
			[162, 638, 212, 212, 1.85,0],
			[638, 638, 212, 387, 0,1.85],
			
			
		    ],50,0,1.25,0),
			
			new circularEnemyLinear([

			
			[638, 162, 387, 387, 1.85,0],
			[162, 162 , 387, 212, 0,1.85],
			[162, 638, 212, 212, 1.85,0],
			[638, 638, 212, 387, 0,1.85],
			
			
		    ],100,0,1.25,0),
			
			new circularEnemyLinear([

			
			[638, 162, 387, 387, 1.85,0],
			[162, 162 , 387, 212, 0,1.85],
			[162, 638, 212, 212, 1.85,0],
			[638, 638, 212, 387, 0,1.85],
			
			
		    ],50,90,1.25,0),
			
			new circularEnemyLinear([

			
			[638, 162, 387, 387, 1.85,0],
			[162, 162 , 387, 212, 0,1.85],
			[162, 638, 212, 212, 1.85,0],
			[638, 638, 212, 387, 0,1.85],
			
			
		    ],100,90,1.25,0),
			
			new circularEnemyLinear([

			
			[638, 162, 387, 387, 1.85,0],
			[162, 162 , 387, 212, 0,1.85],
			[162, 638, 212, 212, 1.85,0],
			[638, 638, 212, 387, 0,1.85],
			
			
		    ],50,-90,1.25,0),
			
			new circularEnemyLinear([

			
			[638, 162, 387, 387, 1.85,0],
			[162, 162 , 387, 212, 0,1.85],
			[162, 638, 212, 212, 1.85,0],
			[638, 638, 212, 387, 0,1.85],
			
			
		    ],100,-90,1.25,0),
			
			new circularEnemyLinear([

			
			[638, 162, 387, 387, 1.85,0],
			[162, 162 , 387, 212, 0,1.85],
			[162, 638, 212, 212, 1.85,0],
			[638, 638, 212, 387, 0,1.85],
			
			
		    ],50,180,1.25,0),
			
			new circularEnemyLinear([

			
			[638, 162, 387, 387, 1.85,0],
			[162, 162 , 387, 212, 0,1.85],
			[162, 638, 212, 212, 1.85,0],
			[638, 638, 212, 387, 0,1.85],
			
			
		    ],100,180,1.25,0),
			
			////////////////
			
			new circularEnemyLinear([

			[487, 638, 212, 212, 1.85,0],
			[638, 638, 212, 387, 0,1.85],
			[638, 162, 387, 387, 1.85,0],
			[162, 162 , 387, 212, 0,1.85],
			[162, 487, 212, 212, 1.85,0],
			
			
			
		    ],0,0,1.25,0),
			
			new circularEnemyLinear([

			[487, 638, 212, 212, 1.85,0],
			[638, 638, 212, 387, 0,1.85],
			[638, 162, 387, 387, 1.85,0],
			[162, 162 , 387, 212, 0,1.85],
			[162, 487, 212, 212, 1.85,0],
			
			
			
		    ],50,0,1.25,0),
			
			new circularEnemyLinear([

			[487, 638, 212, 212, 1.85,0],
			[638, 638, 212, 387, 0,1.85],
			[638, 162, 387, 387, 1.85,0],
			[162, 162 , 387, 212, 0,1.85],
			[162, 487, 212, 212, 1.85,0],
			
			
			
		    ],100,0,1.25,0),
			
			new circularEnemyLinear([

			[487, 638, 212, 212, 1.85,0],
			[638, 638, 212, 387, 0,1.85],
			[638, 162, 387, 387, 1.85,0],
			[162, 162 , 387, 212, 0,1.85],
			[162, 487, 212, 212, 1.85,0],
			
			
			
		    ],50,90,1.25,0),
			
			new circularEnemyLinear([

			[487, 638, 212, 212, 1.85,0],
			[638, 638, 212, 387, 0,1.85],
			[638, 162, 387, 387, 1.85,0],
			[162, 162 , 387, 212, 0,1.85],
			[162, 487, 212, 212, 1.85,0],
			
			
			
		    ],100,90,1.25,0),
			
			new circularEnemyLinear([

			[487, 638, 212, 212, 1.85,0],
			[638, 638, 212, 387, 0,1.85],
			[638, 162, 387, 387, 1.85,0],
			[162, 162 , 387, 212, 0,1.85],
			[162, 487, 212, 212, 1.85,0],
			
			
			
		    ],50,-90,1.25,0),
			
			new circularEnemyLinear([

			[487, 638, 212, 212, 1.85,0],
			[638, 638, 212, 387, 0,1.85],
			[638, 162, 387, 387, 1.85,0],
			[162, 162 , 387, 212, 0,1.85],
			[162, 487, 212, 212, 1.85,0],
			
			
			
		    ],100,-90,1.25,0),
			
			new circularEnemyLinear([

			[487, 638, 212, 212, 1.85,0],
			[638, 638, 212, 387, 0,1.85],
			[638, 162, 387, 387, 1.85,0],
			[162, 162 , 387, 212, 0,1.85],
			[162, 487, 212, 212, 1.85,0],
			
			
			
		    ],50,180,1.25,0),
			
			new circularEnemyLinear([

			[487, 638, 212, 212, 1.85,0],
			[638, 638, 212, 387, 0,1.85],
			[638, 162, 387, 387, 1.85,0],
			[162, 162 , 387, 212, 0,1.85],
			[162, 487, 212, 212, 1.85,0],
			
			
			
		    ],100,180,1.25,0),
			
			
			
			new circularEnemyLinear([

			
			[312, 162, 387, 387, 1.85,0],
			[162, 162 , 387, 212, 0,1.85],
			[162, 638, 212, 212, 1.85,0],
			[638, 638, 212, 387, 0,1.85],
			[638, 312, 387, 387, 1.85,0],
			
			
		    ],50,0,1.25,0),
			
			new circularEnemyLinear([

			
			[312, 162, 387, 387, 1.85,0],
			[162, 162 , 387, 212, 0,1.85],
			[162, 638, 212, 212, 1.85,0],
			[638, 638, 212, 387, 0,1.85],
			[638, 312, 387, 387, 1.85,0],
			
			
		    ],100,0,1.25,0),
			
			new circularEnemyLinear([

			
			[312, 162, 387, 387, 1.85,0],
			[162, 162 , 387, 212, 0,1.85],
			[162, 638, 212, 212, 1.85,0],
			[638, 638, 212, 387, 0,1.85],
			[638, 312, 387, 387, 1.85,0],
			
			
		    ],50,90,1.25,0),
			
			new circularEnemyLinear([

			
			[312, 162, 387, 387, 1.85,0],
			[162, 162 , 387, 212, 0,1.85],
			[162, 638, 212, 212, 1.85,0],
			[638, 638, 212, 387, 0,1.85],
			[638, 312, 387, 387, 1.85,0],
			
			
		    ],100,90,1.25,0),
			
			new circularEnemyLinear([

			
			[312, 162, 387, 387, 1.85,0],
			[162, 162 , 387, 212, 0,1.85],
			[162, 638, 212, 212, 1.85,0],
			[638, 638, 212, 387, 0,1.85],
			[638, 312, 387, 387, 1.85,0],
			
			
		    ],50,-90,1.25,0),
			
			new circularEnemyLinear([

			
			[312, 162, 387, 387, 1.85,0],
			[162, 162 , 387, 212, 0,1.85],
			[162, 638, 212, 212, 1.85,0],
			[638, 638, 212, 387, 0,1.85],
			[638, 312, 387, 387, 1.85,0],
			
			
		    ],100,-90,1.25,0),
			
			new circularEnemyLinear([

			
			[312, 162, 387, 387, 1.85,0],
			[162, 162 , 387, 212, 0,1.85],
			[162, 638, 212, 212, 1.85,0],
			[638, 638, 212, 387, 0,1.85],
			[638, 312, 387, 387, 1.85,0],
			
			
		    ],50,180,1.25,0),
			
			new circularEnemyLinear([

			
			[312, 162, 387, 387, 1.85,0],
			[162, 162 , 387, 212, 0,1.85],
			[162, 638, 212, 212, 1.85,0],
			[638, 638, 212, 387, 0,1.85],
			[638, 312, 387, 387, 1.85,0],
			
			
		    ],100,180,1.25,0),
			
			
			
	],
	
	// level 44
	[
		new staticEnemy(63, 112),
		new staticEnemy(88, 112),
		new staticEnemy(113, 112),
		new staticEnemy(138, 112),
		new staticEnemy(163, 112),
		new staticEnemy(188, 112),
		new staticEnemy(213, 112),
		
		new staticEnemy(337, 112),
		new staticEnemy(487, 112),
		new staticEnemy(587, 112),
		
		new staticEnemy(737, 112),
		new staticEnemy(737, 137),
		new staticEnemy(737, 162),
		new staticEnemy(737, 187),
		new staticEnemy(737, 212),
		new staticEnemy(737, 237),
		
		new staticEnemy(63, 237),
		new staticEnemy(63, 262),
		new staticEnemy(63, 287),
		new staticEnemy(63, 312),
		new staticEnemy(63, 337),
		new staticEnemy(63, 362),
		new staticEnemy(63, 387),
		new staticEnemy(63, 412),
		new staticEnemy(63, 437),
		new staticEnemy(63, 462),
		new staticEnemy(63, 487),
		
		new staticEnemy(412, 237),
		new staticEnemy(437, 237),
		new staticEnemy(462, 237),
		new staticEnemy(487, 237),
		new staticEnemy(512, 237),
		new staticEnemy(537, 237),
		//new staticEnemy(562, 237),
		new staticEnemy(587, 237),
		new staticEnemy(612, 237),
		new staticEnemy(637, 237),
		new staticEnemy(662, 237),
		
		new staticEnemy(387, 263),
		new staticEnemy(412, 263),
		
		new staticEnemy(312, 287),
		new staticEnemy(337, 287),
		new staticEnemy(362, 287),
		new staticEnemy(387, 287),
		
		new staticEnemy(312, 312),
		new staticEnemy(312, 337),
		new staticEnemy(312, 362),
		new staticEnemy(312, 387),
		new staticEnemy(312, 412),
		
		new staticEnemy(137, 312),
		new staticEnemy(162, 312),
		new staticEnemy(187, 312),
		new staticEnemy(212, 312),
		new staticEnemy(237, 312),
		
		new staticEnemy(237, 337),
		new staticEnemy(237, 362),
		new staticEnemy(237, 387),
		new staticEnemy(237, 412),
		new staticEnemy(237, 437),
		new staticEnemy(237, 462),
		
		new staticEnemy(87, 388),
		new staticEnemy(112, 388),
		new staticEnemy(137, 388),
		new staticEnemy(162, 388),
		
		new staticEnemy(162, 413),
		
		new staticEnemy(87, 488),
		new staticEnemy(112, 488),
		new staticEnemy(137, 488),
		new staticEnemy(162, 488),
		new staticEnemy(187, 488),
		new staticEnemy(212, 488),
		new staticEnemy(237, 488),
		new staticEnemy(262, 488),
		new staticEnemy(287, 488),
		
		new staticEnemy(312, 488),
		new staticEnemy(337, 488),
		new staticEnemy(362, 488),
		new staticEnemy(387, 488),
		
		new simpleEnemy(62,87,112,137,0.25,0.25),
		new simpleEnemy(87,112,112,137,0.25,0.25),
		new simpleEnemy(112,137,112,137,0.25,0.25),
		new simpleEnemy(137,162,112,137,0.25,0.25),
		new simpleEnemy(162,187,112,137,0.25,0.25),
		new simpleEnemy(187,212,112,137,0.25,0.25),
		new simpleEnemy(212,237,112,137,0.25,0.25),
		
		new simpleEnemy(312,337,112,137,0.25,0.25),
		new simpleEnemy(387,412,112,137,0.25,0.25),
		//
		new simpleEnemy(162,187,137,162,0.25,0.25),
		
		new simpleEnemy(262,287,137,162,0.25,0.25),
		new simpleEnemy(312,337,137,162,0.25,0.25),
		new simpleEnemy(387,412,137,162,0.25,0.25),
		
		//
		
		new simpleEnemy(87,112,162,187,0.25,0.25),
		new simpleEnemy(112,137,162,187,0.25,0.25),
		
		new simpleEnemy(212,237,162,187,0.25,0.25),
		new simpleEnemy(237,262,162,187,0.25,0.25),
		new simpleEnemy(262,287,162,187,0.25,0.25),
		
		new simpleEnemy(312,337,162,187,0.25,0.25),
		
		new simpleEnemy(362,387,162,187,0.25,0.25),
		new simpleEnemy(387,412,162,187,0.25,0.25),
		
		//
		new simpleEnemy(112,137,187,212,0.25,0.25),
		new simpleEnemy(137,162,187,212,0.25,0.25),
		new simpleEnemy(162,187,187,212,0.25,0.25),
		new simpleEnemy(187,212,187,212,0.25,0.25),
		new simpleEnemy(212,237,187,212,0.25,0.25),
		
		new simpleEnemy(312,337,187,212,0.25,0.25),
		new simpleEnemy(362,437,187,212,0.25,0.25),
		new simpleEnemy(412,487,187,212,0.25,0.25),
		//
		new simpleEnemy(212,237,212,237,0.25,0.25),
		
		new simpleEnemy(262,287,212,237,0.25,0.25),
		new simpleEnemy(287,312,212,237,0.25,0.25),
		new simpleEnemy(312,337,212,237,0.25,0.25),
		//
		
		new simpleEnemy(62,87,237,262,0.25,0.25),
		new simpleEnemy(87,112,237,262,0.25,0.25),
		new simpleEnemy(112,137,237,262,0.25,0.25),
		new simpleEnemy(137,162,237,262,0.25,0.25),
		
		new simpleEnemy(212,237,237,262,0.25,0.25),
		
		///
		
		new simpleEnemy(437,412,137,112,0.25,0.25),
		
		new simpleEnemy(537,512,137,112,0.25,0.25),
		new simpleEnemy(662,637,137,112,0.25,0.25),
		new simpleEnemy(687,662,137,112,0.25,0.25),
		
		new simpleEnemy(737,712,137,112,0.25,0.25),
		
		//
		new simpleEnemy(437,412,162,137,0.25,0.25),
		new simpleEnemy(462,437,162,137,0.25,0.25),
		new simpleEnemy(487,462,162,137,0.25,0.25),
		new simpleEnemy(512,487,162,137,0.25,0.25),
		new simpleEnemy(537,512,162,137,0.25,0.25),
		new simpleEnemy(562,537,162,137,0.25,0.25),
		new simpleEnemy(587,516,162,137,0.25,0.25),
		new simpleEnemy(612,587,162,137,0.25,0.25),
		new simpleEnemy(637,612,162,137,0.25,0.25),
		new simpleEnemy(662,637,162,137,0.25,0.25),
		
		new simpleEnemy(662,637,162,137,0.25,0.25),
		
		new simpleEnemy(437,412,187,162,0.25,0.25),
		new simpleEnemy(612,587,187,162,0.25,0.25),
		new simpleEnemy(637,612,187,162,0.25,0.25),
		new simpleEnemy(662,637,187,162,0.25,0.25),
		
		new simpleEnemy(712,687,187,162,0.25,0.25),
		
		new simpleEnemy(462,437,212,187,0.25,0.25),
		new simpleEnemy(487,462,212,187,0.25,0.25),
		
		new simpleEnemy(637,612,212,187,0.25,0.25),
		new simpleEnemy(662,637,212,187,0.25,0.25),
		new simpleEnemy(687,662,212,187,0.25,0.25),
		
		new simpleEnemy(737,712,212,187,0.25,0.25),
		
		
		
		
		
		
		
		
		
	],
	
	// level 45
	[   
	   new simpleEnemy(312,312,112,194,0,2.9),
	   new simpleEnemy(362,362,112,194,0,2.9),
	   new simpleEnemy(412,412,112,194,0,2.9),
	   
	   new simpleEnemy(337,337,194,112,0,2.9),
	   new simpleEnemy(387,387,194,112,0,2.9),
	   new simpleEnemy(437,437,194,112,0,2.9),
	   
	   
	   new simpleEnemy(312,312,292,208,0,2.9),
	   new simpleEnemy(362,362,292,208,0,2.9),
	   new simpleEnemy(412,412,292,208,0,2.9),
	   
	   new simpleEnemy(337,337,208,292,0,2.9),
	   new simpleEnemy(387,387,208,292,0,2.9),
	   new simpleEnemy(437,437,208,292,0,2.9),
	   
	   new simpleEnemy(193,107,112,112,2.9,0),
	   new simpleEnemy(107,193,137,137,2.9,0),
	   
	    new simpleEnemy(592,507,112,112,2.9,0),
	   new simpleEnemy(507,592,137,137,2.9,0),
	   
	   new simpleEnemy(207,294,112,112,2.9,0),
	   new simpleEnemy(294,207,137,137,2.9,0),
	   
	   new simpleEnemy(608,693,112,112,2.9,0),
	   new simpleEnemy(693,608,137,137,2.9,0),
	   
	   
	   
	   new simpleEnemy(608,693,162,162,2.9,0),
	   new simpleEnemy(693,608,187,187,2.9,0),
	   
	    new simpleEnemy(592,507,162,162,2.9,0),
	   new simpleEnemy(507,592,187,187,2.9,0),
	   
	   //
	    new simpleEnemy(712,712,107,192,0,2.9),
		new simpleEnemy(737,737,192,107,0,2.9),
		
		new simpleEnemy(712,712,292,208,0,2.9),
		new simpleEnemy(737,737,208,292,0,2.9),
		//
		
		 new simpleEnemy(456,544,236,236,2.9,0),
		 new simpleEnemy(544,456,261,261,2.9,0),
		 
		 new simpleEnemy(456,544,286,286,2.9,0),
		 
		  new simpleEnemy(608,692,236,236,2.9,0),
		 new simpleEnemy(692,608,261,261,2.9,0),
		 
		 new simpleEnemy(608,692,286,286,2.9,0),
		 //
		 new simpleEnemy(562,562,232,318,0,2.9),
		  new simpleEnemy(612,612,382,468,0,2.9),
		 new simpleEnemy(562,562,382,468,0,2.9),
		 
		 new simpleEnemy(587,587,318,232,0,2.9),
		 new simpleEnemy(587,587,468,382,0,2.9),
		 
		  new simpleEnemy(558,642,337,337,2.9,0),
	   
	     new simpleEnemy(662,662,332,418,0,2.9),
		 new simpleEnemy(712,712,332,418,0,2.9),
		 
		  new simpleEnemy(687,687,418,332,0,2.9),
		  new simpleEnemy(737,737,418,332,0,2.9),
		  
		  new simpleEnemy(658,742,437,437,2.9,0),
		  new simpleEnemy(658,742,487,487,2.9,0),
		  
		  new simpleEnemy(742,658,462,462,2.9,0),
		  new simpleEnemy(742,658,512,512,2.9,0),
		  
		   new simpleEnemy(532,618,512,512,2.9,0),
		    new simpleEnemy(618,532,487,487,2.9,0),
			
		 new simpleEnemy(518,432,462,462,2.9,0),
		 new simpleEnemy(432,518,487,487,2.9,0),
		 new simpleEnemy(518,432,512,512,2.9,0),
		 
		 new simpleEnemy(332,418,462,462,2.9,0),
		 new simpleEnemy(418,332,487,487,2.9,0),
		 new simpleEnemy(332,418,512,512,2.9,0), 
		  
		new simpleEnemy(432,518,437,437,2.9,0), 
		 new simpleEnemy(418,332,437,437,2.9,0),
		 
		 //
		 
		 new simpleEnemy(287,287,332,418,0,2.9),
		 new simpleEnemy(312,312,418,332,0,2.9),
		 
		 new simpleEnemy(287,287,432,518,0,2.9),
		 new simpleEnemy(312,312,518,432,0,2.9),
		 
		 new simpleEnemy(488,488,332,412,0,2.9),
		 new simpleEnemy(513,513,412,332,0,2.9),
		 
		 new simpleEnemy(382,468,338,338,2.9,0),
		 new simpleEnemy(468,382,363,363,2.9,0),
         new simpleEnemy(382,468,388,388,2.9,0),  

          new simpleEnemy(362,362,392,308,0,2.9),  	

            new simpleEnemy(208,292,262,262,2.9,0),
			new simpleEnemy(292,208,287,287,2.9,0),
			
		new simpleEnemy(137,137,258,342,0,2.9),
		new simpleEnemy(187,187,258,342,0,2.9),
		new simpleEnemy(162,162,342,258,0,2.9),
		
		new simpleEnemy(212,212,392,308,0,2.9),
		new simpleEnemy(237,237,308,392,0,2.9),
		
		new simpleEnemy(212,212,408,492,0,2.9),
		new simpleEnemy(237,237,492,408,0,2.9),
		
		new simpleEnemy(187,187,442,358,0,2.9),
		
		new simpleEnemy(108,192,462,462,2.9,0),
		new simpleEnemy(192,108,487,487,2.9,0),
		
		new simpleEnemy(108,192,512,512,2.9,0),
		
		new simpleEnemy(87,87,432,518,0,2.9),
		new simpleEnemy(62,62,518,432,0,2.9),
			
		new simpleEnemy(58,142,388,388,2.9,0),
		new simpleEnemy(142,58,413,413,2.9,0),
		
		
		new simpleEnemy(62,62,268,182,0,2.9),
		new simpleEnemy(87,87,182,268,0,2.9),
		
		new simpleEnemy(62,62,282,368,0,2.9),
		new simpleEnemy(87,87,368,282,0,2.9),
		
		new simpleEnemy(108,192,212,212,2.9,0),
		new simpleEnemy(192,108,187,187,2.9,0),
		
		new simpleEnemy(208,292,212,212,2.9,0),
		new simpleEnemy(192,208,187,187,2.9,0),
		
		
	],
	
	// level 46
	[
		new circularEnemyLinear([

			
			[362, 362, 187, 112, 0,2.25],
			[362, 437 , 112, 112, 2.25,0],
			[437, 437, 112, 187, 0,2.25],
			[437, 362, 187, 187, 2.25,0],
			
			
		    ],0,0,-2.7,0),
			
		new circularEnemyLinear([

			
			[362, 362, 187, 112, 0,2.25],
			[362, 437 , 112, 112, 2.25,0],
			[437, 437, 112, 187, 0,2.25],
			[437, 362, 187, 187, 2.25,0],
			
			
		    ],13,0,-2.7,0),	
		new circularEnemyLinear([

			
			[362, 362, 187, 112, 0,2.25],
			[362, 437 , 112, 112, 2.25,0],
			[437, 437, 112, 187, 0,2.25],
			[437, 362, 187, 187, 2.25,0],
			
			
		    ],25,0,-2.7,0),
			
		new simpleCircularEnemy(500, 100, 13, 90, 4),
        new simpleCircularEnemy(500, 150, 13, 90, 4),
        new simpleCircularEnemy(500, 200, 13, 90, 4),
        new simpleCircularEnemy(500, 250, 13, 90, 4),
        new simpleCircularEnemy(500, 300, 13, 90, 4),
		new simpleCircularEnemy(500, 350, 13, 90, 4),
		new simpleCircularEnemy(500, 400, 13, 90, 4),
		new simpleCircularEnemy(500, 450, 13, 90, 4),
		new simpleCircularEnemy(500, 500, 13, 90, 4),
		
		
		//
		
		new simpleCircularEnemy(550, 100, 13, 90, -4),
        new simpleCircularEnemy(550, 150, 13, 90, -4),
        new simpleCircularEnemy(550, 200, 13, 90, -4),
        new simpleCircularEnemy(550, 250, 13, 90, -4),
        new simpleCircularEnemy(550, 300, 13, 90, -4),
		new simpleCircularEnemy(550, 350, 13, 90, -4),
		new simpleCircularEnemy(550, 400, 13, 90, -4),
		new simpleCircularEnemy(550, 450, 13, 90, -4),
		new simpleCircularEnemy(550, 500, 13, 90, -4),
		//
		
		new simpleCircularEnemy(675, 100, 13, -90, 4),
        new simpleCircularEnemy(675, 150, 13, -90, 4),
        new simpleCircularEnemy(675, 200, 13, -90, 4),
        new simpleCircularEnemy(675, 250, 13, -90, 4),
        new simpleCircularEnemy(675, 300, 13, -90, 4),
		new simpleCircularEnemy(675, 350, 13, -90, 4),
		new simpleCircularEnemy(675, 400, 13, -90, 4),
		new simpleCircularEnemy(675, 450, 13, -90, 4),
		new simpleCircularEnemy(675, 500, 13, -90, 4),
		
		new simpleCircularEnemy(725, 100, 13, -90, -4),
        new simpleCircularEnemy(725, 150, 13, -90, -4),
        new simpleCircularEnemy(725, 200, 13, -90, -4),
        new simpleCircularEnemy(725, 250, 13, -90, -4),
        new simpleCircularEnemy(725, 300, 13, -90, -4),
		new simpleCircularEnemy(725, 350, 13, -90, -4),
		new simpleCircularEnemy(725, 400, 13, -90, -4),
		new simpleCircularEnemy(725, 450, 13, -90, -4),
		new simpleCircularEnemy(725, 500, 13, -90, -4),
		
		
		new simpleCircularEnemy(612, 113, 13, 60, 2.7),
		new simpleCircularEnemy(612, 113, 13, 120, 2.7),
		new simpleCircularEnemy(612, 113, 25,75, 2.7),
		new simpleCircularEnemy(612, 113, 25, 105, 2.7),
		
		new simpleCircularEnemy(612, 187, 13, -60, -2.7),
		new simpleCircularEnemy(612, 187, 13, -120, -2.7),
		new simpleCircularEnemy(612, 187, 25,-75, -2.7),
		new simpleCircularEnemy(612, 187, 25, -105, -2.7),
		
		new simpleCircularEnemy(612, 262, 13, 60, -2.7),
		new simpleCircularEnemy(612, 262, 13, 120, -2.7),
		new simpleCircularEnemy(612, 262, 25,75, -2.7),
		new simpleCircularEnemy(612, 262, 25, 105, -2.7),
		
		new simpleCircularEnemy(612, 337, 13, -60, 2.7),
		new simpleCircularEnemy(612, 337, 13, -120, 2.7),
		new simpleCircularEnemy(612, 337, 25, -75, 2.7),
		new simpleCircularEnemy(612, 337, 25, -105, 2.7),
		
		new simpleCircularEnemy(612, 413, 13, 60, 2.7),
		new simpleCircularEnemy(612, 413, 13, 120, 2.7),
		new simpleCircularEnemy(612, 413, 25,75, 2.7),
		new simpleCircularEnemy(612, 413, 25, 105, 2.7),
		
		new simpleCircularEnemy(612, 487, 13, -60, -2.7),
		new simpleCircularEnemy(612, 487, 13, -120, -2.7),
		new simpleCircularEnemy(612, 487, 25,-75, -2.7),
		new simpleCircularEnemy(612, 487, 25, -105, -2.7),
		
		
		new simpleCircularEnemy(137, 113, 25, -135, 3.3),
		new simpleCircularEnemy(187, 108, 25, 35, 3.3),
		new simpleCircularEnemy(289, 109, 25, -135, 3.3),
		new simpleCircularEnemy(79, 162, 25, -105, 3.3),
		new simpleCircularEnemy(263, 134, 25, 45, -3.3),
		new simpleCircularEnemy(207, 150, 25, 135, 3.3),
		new simpleCircularEnemy(123, 200, 25, -85, -3.3),
		new simpleCircularEnemy(182, 221, 25, -70, 3.3),
		new simpleCircularEnemy(237, 231, 25, -45, 3.3),
		new simpleCircularEnemy(285, 190, 25, 25, -3.3),
		new simpleCircularEnemy(93, 227, 45, -135, 3.3),
		new simpleCircularEnemy(157, 247, 25, 45, -3.3),
		new simpleCircularEnemy(240, 280, 25, 90, -3.3),
		new simpleCircularEnemy(278, 276, 25, -100, 3.3),
		new simpleCircularEnemy(194, 303, 25, 50, 3.3),
		new simpleCircularEnemy(160, 318, 25, 110, 3.3),
		new simpleCircularEnemy(284, 313, 25, -45, -3.3),
		new simpleCircularEnemy(90, 358, 25, -180, -3.3),
		new simpleCircularEnemy(92, 382, 25, -20, 3.3),
		new simpleCircularEnemy(165, 388, 25, -130, -3.3),
		new simpleCircularEnemy(233, 359, 25, -150, 3.3),
		new simpleCircularEnemy(277, 370, 25, 10, 3.3),
		new simpleCircularEnemy(223, 400, 25, 90, 3.3),
		new simpleCircularEnemy(130, 440, 25, -40, 3.3),
		new simpleCircularEnemy(290, 431, 25, 140, -3.3),
		new simpleCircularEnemy(113, 484, 25, -140, -3.3),
		new simpleCircularEnemy(180, 487, 25, 20, 3.3),
		new simpleCircularEnemy(265, 490, 25, 110, 3.3),
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	],
	
	// level 47
	[
		
		new simpleEnemy(205, 342, 137, 137, 1,0),
		new simpleEnemy(255, 392, 187, 187, 1,0),
		new simpleEnemy(305, 442, 237, 237, 1,0),
		new simpleEnemy(330, 467, 287, 287, 1,0),
		new simpleEnemy(330, 467, 337, 337, 1,0),
		new simpleEnemy(280, 417, 387, 387, 1,0),
		new simpleEnemy(230, 367, 437, 437, 1,0),
		new simpleEnemy(180, 317, 487, 487, 1,0),
		
		new simpleEnemy(316, 182, 112, 112, 1,0),
		new simpleEnemy(366, 232, 162, 162, 1,0),
		new simpleEnemy(416, 282, 212, 212, 1,0),
		new simpleEnemy(466, 332, 262, 262, 1,0),
		new simpleEnemy(466, 332, 312, 312, 1,0),
		
		new simpleEnemy(441, 307, 362, 362, 1,0),
		new simpleEnemy(391, 257, 412, 412, 1,0),
		new simpleEnemy(341, 207, 462, 462, 1,0),
		
		new simpleEnemy(582, 720, 162, 162, 1,0),
		new simpleEnemy(532, 670, 212, 212, 1,0),
		new simpleEnemy(482, 620, 262, 262, 1,0),
		
		new simpleEnemy(482, 620, 312, 312, 1,0),
		new simpleEnemy(507, 645, 362, 362, 1,0),
		new simpleEnemy(557, 695, 412, 412, 1,0),
		new simpleEnemy(607, 745, 462, 462, 1,0),
		
		new simpleEnemy(692, 556, 186, 186, 1,0),
		new simpleEnemy(642, 506, 236, 236, 1,0),
		new simpleEnemy(617, 481, 286, 286, 1,0),
		new simpleEnemy(617, 481, 336, 336, 1,0),
		
		new simpleEnemy(667, 531, 386, 386, 1,0),
		new simpleEnemy(717, 581, 436, 436, 1,0),
		new simpleEnemy(767, 631, 486, 486, 1,0),
		
		//new simpleEnemy(557, 695, 312, 312, 1,0),
		new simpleCircularEnemy(225, 300, 40, 90, 1.8),
		new simpleCircularEnemy(225, 300, 40, -90, 1.8),
		
		new simpleCircularEnemy(100, 450, 40, 90, 1.8),
		new simpleCircularEnemy(100, 450, 40, -90, 1.8),
		
		new circularEnemyLinear([
			
			[100,225 , 300, 300, 1.5, 0],
			[225, 100, 300, 300, 1.5, 0],
			[100, 100, 300, 450, 0, 1.5],
			[100, 100, 450, 300, 0, 1.5],
			
		    ],40,90,0.6,0),
		
        new circularEnemyLinear([
			
			[100,225 , 300, 300, 1.5, 0],
			[225, 100, 300, 300, 1.5, 0],
			[100, 100, 300, 450, 0, 1.5],
			[100, 100, 450, 300, 0, 1.5],
			
		    ],40,-90,0.6,0),
		
		new circularEnemyLinear([
			
			
			[100, 100, 300, 450, 0, 1.5],
			[100, 100, 450, 300, 0, 1.5],
			[100,225 , 300, 300, 1.5, 0],
			[225, 100, 300, 300, 1.5, 0],
			
		    ],40,90,0.6,0),
		new circularEnemyLinear([
			
			
			[100, 100, 300, 450, 0, 1.5],
			[100, 100, 450, 300, 0, 1.5],
			[100,225 , 300, 300, 1.5, 0],
			[225, 100, 300, 300, 1.5, 0],
			
		    ],40,-90,0.6,0),
		///////////////////////	
		new circularEnemyLinear([
			
			
			[387, 287, 250, 150, 1.5, 1.5],
			[287, 387, 150, 250, 1.5, 1.5],
			[387,387 , 250, 350, 0, 1.5],
			[387, 287, 350, 450, 1.5, 1.5],
			[287, 387, 450, 350, 1.5, 1.5],
			[387, 387, 350, 250, 0, 1.5],
			
		    ],40,-90,1.8,0),
        new circularEnemyLinear([
			
			
			[387, 287, 250, 150, 1.5, 1.5],
			[287, 387, 150, 250, 1.5, 1.5],
			[387,387 , 250, 350, 0, 1.5],
			[387, 287, 350, 450, 1.5, 1.5],
			[287, 387, 450, 350, 1.5, 1.5],
			[387, 387, 350, 250, 0, 1.5],
			
		    ],40,90,1.8,0),	


            new circularEnemyLinear([
			
			[387, 287, 350, 450, 1.5, 1.5],
			[287, 387, 450, 350, 1.5, 1.5],
			[387, 387, 350, 250, 0, 1.5],
			[387, 287, 250, 150, 1.5, 1.5],
			[287, 387, 150, 250, 1.5, 1.5],
			[387,387 , 250, 350, 0, 1.5],
		    ],40,-90,1.8,0),	

             new circularEnemyLinear([
			
			[387, 287, 350, 450, 1.5, 1.5],
			[287, 387, 450, 350, 1.5, 1.5],
			[387, 387, 350, 250, 0, 1.5],
			[387, 287, 250, 150, 1.5, 1.5],
			[287, 387, 150, 250, 1.5, 1.5],
			[387,387 , 250, 350, 0, 1.5],
		    ],40,90,1.8,0), 

            ///////////////////////////

            new circularEnemyLinear([
			
			
			[563, 663, 250, 150, 1.5, 1.5],
			[663, 563, 150, 250, 1.5, 1.5],
			[563, 563 , 250, 350, 0, 1.5],
			[563, 663, 350, 450, 1.5, 1.5],
			[663, 563, 450, 350, 1.5, 1.5],
			[563, 563, 350, 250, 0, 1.5],
			
		    ],40,-90,1.8,0),
			
            new circularEnemyLinear([
			
			
			[563, 663, 250, 150, 1.5, 1.5],
			[663, 563, 150, 250, 1.5, 1.5],
			[563,563 , 250, 350, 0, 1.5],
			[563, 663, 350, 450, 1.5, 1.5],
			[663, 563, 450, 350, 1.5, 1.5],
			[563, 563, 350, 250, 0, 1.5],
			
		    ],40,90,1.8,0),	


            new circularEnemyLinear([
			
			[563, 663, 350, 450, 1.5, 1.5],
			[663, 563, 450, 350, 1.5, 1.5],
			[563, 563, 350, 250, 0, 1.5],
			[563, 663, 250, 150, 1.5, 1.5],
			[663, 563, 150, 250, 1.5, 1.5],
			[563,563 , 250, 350, 0, 1.5],
		    ],40,-90,1.8,0),	

             new circularEnemyLinear([
			
			[563, 663, 350, 450, 1.5, 1.5],
			[663, 563, 450, 350, 1.5, 1.5],
			[563, 563, 350, 250, 0, 1.5],
			[563, 663, 250, 150, 1.5, 1.5],
			[663, 563, 150, 250, 1.5, 1.5],
			[563,563 , 250, 350, 0, 1.5],
		    ],40,90,1.8,0),  			  			
	],
	
	// level 48
	[
		
		new circularEnemyLinear([
			
			[137, 137, 162, 437, 0, 2.25],
			[137, 137, 437, 162, 0, 2.25]
			
		    ],50,0,2.7,0),
	    new circularEnemyLinear([
			
			[137, 137, 162, 437, 0, 2.25],
			[137, 137, 437, 162, 0, 2.25]
			
		    ],50,180,-2.7,0),	
		new circularEnemyLinear([
			
			[137, 137, 162, 437, 0, 2.25],
			[137, 137, 437, 162, 0, 2.25]
			
		    ],25,0,2.7,0),
		new circularEnemyLinear([
			
			[137, 137, 162, 437, 0, 2.25],
			[137, 137, 437, 162, 0, 2.25]
			
		    ],25,0,-2.7,0),

   		new circularEnemyLinear([
			
			[387, 387, 437, 162, 0, 2.25],
			[387, 387, 162, 437, 0, 2.25]
			
		    ],50,0,2.7,0),
	    new circularEnemyLinear([
			
			[387, 387, 437, 162, 0, 2.25],
			[387, 387, 162, 437,, 0, 2.25]
			
		    ],50,180,-2.7,0),	
		new circularEnemyLinear([
			
			[387, 387, 437, 162, 0, 2.25],
			[387, 387, 162, 437,, 0, 2.25]
			
		    ],25,0,2.7,0),
		new circularEnemyLinear([
			
			[387, 387, 437, 162, 0, 2.25],
			[387, 387, 162, 437,, 0, 2.25]
			
		    ],25,0,-2.7,0),	
			
		new simpleEnemy(87, 562, 112, 112, 3),
        new simpleEnemy(87, 562, 162, 162, 3),
        new simpleEnemy(87, 562, 212, 212, 3),	
        new simpleEnemy(87, 562, 262, 262, 3),	
        new simpleEnemy(87, 562, 312, 312, 3),
        new simpleEnemy(87, 562, 362, 362, 3),
        new simpleEnemy(87, 562, 412, 412, 3),	
        new simpleEnemy(87, 562, 462, 462, 3),
		
		
		new simpleEnemy(562, 87, 137, 137, 3),
        new simpleEnemy(562, 87, 187, 187, 3),
        new simpleEnemy(562, 87, 237, 237, 3),	
        new simpleEnemy(562, 87, 287, 287, 3),	
        new simpleEnemy(562, 87, 337, 337, 3),
        new simpleEnemy(562, 87, 387, 387, 3),
        new simpleEnemy(562, 87, 437, 437, 3),	
        new simpleEnemy(562, 87, 487, 487, 3),
        //new simpleEnemy(87, 562, 512, 512, 3),
        //new simpleEnemy(87, 562, 562, 562, 3),
        //new simpleEnemy(87, 562, 612, 612, 3),
        
	],
	
	// level 49
	[
		
	],
	
	// level 50
	[
		
		
	]
];

function staticEnemy(x, y, enemyType) {
	if(enemyType==null)
		enemyType = "static";
	this.x = x;
	this.y = y;
	this.simpleX = this.x / 40;
	this.simpleY = this.y / 40;
	this.enemyType = enemyType;
}

function simpleEnemy(startX, endX, startY, endY, xSpeed, ySpeed, stage, enemyType) {
	
	if(enemyType==null)
		enemyType = "simple";
	if(stage==null)
	  stage = 0;
    //xSpeed = 0;
	//ySpeed = 0;
	
	this.x = startX;
	this.y = startY;
	this.simpleX = this.x / 40;
	this.simpleY = this.y / 40;
	this.startX = startX;
	this.endX = endX;
	this.startY = startY;
	this.endY = endY;
	this.xSpeed = xSpeed * 1.33;
	this.ySpeed = ySpeed * 1.33;
	this.stage = stage;
	this.enemyType = enemyType;
}
function simpleEnemyPause(startX, endX, startY, endY, xSpeed, ySpeed,initialPause,shortPause,longPause,secondPause, stage, enemyType) {
	
	
	if(enemyType==null)
		enemyType = "simplePause";
	if(stage==null)
	  stage = 0;
    //xSpeed = 0;
	//ySpeed = 0;
	this.pare = false;
	this.x = startX;
	this.y = startY;
	this.simpleX = this.x / 40;
	this.simpleY = this.y / 40;
	this.startX = startX;
	this.endX = endX;
	this.startY = startY;
	this.endY = endY;
	
	this.longPause = longPause;
	this.initialPause = initialPause;
	this.shortPause = shortPause;
	if(secondPause==null)
		 this.secondPause = 0;
	else 
   		this.secondPause = secondPause;
	
	this.pauseTotal = initialPause;
	
	
	this.pauseTimer = 0;
	
	this.xSpeed = xSpeed * 1.33;
	this.ySpeed = ySpeed * 1.33;
	this.stage = stage;
	this.enemyType = enemyType;
}
function linearEnemy(movement, stage, enemyType) {
	if(enemyType==null)
		enemyType = "linear";
	
	if(stage==null)
	  stage = 0;
  
	this.x = movement[0][0];
	this.y = movement[0][2];
	this.simpleX = this.x / 40;
	this.simpleY = this.y / 40;
	this.movement = movement;
	this.stage = stage;
	this.enemyType = enemyType;
}


function simpleCircularEnemy(centerX, centerY, radius, startAngle, speed, angle, enemyType) {
	
	if(angle==null)
		angle = startAngle;
	if(enemyType == null)
		enemyType = "simpleCircular";
	
	
	this.x = radius * Math.cos(angle * (Math.PI / 180)) + centerX;
	this.y = radius * Math.sin(angle * (Math.PI / 180)) + centerY;
	this.simpleX = this.x / 40;
	this.simpleY = this.y / 40;
	this.centerX = centerX;
	this.centerY = centerY;
	this.radius = radius;
	this.speed = speed * 1.33;
	this.startAngle = startAngle;
	this.angle = startAngle;
	this.enemyType = enemyType;
}

function simpleCircularEnemy180(centerX, centerY, radius, startAngle, speed, angle, enemyType) {
	
	
}

function circularEnemyLinear(movement, radius, startAngle, speed, angle, enemyType,stage) {
	
	if(angle==null)
		angle = startAngle;
	if(enemyType == null)
		enemyType = "linearCircular";
	
    if(stage==null)
	  stage = 0;
    
	this.x = movement[0][0];
	this.y = movement[0][2];
	
	centerX = movement[0][0];
	centerY = movement[0][2];
	
	
	
	//function simpleEnemy(startX, endX, startY, endY, xSpeed, ySpeed, stage, enemyType) {
	this.movement = movement;	
	this.x = movement[0][0];// radius * Math.cos(angle * (Math.PI / 180)) + centerX;
	this.y = movement[0][2];//radius * Math.sin(angle * (Math.PI / 180)) + centerY;
	this.simpleX = movement[0][0] / 40;
	this.simpleY = movement[0][2] / 40;
	this.startX = centerX;//+radius;
	this.startY = centerY;//+radius;
	this.oldX = movement[0][0];
	this.oldY = movement[0][2];
	
	//
	//this.endX = endX;//+radius;
	//this.endY = endY;//+radius;
	//this.xSpeed = xSpeed;
	//this.ySpeed = ySpeed;
	this.stage = stage;
	//
	this.centerX = centerX;
	this.centerY = centerY;
	this.radius = radius;
	this.speed = speed  * 1.33;
	this.startAngle = startAngle;
	this.angle = startAngle;
	this.enemyType = enemyType;
	
	

    //xSpeed = 0;
	//ySpeed = 0;
	
	
}

function simpleCircularEnemyXY(centerX, centerY, radius, startAngle, speed, angle, enemyType,endX,endY,xSpeed, ySpeed,stage) {
	
	if(angle==null)
		angle = startAngle;
	if(enemyType == null)
		enemyType = "simpleCircularXY";
	
    if(stage==null)
	  stage = 0;
    
	//function simpleEnemy(startX, endX, startY, endY, xSpeed, ySpeed, stage, enemyType) {
		
	this.x = radius * Math.cos(angle * (Math.PI / 180)) + centerX;
	this.y = radius * Math.sin(angle * (Math.PI / 180)) + centerY;
	this.simpleX = this.x / 40;
	this.simpleY = this.y / 40;
	this.startX = centerX;//+radius;
	this.startY = centerY;//+radius;
	this.oldX = centerX;
	this.oldY = centerY;
	
	//
	this.endX = endX;//+radius;
	this.endY = endY;//+radius;
	this.xSpeed = xSpeed  * 1.33;
	this.ySpeed = ySpeed  * 1.33;
	this.stage = stage;
	//
	this.centerX = centerX;
	this.centerY = centerY;
	this.radius = radius;
	this.speed = speed  * 1.33;
	this.startAngle = startAngle;
	this.angle = startAngle;
	this.enemyType = enemyType;
	
	

    //xSpeed = 0;
	//ySpeed = 0;
	
	
}

function addSquared2x2(centerX, centerY, toX,toY) {
	
}

function pauseCircularEnemy_1_4(centerX, centerY, radius, startAngle, endAngle, speed, pauseTotal, stage, angle, enemyType) {
	
	if(stage==null)
		stage = 0;
	if(angle==null)
		angle = startAngle;
	if(enemyType == null)
		enemyType = "pauseCircular_1_4";
	if(pauseTotal==null)
		pauseTotal = 0;
	this.x = radius * Math.cos(angle * (Math.PI / 180)) + centerX;
	this.y = radius * Math.sin(angle * (Math.PI / 180)) + centerY;
	this.simpleX = this.x / 40;
	this.simpleY = this.y / 40;
	this.centerX = centerX;
	this.centerY = centerY;
	this.radius = radius;
	this.startAngle = startAngle;
	this.endAngle = endAngle;
	this.speed = speed  * 1.33;
	this.pauseTotal = pauseTotal;
	this.pauseTimer = 0;
	this.angle = startAngle;
	this.stage = stage;
	this.enemyType = enemyType;
}

function reverseCircularEnemy(centerX, centerY, radius, startAngle, endAngle, speed, stage, angle, enemyType) {
	
	
	if(stage==null)
		stage = 0;
	if(angle==null)
		angle = startAngle;
	if(enemyType == null)
		enemyType = "reverseCircular";
	
	this.angleCounter = 0;
	this.x = radius * Math.cos(angle * (Math.PI / 180)) + centerX;
	this.y = radius * Math.sin(angle * (Math.PI / 180)) + centerY;
	this.simpleX = this.x / 40;
	this.simpleY = this.y / 40;
	this.centerX = centerX;
	this.centerY = centerY;
	this.radius = radius;
	this.startAngle = startAngle;
	this.endAngle = endAngle;
	this.speed = speed  * 1.33;
	this.angle = startAngle;
	
	this.modAngle = endAngle -  startAngle;
	if(this.modAngle<0)
		this.modAngle = this.modAngle * -1;
	
	
	this.stage = stage;
	this.enemyType = enemyType;
}

function resetEnemies(l) {
	for (var i = 0; i < enemies[l].length; i++) {
		if (enemies[l][i].enemyType == "simple") {
			enemies[l][i].x = enemies[l][i].startX;
			enemies[l][i].y = enemies[l][i].startY;
			enemies[l][i].simpleX = enemies[l][i].x / 40;
			enemies[l][i].simpleY = enemies[l][i].y / 40;
			enemies[l][i].stage = 0;
		}
		else if (enemies[l][i].enemyType == "linear") {
			enemies[l][i].x = enemies[l][i].movement[0][0];
			enemies[l][i].y = enemies[l][i].movement[0][2];
			enemies[l][i].simpleX = enemies[l][i].x / 40;
			enemies[l][i].simpleY = enemies[l][i].y / 40;
			enemies[l][i].stage = 0;
		}
		else if (enemies[l][i].enemyType == "simpleCircular") {
			enemies[l][i].angle = enemies[l][i].startAngle;
			enemies[l][i].x = enemies[l][i].radius * Math.cos(enemies[l][i].angle * (Math.PI / 180)) + enemies[l][i].centerX;
			enemies[l][i].y = enemies[l][i].radius * Math.sin(enemies[l][i].angle * (Math.PI / 180)) + enemies[l][i].centerY;
			enemies[l][i].simpleX = enemies[l][i].x / 40;
			enemies[l][i].simpleY = enemies[l][i].y / 40;
		}
       else if (enemies[l][i].enemyType == "simplePause") {
			enemies[l][i].x = enemies[l][i].startX;
			enemies[l][i].y = enemies[l][i].startY;
			enemies[l][i].simpleX = enemies[l][i].x / 40;
			enemies[l][i].simpleY = enemies[l][i].y / 40;
			enemies[l][i].pauseTimer = 0;
			enemies[l][i].pare = false;
			enemies[l][i].stage = 0;
		} 
        else if (enemies[l][i].enemyType == "simpleCircularXY") {
			enemies[l][i].x = enemies[l][i].startX;
			enemies[l][i].y = enemies[l][i].startY;
			enemies[l][i].simpleX = enemies[l][i].x / 40;
			enemies[l][i].simpleY = enemies[l][i].y / 40;
			enemies[l][i].stage = 0;
		} 				
		
		 else if (enemies[l][i].enemyType == "linearCircular") {
			enemies[l][i].x = enemies[l][i].movement[0][0];
			enemies[l][i].y = enemies[l][i].movement[0][2];
			enemies[l][i].oldX = enemies[l][i].x;
			enemies[l][i].oldY = enemies[l][i].y;
			
			enemies[l][i].simpleX = enemies[l][i].x / 40;
			enemies[l][i].simpleY = enemies[l][i].y / 40;
			enemies[l][i].stage = 0;
		} 	
		
	}
}

function drawEnemies() {
	if (state == "game" || state == "main_menu") {
		// colors
		var enemyFillColor, enemyOutlineColor;
		if (level >= WALLS_RED) {
			enemyFillColor = ENEMY_FILL_COLOR_2;
			enemyOutlineColor = ENEMY_OUTLINE_COLOR_2;
		} else if (level >= WALLS_PURPLE) {
			enemyFillColor = ENEMY_FILL_COLOR_1;
			enemyOutlineColor = ENEMY_OUTLINE_COLOR_1;
		} else {
			enemyFillColor = ENEMY_FILL_COLOR_0;
			enemyOutlineColor = ENEMY_OUTLINE_COLOR_0;
		}
		
		for (var i = 0; i < enemies[level].length; i++) {
			canvas.beginPath();
			canvas.arc(cwh(enemies[level][i].x) + os.x, cwh(enemies[level][i].y) + os.y, cwh(ENEMY_SIZE) / 2+0.5, 0, 2 * Math.PI, false);
			canvas.fillStyle = enemyFillColor;
			canvas.fill();
			canvas.lineWidth = cwh(3);
			canvas.strokeStyle = enemyOutlineColor;
			canvas.stroke();
		}
	}
}

function updateEnemies() {
	if ((state == "game" || state == "level_select" || state == "main_menu") && !paused && !player.dying) {
		// game
		if (state == "game" || state == "main_menu") {
			for (var n = 0; n < enemies[level].length; n++) {
				updateSimpleEnemy(n);
				updateLinearEnemy(n);
				updateSimpleCircularEnemy(n);
				updateSimpleCircularEnemyXY(n);
				updateCircularEnemyLinear(n);
				updatePauseCircularEnemy_1_4(n);
				updateReverseCircularEnemy(n);
				updateSimpleEnemyPause(n);
			}
		}

		// level select
		else if (state == "level_select" && !mobile) {
			for (var i = 1; i < LS_ALL_TOT + 1; i++) {
				for (var n = 0; n < enemies[i].length; n++) {
					updateSimpleEnemy(n, i);
					updateLinearEnemy(n, i);
					updateSimpleCircularEnemy(n, i);
					updateSimpleCircularEnemyXY(n,i);
					updateCircularEnemyLinear(n,i);
					updatePauseCircularEnemy_1_4(n, i);
					updateReverseCircularEnemy(n, i);
					updateSimpleEnemyPause(n,i);
				}
			}
		}

	}
}

function updateSimpleCircularEnemy(n,l) {
	
	if(l==null)
		l = level;
	var e = enemies[l][n];
	if (e.enemyType == "simpleCircular") {
		var newX = e.radius * Math.cos(e.angle * (Math.PI / 180));
	    var newY = e.radius * Math.sin(e.angle * (Math.PI / 180));
	    
	    e.x = newX + e.centerX;
	    e.y = newY + e.centerY;
	    
	    e.angle += e.speed;
	    
		e.simpleX = e.x / 40;
		e.simpleY = e.y / 40;
	}
}

function updateReverseCircularEnemy(n, l) {
	if(l==null)
		l = level;
	var e = enemies[l][n];
	if (e.enemyType == "reverseCircular") {
		if (e.stage == 0) {
			var newX = e.radius * Math.cos(e.angle * (Math.PI / 180));
		    var newY = e.radius * Math.sin(e.angle * (Math.PI / 180));
		    
		    e.x = newX + e.centerX;
		    e.y = newY + e.centerY;
		    
		    e.angle += e.speed;
			
			if(e.speed>0)
		     e.angleCounter += e.speed;
		    else 
			 e.angleCounter -= e.speed;
		    	
			
			e.simpleX = e.x / 40;
			e.simpleY = e.y / 40;
			
			if (e.angleCounter >= e.modAngle) {
				e.stage = 1;
				e.angle = e.endAngle;
				e.angleCounter = 0;
			}
			
			/*if (e.angle >= e.endAngle) {
				e.stage = 1;
				e.angle = e.endAngle;
			}*/
		} else if (e.stage == 1) {
			var newX = e.radius * Math.cos(e.angle * (Math.PI / 180));
		    var newY = e.radius * Math.sin(e.angle * (Math.PI / 180));
		    
		    e.x = newX + e.centerX;
		    e.y = newY + e.centerY;
		    
		    e.angle -= e.speed;
		    
			if(e.speed>0)
		     e.angleCounter += e.speed;
		    else 
			 e.angleCounter -= e.speed;
			
			
			e.simpleX = e.x / 40;
			e.simpleY = e.y / 40;
			
			if (e.angleCounter >= e.modAngle) {
				e.stage = 0;
				e.angle = e.startAngle;
				e.angleCounter = 0;
			}
		}
	}
}

function updatePauseCircularEnemy_1_4(n, l) {
	if(l==null)
		l = level;
	var e = enemies[l][n];
	if (e.enemyType == "pauseCircular_1_4") {
		if (e.stage == 0) {
			if (e.pauseTimer < e.pauseTotal) {
				e.pauseTimer++;
			} else {
				e.pauseTimer = 0;
				e.stage = 1;
			}
		} else {
			if (e.startAngle < e.endAngle) {
				if (e.angle < e.endAngle) {
					var newX = e.radius * Math.cos(e.angle * (Math.PI / 180));
					var newY = e.radius * Math.sin(e.angle * (Math.PI / 180));
					
					e.x = newX + e.centerX;
					e.y = newY + e.centerY;
					
					e.angle += e.speed;
					
					e.simpleX = e.x / 40;
					e.simpleY = e.y / 40;
				} else {
					e.angle = e.startAngle;
	
					var newX = e.radius * Math.cos(e.angle * (Math.PI / 180));
					var newY = e.radius * Math.sin(e.angle * (Math.PI / 180));
					
					e.x = newX + e.centerX;
					e.y = newY + e.centerY;
					
					e.simpleX = e.x / 40;
					e.simpleY = e.y / 40;
	
					e.pauseTimer = 0;
					e.stage = 0;
				}
			} else if (e.startAngle > e.endAngle) {
				if (e.angle > e.endAngle) {
					var newX = e.radius * Math.cos(e.angle * (Math.PI / 180));
					var newY = e.radius * Math.sin(e.angle * (Math.PI / 180));
					
					e.x = newX + e.centerX;
					e.y = newY + e.centerY;
					
					e.angle -= e.speed;
					
					e.simpleX = e.x / 40;
					e.simpleY = e.y / 40;
				} else {
					e.angle = e.startAngle;
	
					var newX = e.radius * Math.cos(e.angle * (Math.PI / 180));
					var newY = e.radius * Math.sin(e.angle * (Math.PI / 180));
					
					e.x = newX + e.centerX;
					e.y = newY + e.centerY;
					
					e.simpleX = e.x / 40;
					e.simpleY = e.y / 40;
	
					e.pauseTimer = 0;
					e.stage = 0;
				}
			}
			
		}
	}
}

function updateSimpleEnemyPause(n, l) {
    if(l==null)
		l = level;
	
	//var e = enemies[l][n];
	
   if (enemies[l][n].enemyType == "simplePause") {
	   
	   switch (enemies[l][n].stage){
		   case 0:
		    if (enemies[l][n].pauseTimer < enemies[l][n].initialPause) {
				enemies[l][n].pauseTimer++;
			} else {
				enemies[l][n].pauseTimer = 0;
				enemies[l][n].stage = 1;
				
			}
			break;
	       case 3:
		  
			// x
			if (enemies[l][n].startX < enemies[l][n].endX) {
				if (enemies[l][n].x > enemies[l][n].startX) {
					enemies[l][n].x -= enemies[l][n].xSpeed;
				}
				if (enemies[l][n].x <= enemies[l][n].startX) {
					enemies[l][n].x = enemies[l][n].startX;
				    
					if(enemies[l][n].secondPause==0)
				        enemies[l][n].stage = 4;
				    else if(enemies[l][n].pare == true){
				             enemies[l][n].stage = 5;
							 enemies[l][n].pare = false;
					     }
						 else {
							enemies[l][n].stage = 4; 
							enemies[l][n].pare = true;
						 }
				
					
					enemies[l][n].pauseTimer = 0;
				}
			}
			else if (enemies[l][n].startX > enemies[l][n].endX) {
				if (enemies[l][n].x < enemies[l][n].startX) {
					enemies[l][n].x += enemies[l][n].xSpeed;
				}
				if (enemies[l][n].x >= enemies[l][n].startX) {
					enemies[l][n].x = enemies[l][n].startX;
					
					if(enemies[l][n].secondPause==0)
				        enemies[l][n].stage = 4;
				    else if(enemies[l][n].pare == true){
				             enemies[l][n].stage = 5;
							 enemies[l][n].pare = false;
					     }
						 else {
							enemies[l][n].stage = 4; 
							enemies[l][n].pare = true;
						 }
				
					enemies[l][n].pauseTimer = 0;
				}
			}

			// y
			if (enemies[l][n].startY < enemies[l][n].endY) {
				if (enemies[l][n].y > enemies[l][n].startY) {
					enemies[l][n].y -= enemies[l][n].ySpeed;
				}
				if (enemies[l][n].y <= enemies[l][n].startY) {
					enemies[l][n].y = enemies[l][n].startY;
					
					if(enemies[l][n].secondPause==0)
				        enemies[l][n].stage = 4;
				    else if(enemies[l][n].pare == true){
				             enemies[l][n].stage = 5;
							 enemies[l][n].pare = false;
					     }
						 else {
							enemies[l][n].stage = 4; 
							enemies[l][n].pare = true;
						 }
				
					enemies[l][n].pauseTimer = 0;
				}
			}
			else if (enemies[l][n].startY > enemies[l][n].endY) {
				if (enemies[l][n].y < enemies[l][n].startY) {
					enemies[l][n].y += enemies[l][n].ySpeed;
				}
				if (enemies[l][n].y >= enemies[l][n].startY) {
					enemies[l][n].y = enemies[l][n].startY;
					
					if(enemies[l][n].secondPause==0)
				        enemies[l][n].stage = 4;
				    else if(enemies[l][n].pare == true){
				             enemies[l][n].stage = 5;
							 enemies[l][n].pare = false;
					     }
						 else {
							enemies[l][n].stage = 4; 
							enemies[l][n].pare = true;
						 }
				
					enemies[l][n].pauseTimer = 0;
				}
			}
			break;
		case 2:
            if (enemies[l][n].pauseTimer < enemies[l][n].shortPause) {
				enemies[l][n].pauseTimer++;
			} else {
				enemies[l][n].pauseTimer = 0;
				
				enemies[l][n].stage = 3;
				
			}
		break;
		
        case 5:
            if (enemies[l][n].pauseTimer < enemies[l][n].secondPause) {
				enemies[l][n].pauseTimer++;
			} else {
				enemies[l][n].pauseTimer = 0;
				
				enemies[l][n].stage = 1;
				
			}
		break;		
		case 1:
		  
		   	if (enemies[l][n].startX < enemies[l][n].endX) {
				if (enemies[l][n].x < enemies[l][n].endX) {
					enemies[l][n].x += enemies[l][n].xSpeed;
				}
				if (enemies[l][n].x >= enemies[l][n].endX) {
					enemies[l][n].x = enemies[l][n].endX;
					enemies[l][n].stage = 2;
					enemies[l][n].pauseTimer = 0;
				}
			}
			else if (enemies[l][n].startX > enemies[l][n].endX) {
				if (enemies[l][n].x > enemies[l][n].endX) {
					enemies[l][n].x -= enemies[l][n].xSpeed;
				}
				if (enemies[l][n].x <= enemies[l][n].endX) {
					enemies[l][n].x = enemies[l][n].endX;
					enemies[l][n].stage = 2;
					enemies[l][n].pauseTimer = 0;
				}
			}

			// y
			if (enemies[l][n].startY < enemies[l][n].endY) {
				if (enemies[l][n].y < enemies[l][n].endY) {
					enemies[l][n].y += enemies[l][n].ySpeed;
				}
				if (enemies[l][n].y >= enemies[l][n].endY) {
					enemies[l][n].y = enemies[l][n].endY;
					enemies[l][n].stage = 2;
					enemies[l][n].pauseTimer = 0;
				}
			}
			else if (enemies[l][n].startY > enemies[l][n].endY) {
				if (enemies[l][n].y > enemies[l][n].endY) {
					enemies[l][n].y -= enemies[l][n].ySpeed;
				}
				if (enemies[l][n].y <= enemies[l][n].endY) {
					enemies[l][n].y = enemies[l][n].endY;
					enemies[l][n].stage = 2;
					enemies[l][n].pauseTimer = 0;
				}
			}
		  break;
		  
          case 4:
		  
		    if (enemies[l][n].pauseTimer < enemies[l][n].longPause) {
				enemies[l][n].pauseTimer++;
			} else {
				enemies[l][n].pauseTimer = 0;
				 
				    enemies[l][n].stage = 1;
					
			}	
		  break; 
		
	}
	    enemies[l][n].simpleX = enemies[l][n].x / 40;
		enemies[l][n].simpleY = enemies[l][n].y / 40;
   }
  
}

function updateSimpleCircularEnemyXY(n, l) {
	if(l==null)
		l = level;
	if (enemies[l][n].enemyType == "simpleCircularXY") {
		
		enemies[l][n].x = enemies[l][n].oldX;
		enemies[l][n].y = enemies[l][n].oldY;
		
		// stage 0
		if (enemies[l][n].stage == 0) {
			// x
			if (enemies[l][n].startX < enemies[l][n].endX) {
				if (enemies[l][n].x < enemies[l][n].endX) {
					enemies[l][n].x += enemies[l][n].xSpeed;
				}
				if (enemies[l][n].x >= enemies[l][n].endX) {
					enemies[l][n].x = enemies[l][n].endX;
					enemies[l][n].stage = 1;
				}
				
				
				
				
			}
			else if (enemies[l][n].startX > enemies[l][n].endX) {
				if (enemies[l][n].x > enemies[l][n].endX) {
					enemies[l][n].x -= enemies[l][n].xSpeed;
				}
				if (enemies[l][n].x <= enemies[l][n].endX) {
					enemies[l][n].x = enemies[l][n].endX;
					enemies[l][n].stage = 1;
				}
			}

			// y
			if (enemies[l][n].startY < enemies[l][n].endY) {
				if (enemies[l][n].y < enemies[l][n].endY) {
					enemies[l][n].y += enemies[l][n].ySpeed;
				}
				if (enemies[l][n].y >= enemies[l][n].endY) {
					enemies[l][n].y = enemies[l][n].endY;
					enemies[l][n].stage = 1;
				}
			}
			else if (enemies[l][n].startY > enemies[l][n].endY) {
				if (enemies[l][n].y > enemies[l][n].endY) {
					enemies[l][n].y -= enemies[l][n].ySpeed;
				}
				if (enemies[l][n].y <= enemies[l][n].endY) {
					enemies[l][n].y = enemies[l][n].endY;
					enemies[l][n].stage = 1;
				}
			}
		}

		// stage 1
		else if (enemies[l][n].stage == 1) {
			// x
			if (enemies[l][n].startX < enemies[l][n].endX) {
				if (enemies[l][n].x > enemies[l][n].startX) {
					enemies[l][n].x -= enemies[l][n].xSpeed;
				}
				if (enemies[l][n].x <= enemies[l][n].startX) {
					enemies[l][n].x = enemies[l][n].startX;
					enemies[l][n].stage = 0;
				}
			}
			else if (enemies[l][n].startX > enemies[l][n].endX) {
				if (enemies[l][n].x < enemies[l][n].startX) {
					enemies[l][n].x += enemies[l][n].xSpeed;
				}
				if (enemies[l][n].x >= enemies[l][n].startX) {
					enemies[l][n].x = enemies[l][n].startX;
					enemies[l][n].stage = 0;
				}
			}

			// y
			if (enemies[l][n].startY < enemies[l][n].endY) {
				if (enemies[l][n].y > enemies[l][n].startY) {
					enemies[l][n].y -= enemies[l][n].ySpeed;
				}
				if (enemies[l][n].y <= enemies[l][n].startY) {
					enemies[l][n].y = enemies[l][n].startY;
					enemies[l][n].stage = 0;
				}
			}
			else if (enemies[l][n].startY > enemies[l][n].endY) {
				if (enemies[l][n].y < enemies[l][n].startY) {
					enemies[l][n].y += enemies[l][n].ySpeed;
				}
				if (enemies[l][n].y >= enemies[l][n].startY) {
					enemies[l][n].y = enemies[l][n].startY;
					enemies[l][n].stage = 0;
				}
			}
		}
		//enemies[l][n].simpleX = enemies[l][n].x / 40;
		//enemies[l][n].simpleY = enemies[l][n].y / 40;
		enemies[l][n].oldX = enemies[l][n].x;
	enemies[l][n].oldY = enemies[l][n].y;
	
	var newX = enemies[l][n].radius * Math.cos(enemies[l][n].angle * (Math.PI / 180));
	var newY = enemies[l][n].radius * Math.sin(enemies[l][n].angle * (Math.PI / 180));
	    
	            enemies[l][n].x = newX + enemies[l][n].x;
	            enemies[l][n].y = newY + enemies[l][n].y;
	    
	            enemies[l][n].angle += enemies[l][n].speed;
	}
	
	    
		        //enemies[l][n].simpleX = enemies[l][n].oldX / 40;
		        //enemies[l][n].simpleY = enemies[l][n].oldY / 40;
}


function updateSimpleEnemy(n, l) {
	if(l==null)
		l = level;
	if (enemies[l][n].enemyType == "simple") {
		// stage 0
		if (enemies[l][n].stage == 0) {
			// x
			if (enemies[l][n].startX < enemies[l][n].endX) {
				if (enemies[l][n].x < enemies[l][n].endX) {
					enemies[l][n].x += enemies[l][n].xSpeed;
				}
				if (enemies[l][n].x >= enemies[l][n].endX) {
					enemies[l][n].x = enemies[l][n].endX;
					enemies[l][n].stage = 1;
				}
			}
			else if (enemies[l][n].startX > enemies[l][n].endX) {
				if (enemies[l][n].x > enemies[l][n].endX) {
					enemies[l][n].x -= enemies[l][n].xSpeed;
				}
				if (enemies[l][n].x <= enemies[l][n].endX) {
					enemies[l][n].x = enemies[l][n].endX;
					enemies[l][n].stage = 1;
				}
			}

			// y
			if (enemies[l][n].startY < enemies[l][n].endY) {
				if (enemies[l][n].y < enemies[l][n].endY) {
					enemies[l][n].y += enemies[l][n].ySpeed;
				}
				if (enemies[l][n].y >= enemies[l][n].endY) {
					enemies[l][n].y = enemies[l][n].endY;
					enemies[l][n].stage = 1;
				}
			}
			else if (enemies[l][n].startY > enemies[l][n].endY) {
				if (enemies[l][n].y > enemies[l][n].endY) {
					enemies[l][n].y -= enemies[l][n].ySpeed;
				}
				if (enemies[l][n].y <= enemies[l][n].endY) {
					enemies[l][n].y = enemies[l][n].endY;
					enemies[l][n].stage = 1;
				}
			}
		}

		// stage 1
		else if (enemies[l][n].stage == 1) {
			// x
			if (enemies[l][n].startX < enemies[l][n].endX) {
				if (enemies[l][n].x > enemies[l][n].startX) {
					enemies[l][n].x -= enemies[l][n].xSpeed;
				}
				if (enemies[l][n].x <= enemies[l][n].startX) {
					enemies[l][n].x = enemies[l][n].startX;
					enemies[l][n].stage = 0;
				}
			}
			else if (enemies[l][n].startX > enemies[l][n].endX) {
				if (enemies[l][n].x < enemies[l][n].startX) {
					enemies[l][n].x += enemies[l][n].xSpeed;
				}
				if (enemies[l][n].x >= enemies[l][n].startX) {
					enemies[l][n].x = enemies[l][n].startX;
					enemies[l][n].stage = 0;
				}
			}

			// y
			if (enemies[l][n].startY < enemies[l][n].endY) {
				if (enemies[l][n].y > enemies[l][n].startY) {
					enemies[l][n].y -= enemies[l][n].ySpeed;
				}
				if (enemies[l][n].y <= enemies[l][n].startY) {
					enemies[l][n].y = enemies[l][n].startY;
					enemies[l][n].stage = 0;
				}
			}
			else if (enemies[l][n].startY > enemies[l][n].endY) {
				if (enemies[l][n].y < enemies[l][n].startY) {
					enemies[l][n].y += enemies[l][n].ySpeed;
				}
				if (enemies[l][n].y >= enemies[l][n].startY) {
					enemies[l][n].y = enemies[l][n].startY;
					enemies[l][n].stage = 0;
				}
			}
		}
		enemies[l][n].simpleX = enemies[l][n].x / 40;
		enemies[l][n].simpleY = enemies[l][n].y / 40;
	}
}
function updateCircularEnemyLinear(n, l) {
	if(l==null)
		l = level;
	
	if (enemies[l][n].enemyType == "linearCircular") {
		
		enemies[l][n].x = enemies[l][n].oldX;
		enemies[l][n].y = enemies[l][n].oldY;
		
		var startX = enemies[l][n].movement[enemies[l][n].stage][0];
		var endX   = enemies[l][n].movement[enemies[l][n].stage][1];
		var startY = enemies[l][n].movement[enemies[l][n].stage][2];
		var endY   = enemies[l][n].movement[enemies[l][n].stage][3];
		var xSpeed = enemies[l][n].movement[enemies[l][n].stage][4];
		var ySpeed = enemies[l][n].movement[enemies[l][n].stage][5];
		var stages = enemies[l][n].movement.length;
		var changedStage = false;
		
		// x
		if (startX < endX) {
			if (enemies[l][n].x < endX) {
				enemies[l][n].x += xSpeed;
			}
			if (enemies[l][n].x >= endX) {
				enemies[l][n].x = endX;
				enemies[l][n].stage++;
				changedStage = true;
				if (enemies[l][n].stage >= stages)
					enemies[l][n].stage = 0;
			}
		}
		else if (startX > endX) {
			if (enemies[l][n].x > endX) {
				enemies[l][n].x -= xSpeed;
			}
			if (enemies[l][n].x <= endX) {
				enemies[l][n].x = endX;
				enemies[l][n].stage++;
				changedStage = true;
				if (enemies[l][n].stage >= stages)
					enemies[l][n].stage = 0;
			}
		}

		// y
		if (startY < endY) {
			if (enemies[l][n].y < endY) {
				enemies[l][n].y += ySpeed;
			}
			if (enemies[l][n].y >= endY) {
				enemies[l][n].y = endY;
				if (!changedStage) {
					enemies[l][n].stage++;
					if (enemies[l][n].stage >= stages)
						enemies[l][n].stage = 0;
				}
			}
		}
		else if (startY > endY) {
			if (enemies[l][n].y > endY) {
				enemies[l][n].y -= ySpeed;
			}
			if (enemies[l][n].y <= endY) {
				enemies[l][n].y = endY;
				if (!changedStage) {
					enemies[l][n].stage++;
					if (enemies[l][n].stage >= stages)
						enemies[l][n].stage = 0;
				}
			}
		}
		enemies[l][n].simpleX = enemies[l][n].x / 40;
		enemies[l][n].simpleY = enemies[l][n].y / 40;
	    
		enemies[l][n].oldX = enemies[l][n].x;
	    enemies[l][n].oldY = enemies[l][n].y;
	
	var newX = enemies[l][n].radius * Math.cos(enemies[l][n].angle * (Math.PI / 180));
	var newY = enemies[l][n].radius * Math.sin(enemies[l][n].angle * (Math.PI / 180));
	    
	            enemies[l][n].x = newX + enemies[l][n].x;
	            enemies[l][n].y = newY + enemies[l][n].y;
	    
	            enemies[l][n].angle += enemies[l][n].speed;
		
	}
	
	
}
function updateLinearEnemy(n, l) {
	if(l==null)
		l = level;
	
	if (enemies[l][n].enemyType == "linear") {
		var startX = enemies[l][n].movement[enemies[l][n].stage][0];
		var endX   = enemies[l][n].movement[enemies[l][n].stage][1];
		var startY = enemies[l][n].movement[enemies[l][n].stage][2];
		var endY   = enemies[l][n].movement[enemies[l][n].stage][3];
		var xSpeed = enemies[l][n].movement[enemies[l][n].stage][4]  * 1.33;
		var ySpeed = enemies[l][n].movement[enemies[l][n].stage][5] * 1.33;
		var stages = enemies[l][n].movement.length;
		var changedStage = false;
		
		// x
		if (startX < endX) {
			if (enemies[l][n].x < endX) {
				enemies[l][n].x += xSpeed;
			}
			if (enemies[l][n].x >= endX) {
				enemies[l][n].x = endX;
				enemies[l][n].stage++;
				changedStage = true;
				if (enemies[l][n].stage >= stages)
					enemies[l][n].stage = 0;
			}
		}
		else if (startX > endX) {
			if (enemies[l][n].x > endX) {
				enemies[l][n].x -= xSpeed;
			}
			if (enemies[l][n].x <= endX) {
				enemies[l][n].x = endX;
				enemies[l][n].stage++;
				changedStage = true;
				if (enemies[l][n].stage >= stages)
					enemies[l][n].stage = 0;
			}
		}

		// y
		if (startY < endY) {
			if (enemies[l][n].y < endY) {
				enemies[l][n].y += ySpeed;
			}
			if (enemies[l][n].y >= endY) {
				enemies[l][n].y = endY;
				if (!changedStage) {
					enemies[l][n].stage++;
					if (enemies[l][n].stage >= stages)
						enemies[l][n].stage = 0;
				}
			}
		}
		else if (startY > endY) {
			if (enemies[l][n].y > endY) {
				enemies[l][n].y -= ySpeed;
			}
			if (enemies[l][n].y <= endY) {
				enemies[l][n].y = endY;
				if (!changedStage) {
					enemies[l][n].stage++;
					if (enemies[l][n].stage >= stages)
						enemies[l][n].stage = 0;
				}
			}
		}
		enemies[l][n].simpleX = enemies[l][n].x / 40;
		enemies[l][n].simpleY = enemies[l][n].y / 40;
	}
}