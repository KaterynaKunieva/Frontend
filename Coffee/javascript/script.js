function newtable(){
    let table = document.getElementById("mytable");
    let row = table.insertRow(1);
    let cell1 = row.insertCell(0); 
    let cell2 = row.insertCell(1); 
    let cell3 = row.insertCell(2); 
    let cell4 = row.insertCell(3); 
    let cell5 = row.insertCell(4); 
    let cell6 = row.insertCell(5); 

    cell1.innerHTML = document.MyForm.ПІБ.value; 
    cell2.innerHTML = document.MyForm.Адреса.value; 
    cell3.innerHTML = document.MyForm.Телефон.value; 
    cell4.innerHTML = document.MyForm.Email.value; 
    cell5.innerHTML = document.MyForm.Тип.value; 
    cell6.innerHTML = document.MyForm.Кількість.value; 
}; 
