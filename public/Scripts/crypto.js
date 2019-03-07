window.onload = function() {

window.addEventListener('load', function() {
//is web3 on?
if (typeof web3 !== 'undefined') {
web3js = new Web3(web3.currentProvider);
} else {
console.log('No web3? You should consider trying MetaMask!')
}
started()

})

function started() {

console.log("MetaMask Installed");
var account = web3.eth.accounts[0];
console.log("USER: " + account);
}


// Checks what Network the user is on
web3.version.getNetwork((err, netId) => {
switch (netId) {
case "1":
  console.log('This is mainnet')
  break
case "2":
  console.log('This is the deprecated Morden test network.')
  break
case "3":
  console.log('This is the ropsten test network.')
  break
case "4":
  console.log('This is the Rinkeby test network.')
  break
case "42":
  console.log('This is the Kovan test network.')
  break
default:
  console.log('This is an unknown network.')
}
})

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function updatePrice() {
  var json_prices = httpGet("https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,NOK");
  //var json = httpGet("https://api.cryptowat.ch/markets/gdax/ethusd/price");
  obj = JSON.parse(json_prices);
  //obj2 = JSON.parse(json);
  console.log(obj);
  document.getElementById('price').innerHTML = obj.ETH.NOK;

}
updatePrice();
setInterval(updatePrice, 10000);
}
