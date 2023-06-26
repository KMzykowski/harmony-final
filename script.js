//Defines elements
let modal = document.getElementById("modalBox");

//Opens album view
let openModalBtn = document.querySelectorAll(".showAlbum");

    for(let i = 0; i < openModalBtn.length; i++){
        openModalBtn[i].onclick = function(){
            modal.style.visibility = "visible";
            }
        }

//Closes album view
let closeModalBtn = document.getElementById("closeBtn");
	
    closeModalBtn.onclick = function(){
        modal.style.display = "none";
        openModalBtn = document.querySelectorAll(".showAlbum");
    }

//Replaces album within the modal window with the album the user selected
const showAlbums = document.getElementsByClassName("showAlbum");

for (let i = 0; i < showAlbums.length; i++) {
  let showAlbum = showAlbums[i];

  showAlbum.addEventListener("click", function() {
    let albumDiv = showAlbum.closest(".album");
    let albumIframe = albumDiv.querySelector("iframe");
    let albumSrc = albumIframe.getAttribute("src");
    let albumDisplayIframe = document.getElementById("albumDisplay");

    albumDisplayIframe.setAttribute("src", albumSrc);
  });
}


//Toggles the "add to favorites" icon in modal view
function toggleIcon() {
  let button = document.querySelector('.favorite');
  let icon = button.querySelector('i');

  if (icon.classList.contains('fa-regular')) {
        icon.classList.remove('fa-regular');
        icon.classList.add('fa-solid');
  } else {
        icon.classList.remove('fa-solid');
        icon.classList.add('fa-regular');
  }
}

document.querySelector('.favorite').addEventListener('click', toggleIcon);