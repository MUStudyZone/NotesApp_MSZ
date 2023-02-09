export async function load({ params }) {
    let branch = params.brsem;
    let sem = branch[branch.length - 1]
    branch = branch.slice(0, branch.length - 1)

    let res = await fetch(`http://127.0.0.1:8000/notes/${branch}/${sem}`)
    let fet = await res.json()
    return { data: fet }
}