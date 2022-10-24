/* import fetch from "node-fetch"; */

export default function pinnedRepoList() {
	return new Promise ((resolve) => {
		try {
			fetch('https://gh-pinned-repos.egoist.dev/?username=eams1798')
				.then((response) => response.json()).then((data) => resolve(data))
		} catch(err) {
			console.log("it was not possible to get the pinned repositories from github" , err);
		}
	})
}

/*console.log(await get_repo());*/
