let arrDP = [
  {
    dp: "https://images.pexels.com/photos/3270230/pexels-photo-3270230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    story:
      "https://images.pexels.com/photos/573302/pexels-photo-573302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    dp: "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    story:
      "https://images.pexels.com/photos/3310266/pexels-photo-3310266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    dp: "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    story:
      "https://images.pexels.com/photos/2444912/pexels-photo-2444912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    dp: "https://images.pexels.com/photos/1959855/pexels-photo-1959855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    story:
      "https://images.pexels.com/photos/2475093/pexels-photo-2475093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    dp: "https://images.pexels.com/photos/1036620/pexels-photo-1036620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    story:
      "https://images.pexels.com/photos/3760828/pexels-photo-3760828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

let arrPost = [
  {
    postName: "Scarlett Johansson",
    postDp:
      "https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    postPic:
      "https://images.pexels.com/photos/1310501/pexels-photo-1310501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    likes: "20,070",
  },

  {
    postName: "Jennifer Lawrence",
    postDp:
      "https://images.pexels.com/photos/943084/pexels-photo-943084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    postPic:
      "https://images.pexels.com/photos/3784386/pexels-photo-3784386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    likes: "80,221",
  },

  {
    postName: "Emma Watson",
    postDp:
      "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    postPic:
      "https://images.pexels.com/photos/3760632/pexels-photo-3760632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    likes: "90,258",
  },

  {
    postName: "Anne Hathaway",
    postDp:
      "https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    postPic:
      "https://images.pexels.com/photos/610293/pexels-photo-610293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    likes: "40,398",
  },

  {
    postName: "Alexandra Daddario",
    postDp:
      "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    postPic:
      "https://images.pexels.com/photos/975680/pexels-photo-975680.jpeg?auto=compress&cs=tinysrgb&w=600",
    likes: "202,030",
  },
];

let clutter = "";
let stories = document.querySelector("#stories");
let fullScreen = document.querySelector("#full-screen");
let posts = document.querySelector("#posts");

arrDP.forEach((elem, idx) => {
  clutter += `<div id="story">
  <img
    id="${idx}"
    src="${elem.dp}"
    alt="story-img"
  />
</div>`;
});

stories.innerHTML = clutter;

stories.addEventListener("click", (dets) => {
  fullScreen.style.display = "block";
  fullScreen.style.backgroundImage = `url(${arrDP[dets.target.id].story})`;

  setTimeout(() => {
    fullScreen.style.display = "none";
  }, 3500);
});

//Post Feature

let postClutter = "";
arrPost.forEach((elem, idx) => {
  postClutter += `
<div id="post">
          <div id="post-top">
            <div id="post-dp">
              <img
                src="${elem.postDp}"
                alt=""
              />
            </div>
            <div id="post-name">${elem.postName}</div>
          </div>

          <div id="post-Pic">
          <img
          id="${idx}"
          src="${elem.postPic}"
        />
        </div>
          <i id="${idx}" class="fa-solid fa-heart likes"></i>
          <div id="post-bottom-icon">
            <i id="like-heart" class="fa-regular fa-heart"></i>
            <i id="like-full-heart" class="fa-solid fa-heart"></i>
            <i class="fa-regular fa-comment"></i>
            <i class="fa-solid fa-location-arrow"></i>
            <div className="likes-count">${elem.likes} likes</div>
          </div>
        </div>
 `;
});

posts.innerHTML = postClutter;

//Like Feature
let postAll = document.querySelectorAll("#post");
let like = document.querySelector(".likes");

postAll.forEach((val) => {
  val.addEventListener("dblclick", () => {
    //console.log(val.childNodes[5]);
    console.log(val);
    val.childNodes[5].style.opacity = 0.8;
    val.childNodes[5].style.transform = "translate(-50%, -50%) scale(4)";

    setTimeout(() => {
      val.childNodes[5].style.opacity = 0;
      val.childNodes[5].style.transform = "translate(-50%, -50%) scale(0)";
      val.childNodes[7].querySelector("#like-heart").style.display = "none";
      val.childNodes[7].querySelector("#like-full-heart").style.display =
        "inline-block";
    }, 1000);
  });
});

// like.style.opacity = 0.8;
//   like.style.transform = "translate(-50%, -50%) scale(4)";
