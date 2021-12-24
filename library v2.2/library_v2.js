var books=[];
var table = document.querySelector("table>tbody");
var input = document.getElementsByTagName('input');
var button = document.getElementById('btn');
var lang = document.getElementById('lng');
var type = document.getElementsByName('types');
let email = document.getElementById('email');

var reg_price = new RegExp( '(^(\\d{1,5},\\d{1,2})$)|(^(\\d{1,5})$)');
var reg_email = new RegExp('(\\S+@[aA-zZ]+\\.\\w+)');


class Book {
    constructor(title,author,price,date,language,type){
       this.title =   title;
       this.author = author;
       this.price = price;
       this.date = date;
       this.language = language;
       this.type = type;
    } 
     
  bookDetails()
  {
      return "the name of the book is  "+this.title+"the author of the book is"+this.author+ "book is a "+this.type+"the price is"+this.price+"the publication date is "+this.date+"the language of the book is"+this.language+"the type of the book is a"+this.type;
  }
}


function validate(){
  let validation=0;
    for (let i = 0; i< input.length; i++){
          if(input[i].value == ''){
               validation++;
               input[i].style.borderColor = "red";
          }else{
               input[i].style.borderColor = "green";
          }
     }
     //title check  
     if(title.value.length > 30){
          validation++;
          title.style.borderColor = "red";
     }
     //author check
     if(author.value.length > 30){
          validation++;
          author.style.borderColor = "red";
     }
     //price check
     if(priceReg.test(price.value) == false){
          validation++;
          price.style.borderColor = "red";
     }

     //language check
     if(lang.value == ''){
          validation++;
          lang.style.borderColor = "red";
     }else{
          lang.style.borderColor = "green";
     }
     //email check
     if(reg_email.test(email.value)==false){
          validation++;
          email.style.borderColor = "red";
     }
     //type check
     let checked = false;
     for (var i = 0; i < type.length; i++) {
          if(type[i].checked){
               checked = true;
               var Stype = type[i].value;
               break;
          }else{
               checked = false;
          }
     }

}

// function add(){
//   validate();
      
//   let bk=new Book(inputs[0].value,inputs[1].value,inputs[2].value,inputs[3].value,select.value,radio.value);
//      books.push(bk);
  
//   var tr = document.createElement("tr")
//   tr.innerHTML = `<td>${bk.title}</td>
//   <td>${bk.author}</td>
//   <td>${bk.price}</td>
//   <td>${bk.date}</td>
//   <td>${bk.language}</td>
//   <td>${bk.type}</td>
//   `
  
//   table.appendChild(tr);
 
// }