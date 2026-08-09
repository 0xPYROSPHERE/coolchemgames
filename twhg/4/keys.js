function key(x, y, keyNumber, gathered, saved, fadeAlpha, fadingIn, fadingOut) {
	
	
	if(keyNumber == null)
		keyNumber = 1;
	
	if(gathered == null)
		gathered = false;
	
	if(saved == null)
		saved = false;
	
	if(fadeAlpha == null)
		fadeAlpha = 1;
	if(fadingIn == null)
		fadingIn = false;
	if(fadingOut == null)
		fadingOut = false;
	
	this.simpleX = x;
	this.simpleY = y;
	this.x = x * TILE_SIZE + TILE_SIZE / 2;
	this.y = y * TILE_SIZE + TILE_SIZE / 2;
	this.gathered = gathered;
	this.saved = saved;
	this.fadeAlpha = fadeAlpha;
	this.fadingIn = fadingIn;
	this.fadingOut = fadingOut;
	this.keyNumber = keyNumber;
	//this.shineTime = shineTime;
	//this.shineAlpha = shineAlpha;
	//this.shiningIn = shiningIn;
	//this.shiningOut = shiningOut;
}

var keys = [
	
	[],
	// level 1
	[
	  new key(27, 5.5, 1)
	],
	// level 2
	[
	  new key(12, 16,2),
	  new key(26, 6,3)
	  ],
	// level 3
	[
	
	  
	],
	//level4
	[
	 	 new key(1.5, 6.5,6)
	],
	// level 5
	[
	 	 new key(4, 6,8),
		 new key(12, 4,9),
		 new key(16, 8,10),
		 new key(21, 13,11),
		 
	],
	//////////////////////////////////// end
	// level 6
	[ 
	  new key(27.5, 7.5,15)
	],
	// level 7
	[
	 	 new key(14.5, 11.5,16)
		 
	],
	// level 8
	[
	 	 new key(14, 15,13),
		 new key(3.5, 8,12),
		 
	],
	// level 9
	[
	 	 new key(14.5, 11.5,14)
	],
	// level 10
	[
	  new key(14.5, 6,17)
	],
	// level 11
	[
	 new key(26, 18,18)
	 
	],
	// level 12
	[
	  new key(23.5, 15.5,7),
	   new key(5.5, 15.5,5),
	   new key(27.5, 11.5,4)
	   
	],
	// level 13
	[
	 new key(9.5, 3.5,2),
		 new key(1.5, 18.5,1),
	],
	// level 14
	[
	   new key(22, 10,26),
		 new key(4, 5,15),
	],
	// level 15
	[
	  new key(4.5, 5.5,3)
	],
	// level 16
	[
	 
	],
	// level 17
	[
	   new key(26.5, 11.5,13)
	],
	// level 18
	[
	  new key(21.5, 5.5,14),
	
	  
	],
	// level 19
	[
	
	 
	],
	// level 20
	[
	  new key(3, 2,4),
	  new key(7, 2,5),
	  new key(11, 2,6),
	  
	  new key(12, 8,8),
	  new key(16, 11,7),
	  new key(19.5, 18.5,11),
	  new key(27.5, 10.5,9),
	  new key(27.5, 18.5,10),
	  
	
	],
	// level 21
	[
	 new key(11.5, 14.5,12)
	],
	// level 22
	[
	 new key(1.5, 5.5,20),
	 new key(1.5, 9.5,21),
	 new key(18.5, 9.5,17),
	 new key(14.5, 18.5,18),
	 new key(23.5, 9.5,16),
	 new key(4.5, 17.5,19)

	],
	// level 23
	[],
	// level 24
	[
	 new key(19.5, 10.5,23),
	 new key(13.5, 18.5,22),
	 new key(27.5, 8.5,24),
	 new key(27.5, 14.5,25),
	],
	// level 25
	[
	 new key(7.5, 4.5,2),
	 new key(17.5, 12.5,1),
	 
	],
	// level 26
	[],
	// level 27
	[
	  new key(12.5, 17.5,3),
	 new key(18.5, 17.5,4),
	],
	// level 28
	[
       new key(9, 12,5),
	   new key(15, 15,6),
	   new key(17, 9,7),
	   new key(22, 5,8),
	   new key(24, 11,9),
	   new key(29, 8,10),
	 
	 
	 
	 
	],
	// level 29
	[
	   
	],
	// level 30
	[
	  new key(13, 8.5,11),
      new key(13, 13.5,12),
	  
	],
	// level 31
	[ 
	 new key(10, 10,13),
     new key(19, 11,14),
	 
	],
	// level 32
	[
	 new key(27.5, 4.5,18),
	
	],
	// level 33
	[
	  new key(21, 12,15),
	  new key(3.5, 4.5,17),
	],
	// level 34
	[
	   new key(4.5, 14.5,16),
	   
	   
	],
	// level 35
	[ 
	
	],
	// level 36
	[
	 
	
	],
	// level 37
	[
	  new key(3, 5,2),
	  new key(6, 18,1),
	  new key(9, 18,3)
	],
	// level 38
	[ 
	 new key(18.5, 18.5,4)
	],
	// level 39
	[
	  new key(4, 4,5),
	  new key(10, 19,6),
	  new key(21, 4,8),
	  new key(27, 19,7),
	  
	  
	],
	// level 40
	[
	   
	   //new key(9.5, 11.5,19),
	],
	// level 41
	[ 
	
	],
	// level 42
	[ 
	 new key(9.5, 11.5,10),
	 new key(15.5, 6.5,9),
	 new key(15, 16,12),
	 new key(21, 11,11),
	 
	],
	// level 43
	[
	   new key(16, 12,19)
	],
	// level 44
	[
	 new key(17, 12,13)
	],
	// level 45
	[
	 new key(4.5, 15.5,21),
	 new key(11.5, 13.5,20),
	 new key(20.5, 5.5,17),
	 
	 
	],
	// level 46
	[ 
	 new key(15.5, 17.5,14),
	],
	// level 47
	[
	   new key(3.5, 5.5,27),
	 new key(3.5, 7.5,26),
	 new key(7.5, 8.5,23),
	 
	   new key(10.5, 11.5,24),
	 new key(7.5, 14.5,25),
	 new key(18.5, 6.5,29),
	 new key(18.5, 16.5,28),
	 
	 new key(27.5, 18.5,22),
	 
	 
	],
	// level 48
	[
	  new key(25.5, 5.5,15),
	  new key(25.5, 17.5,16)
	],
	// level 49
	[],
	// level 50
	[]
];

function resetKeys(l) {
	for (var t = 0; t< levelsNumbers[realLevel].length;t++ ){
		 lev = levelsNumbers[realLevel][t];
	 for (var i = 0; i < keys[lev].length; i++) {
		keys[lev][i].gathered = false;
		keys[lev][i].saved = false;
		keys[lev][i].fadeAlpha = 1;
		keys[lev][i].fadingIn = false;
		keys[lev][i].fadingOut = false;
		//keys[l][i].shineTime = createCoinShineTime();
		//keys[l][i].shineAlpha = 0;
		//keys[l][i].shiningIn = false;
		//keys[l][i].shiningOut = false;
	}
  }
}

function resetKeysAll() {
	for (var real = 0; real< 5; real++ ){
	for (var t = 0; t< levelsNumbers[real].length;t++ ){
		 lev = levelsNumbers[real][t];
	 for (var i = 0; i < keys[lev].length; i++) {
		keys[lev][i].gathered = false;
		keys[lev][i].saved = false;
		keys[lev][i].fadeAlpha = 1;
		keys[lev][i].fadingIn = false;
		keys[lev][i].fadingOut = false;
		//keys[l][i].shineTime = createCoinShineTime();
		//keys[l][i].shineAlpha = 0;
		//keys[l][i].shiningIn = false;
		//keys[l][i].shiningOut = false;
	}
  }
	}
}


function updateKeys() {
	if (state == "game" && !paused) {
		keysFade();
		//keysShine();
	}
}

function drawKeys() {
	if (state == "game") {
		for (var i = 0; i < keys[level].length; i++) {
			if (!keys[level][i].gathered || keys[level][i].fadingIn || keys[level][i].fadingOut) {
				/*
				// key fill
				canvas.beginPath();
				canvas.arc(keys[level][i].x, keys[level][i].y, COIN_SIZE / 2, 0, 2 * Math.PI, false);
				canvas.fillStyle = KEY_FILL_COLOR + keys[level][i].fadeAlpha + ")";
				canvas.fill();
				
				// key shine
				canvas.beginPath();
				canvas.arc(keys[level][i].x, keys[level][i].y, COIN_SIZE / 2, 0, 2 * Math.PI, false);
				if (keys[level][i].shineAlpha > keys[level][i].fadeAlpha)
					canvas.fillStyle = COIN_SHINE_COLOR + keys[level][i].fadeAlpha + ")";
				else
					canvas.fillStyle = COIN_SHINE_COLOR + keys[level][i].shineAlpha + ")";
				canvas.fill();
				*/

				// key stroke
				canvas.beginPath();
				canvas.arc   (keys[level][i].x - 5,             keys[level][i].y + 5, 3.6*1.5, -0.2* Math.PI, 1.6 * Math.PI, false);
				
				
				canvas.fillStyle = KEY_OUTLINE_COLOR + keys[level][i].fadeAlpha + ")";
				canvas.fill();
				canvas.lineWidth = 2;
				canvas.strokeStyle = KEY_OUTLINE_COLOR_0 + keys[level][i].fadeAlpha + ")";// + keys[level][i].fadeAlpha + ")";
				canvas.stroke();
				
				canvas.beginPath();
			
				canvas.arc   (keys[level][i].x - 5,             keys[level][i].y + 5, 1.2, 0, 2 * Math.PI, true);
				
				canvas.fillStyle = KEY_OUTLINE_COLOR+ keys[level][i].fadeAlpha + ")";
				canvas.fill();
				canvas.lineWidth = 2;
				canvas.strokeStyle = KEY_OUTLINE_COLOR_0+ keys[level][i].fadeAlpha + ")" ;//+ keys[level][i].fadeAlpha + ")";
				canvas.stroke();
				
				canvas.beginPath();
				canvas.moveTo(keys[level][i].x -5 +1.4 *1.5  ,     keys[level][i].y+5 -2.9*1.5);
				canvas.lineTo(keys[level][i].x -5 +2.8*1.5,     keys[level][i].y +5 -4.4*1.5);
				canvas.lineTo(keys[level][i].x -5 +1.3*1.5,     keys[level][i].y +5 -5.9*1.5);
				canvas.lineTo(keys[level][i].x -5 +2.8*1.5,     keys[level][i].y +5 -7.4*1.5);
				canvas.lineTo(keys[level][i].x -5 +4.4*1.5,     keys[level][i].y +5 -5.9*1.5);
				canvas.lineTo(keys[level][i].x -5 +5.6*1.5,     keys[level][i].y +5 -7*1.5);
				canvas.lineTo(keys[level][i].x -5 +4.3*1.5,     keys[level][i].y +5 -8.8*1.5);
				canvas.lineTo(keys[level][i].x -5 +5.4*1.5,     keys[level][i].y +5 -10*1.5);
				canvas.lineTo(keys[level][i].x -5 +8.5*1.5,     keys[level][i].y +5 -6.9*1.5);
				canvas.lineTo(keys[level][i].x -5 +3*1.5,     keys[level][i].y +5 -1.4*1.5);
				
				/*canvas.lineTo(keys[level][i].x + 5 - 5 - 9 - 5, keys[level][i].y - 5 + 5 + 9 - 5);
				canvas.lineTo(keys[level][i].x + 5 - 5 - 9,     keys[level][i].y - 5 + 5 + 9);
				canvas.lineTo(keys[level][i].x + 5 - 5 - 4,     keys[level][i].y - 5 + 5 + 4);
				canvas.lineTo(keys[level][i].x + 5 - 5 - 4 - 5, keys[level][i].y - 5 + 5 + 4 - 5);*/
				
				canvas.fillStyle = KEY_OUTLINE_COLOR+ keys[level][i].fadeAlpha + ")";
				canvas.fill();
				canvas.lineWidth = 2;
				canvas.strokeStyle = KEY_OUTLINE_COLOR_0+ keys[level][i].fadeAlpha + ")";// + keys[level][i].fadeAlpha + ")";
				canvas.stroke();
				
				/*canvas.fillStyle = enemyFillColor;
			canvas.fill();
			canvas.lineWidth = cwh(4);
			canvas.strokeStyle = enemyOutlineColor;
			canvas.stroke();*/
				
				/*canvas.beginPath();
				canvas.arc   (keys[level][i].x - 5,             keys[level][i].y + 5, 6, 0, 2 * Math.PI, false);
				
				/*canvas.moveTo(keys[level][i].x + 5 - 5 + 2,     keys[level][i].y - 5 + 5 - 2);
				canvas.lineTo(keys[level][i].x + 5 - 5 - 9,     keys[level][i].y - 5 + 5 + 9);
				canvas.lineTo(keys[level][i].x + 5 - 5 - 9 - 5, keys[level][i].y - 5 + 5 + 9 - 5);
				canvas.lineTo(keys[level][i].x + 5 - 5 - 9,     keys[level][i].y - 5 + 5 + 9);
				canvas.lineTo(keys[level][i].x + 5 - 5 - 4,     keys[level][i].y - 5 + 5 + 4);
				canvas.lineTo(keys[level][i].x + 5 - 5 - 4 - 5, keys[level][i].y - 5 + 5 + 4 - 5);*/
				/*
				canvas.lineWidth = 4;
				canvas.strokeStyle = ENEMY_OUTLINE_COLOR_0 + keys[level][i].fadeAlpha + ")";
				canvas.stroke();*/
			}
		}
	}
}

function keysFade() {
	if (state == "game") {
	 
	 for (var r = 0;r < levelsNumbers[realLevel].length; r++ ){	
	    lev = levelsNumbers[realLevel][r];
	  
	   if(keys[lev].length>0){
		
		
		
		for (var i = 0; i < keys[lev].length; i++) {
			if (keys[lev][i].fadingOut && keys[lev][i].fadeAlpha > 0) {
				keys[lev][i].fadeAlpha -= COIN_FADE_SPEED;
			}
			else if (keys[lev][i].fadingOut && keys[lev][i].fadeAlpha <= 0) {
				keys[lev][i].fadeAlpha = 0;
				keys[lev][i].fadingOut = false;
				//keys[level][i].shineTime = createCoinShineTime();
			}
			else if (keys[lev][i].fadingIn && keys[lev][i].fadeAlpha < 1) {
				keys[lev][i].fadeAlpha += COIN_FADE_SPEED;
			}
			else if (keys[lev][i].fadingIn && keys[lev][i].fadeAlpha >= 1) {
				keys[lev][i].fadeAlpha = 1;
				keys[lev][i].fadingIn = false;
			}
		}
	 }
	 }
	}
}

function getKeysTotal(lev) {
	if(lev== null)
		lev = level;
	return keys[lev].length;
}

function unsavedKeys() {
	for (var i = 0; i < keys[level].length; i++) {
		if (keys[level][i].gathered && !keys[level][i].saved) {
			return true;
		}
	}
	return false;
}


function unsavedKeysAll() {
	/*for (var i = 0; i < keys[level].length; i++) {
		if (keys[level][i].gathered && !keys[level][i].saved) {
			return true;
		}
	}
	return false;*/
	
	for (var t = 0; t< levelsNumbers[realLevel].length;t++ ){
		 lev = levelsNumbers[realLevel][t];
	 for (var i = 0; i < keys[lev].length; i++) {
		if (keys[lev][i].gathered && !keys[lev][i].saved) {
			return true;
		}
	 }
	}
	return false;
}

/*
function keysShine() {
	coinShineTimer++;
	if (coinShineTimer > COIN_SHINE_FREQ)
		coinShineTimer = 0;
	
	for (var i = 0; i < keys[level].length; i++) {
		if (!keys[level][i].shiningIn && coinShineTimer == keys[level][i].shineTime) {
			keys[level][i].shiningIn = true;
			keys[level][i].shiningOut = false;
			keys[level][i].shineAlpha = 0;
		} else if (keys[level][i].shiningIn && keys[level][i].shineAlpha < 1) {
			keys[level][i].shineAlpha += COIN_SHINE_FADE_IN_SPEED;
		} else if (keys[level][i].shiningIn && keys[level][i].shineAlpha >= 1) {
			keys[level][i].shiningOut = true;
			keys[level][i].shiningIn = false;
			keys[level][i].shineAlpha = 1;
		} else if (keys[level][i].shiningOut && keys[level][i].shineAlpha > 0) {
			keys[level][i].shineAlpha -= COIN_SHINE_FADE_OUT_SPEED;
		} else if (keys[level][i].shiningOut && keys[level][i].shineAlpha <= 0) {
			keys[level][i].shiningOut = false;
			keys[level][i].shiningIn = false;
			keys[level][i].shineAlpha = 0;
		}
	}
}
*/

function submitSavedKeys() {
	keysSave = [];
	currentSave = [];
	
	 for (var t = 0; t< levelsNumbers[realLevel].length;t++ ){
		 lev = levelsNumbers[realLevel][t];
		 
	 for (var i = 0; i < keys[lev].length; i++) {
		if (keys[lev][i].saved)
			currentSave.push(i);
	 }
	 if (currentSave.length == 0)
		keysSave.push([]);
	 else 
	    keysSave.push(currentSave);
	
	currentSave = [];
	}
	if (currentSave.length == 0)
		keysSave.push(-99);
	
	localStorage.setItem("whg4_keys", JSON.stringify(keysSave));
}

function loadSavedKeys() {
	resetKeys(level);
	keysSave = JSON.parse(localStorage["whg4_keys"]);
	currentSave = [];
   for (var t = 0; t< levelsNumbers[realLevel].length;t++ ){
		 lev = levelsNumbers[realLevel][t];
		 if(keysSave!= -99){
		 currentSave = keysSave[t]; 
	 if (currentSave[0] >= 0) {
		for (var i = 0; i < currentSave.length; i++) {
			keys[lev][parseInt(currentSave[i])].gathered = true;
			keys[lev][parseInt(currentSave[i])].saved = true;
		}
	 }
		 }
   }
}