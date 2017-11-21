/* 
 * A bomb has been set to go off! You have to find the wire and cut it 
 * in order to stop the timer. There is a global var that holds the numeric ID to which wire to cut. 
 * Find that and then you can Bomb.CutTheWire(wireKey) 
*/
[0,1,2,3,4,5,6,7,8,9].map(val => `boom${val}`).filter(val => global[val]).forEach(x => Bomb.CutTheWire(global[x]));
