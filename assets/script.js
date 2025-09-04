let images=[];
let img_input=document.querySelector('#upload');
img_input.addEventListener('change', function(event) {
  const files = event.target.files; // This is a FileList object
  const imageList = [];
  console.log(imageList);
  console.log(files);
}
)