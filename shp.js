class shp{
    constructor(){
        this.api = "https://shp.lol/shortlink/create.php"
        this.headers={"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0","content-type":"application/json; charset=UTF-8"}
    }
    async short_url(url){
        let req=await fetch(`${this.api}?extensions=1&format=text&logstats=1&url=${url}`,{method:"GET",headers: this.headers});
        return await req.text();
    }
}
module.exports = {shp};