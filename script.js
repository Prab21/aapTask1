$(function() {  
  $('#clickme').click(function() {
       $.ajax({
       url: 'data.json',
       dataType: 'json',
       success: function(data) {
          //var items = [];
    var d="";
		  var items =data.data.allInfluencers;
		  console.log(items);
    d+='<table style="width:100%;">';
    d+='<tr><th>Username</th><th>Follower Count</th><th>Likes Ratio</th><th>Comments Ratio</th><th>Picture</th></tr>';

		 for(var i=0;i<items.length;i++){
      // console.log([i]+items[i]);   
      // console.log([i]+items[i].picture.status);   

      d+='<tr><td>'+items[i].username+'</td>'+
      '<td>'+(items[i].stats?items[i].stats.followerCount:'null')+'</td>'+
      '<td>'+(items[i].stats?items[i].stats.engagement.avgLikesRatio:'null')+'</td>'+
      '<td>'+(items[i].stats?items[i].stats.engagement.avgCommentsRatio:'null')+'</td>'+
      '<td><img src ="'+items[i].picture+'" alt="Not Found Here" height="120px" width="150px"></td></tr>';
		 }
      d+='</table>';
      $('div').append(d);
      },
      statusCode: {
         404: function() {
           alert('There was a problem with the server.  Try again soon!');
         }
       }
    });
  });
});