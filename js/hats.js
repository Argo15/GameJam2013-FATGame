var hats=(function(){
    var hats;
    
    function getNewY(){
        return Math.random() * 30000; 
    }
    function getX(i){
        Path.getHeight(i);
    }

    var hat1Image = new Image();
    var hat2Image = new Image();
    var hat3Image = new Image();
    var hat4Image = new Image();
    var hat5Image = new Image();
    
    var addLayout = getLayoutFunction();
      
    hat1Image = addLayout(hat1Image);
    hat2Image = addLayout(hat2Image);
    hat3Image = addLayout(hat3Image);
    hat4Image = addLayout(hat4Image);
    hat5Image = addLayout(hat5Image);

    hat2Image.src = "../media/PNGS/hat2.png";
    hat1Image.src = "../media/PNGS/hat1.png";
    hat3Image.src = "../media/PNGS/hat3.png";
    hat4Image.src = "../media/PNGS/hat4.png";
    hat5Image.src = "../media/PNGS/hat5.png";
})