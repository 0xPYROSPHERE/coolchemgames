var rainbowGradient = canvas.createLinearGradient(302, 0, 498, 0);
rainbowGradient.addColorStop(0,           "rgb(" + PLAYER_FILL_COLORS[0][0] + "," + PLAYER_FILL_COLORS[0][1] + "," + PLAYER_FILL_COLORS[0][2] + ")");
rainbowGradient.addColorStop(0 + (1 / 8), "rgb(" + PLAYER_FILL_COLORS[1][0] + "," + PLAYER_FILL_COLORS[1][1] + "," + PLAYER_FILL_COLORS[1][2] + ")");
rainbowGradient.addColorStop(0 + (2 / 8), "rgb(" + PLAYER_FILL_COLORS[2][0] + "," + PLAYER_FILL_COLORS[2][1] + "," + PLAYER_FILL_COLORS[2][2] + ")");
rainbowGradient.addColorStop(0 + (3 / 8), "rgb(" + PLAYER_FILL_COLORS[3][0] + "," + PLAYER_FILL_COLORS[3][1] + "," + PLAYER_FILL_COLORS[3][2] + ")");
rainbowGradient.addColorStop(0 + (4 / 8), "rgb(" + PLAYER_FILL_COLORS[4][0] + "," + PLAYER_FILL_COLORS[4][1] + "," + PLAYER_FILL_COLORS[4][2] + ")");
rainbowGradient.addColorStop(0 + (5 / 8), "rgb(" + PLAYER_FILL_COLORS[5][0] + "," + PLAYER_FILL_COLORS[5][1] + "," + PLAYER_FILL_COLORS[5][2] + ")");
rainbowGradient.addColorStop(0 + (6 / 8), "rgb(" + PLAYER_FILL_COLORS[6][0] + "," + PLAYER_FILL_COLORS[6][1] + "," + PLAYER_FILL_COLORS[6][2] + ")");
rainbowGradient.addColorStop(0 + (7 / 8), "rgb(" + PLAYER_FILL_COLORS[7][0] + "," + PLAYER_FILL_COLORS[7][1] + "," + PLAYER_FILL_COLORS[7][2] + ")");
rainbowGradient.addColorStop(1,           "rgb(" + PLAYER_FILL_COLORS[0][0] + "," + PLAYER_FILL_COLORS[0][1] + "," + PLAYER_FILL_COLORS[0][2] + ")");

var labels = ["B4","B3","B2","A2","C2","A3","A4","C3","C4","B1","C1","A1",   "B2","B3","B1","C3","C2","D3","D2","C1","D1","A3","A1","A2",  "B1","A1","A2","B2","B3","A3","A4","B4","C4","C3","C2","B1"   ,"A1","A2","B1","B2","C2","C1","D1","D2","B3","C3","A3","D3"  ,"A3","A4","B3","C2","C3","C4","B4","B2","A2","A1","B1","C1"];

var levelMaps = [
 [ 
   //1
  [515,320], 
  [515,250],
  [515,180],
  
  [410,180],
  [620,180],
  [410,250],
  
  [410,320],
  [620,250],
  [620,320],
  
  [515,110],
  [620,110],
  [410,110]
  
 ],
  [ 
  //2
  [465,180],
  [465,250],
  [465,110],
  
  [570,250],
  [570,180],
  [675,250],
  
  [675,180],
  [570,110],
  [675,110],
  
  [360,250],
  [360,110],
  [360,180]
  
 ],
  [ 
   //3
  [515,110], 
  [410,110],
  [410,180],
  
  [515,180],
  [515,180],
  [410,250],
  
  [410,320],
  [515,320],
  [620,320],
  
  [620,250],
  [620,180],
  [620,110]
  
 ],
   [ 
  //4
  
  [360,110],
  [360,165],
  [440,110],
  
  [440,165],
  [520,165],
  [520,110],
  
  [600,110],
  [600,165],
  [440,220],
  
  [520,220],
  [360,220],
  [600,220]
  
 ],
 //5
  [ 
   [410,110],
  [500,110],
  [590,110],
  
  [410,170],
  [500,170],
  [590,170],
  
  [410,230],
  [500,230],
  [590,230],
  
  [410,290],
  [500,290],
  [590,290]
  
 ],
 
  ]
;

function LS_draw_border2(l, x, y) {
	// shadow
	canvas.beginPath();
	canvas.rect(x - LS_BDR_SIZE + LS_SHADOW_OFFSET, y - LS_BDR_SIZE + LS_SHADOW_OFFSET,
		LS_TILE_SIZE * LS_TILES_WIDTH + LS_BDR_SIZE * 2, LS_TILE_SIZE * LS_TILES_HEIGHT + LS_BDR_SIZE * 2);
	canvas.fillStyle = MENU_SHADOW_COLOR;
	canvas.fill();
	
	// border
	canvas.beginPath();
	canvas.rect(x - LS_BDR_SIZE, y - LS_BDR_SIZE,
		LS_TILE_SIZE * LS_TILES_WIDTH + LS_BDR_SIZE * 2, LS_TILE_SIZE * LS_TILES_HEIGHT + LS_BDR_SIZE * 2);

		canvas.fillStyle = LS_BORDER_COLOR;
	canvas.fill();
}
function LS_draw_text2(l, x, y) {
	if (onButton("ls_" + l))
		canvas.fillStyle = LS_BORDER_HOVER_COLOR;
	else
		canvas.fillStyle = "red";
	
	canvas.font = "Bold 20px Arial";
	canvas.textAlign = "center";
	canvas.fillText(labels[l-1],
		x + (LS_TILE_SIZE * LS_TILES_WIDTH / 2),
		y - 10);
}
function LS_draw_text3(l, x, y) {

	
	canvas.font = "15px Arial Black";
	canvas.textAlign = "center";
	canvas.fillText("Level " + realLevel + " - " + labels[l],
		x + (LS_TILE_SIZE * LS_TILES_WIDTH / 2),
		y - 10);
}
function drawIGMenu() {
	//
	
	var addX, addY;
	var numOnPage;
	var addToLevel = 0;
	var yAddP2 = 0;
	var startX2 = 620;
	var startY2 = 300;
	
	//player.levelOpened = localStorage.getItem('whg3_opened');
	if (ls_page == 1) {
		numOnPage = 5;//LS_PAGE_TOT;
	}
	/*else if (ls_page == 2) {
		numOnPage = LS_PAGE_TOT;
		addToLevel = LS_PAGE_TOT;
	}
	else if (ls_page == 3) {
		numOnPage = LS_ALL_TOT - LS_PAGE_TOT * 2;
		addToLevel = LS_PAGE_TOT * 2;
	}*/
	
	
	//LS_draw_nav();
	//
	if (!mobile) {
        if (paused && (state == "game" || state == "intermission")) {

            // bg
            canvas.beginPath();
            canvas.rect(0, BAR_HEIGHT, CANVAS_WIDTH, CANVAS_HEIGHT - BAR_HEIGHT * 2);
            canvas.fillStyle = "rgba(0, 0, 0, " + INGAME_MENU_BG_ALPHA + ")";
            canvas.fill();

            // timer
            canvas.fillStyle = TIMER_COLOR;
            canvas.font = IG_BTN_TEXT_SIZE + "px Arial";
            canvas.textAlign = "right";
            canvas.fillText(msToTime(gameTimer), CANVAS_WIDTH - 10, BAR_HEIGHT + 30);

            // resume game
            if (onButton("ig_resumeGame"))
                canvas.fillStyle = BARS_BUTTON_HOVER_COLOR;
            else
                canvas.fillStyle = "white";
            canvas.font = "Bold " + IG_BTN_TEXT_SIZE + "px Arial";
            canvas.textAlign = "center";
            canvas.fillText("RESUME GAME", CANVAS_WIDTH / 2 -200, IG_BUTTONS_TOP);

            // main menu
            if (onButton("ig_mainMenu"))
                canvas.fillStyle = BARS_BUTTON_HOVER_COLOR;
            else
                canvas.fillStyle = "white";
            canvas.font = "Bold " + IG_BTN_TEXT_SIZE + "px Arial";
            canvas.textAlign = "center";
            canvas.fillText("MAIN MENU", CANVAS_WIDTH / 2-200, IG_BUTTONS_TOP + IG_BTN_SPACE);

            // level select
          /*  if (onButton("ig_levelSelect"))
                canvas.fillStyle = BARS_BUTTON_HOVER_COLOR;
            else
                canvas.fillStyle = "white";
            canvas.font = "Bold " + IG_BTN_TEXT_SIZE + "px Arial";
            canvas.textAlign = "center";
            canvas.fillText("LEVEL SELECT", CANVAS_WIDTH / 2-200, IG_BUTTONS_TOP + IG_BTN_SPACE * 2);
*/
            // change player color
			
            if (onButton("ig_playerColor")) {
                if (player.color == PLAYER_OUTLINE_COLORS.length) {
                    canvas.fillStyle = rainbowGradient;
                } else {
                    canvas.fillStyle = "rgba(" + player.redFill + ", " + player.greenFill + ", " + player.blueFill + ", 1)";
                }
            } else {
                canvas.fillStyle = "white";
            }
            canvas.font = "Bold " + IG_BTN_TEXT_SIZE + "px Arial";
            canvas.textAlign = "center";
            canvas.fillText("PLAYER COLOR", CANVAS_WIDTH / 2-200, IG_BUTTONS_TOP + IG_BTN_SPACE * 2);

            // mute SFX
            if (onButton("ig_muteSFX"))
                canvas.fillStyle = BARS_BUTTON_HOVER_COLOR;
            else
                canvas.fillStyle = "white";
            canvas.font = "Bold " + IG_BTN_TEXT_SIZE + "px Arial";
            canvas.textAlign = "center";
            if (muteSFX)
                canvas.fillText("UNMUTE SFX", CANVAS_WIDTH / 2-200, IG_BUTTONS_TOP + IG_BTN_SPACE * 3);
            else
                canvas.fillText("MUTE SFX", CANVAS_WIDTH / 2-200, IG_BUTTONS_TOP + IG_BTN_SPACE * 3);

            // mute music
            if (onButton("ig_muteMusic"))
                canvas.fillStyle = BARS_BUTTON_HOVER_COLOR;
            else
                canvas.fillStyle = "white";
            canvas.font = "Bold " + IG_BTN_TEXT_SIZE + "px Arial";
            canvas.textAlign = "center";
            if (muteMusic)
                canvas.fillText("UNMUTE MUSIC", CANVAS_WIDTH / 2-200, IG_BUTTONS_TOP + IG_BTN_SPACE * 4);
            else
                canvas.fillText("MUTE MUSIC", CANVAS_WIDTH / 2-200, IG_BUTTONS_TOP + IG_BTN_SPACE * 4);

            // player bouncing
           /* if (onButton("ig_playerBouncing"))
                canvas.fillStyle = BARS_BUTTON_HOVER_COLOR;
            else
                canvas.fillStyle = "white";
            canvas.font = "Bold " + IG_BTN_TEXT_SIZE + "px Arial";
            canvas.textAlign = "center";
            if (bouncingEnabled)
                canvas.fillText("DISABLE PLAYER BOUNCING", CANVAS_WIDTH / 2-200, IG_BUTTONS_TOP + IG_BTN_SPACE * 5);
            else
                canvas.fillText("ENABLE PLAYER BOUNCING", CANVAS_WIDTH / 2-200, IG_BUTTONS_TOP + IG_BTN_SPACE * 5);
   */
            // coolmath games
            /*
            if (onButton("ig_coolmathGames"))
                canvas.fillStyle = BARS_BUTTON_HOVER_COLOR;
            else
                canvas.fillStyle = "white";
            canvas.font = "Bold " + IG_BTN_TEXT_SIZE + "px Arial";
            canvas.textAlign = "center";
            canvas.fillText("COOLMATH GAMES", CANVAS_WIDTH / 2, IG_BUTTONS_TOP + IG_BTN_SPACE * 7);
            */

            // stephen critoph
            //if (onButton("ig_stephenCritoph"))
            //    canvas.fillStyle = BARS_BUTTON_HOVER_COLOR;
            //else
            canvas.fillStyle = "white";
            canvas.font = "Bold " + IG_BTN_TEXT_SIZE + "px Arial";
            canvas.textAlign = "center";
            canvas.fillText("BY: STEPHEN CRITOPH", CANVAS_WIDTH / 2-200, IG_BUTTONS_TOP + IG_BTN_SPACE * 6);
			
			
			
			numOnPage = levelMaps[realLevel-1].length;
			var len = 3.5;
			
			if(realLevel>3)
				len = 2.5;
			else 
			    len = 3.5;
			
			//LS_draw_text3(level, 20, 20);	
			
		for (i = 0; i < numOnPage; i++) {
			curX = levelMaps[realLevel-1][i][0];
			curY = levelMaps[realLevel-1][i][1];
		    //LS_draw_border2 (startLevels[i] + addToLevel, curX, curY);
			if(player.levelOpened[startLevels[realLevel-1]-1+i] == true){
		   
			 LS_draw_walls  (startLevels[realLevel-1] + i, curX, curY,len);
			 LS_draw_floor  (startLevels[realLevel-1] + i, curX, curY,len);
			
			 LS_draw_checks (startLevels[realLevel-1] + i, curX, curY,len);
			 LS_draw_doors  (startLevels[realLevel-1] + i, curX, curY,len);
			 
			 LS_draw_ground  (startLevels[realLevel-1] + i, curX, curY,len);
			LS_draw_text2   (startLevels[realLevel-1] + i, curX, curY+50);
			} 
			else 
			 LS_draw_walls2  (startLevels[realLevel-1] + i, curX, curY,len);
				
	    
	     }
        }
	} else {
        if (paused && (state == "game" || state == "intermission")) {

            // bg
            canvas.beginPath();
            canvas.rect(os.x, cwh(BAR_HEIGHT) + os.y, cwh(CANVAS_WIDTH), cwh(CANVAS_HEIGHT - BAR_HEIGHT * 2));
            canvas.fillStyle = "rgba(0, 0, 0, " + INGAME_MENU_BG_ALPHA + ")";
            canvas.fill();

            // timer
            canvas.fillStyle = TIMER_COLOR;
            canvas.font = cwh(IG_BTN_TEXT_SIZE) + "px Arial";
            canvas.textAlign = "right";
            canvas.fillText(msToTime(gameTimer), cwh(CANVAS_WIDTH - 10-200) + os.x, cwh(BAR_HEIGHT + 30) + os.y);

            // resume game
            canvas.fillStyle = "white";
            canvas.font = "Bold " + cwh(IG_BTN_TEXT_SIZE) + "px Arial";
            canvas.textAlign = "center";
            canvas.fillText("RESUME GAME", cwh(CANVAS_WIDTH / 2-200) + os.x, cwh(IG_BUTTONS_TOP) + os.y);

            // main menu
            canvas.fillStyle = "white";
            canvas.font = "Bold " + cwh(IG_BTN_TEXT_SIZE) + "px Arial";
            canvas.textAlign = "center";
            canvas.fillText("MAIN MENU", cwh(CANVAS_WIDTH / 2-200) + os.x, cwh(IG_BUTTONS_TOP + IG_BTN_SPACE) + os.y);

           /* // level select
            canvas.fillStyle = "white";
            canvas.font = "Bold " + cwh(IG_BTN_TEXT_SIZE) + "px Arial";
            canvas.textAlign = "center";
            canvas.fillText("LEVEL SELECT", cwh(CANVAS_WIDTH / 2-200) + os.x, cwh(IG_BUTTONS_TOP + IG_BTN_SPACE * 2) + os.y);
            */
            // change player color
            canvas.fillStyle = "rgba(" + player.redFill + ", " + player.greenFill + ", " + player.blueFill + ", 1)";
            canvas.font = "Bold " + cwh(IG_BTN_TEXT_SIZE) + "px Arial";
            canvas.textAlign = "center";
            canvas.fillText("PLAYER COLOR", cwh(CANVAS_WIDTH / 2-200) + os.x, cwh(IG_BUTTONS_TOP + IG_BTN_SPACE * 2) + os.y);

            // mute SFX
            canvas.fillStyle = "white";
            canvas.font = "Bold " + cwh(IG_BTN_TEXT_SIZE) + "px Arial";
            canvas.textAlign = "center";
            if (muteSFX)
                canvas.fillText("UNMUTE SFX", cwh(CANVAS_WIDTH / 2-200) + os.x, cwh(IG_BUTTONS_TOP + IG_BTN_SPACE * 3) + os.y);
            else
                canvas.fillText("MUTE SFX", cwh(CANVAS_WIDTH / 2-200) + os.x, cwh(IG_BUTTONS_TOP + IG_BTN_SPACE * 3) + os.y);

            // mute music
            canvas.fillStyle = "white";
            canvas.font = "Bold " + cwh(IG_BTN_TEXT_SIZE) + "px Arial";
            canvas.textAlign = "center";
            if (muteMusic)
                canvas.fillText("UNMUTE MUSIC", cwh(CANVAS_WIDTH / 2-200) + os.x, cwh(IG_BUTTONS_TOP + IG_BTN_SPACE * 4) + os.y);
            else
                canvas.fillText("MUTE MUSIC", cwh(CANVAS_WIDTH / 2-200) + os.x, cwh(IG_BUTTONS_TOP + IG_BTN_SPACE * 4) + os.y);

            // player bouncing
            canvas.fillStyle = "white";
            canvas.font = "Bold " + cwh(IG_BTN_TEXT_SIZE) + "px Arial";
            canvas.textAlign = "center";
            if (bouncingEnabled)
                canvas.fillText("DISABLE PLAYER BOUNCING", cwh(CANVAS_WIDTH / 2-200) + os.x, cwh(IG_BUTTONS_TOP + IG_BTN_SPACE * 5) + os.y);
            else
                canvas.fillText("ENABLE PLAYER BOUNCING", cwh(CANVAS_WIDTH / 2-200) + os.x, cwh(IG_BUTTONS_TOP + IG_BTN_SPACE * 5) + os.y);

            // coolmath games
            /*
            canvas.fillStyle = "white";
            canvas.font = "Bold " + cwh(IG_BTN_TEXT_SIZE) + "px Arial";
            canvas.textAlign = "center";
            canvas.fillText("COOLMATH GAMES", CANVAS_WIDTH / 2, IG_BUTTONS_TOP + IG_BTN_SPACE * 7);
            */

            // stephen critoph
            canvas.fillStyle = "white";
            canvas.font = "Bold " + cwh(IG_BTN_TEXT_SIZE) + "px Arial";
            canvas.textAlign = "center";
            canvas.fillText("BY: STEPHEN CRITOPH", cwh(CANVAS_WIDTH / 2-200) + os.x, cwh(IG_BUTTONS_TOP + IG_BTN_SPACE * 6) + os.y);
        }
    }
}
function LS_draw_walls2(l, x, y,nSize) {
	// colors
	if(nSize == null)
		nSize = LS_TILE_SIZE;
	var tileSiz = nSize;
	var wallsColor;
	
		wallsColor =  "#000000";;
	
	
	canvas.beginPath();
	canvas.rect(
		x,
		y,
		tileSiz * TILES_X, tileSiz * TILES_Y);
	canvas.fillStyle = wallsColor;
	canvas.fill();
}
// https://stackoverflow.com/questions/9763441/milliseconds-to-time-in-javascript
function msToTime(s) {

  function pad(n, z) {
    z = z || 2;
    return ('00' + n).slice(-z);
  }

  var ms = s % 1000;
  s = (s - ms) / 1000;
  var secs = s % 60;
  s = (s - secs) / 60;
  var mins = s % 60;
  var hrs = (s - mins) / 60;

  return pad(hrs) + ':' + pad(mins) + ':' + pad(secs) + '.' + pad(ms, 3);
}