function soma() {
    let n1 = prompt("Digite um número");
    let n2 = prompt("Digite outro número");
    
    let resu = parseInt(n1) + parseInt(n2);
    
    document.getElementById('res').innerHTML = 'Resultado: ' +resu
    }
    
    function sub() {
        let n1 = prompt("Digite um número");
        let n2 = prompt("Digite outro número");
        
        let resu = n1 -n2;
        
        document.getElementById('res').innerHTML = 'Resultado: ' +resu
        }
    
        function multi() {
            let n1 = prompt("Digite um número");
            let n2 = prompt("Digite outro número");
            
            let resu = parseInt(n1) * parseInt(n2);
            
            document.getElementById('res').innerHTML = 'Resultado: ' +resu
            }
    
            function divisão() {
                let n1 = prompt("Digite um número");
                let n2 = prompt("Digite outro número");
                
                let resu = parseInt(n1) / parseInt(n2);
                
                document.getElementById('res').innerHTML = 'Resultado: ' +resu
                }