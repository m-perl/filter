let URL 

const input = document.getElementById('input')
const btn = document.getElementById('btn')
const links = document.getElementById('links')

btn .onclick = () => {

    // let link = document.createElement('a')
    // link .setAttribute('href', 'https://' + input.value)
    // link .innerHTML = input.value

    // links.appendChild(link)

    let frame = document.createElement('iframe')
    frame .setAttribute('src', 'https://' + input.value)
    frame .setAttribute('class', 'iframe')
    frame .innerHTML = input.value

    links.appendChild(frame)
}