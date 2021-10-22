const linksSocialMidia = {
    github:"https://www.github.com",
    youtube:"https://www.youtube.com" ,
    facebook:"https://www.facebook.com",
    instagram:"https//www.instagem.com" ,
    twitter:"https://www.twitter.com" 
}

function chageSocialMidiaLinks(){
    for (let li of socialLinks.children){
       const social = li.getAttribute('class')
       li.children[0].href = `https://${social}.com/${linksSocialMidia.[social]}`
       alert(li.children[0].href)
       
    }
}
chageSocialMidiaLinks()

function getGitHubProfileInfos(){
    const url = `https://api.github.com/users/${linksSocialMidia.github}`

    fetch(url)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        userBio.textContent = data.bio
        userLink.href = data.html_url
        userImage.src = data.avatar_url
        userLink.textContent = data.login
    })
}
getGitHubProfileInfos()