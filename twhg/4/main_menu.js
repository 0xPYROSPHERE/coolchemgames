const BOTTOM_BUTTONS_Y = cwh(CANVAS_HEIGHT - BAR_HEIGHT - 10);
const BOTTOM_FONT = cwh(20) + "px Arial";

function drawMainMenu() {
	
	// music
	if (firstTimeOnMainMenu && !muteMusic) {
		music.play();
		firstTimeOnMainMenu = false;
	}
	
	// buttons
    /*if (!mobile) {
        if (onButton("mm_playGame"))
            canvas.drawImage(img_mainMenu_playGame, 0, BAR_HEIGHT);
        else if (onButton("mm_loadGame"))
            canvas.drawImage(img_mainMenu_loadGame, 0, BAR_HEIGHT);
        else if (onButton("mm_levelSelect"))
            canvas.drawImage(img_mainMenu_levelSelect, 0, BAR_HEIGHT);
        else if (onButton("mm_moreGames"))
            canvas.drawImage(img_mainMenu_moreGames, 0, BAR_HEIGHT);
        else
            canvas.drawImage(img_mainMenu, 0, BAR_HEIGHT);
    } else {*/
        canvas.drawImage(img_mainMenu, os.x, cwh(BAR_HEIGHT) + os.y, cwh(MENU_IMG_WIDTH), cwh(MENU_IMG_HEIGHT));
    //}

	if(menu_continue == false){	
	        if (onButton("mm_playGame"))
                canvas.fillStyle = BARS_BUTTON_HOVER_COLOR;
            else
                canvas.fillStyle = "black";
			
	        //canvas.fillStyle = "black";
            canvas.font = "bold 60px Arial";
			
            canvas.textAlign = "left";
            canvas.fillText("NEW GAME", MENU_IMG_WIDTH/2 -MENU_IMG_WIDTH/2 +80, CANVAS_HEIGHT/2+ 100);

            canvas.beginPath();
            //canvas.rect(153, 491, 20, 3);
            canvas.fill();
			
			
	    
			if (localStorage.getItem("whg4_level") != null) 
			 loadSavedCoins();
			
			if(getCoinsCollectedAll()!=0)
					   player.firstLaunch = 1;
				   else {
					   if(parseInt(localStorage.getItem("whg4_level"))>1)
					    player.firstLaunch = 1;
					   else 
						player.firstLaunch = 0;
					       
				   }
				
			
			
			if(player.firstLaunch>0){

			if (onButton("mm_continue"))
                canvas.fillStyle = BARS_BUTTON_HOVER_COLOR;
            else
                canvas.fillStyle = "black";
			
			canvas.font = "bold 60px Arial";
            canvas.textAlign = "left";
			
			
			
            canvas.fillText("CONTINUE", MENU_IMG_WIDTH/2 -MENU_IMG_WIDTH/2 +80 , CANVAS_HEIGHT/2 +200);

            canvas.beginPath();
            //canvas.rect(153, 491, 20, 3);
            canvas.fill();
			}
		}
     else {
		 if (onButton("mm_newgame"))
                canvas.fillStyle = BARS_BUTTON_HOVER_COLOR;
            else
                canvas.fillStyle = "black";
			
	        //canvas.fillStyle = "black";
            canvas.font = "bold 36px Arial";
			
            canvas.textAlign = "left";
            canvas.fillText("ERASE SAVE DATA", MENU_IMG_WIDTH/2 -MENU_IMG_WIDTH/2+ 40, CANVAS_HEIGHT/2+ 140);

            canvas.beginPath();
            //canvas.rect(153, 491, 20, 3);
            canvas.fill();
			
			
	   
				
			
			
			

			if (onButton("mm_home"))
                canvas.fillStyle = BARS_BUTTON_HOVER_COLOR;
            else
                canvas.fillStyle = "black";
			
			canvas.font = "bold 36px Arial";
            canvas.textAlign = "left";
			
			
			
            canvas.fillText("RETURN HOME", MENU_IMG_WIDTH/2 -MENU_IMG_WIDTH/2 +420 , CANVAS_HEIGHT/2 +140);

            canvas.beginPath();
            //canvas.rect(153, 491, 20, 3);
            canvas.fill();
		//
			
			canvas.fillStyle = "red";
			
			canvas.font = "bold 26px Arial";
            canvas.textAlign = "left";
			
			canvas.fillText("Warning: You will erase your saved progress if you continue.", MENU_IMG_WIDTH/2 -MENU_IMG_WIDTH/2 +30 , CANVAS_HEIGHT/2 +50);
			
            
            canvas.beginPath();
            //canvas.rect(153, 491, 20, 3);
            canvas.fill();
	 }
	     /*if(player.firstLaunch>0){

			
                canvas.fillStyle = "black";
			
			canvas.font = "bold 20px Arial";
            canvas.textAlign = "left";
			
			canvas.fillText("Pressing New Game will remove you progress", MENU_IMG_WIDTH/2 -MENU_IMG_WIDTH/2 +40 , CANVAS_HEIGHT/2 +50);
			
            
            canvas.beginPath();
            //canvas.rect(153, 491, 20, 3);
            canvas.fill();
			}*/
}

