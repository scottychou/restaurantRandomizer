console.log("hello");

$(document).ready(function(){
  var url = "https://api.yelp.com/v2/search/?term=food&location=Vernon Hills, IL"
    $.ajax({
            type:"GET",
            dataType:"jsonp",
            url: url,
            success: function(result){
              console.log(result);
              // var searchItem = new SearchItem(result.items[0]);
              // var searchView = new SearchView({model:searchItem});
              // searchView.render();
            }
      });
      params: {
          oauth_consumer_key: "YirOJ1Q7_PiRtwxVcO5ydQ",
          oauth_token: "skH0Hyk3E_4pz-E0NfXhygjITfa0IGcv",
          oauth_signature_method: "HMAC-SHA1",
          oauth_signature: "AM1PcpjkWy8lFDaa-pteI3URRpQ",
          oauth_timestamp: new Date().getTime(),
          oauth_nonce: randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')
      }
});
