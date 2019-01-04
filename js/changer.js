//Before we continue, we need to make sure we are on a .md file
//Wait for jq and marked to load before we continue
setTimeout(() => {

    //Now we're sure we can continue, since both have been loading
    $(document).ready(function () {
        let abort = checkFileType();
        //Don't continue if we're aborting
        if (abort) return;
        //Convert the content of the <pre>
        let content = marked(document.getElementsByTagName('pre')[0].innerHTML);
        //Now paste that content into the body
        document.body.innerHTML = content;
        //Set the classes on the body
        $('body').addClass('container');
        //And finally do the final parse
        //parseFinal();
    });
    //End of script, below it defines the amount of delay before continuing the script
}, 50);

/**
 * Checks if the file type we're currently viewing needs to be forwarded
 */
function checkFileType() {
    let url = window.location.href;
    if (url.substring(url.length - 3, url.length).toLowerCase() != '.md') {
        //Split on a slash
        let parts = url.split('/');
        //Read the final part, this is the containing folder or file
        for (let i = parts.length - 1; i >= 0; i--) {//Remove empty elements
            if (parts[i].trim().length < 1) parts.splice(i, 1);
        }
        //Now get the last part that is the folder
        let folder = parts[parts.length - 1].toLowerCase().trim();
        //Finally, check if any of the links on this page have the same name
        $('a.icon.file').each(function (index, link) {
            if ($(link).text().toLowerCase() == folder + '.md'){
                let newDest = $(link).attr('href');
                window.location.replace(newDest);
            }
        });
        return true;
    }
}