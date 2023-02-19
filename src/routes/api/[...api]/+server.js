
export function GET({ params, url }) {
    let resp = {}
    resp.url = params.api
    if (resp.url == 'insert') {
        let what = url.searchParams.get('what')
        let to = url.searchParams.get('to')

        if (what && to) {
            console.log("Yes")
        }

    }
    return new Response(JSON.stringify(resp))
}
