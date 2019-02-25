//Samuel Ilesanmi

var data; // JSON of all possible options
var dataLength; // length of objects in the JSON data

// var selectedItems = [];
var lastId;


//Initialize dynamic drop down
function init() {
  
   data  = choices.choices;

   console.log(data);

   console.log("Object.keys(data): " + Object.keys(data));
   console.log("Object.keys(data).length: "+ Object.keys(data).length);

   //get data length from the JSON object
   dataLength = Object.keys(data).length;

   //create dynamic select html elements
   selectElement("Main");
  

 
    //create elements for the select div
    function selectElement(dataKey){

       for(var i = 0;  i < dataLength; i++){
           if(data[i].key != dataKey){
               continue;
           }


           console.log("data[i].key " + data[i].key);

           //create a heading to label a specific menu
           var heading = document.createElement("h3");
           var textNode = document.createTextNode(data[i].description);
           heading.className = data[i].depth;
           heading.className = "h3";
           heading.appendChild(textNode);
           selectDiv.appendChild(heading);

           //create the select list element
           var selectList = document.createElement('select');
           selectList.id = data[i].key;
           selectList.name = data[i].description;
           selectList.className = data[i].depth;
           selectList.className = "selectdiv";
           // selectList.onchange = displayResult(this);
           selectDiv.appendChild(selectList);


           //create a null select option
           var nullOption = document.createElement("option");
           nullOption.text = "Select an option";
           nullOption.selected = this;
           nullOption.disabled = true;
           selectList.appendChild(nullOption);

           //create first select option
           var option1 = document.createElement("option");
           option1.value = data[i].option_1;
           option1.text = data[i].option_1;
           selectList.appendChild(option1);

            //create second select option
            var option2 = document.createElement("option");
            option2.value = data[i].option_2;
            option2.text = data[i].option_2;
            selectList.appendChild(option2);


              
              lastId = selectList.id;
           selectList.onchange = reload;
       }


         console.log("last ID: ", lastId);
        //Prints out selected item
         if(typeof lastId !== 'undefined'){
           document.getElementById(lastId).addEventListener("change", function(){
               console.log("select " + selectList);
               var selector = document.getElementById(selectList.id);
               var selectedValue = selector.options[selector.selectedIndex].value;

              var p = document.createElement("p");
              var paragraphNode = document.createTextNode(selectedValue);
              p.appendChild(paragraphNode);
              p.className = "p";
              display.appendChild(p);
            });



    }
        //Checks when to display button
        if (option1.value == "Large" || option2.value == "Small"){

                    var button1 = document.createElement("INPUT");
                    button1.setAttribute("class", "buttonStyle");
                    button1.setAttribute("id", "bStyle");
                    button1.setAttribute("type", "button");
                    button1.setAttribute("value", "Start Over");
                    button1.className = "button";

                    button1.onclick = function () {
                        location.reload();
                    };

                    button.appendChild(button1);

            }
        
        //checks to display image
       if (option1.value == "Brewed")  {
            myImage = document.getElementById('visual');
            myImage.src = 'assets/img/coffee.jpg';
        }

       if (option1.value == "Green Tea")  {
            myImage = document.getElementById('visual');
            myImage.src = 'assets/img/tea.jpg';
        }

        
       
    } 

    
//reloads when a new option is selected
    function reload(){

       console.log(this);
       console.log("this.className: " + this.className);
       console.log("this.value: " + this.value);


       removeElements(this.className);

       selectElement(this.value);

       //assigns the most recent selection value
       recentSelection = this;

    }


    function clearSelectElement(){

       //check for firstChild existence, if so remove that child
       while(selectDiv.firstChild){
           selectDiv.removeChild(selectDiv.firstChild);
       }
    }
  

     // Removes elements based on the depth of the question
     function removeElements(elementDepth) {

       // gets the current depth from the parameter
       var currentDepth = parseInt(elementDepth);

       // Loops through any elements that have a depth deeper than the previously changed select option
       for (var i = 3; i > currentDepth; i--) {

           // Gets all elements of a given depth
           var elementsToDelete = document.getElementsByClassName(i);

           // Deletes all elements that are the targeted depth
           while (elementsToDelete.length > 0) {
               elementsToDelete[0].parentNode.removeChild(elementsToDelete[0]);
           }
       }
   }


    
}//end of init function
window.onload = init;





