		const url = `https://api.github.com/repos/bearwalker/GitAtom/commits`

		fetch(url)
		.then(response => response.json())
		.then(data => {
			let div = document.querySelector('#commits');
			data.forEach(commit => {
				let p = document.createElement('p');
				let a = document.createElement('a');
				let date = new Date(commit['commit']['author']['date'])
				let dString = date.toLocaleDateString()
				a.textContent = `${dString} - ${commit['commit']['message']}`
				a.href = commit['html_url'];
				p.append(a);
				div.append(p);
			});
		})
		.catch(error => console.error(error))

		document.querySelector('#research-item-1').src = "https://storage.googleapis.com/gitatomsite/Technologies_%20Atom%20File%20Format.pdf"
		document.querySelector('#research-item-2').src = "https://storage.googleapis.com/gitatomsite/Technologies_%20Githooks.pdf"
		document.querySelector('#research-item-3').src = "https://storage.googleapis.com/gitatomsite/Technologies_%20Pygit2.pdf"
		document.querySelector('#research-item-4').src = "https://storage.googleapis.com/gitatomsite/Technologies_%20cmark.pdf"
		document.querySelector('#research-item-5').src = "https://storage.googleapis.com/gitatomsite/Technologies_Python%20Jinja.pdf"
		document.querySelector('#research-item-6').src = "https://storage.googleapis.com/gitatomsite/Publishing%20Research.pdf"
		document.querySelector('#research-item-7').src = "https://storage.googleapis.com/gitatomsite/Deploy.pdf"
		document.querySelector('#research-item-8').src = "https://storage.googleapis.com/gitatomsite/Design%20diagram.pdf"
		document.querySelector('#proposal-item-1').src = "https://storage.googleapis.com/gitatomsite/Capstone%20Midterm%20Report.pptx.pdf"
