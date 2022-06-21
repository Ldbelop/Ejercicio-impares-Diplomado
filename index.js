function calcularImpares(){
    let number1 = document.getElementById('number1').value;
   
    
    let number2 = document.getElementById('number2').value;

    let imparChecker = (number) => {
        if(number % 2 == 0)
        {
            return true
        }
        else if(number % 2 != 0)
        {
            return false
        }
            
    };

    if(number1 == number2){
        let number1Checked = imparChecker(number1);
        
        if(number1Checked == true)
        {
            alert(`El número ${number1} es par`)
        }
        
        if(number1Checked == false)
        {
            alert(`El número ${number1} es impar`)
        }
    }

    else{
        let number1Checked = imparChecker(number1);
        let number2Checked = imparChecker(number2);
        
        if(number1Checked == true && number2Checked == true){
            alert(`El número ${number1} es par, y el número ${number2} es par`)   
        }
        
        else if(number1Checked == true && number2Checked == false){
            alert(`El número ${number1} es par, y el número ${number2} es impar`)   
        }

        else if(number1Checked == false && number2Checked == false){
            alert(`El número ${number1} es impar, y el número ${number2} es impar`)   
        }

        else if(number1Checked == false && number2Checked == true){
            alert(`El número ${number1} es impar, y el número ${number2} es par`)   
        }
    }
}