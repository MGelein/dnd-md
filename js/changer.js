//Wait for jq and marked to load before we continue
setTimeout(() =>{

    //Now we're sure we can continue, since both have been loading
    $(document).ready(function () {
        //Convert the content of the <pre>
        let content = marked(document.getElementsByTagName('pre')[0].innerHTML);
        //Now paste that content into the body
        document.body.innerHTML = content;
        //Set the classes on the body
        $('body').addClass('container');
        //And finally do the final parse
        parseFinal();
    });
    //End of script, below it defines the amount of delay before continuing the script
}, 50);