let input_element=document.querySelector('input');
let cal_button=document.querySelectorAll('.calculator');

for(let button of cal_button){
    button.addEventListener('click',function(event){
        let button_text=event.target.innerText;
        // console.log(button_text);
        if(button_text==='AC'){
            input_element.value="";
        }
        else if(button_text=='='){
            try{

                input_element.value=eval(input_element.value);
            }
            catch(error){

                input_element.value="invalid";
            }
        }
        else{
            input_element.value+=button_text;
        }

    })
}

