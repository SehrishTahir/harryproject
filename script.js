console.log("lets write JavaScript ")

async function getSongs() {
    let a = await fetch("http://127.0.0.1:3000/songs")
    let response = await a.text()
    let div = document.createElement("div")
    div.innerHTML = response;
    let as = div.getElementsByTagName("a")
    let songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            sessionStorage.push(element.href)
        }
    }
    return songs
}

 async function main(){
    // Get the list of all the songs
letSongs = await getSongs()
console.log(songs)

//Play the first song
var audio = new Audio(songs[0]);
audio.play();
}
main()
