const WORLD_W = 50;
const WORLD_H = 40; 
const WORLD_GAP = 2;
const WORLD_COLS = 20;
const WORLD_ROWS = 15; 

var levelOne = [0,48,0,0,0,0,0,0,0,0,0,0,0,48,0,0,0,0,48,0,  
        0,0,0,0,0,0,0,0,48,0,0,0,48,0,0,0,0,0,0,0,  
        48,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,48,0,0,0,  
        0,0,0,0,0,0,48,0,0,0,48,0,0,48,0,0,0,0,0,0,  
        0,0,0,48,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,  
        0,0,0,0,0,0,0,0,48,0,0,0,0,0,0,0,0,0,0,0,  
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,  
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,  
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,  
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,  
        0,0,0,0,0,0,0,0,0,49,50,50,50,52,0,0,53,0,0,1,    
        0,0,0,0,0,0,0,0,54,1,51,51,51,53,0,54,53,0,0,1,  
        2,0,0,0,0,0,0,54,1,1,0,0,0,1,1,1,1,0,0,1,  
        1,1,53,0,0,0,54,1,1,1,0,0,0,1,1,1,1,1,1,1,
        1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1];

var levelTwo = [ 11,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,  
         0,0,6,0,1,0,0,6,0,0,0,0,1,5,1,1,0,1,1,1,
         1,1,1,0,6,0,0,1,26,0,0,0,6,0,5,6,0,0,0,1,
         1,1,1,5,1,0,0,1,1,5,1,7,1,7,1,1,0,0,0,1,
         1,1,1,1,1,1,1,1,1,6,1,1,1,1,1,1,0,0,0,1,
         1,5,0,1,1,1,1,5,0,0,1,1,0,0,0,0,1,1,6,1,  
         1,1,5,1,1,1,1,1,1,1,0,6,0,0,0,5,1,0,0,1,
         1,1,6,1,0,0,0,0,5,1,0,1,7,0,0,0,1,0,1,1,
         2,0,0,0,0,0,0,0,0,1,0,1,1,0,1,6,1,0,0,1,
         1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,5,1,1,6,1,
         1,0,0,0,1,0,1,1,7,1,7,1,1,42,1,12,1,0,0,1,  
         1,0,0,0,1,0,1,1,1,1,1,1,1,5,1,1,0,0,0,1,
         1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,
         1,7,7,1,1,0,0,15,0,6,5,0,5,6,0,32,0,0,1,1,
         1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

var levelThree = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
          1,1,0,0,0,1,1,0,0,0,6,6,6,0,1,1,1,1,1,1,
          1,0,0,0,0,6,0,0,15,0,1,5,1,5,6,13,1,0,0,22,
          1,0,1,1,0,1,0,1,1,5,1,7,1,1,1,1,1,0,1,1,
          1,0,0,1,1,1,7,1,1,6,1,1,1,1,1,1,0,0,0,1,
          1,4,0,1,1,1,1,1,1,0,1,1,1,0,5,1,1,1,0,1,  
          1,4,0,1,1,1,1,1,1,0,1,0,6,0,1,1,1,0,0,1,
          1,4,0,1,1,0,5,1,0,0,1,0,1,0,1,1,1,0,1,1,
          1,4,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,
          1,4,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,
          1,4,0,1,1,0,1,7,1,0,6,0,1,0,0,0,1,0,0,1,  
          1,4,0,1,1,0,1,1,1,1,1,1,1,7,1,0,1,0,1,1,
          1,1,0,1,1,0,0,6,42,1,1,1,1,1,1,6,1,0,0,1,
          0,0,5,1,1,7,1,1,0,5,0,5,1,1,5,5,0,0,25,1,
          2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

var levelFour = [  1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,  
           2,0,0,0,0,0,0,0,0,0,0,0,5,0,15,1,1,1,1,1,
           1,1,1,1,1,1,5,1,1,1,1,1,1,6,1,1,1,1,1,1,
           1,0,5,5,1,1,1,1,1,5,0,0,6,0,0,0,0,0,0,1,
           1,6,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
           1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,6,1,  
           1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,
           1,0,0,6,0,0,0,0,0,0,6,0,0,5,1,1,14,0,0,1,
           1,6,1,1,1,1,1,1,1,1,1,1,6,1,1,1,1,0,0,1,
           1,0,1,1,0,0,0,0,0,0,0,0,0,0,5,1,5,0,25,1,
           1,0,1,5,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,  
           1,0,1,1,6,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,
           1,0,1,0,0,0,6,0,0,5,0,0,6,0,0,32,0,0,0,23,
           1,5,1,1,0,1,1,7,7,1,7,7,1,1,1,1,1,1,1,1,
           1,7,1,1,7,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

var levelFive = [  1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,24,1,1,1,  
           1,0,1,5,1,1,1,1,1,1,1,1,1,5,5,1,0,1,17,1,
           1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,6,1,                        
           1,0,1,0,1,1,0,0,1,1,1,1,1,6,1,1,0,0,0,1,
           2,0,1,0,0,0,15,0,0,0,0,0,0,0,1,1,1,0,1,1,  
           1,0,1,1,1,1,1,1,1,1,1,1,1,6,1,1,1,0,5,1,
           1,0,1,0,0,0,0,0,0,0,0,0,0,5,1,1,26,0,0,1,                                           
           1,0,1,0,0,1,1,1,1,1,1,1,7,1,1,1,1,6,1,1,  
           1,0,1,6,1,1,1,0,0,0,0,0,1,1,1,1,5,0,1,1,
           1,0,1,0,0,0,0,0,0,0,0,5,1,1,1,0,0,1,1,1,
           1,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,
           1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,                                                                                                                         
           1,0,1,0,0,0,1,0,0,0,1,0,6,6,0,0,32,0,18,1,
           1,0,0,0,1,0,0,0,1,42,1,1,1,1,1,1,1,1,1,1,
           1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

var levelSix = [  1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,  
            0,0,0,0,1,1,1,1,1,1,1,1,1,0,6,0,0,1,42,1,
            1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,5,1,0,1,                        
            1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,26,5,1,0,1,
            1,0,0,0,6,0,0,15,0,0,0,0,0,5,1,1,1,1,0,1,  
            1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,
            1,0,0,0,6,0,0,0,0,0,0,0,0,3,1,1,0,0,1,1,                                           
            1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,  
            1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,
            1,0,0,0,6,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,
            1,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,
            1,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,                                                                                                                         
            2,0,0,0,5,1,1,1,1,1,1,0,32,0,0,0,5,1,1,1,
            1,0,0,0,0,1,1,1,1,1,1,6,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,21,1,1,1,1,1,1,1,1];

var levelSix2 = [  1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,  
            2,0,0,0,1,1,1,1,1,1,1,1,1,0,6,0,0,1,42,1,
            1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,5,1,0,1,                        
            1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,26,5,1,0,1,
            1,0,0,0,6,0,0,15,0,0,0,0,0,5,1,1,1,1,0,1,  
            1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,
            1,0,0,0,6,0,0,0,0,0,0,0,0,3,1,1,0,0,1,1,                                           
            1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,  
            1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,
            1,0,0,0,6,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,
            1,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,
            1,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,                                                                                                                         
            0,0,0,0,5,1,1,1,1,1,1,0,32,0,0,0,5,1,1,1,
            1,0,0,0,0,1,1,1,1,1,1,6,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,21,1,1,1,1,1,1,1,1];

var levelSeven = [  1,2,1,1,1,1,1,1,1,1,1,1,1,27,1,1,1,1,1,1,  
            1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,    
            1,0,0,0,0,0,0,0,15,0,0,0,1,0,0,0,0,0,0,1,                          
            1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,  
            1,1,1,1,0,0,0,0,0,1,1,0,0,5,1,1,1,0,0,1,  
            1,0,0,6,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,  
            1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,  
            1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,    
            1,0,5,1,0,6,5,25,1,1,1,1,1,1,1,1,1,0,0,1,  
            1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,  
            1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,  
            1,1,1,1,1,1,1,1,1,1,1,1,1,6,1,1,1,1,0,1,                                                                                                                           
            1,0,42,0,0,0,0,0,0,0,0,32,0,0,0,0,0,0,0,1,  
            1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,  
            1,34,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

var levelEight = [  1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,  
            1,0,0,0,0,0,0,0,0,0,0,0,0,1,5,0,1,0,0,30,                          
            1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,6,0,1,1,                          
            1,0,0,1,1,0,1,0,33,1,0,1,0,1,0,0,1,0,1,1,                          
            1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,                          
            1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,                          
            1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,5,1,                          
            1,1,1,0,1,0,0,0,0,1,0,0,0,6,0,0,1,6,1,1,                          
            1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,                          
            1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,42,25,1,                          
            1,0,0,0,1,42,1,1,1,1,1,0,1,1,1,1,1,1,1,1,                          
            1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,                                                                                                                           
            1,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,
            1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,  
            1,2,1,1,1,1,1,1,1,1,1,5,1,1,1,1,1,1,1,1];
var levelEightTwo = [  1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,  
            1,0,0,0,0,0,0,0,0,0,0,0,0,1,5,0,1,0,0,30,                          
            1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,6,0,1,1,                          
            1,0,0,1,1,0,1,0,33,1,0,1,0,1,0,0,1,0,1,1,                          
            1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,                          
            1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,                          
            1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,5,1,                          
            1,1,1,0,1,0,0,0,0,1,0,0,0,6,0,0,1,6,1,1,                          
            1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,                          
            1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,42,25,1,                          
            1,0,0,0,1,42,1,1,1,1,1,0,1,1,1,1,1,1,1,1,                          
            1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,                                                                                                                           
            1,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,
            1,0,0,1,1,1,1,1,1,1,1,5,1,1,1,1,1,1,1,1,  
            1,0,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1];
            
var levelNine = [  1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,  
            2,0,0,1,0,0,1,1,0,0,0,0,0,0,6,0,0,0,0,31,                          
            1,0,0,1,0,0,1,1,0,0,0,0,0,8,1,1,1,1,1,1,                          
            1,0,1,1,42,0,1,1,0,0,0,0,0,4,0,0,0,0,0,1,                          
            1,0,0,1,45,0,0,1,1,0,0,0,0,4,0,0,0,0,0,1,                          
            1,1,0,1,0,0,0,0,1,0,0,0,0,4,0,0,0,0,0,1,                          
            1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,45,0,1,                          
            1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,                          
            1,0,0,1,5,37,0,1,1,1,1,0,0,0,0,0,0,0,0,1,                          
            1,1,0,1,1,0,0,0,1,1,1,1,0,37,0,0,0,0,0,1,                          
            1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,                          
            1,43,38,0,0,0,0,32,15,0,0,0,38,0,0,38,0,0,0,1,                                                                                                                           
            1,29,29,29,29,1,1,29,29,29,29,29,29,29,29,29,29,29,29,1,
            1,29,29,29,29,1,1,29,29,29,29,29,29,29,29,29,29,29,29,1,  
            1,29,29,29,29,1,1,29,29,29,29,29,29,29,29,29,29,29,29,29];

var levelTen = [    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,  
            2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,39,1,                          
            1,4,0,45,0,37,0,45,0,37,0,0,0,0,0,4,1,0,0,1,
            1,4,0,0,0,0,0,0,0,0,0,0,0,0,0,4,1,0,0,1,
            1,4,0,0,0,0,0,0,0,0,0,45,0,0,0,4,1,0,42,1,
            1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,1,1,1,1,                          
            1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,                          
            1,0,0,0,0,0,0,0,0,0,0,0,4,1,0,0,36,32,0,1,                          
            1,0,1,0,0,0,0,0,0,0,0,0,4,1,0,1,1,0,0,1,                          
            1,0,1,45,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,                          
            1,0,1,0,0,1,45,0,0,0,0,1,0,1,0,0,0,6,0,1,                          
            1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,5,1,5,1,                          
            1,0,1,0,0,1,0,0,1,26,42,1,0,0,1,0,0,1,25,1,                          
            1,29,1,29,29,1,29,29,1,35,35,1,29,29,1,25,35,1,35,1,                          
            1,29,1,29,29,1,29,29,1,1,1,1,29,29,1,1,1,1,1,1];  
            
            
var sideQuest1 = [
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,  
1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,1,0,1,                        
1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,1,0,1,
1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,1,42,1,  
1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,                                           
1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,  
1,0,1,26,0,0,0,0,0,0,25,0,0,0,0,0,0,0,25,1,
1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,
1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,                                                                                                                         
1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
1,0,1,42,0,0,0,0,0,0,32,0,0,0,0,0,0,0,0,46,
1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

var sideQuest2 = [
1,1,44,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,  
1,0,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,42,40,   
1,0,0,1,0,0,0,0,0,0,0,0,0,37,0,0,0,0,37,1,   
1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,   
1,0,38,1,0,38,0,38,0,38,0,38,0,0,0,0,38,0,0,1,   
1,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,1,                                           
1,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,1,  
1,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,1,
1,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,1,
1,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,1,
1,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,1,                                                                                                                         
1,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,1,
1,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

var sideQuest3 = [
1,1,1,1,1,1,1,1,1,1,41,1,1,1,1,1,1,1,1,1,  
1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,1,  
1,43,38,0,38,0,38,0,38,0,38,0,38,0,38,0,38,0,38,1,
1,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,1,
1,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,1,
1,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,1,                                           
1,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,1,  
1,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,1,
1,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,1,
1,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,1,
1,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,1,                                                                                                                         
1,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,1,
1,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

var sideQuest4 = [
1,1,1,1,1,1,1,1,1,1,47,1,1,1,1,1,1,1,1,1,  
1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,  
1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,  
1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,                          
1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1];

var levelList = [levelOne,levelTwo,levelThree,levelFour, levelFive,levelSix,levelSeven,levelEight,levelEightTwo,levelNine,levelTen,sideQuest1,sideQuest2,sideQuest3];
var levelNow = 0;
// var sideQuest=0;
// var sideQuestList = [sideQuest1,sideQuest2];
var worldGrid = [];      

const WORLD_EMPTY = 0;
const WORLD_WALL = 1; //World.js
const WORLD_PLAYERSTART = 2;
const WORLD_SLINGSHOT = 3; //World.js
const WORLD_LADDER = 4; //World.js
const WORLD_KEY = 5; //World.js
const WORLD_DOOR = 6; //World.js
const WORLD_TRAP =7; //World.js
const WORLD_LADDER_CONNECTOR = 8; //World.js
const WORLD_HERO = 9; 
const WORLD_UPPERROAD =10; //World.js
const WORLD_TUNNEL_UP =11; //World.js
const WORLD_SWORD =12; //World.js
const WORLD_ARROW =13; //World.js
const WORLD_SPEAR = 14; //World.js
const WORLD_RAT = 15; 
const WORLD_TUNNEL_RIGHT = 16; //World.js
const WORLD_CROSSBOW = 17; //World.js
const WORLD_TUNNEL_RIGHT_5=18; //World.js
const WORLD_ROCK=19; //World.js
const WORLD_BOMB=20; 
const WORLD_PIPE_BOTTOM=21; //World.js
const WORLD_TUNNEL_RIGHT_3=22; //World.js
const WORLD_TUNNEL_RIGHT_4=23; //World.js
const WORLD_PIPE_UP_SIDEQUEST1=24; //World.js
const WORLD_SKELETON=25; //Workd.js
const WORLD_SKELETON2=26; //Workd.js
const WORLD_PIPE_TOP7=27;
const WORLD_LOST_BOY=28;
const WORLD_WATER=29;
const WORLD_TUNNEL_RIGHT_8=30;
const WORLD_TUNNEL_RIGHT_9=31;
const WORLD_COCKROACH_EGG=32;
const WORLD_WOODEN_BOW=33;
const WORLD_PIPE_BOTTOM_SIDEQUEST2=34;
const WORLD_SKELETON_HEADS=35;
const WORLD_BOSS_COCKROACH=36;
const WORLD_SEWER_PIPE=37;
const WORLD_SLIME_PIPE=38;
const WORLD_BOY_COCOON=39;
const WORLD_PIPE_RIGHT_SIDEQUEST3=40;
const WORLD_PIPE_TOP_SIDEQUEST3=41;
const WORLD_ROCKET_BATTERY=42;
const WORLD_CURVE_PIPE=43;
const WORLD_SEWER_TRAP_LOCK_BAR=44;
const WORLD_SEWER_PIPE_WITH_BAR=45;
const WORLD_TUNNEL_RIGHT_6=46;
const WORLD_PIPE_TOP_SIDEQUEST4=47;
const WORLD_CLOUD1=48;
const WORLD_BRIDGESTICKS=49;
const WORLD_BRIDGEWOOD=50;
const WORLD_BRIDGEWOOD2_SOLID=51;
const WORLD_BRIDGESTICKS2=52;
const WORLD_WALL2 = 53;
const WORLD_WALL3 = 54;



// const WORLD_RAT2=20;
// const WORLD_COIN = 6;



// function isObstacleAtColRow(col,row){
//     if(col >=  0 && col < WORLD_COLS &&
//         row >= 0 && row < WORLD_ROWS){
//             var trackIndexUnderCoord = rowColToArrayIndex(col,row);
//             return (worldGrid[trackIndexUnderCoord] != WORLD_EMPTY);
//         } else {
//             return false;
//         }
    
// }

function returnTileTypeAtColRow(col,row){
    if(col >=  0 && col < WORLD_COLS &&
        row >= 0 && row < WORLD_ROWS){
            var trackIndexUnderCoord = rowColToArrayIndex(col,row);
            return worldGrid[trackIndexUnderCoord];
        } else {
            return WORLD_WALL;
        }
    
}


//     function heroTrackHandling(whichCar) {
//       var heroTrackCol = Math.floor(whichCar.x / WORLD_W);
//       var heroTrackRow = Math.floor(whichCar.y / WORLD_H);
//       var trackIndexUnderCar = rowColToArrayIndex(heroTrackCol, heroTrackRow);

//       if (heroTrackCol >= 0 && heroTrackCol < WORLD_COLS &&
//           heroTrackRow >= 0 && heroTrackRow < WORLD_ROWS) {
//           var tileHere = returnTileTypeAtColRow(heroTrackCol,heroTrackRow);
        

//            if (tileHere == WORLD_GOAL){
//             // whichCar.speed *= -0.5;
//             //   alert(whichCar.name + "Wins!");
//             // console.log(whichCar.name + "WINS!");
//             // loadLevel(levelList);
//             //  var audio = new Audio('esrom.wav')
//             // var audio = new Audio('blackfirewins.wav')
       
//                 var audio = new Audio('esrom.wav')
//                 audio.play();
       
           
//                    nextLevel();     
           
//                     // newLevel()
            
//           }else if (tileHere != WORLD_EMPTY) {
//                  whichCar.x -= Math.cos(whichCar.ang) * whichCar.speed;
// 		         whichCar.y -= Math.sin(whichCar.ang) * whichCar.speed;
//                  whichCar.speed *= -0.5;
//           }// end of track found
//       }// end of valid col and row
//    }// end of heroTrackHandling function

function getTileIndexAtPixelCoord(atX, atY) {
var heroWorldCol = Math.floor(atX / WORLD_W);
var warriorWorldRow = Math.floor(atY / WORLD_H);
var worldIndexUnderWarrior = rowColToArrayIndex(heroWorldCol, warriorWorldRow);

if(heroWorldCol >= 0 && heroWorldCol < WORLD_COLS &&
    warriorWorldRow >= 0 && warriorWorldRow < WORLD_ROWS) {
    return worldIndexUnderWarrior;
} // end of valid col and row

return undefined;
} // end of warriorWorldHandling func



function rowColToArrayIndex(col, row) {
return col + WORLD_COLS * row;
}

function tileTypeHasTransparency(checkTileType){
return(checkTileType == WORLD_SLINGSHOT ||
       checkTileType == WORLD_KEY ||
       checkTileType == WORLD_DOOR ||
       checkTileType == WORLD_TUNNEL_UP 
       );
}

function tileTypeCanBeMoveThrough(checkTileType){
return(checkTileType == WORLD_EMPTY ||
    checkTileType == WORLD_WATER ||
    checkTileType == WORLD_LADDER ||
    checkTileType == WORLD_CLOUD1 ||
    checkTileType == WORLD_BRIDGESTICKS ||
    checkTileType == WORLD_BRIDGEWOOD ||
    checkTileType == WORLD_BRIDGESTICKS2
    
    );
}

function drawTracks() {
var arrayIndex = 0;
var drawTileX = 0;
var drawTileY = 0;
for (var eachRow=0;eachRow<WORLD_ROWS; eachRow++) {
  for (var eachCol=0;eachCol<WORLD_COLS;eachCol++) {
    
      var arrayIndex = rowColToArrayIndex(eachCol, eachRow); 
      var tileKindHere = worldGrid[arrayIndex];
      var useImg = trackPics[tileKindHere];
   

   if( tileTypeHasTransparency(tileKindHere) ) {
        canvasContext.drawImage(trackPics[WORLD_EMPTY],drawTileX,drawTileY);
    }

    canvasContext.drawImage(useImg,drawTileX,drawTileY);

      drawTileX += WORLD_W;
      arrayIndex++;
  } // end of for each col      
  drawTileY += WORLD_H;
  drawTileX = 0;
     
} //endof for each row

}//end of drawTracks()

