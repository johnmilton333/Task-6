const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".gallery .image");
const previewBox = document.querySelector(".preview-box");
const categoryName = previewBox.querySelector(".title p:first-child");
const donorName = previewBox.querySelector(".title p:last-child");
const previewImg = previewBox.querySelector("img");
const closeIcon = previewBox.querySelector(".icon");
const shadow = document.querySelector(".shadow");

window.onload = () => {
  filterItem.onclick = (selectedItem) => {
    if (selectedItem.target.classList.contains("item")) {
      filterItem.querySelector(".active").classList.remove("active");
      selectedItem.target.classList.add("active");
      let filterName = selectedItem.target.getAttribute("data-name");
      filterImg.forEach((image) => {
        let filterImages = image.getAttribute("data-name");
        if (filterImages === filterName || filterName === "all") {
          image.classList.remove("hide");
          image.classList.add("show");
        } else {
          image.classList.add("hide");
          image.classList.remove("show");
        }
      });
    }
  };

  for (let i = 0; i < filterImg.length; i++) {
    filterImg[i].setAttribute("onclick", "preview(this)");
  }
};

function preview(element) {
  document.querySelector("body").style.overflow = "hidden";
  let selectedPrevImg = element.querySelector("img").src;
  let selectedImgCategory = element.getAttribute("data-name");
  let selectedDonor = element.getAttribute("data-donor");
  previewImg.src = selectedPrevImg;
  categoryName.textContent = selectedImgCategory;
  donorName.textContent = selectedDonor;
  previewBox.classList.add("show");
  shadow.classList.add("show");
  closeIcon.onclick = () => {
    previewBox.classList.remove("show");
    shadow.classList.remove("show");
    document.querySelector("body").style.overflow = "auto";
  };
}









