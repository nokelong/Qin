 /**
  * 格式化数据
  * @param  {[type]}   data     数据集
  * @param  {[type]}   size     分割大小
  * @param  {Function} callback 回调方法
  * @return {[type]}            [description]
  */
export const rebuildData = (data,size,callback) =>{
      
    var fData = [];
    if(typeof size == "string"){
        size = Number(size);
    }        
    if(size){
        var dlen = data.length;
        var len = Math.floor(dlen / size);
        var mlen = dlen % size;

        for(var i = 0; i < len; i++){  //先处理能完全展示的数据
            var arr = [];
            for(var j = i * size; j < i * size + size; j++){                    
                arr.push(data[j]);
            }
            fData.push(arr);
        }
        if(mlen){  //如果处理后，多余数据，则单独展示
            var length = fData.length;
            var mArr = data.slice(dlen - mlen);
            fData.push(mArr);
            for(var k = 0; k < (size-mlen);k ++){
                var da = data[k] || data[k-1] || {};
                fData[length].push(da);
            }
        }            
    }else{
        fData = data;
    }
    if(callback&&typeof callback==='function'){
        callback(fData);
    } else return fData;
}
/**
 * [生成CGUID]
 * @return {[type]} [description]
 */
export const getCGUID = () =>{
    const padding = (n, m) =>{
        let len = (m || 2) - (1 + Math.floor(Math.log(n | 1) / Math.LN10 + 10e-16));
        return new Array(len + 1).join("0") + n;
    }
    let now = new Date();
    return '' + padding(now.getHours()) + padding(now.getMinutes()) + padding(now.getSeconds()) + padding(now.getMilliseconds(), 3) + padding(Math.ceil(Math.random() * 9999), 4);
}




