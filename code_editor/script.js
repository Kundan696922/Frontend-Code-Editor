// window.onload = () => {
//   document.getElementById("code").value = `<!DOCTYPE html>
// <html>
// <head>
//   <title>Title</title>
//   <style>
//     body { font-family: sans-serif; color: green; }
//   </style>
// </head>
// <body>
//   <h1>Hello World</h1>
//   <script>
//     console.log("Hello from script!");
//   </script>
// </body>
// </html>`;
// };

// function runCode() {
//   const code = document.getElementById("code").value;
//   document.getElementById("output").srcdoc = code;
// }

const editor = CodeMirror.fromTextArea(document.getElementById("code"), {
  mode: "htmlmixed",
  theme: "dracula",
  lineNumbers: true,
  tabSize: 2,
  indentUnit: 2
});


const defaultHTML = `
<!DOCTYPE html>
<html>
<body>

  <h1 style="background-color: red;">Hello World!</h1>
  <p>This is a Code Editor Made by Kundan...</p>

</body>
</html>
    `.trim();

    // Wait for CodeMirror to be ready, then set value
    editor.setValue(defaultHTML);

    // Show the preview on load
    window.onload = function () {
      runHTML();
    };


// Live Preview in iframe
function runCode() {
  const htmlCode = editor.getValue();
  document.getElementById("output").srcdoc = htmlCode;
}


function toggleTheme() {
  document.body.classList.toggle("light");
}


function saveCode() {
  const code = document.getElementById("code").value;
  const blob = new Blob([code], { type: "text/html" });
  const a = document.createElement("a");
  a.download = "index.html";
  a.href = URL.createObjectURL(blob);
  a.click();
}

function toggleTheme() {
  document.body.classList.toggle("dark");
}


function toggleOrientation() {
  const container = document.getElementById("editor-container");
  container.classList.toggle("vertical");
  container.classList.toggle("horizontal");
}
