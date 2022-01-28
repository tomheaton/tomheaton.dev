const getProjects = async (): Promise<object[]> => {

    const response = await fetch("https://gh-pinned-repos.egoist.sh/?username=tomheaton", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })

    return await response.json()
}

export default getProjects;