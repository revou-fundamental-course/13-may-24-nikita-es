   
   const alas = document.getElementById('alas')
    const tinggi = document.getElementById('tinggi')
    const hitungl = document.getElementById('hitungl')
    const outputl = document.getElementById('outputl')
    hitung.addEventListener('click',function(){
        let a = alas.value 
        let t = tinggi.value
        let l = 0.5*a*t
        outputl.innerHTML = `Luas dari segitiga adalah ${l} cm2`
    })
    const sisi1 = document.getElementById('sisi1')
    const sisi2 = document.getElementById('sisi2')
    const sisi3 = document.getElementById('sisi3')
    const hitungk = document.getElementById('hitungk')
    const outputk = document.getElementById('outputk')
    hitungk.addEventListener('click',function(){
        let s1 = sisi1.value 
        let s2 = sisi2.value
        let s3 = sisi3.value
        let k = s1+s2+s3
        outputk.innerHTML = `Keliling bernilai ${k} cm2`
    })