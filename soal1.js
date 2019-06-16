
function jumlahPasanganTerkecil(array){
    
    if(array.length<1|| array.length>1000){
       return new Error('Panjang array harus antara 1 sampai 1000')
    }
    array.sort();    
    let counter = 0
    let result = 0;
    
    while(counter<array.length){
        result += min(array[counter],array[counter+1])        
        counter+=2        
    }
    return result      
}

function min(a,b){
    if(a>b) return b
    return a
}





