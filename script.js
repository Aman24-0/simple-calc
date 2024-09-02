let string = "";
let buttons = document.querySelectorAll('.but');
let display = document.querySelector('input');

Array.from(buttons).forEach((button) => {
   button.addEventListener('click', (e) => {
      let buttonValue = e.target.innerHTML.trim();  // Trim any extra spaces
      console.log("Button clicked:", buttonValue);  // Debugging: see which button is clicked

      if (buttonValue === '=') {
         try {
            string = eval(string.replace(/\s/g, ''));  // Remove spaces before eval
            display.value = string;
         } catch (error) {
            console.error("Evaluation error:", error);
            display.value = "Error";
            string = "";  // Reset the string if there's an error
         }
      } else if (buttonValue === 'AC') {
         string = "";
         display.value = string;
      } else if (buttonValue === 'D'){
         string = string.slice(0, -1);
         display.value = string.replace(/\s/g, '');  // Display without spaces
      }
      else {
         string += buttonValue;
         display.value = string.replace(/\s/g, '');  // Display without spaces
      }
      console.log("Current string:", string);  // Debugging: see the current input string
   });
});

