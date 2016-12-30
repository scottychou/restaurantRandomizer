var SearchItem = Backbone.Model.extend({
  defaults: {
    salePrice:0,  //used
    name:'nameHere',  //used
    addToCartUrl:'urlHere',  //used
    productUrl:'urlHere',  //used
    stock:'stockHere',  //used
    mediumImage:'imgLinkHere',
    thumbnailImage:'imgLinkHere'
  },
  // parse: function(response){
  //   return response.items[0];
  // }
});

var SearchView = Backbone.View.extend({
  // events: {
  //   "click h3": "alertStatus"
  // },
  // alertStatus: function(e){
  //   alert('you clicked the h3');
  // },
  render: function(){
    var html = '<div> <span>Walmart: </span>' +
               '<span>' + this.model.get('salePrice') + ' </span>' +
               '<span>' + this.model.get('stock') + ' </span>' +
               '<a href=' + this.model.get('productUrl') + '>View Product </a>' +
               '<a href=' + this.model.get('addToCartUrl') + '>addToCart</a></div>';
    $('#nes').append(html);
  }
});



$(document).ready(function(){
  var url = "https://api.walmartlabs.com/v1/search?apiKey=mvj53pyktstavp8gphy32rad&query=54043501"
    $.ajax({
            type:"GET",
            dataType:"jsonp",
            url: url,
            success: function(result){
              console.log(result);
              var searchItem = new SearchItem(result.items[0]);
              var searchView = new SearchView({model:searchItem});
              searchView.render();
            }
      });
  var url2 = "http://www.toysrus.com/product/index.jsp?productId=106283536"
    $.ajax({
            type:"GET",
            dataType:"jsonp",
            url: url2,
            success: function(data){
              console.log(data);
              // var searchItem = new SearchItem(result.items[0]);
              // var searchView = new SearchView({model:searchItem});
              // searchView.render();
            }
      });
});
