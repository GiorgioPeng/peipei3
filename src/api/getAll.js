// import url from './baseURL'
const getAll = async () => {
    // let requestUrl = url + `/students`
    await fetch("http://139.196.227.130/students/110101200010220511"
    ,    {
        method: 'GET',
        mode: 'cors',
        // headers: {
    //         'Access-Control-Allow-Origin': '*',
    //     }
    }
    )
        .then(data => console.log(data))
        .catch(error => console.log(error))
}
export default getAll;