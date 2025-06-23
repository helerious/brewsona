const textElement= document.getElementById("text")
const optionButtonsElement= document.getElementById("button-grid")
const imageElement= document.getElementById("image")

let state = {}
function startGame(){
  //state={}
  showTextNode(1)
}
function showTextNode(textNodeIndex){
  const textNode=textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while(optionButtonsElement.firstChild){
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }
  textNode.options.forEach(option=>{
    const button = document.createElement('button')
    button.innerText=option.text
    button.classList.add('button')
    button.addEventListener('click', () => selectOption(option))
    optionButtonsElement.appendChild(button)
  })
}

function selectOption(option){
  showTextNode(option.nextText)
}

const textNodes=[
  {
    id:1,
    text:"text 1",
    img:"img_1",
    options:[
      {
        text:"button 11",
        nextText:2
      },
      {
        text:"button 22",
        nextText:2
      },
      {
        text:"button 33",
        nextText:2
      },
      {
        text:"button 44",
        nextText:2
      }
    ]
  },
  {
    id:2,
    text:"text 2",
    img:"img_2",
    options:[
      {
        text:"button 111",
        nextText:3
      },
      {
        text:"button 222",
        nextText:3
      },
      {
        text:"button 333",
        nextText:3
      }
    ]
  }
]
startGame()