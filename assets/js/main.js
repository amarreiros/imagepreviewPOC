//function that reads the uploaded file and if he is a image
//show him on the correct div
function readImage(file) {
    // Check if the file is an image.
    
    if (file && file.type && !file.type.startsWith('image/')) {
      console.log('File is not an image.', file.type, file);
      return;
    }
    //Create a Object to read the file
    const reader = new FileReader();
    //Associate a listener so when the fie 
    //We write him on the correct place
    reader.addEventListener('load', (event) => {
        //Create a tag image to contain the loaded image
        let img = document.createElement("img");
        //Get the local browser path
        img.src = event.target.result;
        //Add the new element to the layout
        let imgContainer = document.querySelector("#imagePreview");
        imgContainer.appendChild(img);
    });
    //Proceed tho the read of the file
    reader.readAsDataURL(file);
}

//Associate an event to the upload button
let uploadImgBtn = document.querySelector("#uploadImgBtn");
uploadImgBtn.addEventListener("change",(eventArgs) => {
        const fileList = eventArgs.target.files;
        //Grants there is at least one file choosen
        if(fileList.length > 0){
            //read the image
            readImage(fileList[0]);
        }
    }
);