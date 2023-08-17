/* This image loaded tried to give the gif 1 full rotation by using gifMilliseconds minus performance.now() which returns miliseconds */

let imageCount = 0;
const documentImages = document.getElementsByClassName(`loading-image`)
const loader = document.getElementById("loader")
const loadedDocument = document.getElementById("loaded-document");
const gifMilliseconds = 2600

function addToImageCount(){
    
    imageCount += 1;
    console.log(`${imageCount} of ${documentImages.length} loaded`);
    
    if(imageCount === documentImages.length){
        
        const loadedTime = performance.now()
        //console.log(loadedTime);
       
        setTimeout(function(){

            /* allows loader opacity to change 500 ms on the css animation */
            loader.style.opacity = 0;

            /* hides the loader after the fade */
            setTimeout(function(){
                loader.style.display =  `none`
            }, 500)

            loadedDocument.style.display = `block`;
            
        }, gifMilliseconds - loadedTime)

        
    }

}



