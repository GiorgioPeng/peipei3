import url from './baseURL'
const submit = async (data) => {
    // 拿出 口味 酸辣, 并删除原始数据
    data.spicy = data.taste[0]
    data.sour = data.taste[1]
    delete data.taste
    // 拿出 温度 冬夏, 并删除原始数据
    data.summer_temperature = data.temperature[0]
    data.winter_temperature = data.temperature[1]
    delete data.temperature

    // 运动 的映射
    {
        let tempString = ""
        if(data.sports[0]){
            tempString+='篮球|'
        }
        if(data.sports[1]){
            tempString+='乒乓球|'
        }
        if(data.sports[2]){
            tempString+='羽毛球|'
        }
        if(data.sports[3]){
            tempString+='滑板|'
        }
        if(data.sports[4]){
            tempString+='骑行|'
        }
        if(data.sports[5]){
            tempString+='游泳|'
        }
        if(data.sports[6]){
            tempString+='跑步|'
        }
        if(data.sports[7]){
            tempString+='足球|'
        }
        if(data.sports[8]){
            tempString+='健身|'
        }
        if(data.sports[9]){
            tempString+='舞蹈/瑜伽|'
        }
        tempString = tempString.substring(0,tempString.length-1);
        delete data.sports;
        data.sports = tempString;
    }
    // 书籍 的映射
    {
        let tempString = ""
        if(data.books[0]){
            tempString+='社会|'
        }
        if(data.books[1]){
            tempString+='技术|'
        }
        if(data.books[2]){
            tempString+='漫画|'
        }
        if(data.books[3]){
            tempString+='推理|'
        }
        if(data.books[4]){
            tempString+='科幻|'
        }
        if(data.books[5]){
            tempString+='言情|'
        }
        if(data.books[6]){
            tempString+='武侠|'
        }
        if(data.books[7]){
            tempString+='恐怖|'
        }
        if(data.books[8]){
            tempString+='玄幻|'
        }
        if(data.books[9]){
            tempString+='文学|'
        }
        tempString = tempString.substring(0,tempString.length-1);
        delete data.books;
        data.books = tempString;
    }
    // 游戏 的映射
    {
        let tempString = ""
        if(data.games[0]){
            tempString+='和平精英|'
        }
        if(data.games[1]){
            tempString+='王者荣耀|'
        }
        if(data.games[2]){
            tempString+='第五人格|'
        }
        if(data.games[3]){
            tempString+='阴阳师|'
        }
        if(data.games[4]){
            tempString+='动作|'
        }
        if(data.games[5]){
            tempString+='竞速|'
        }
        if(data.games[6]){
            tempString+='策略|'
        }
        if(data.games[7]){
            tempString+='沙盒|'
        }
        if(data.games[8]){
            tempString+='角色扮演|'
        }
        if(data.games[9]){
            tempString+='端游射击|'
        }
        tempString = tempString.substring(0,tempString.length-1);
        delete data.games;
        data.games = tempString;
    }

    console.log(data)
    const result = await fetch(url+"/students/"+data.id
    ,    {
        method: 'PUT',
        mode: 'cors',
        body: JSON.stringify(data),
        headers: new Headers({
            'Access-Control-Request-Method':'PUT',
            'Content-Type': 'application/json'
          })
    }).then(e=>e.json())

    // console.log(url)
    console.log(result)
}
export default submit;