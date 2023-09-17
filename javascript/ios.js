iOS = /^(iPhone|iPad|iPod)/.test(navigator.platform);
console.log(iOS)

if(iOS == true){
    const fourth = document.getElementById("fourth");
    fourth.style.backgroundAttachment="unset";
    const first = document.getElementById("first");
    first.style.backgroundAttachment="unset";
    const sixth = document.getElementById("sixth");
    sixth.style.backgroundAttachment="unset";
}