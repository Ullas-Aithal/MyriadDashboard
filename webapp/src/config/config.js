var config = {
    domainName: 'http://localhost:3000/',
    //More information on currency converter API https://free.currencyconverterapi.com/ 
    currencyConverter:{
        url:'https://free.currencyconverterapi.com/api/v5/convert?q=',
        fromCurrency: 'USD',
        toCurrency: 'INR',
        getUrl: function(){
            return this.url + this.fromCurrency + '_' + this.toCurrency + '&compact=y';
        }
    },
}
export default config