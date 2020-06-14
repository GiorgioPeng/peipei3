import url from './baseURL'
const getOne = (id) => {
    let requestUrl = url+ `/students/${id}`
    fetch(requestUrl)
}
export default getOne;