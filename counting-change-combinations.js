var countChange = function(money, coins) {
  if(money < 0 || coins.length === 0)
    return 0
  else if(money === 0)
    return 1
  else
    console.log(`money: ${money}, coins:${coins}`);
    return countChange(money - coins[0], coins) + countChange(money, coins.slice(1))
}

countChange(10,[5,3,2]);