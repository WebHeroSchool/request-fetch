var newDiv = document.createElement('div');
fetch('https://api.github.com/users/saifieva98')
	.then(res => res.json)
	.then(json => newDiv.innerHTML = json.name)
	.then(json => newDiv.innerHTML = json.bio)
	.then(json => newDiv.innerHTML = json.avatar_url)
	.catch(err => console.log(err));
