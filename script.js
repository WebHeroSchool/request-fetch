var body = document.body;
fetch('https://api.github.com/users/saifieva98')
	.then(res => res.json())
	.then(json => {
   	let name = document.createElement('h1');
   	name.innerHTML = json.name;
   	body.append(name);
   	name.addEventListener("click", () => window.location = json.html_url);
   	let description = document.createElement('p');
   	description.innerHTML = json.bio;
   	body.append(description);
   	let img = new Image();
   	img.src = json.avatar_url;
   	body.append(img);
	})
	.catch(err => console.log(err));
