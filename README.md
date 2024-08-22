# shp
JavaScript library for shp.lol
# main
```js
async function main(){
    const {shp} = require('./shp');
    const url= new shp();
    let req=await url.short_url("url")
    console.log(req)
}
main()
```
