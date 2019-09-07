var canvas = document.getElementById('game');

var context = canvas.getContext('2d');

var id = setInterval(xuLyAPI, 5000); //Cứ 3s gọi hàm myAlert một lần

var count=0;
//
function xuLyAPI(){
	count++;
    if (count >= 100)
    	{
    		clearInterval(id);
    		return 0;
    	}
                //Ngắt lặp lại sau 5 lần
	var request = new XMLHttpRequest()

	request.open('GET', 'https://api.github.com/events', true)
	request.onload = function() {
	  // Begin accessing JSON data here
	  var data = JSON.parse(this.response) 
	  var needData = {
	  	'PushEvent':0,
	  	'DeleteEvent':0,
	  	'CreateEvent':0,
	  	'GistEvent':0,
	  	'IssueCommentEvent':0,
	  	'IssuesEvent':0,
	  	'PullRequestEvent':0,
	  	'WatchEvent':0
	  }
	  if (request.status >= 200 && request.status < 400) {
	    data.forEach(movie => {
	      // console.log(movie.type)
	      switch(movie.type)
	      {
	      	case 'PushEvent':{
	      		needData.PushEvent++
	      		break;
	      	}
	      	case 'DeleteEvent':{
	      		needData.DeleteEvent++
	      		break;
	      	}
	      	case 'CreateEvent':{
	      		needData.CreateEvent++
	      		break;
	      	}
	      	case 'GistEvent':{
	      		needData.GistEvent++
	      		break;
	      	}
	      	case 'IssueCommentEvent':{
	      		needData.IssueCommentEvent++
	      		break;
	      	}
	      	case 'PullRequestEvent':{
	      		needData.PullRequestEvent++
	      		break;
	      	}
	      	case 'WatchEvent':{
	      		needData.WatchEvent++
	      		break;
	      	}
			case 'IssuesEvent':{
	      		needData.IssuesEvent++
	      		break;
	      	}
			  	
	      }
	    })
	    console.log(needData)
	  } else {
	    console.log('error')
	  }
	  	var distance = 20;
		var colWidth = 40;
		var start = 50;
		context.clearRect(0,0,canvas.width,canvas.height);
		context.fillRect(40, 40, 1 , canvas.height-80);
		context.fillRect(40, canvas.height-40, canvas.width-80 , 1);
		context.fillText('PushEvent',start,canvas.height-20,50);
		context.fillText('DeleteEvent',start+=(colWidth+distance),canvas.height-20,50);
		context.fillText('CreateEvent',start+=(colWidth+distance),canvas.height-20,50);
		context.fillText('GistEvent',start+=(colWidth+distance),canvas.height-20,50);
		context.fillText('IssueCommentEvent',start+=(colWidth+distance),canvas.height-20,50);
		context.fillText('IssuesEvent',start+=(colWidth+distance),canvas.height-20,50);
		context.fillText('PullRequestEvent',start+=(colWidth+distance),canvas.height-20,50);
		context.fillText('WatchEvent',start+=(colWidth+distance),canvas.height-20,50);
		start =50;
		context.fillRect(start, canvas.height-40-needData.PushEvent*10, colWidth , needData.PushEvent*10);
	   	context.fillRect(start+=(colWidth+distance), canvas.height-40-needData.DeleteEvent*10, colWidth , needData.DeleteEvent*10);
	    context.fillRect(start+=(colWidth+distance), canvas.height-40-needData.CreateEvent*10, colWidth , needData.CreateEvent*10);
	    context.fillRect(start+=(colWidth+distance), canvas.height-40-needData.GistEvent*10, colWidth , needData.GistEvent*10);
	    context.fillRect(start+=(colWidth+distance), canvas.height-40-needData.IssueCommentEvent*10, colWidth , needData.IssueCommentEvent*10);
	    context.fillRect(start+=(colWidth+distance), canvas.height-40-needData.IssuesEvent*10, colWidth , needData.IssuesEvent*10);
	    context.fillRect(start+=(colWidth+distance), canvas.height-40-needData.PullRequestEvent*10, colWidth , needData.PullRequestEvent*10);
	    context.fillRect(start+=(colWidth+distance), canvas.height-40-needData.WatchEvent*10, colWidth , needData.WatchEvent*10);
	    start =50;
	    context.fillText(needData.PushEvent,start,canvas.height-40-needData.PushEvent*10-5,50);
		context.fillText(needData.DeleteEvent,start+=(colWidth+distance),canvas.height-40-needData.DeleteEvent*10-5,50);
		context.fillText(needData.CreateEvent,start+=(colWidth+distance),canvas.height-40-needData.CreateEvent*10-5,50);
		context.fillText(needData.GistEvent,start+=(colWidth+distance),canvas.height-40-needData.GistEvent*10-5,50);
		context.fillText(needData.IssueCommentEvent,start+=(colWidth+distance),canvas.height-40-needData.IssueCommentEvent*10-5,50);
		context.fillText(needData.IssuesEvent,start+=(colWidth+distance),canvas.height-40-needData.IssuesEvent*10-5,50);
		context.fillText(needData.PullRequestEvent,start+=(colWidth+distance),canvas.height-40-needData.PullRequestEvent*10-5,50);
		context.fillText(needData.WatchEvent,start+=(colWidth+distance),canvas.height-40-needData.WatchEvent*10-5,50);
		start =50;

	}

	request.send()
}
	// console.log(needData);
		