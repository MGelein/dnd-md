//Convert the content of the <pre>
let content = marked(document.getElementsByTagName('pre')[0].innerHTML);
//Now paste that content into the body
document.body.innerHTML = content;