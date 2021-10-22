

var levelForestOne = [0,48,0,0,0,0,0,0,0,0,0,0,0,48,0,0,0,0,48,0,  
        0,0,0,0,0,0,0,0,48,0,0,0,48,0,0,0,0,0,0,0,  
        48,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,48,0,0,0,  
        0,0,0,0,0,0,48,0,0,0,48,0,0,48,0,0,0,0,0,0,  
        0,0,0,48,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,  
        0,0,0,0,0,0,0,0,48,0,0,0,0,0,0,0,0,0,0,0,  
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,  
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,  
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,65,  
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,63,62,  
        0,0,0,0,0,0,0,0,0,49,50,50,50,52,0,0,53,0,61,60,    
        0,0,0,0,0,0,0,0,54,53,51,51,51,53,0,54,53,0,61,59,  
        2,0,0,0,0,0,0,54,53,53,0,0,0,53,53,53,53,0,56,55,  
        53,53,53,0,0,0,54,53,53,53,0,0,0,53,53,53,53,53,53,53,
        53,53,53,53,53,53,53,53,53,53,0,0,0,53,53,53,53,53,53,53];

var levelForestTwo = [ 0,48,0,48,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,  
        0,0,0,48,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,    
        0,0,0,0,0,0,48,0,0,0,0,0,0,48,0,48,0,0,0,0,  
        48,0,0,0,0,0,0,48,0,0,0,0,0,0,0,0,0,0,0,0,  
        0,0,48,0,48,0,0,0,0,0,48,0,0,0,0,0,48,0,0,0,  
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,    
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,  
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,  
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,  
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,  
        62,63,0,0,0,0,0,0,53,53,53,0,0,0,0,0,0,0,0,0,    
        60,0,0,0,53,0,0,53,53,53,54,0,0,0,0,0,0,0,0,0,  
        59,0,0,53,53,0,0,0,53,53,0,0,53,53,0,0,0,0,0,0,  
        58,57,2,53,53,0,0,0,53,53, 0,0,53,0,0,0,0,0,0,0,  
         53,53,53,53,53,53,0,0,53,53,53,53,53,53,53,53,53,53,53,53];

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
var levelEightTwoForest = [  1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,  
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
            
var levelNineForest = [  1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,  
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

var levelListForest = [levelForestOne,levelForestTwo,levelThree,levelFour, levelFive,levelSix,levelSeven,levelEight,levelEightTwo,levelNine,levelTen,sideQuest1,sideQuest2,sideQuest3];





