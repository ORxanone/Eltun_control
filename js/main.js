

function loginSistem(){
    var changdeDiv = document.getElementById("chg")

    var w = document.getElementById("w").value
    var h = document.getElementById("h").value
    var bgColor = document.getElementById("bgColor").value
    var br = document.getElementById("br").value
    var bgPhoto = document.getElementById("bgPhoto").value
    var margin = document.getElementById("margin").value
    var sizeWitdh = document.getElementById("scWidth").value
    var sizeHeight = document.getElementById("scHeight").value
    var sizeBR = document.getElementById("scBR").value
    var sizeMargin = document.getElementById("scMargin").value
    var sizePadding = document.getElementById("scPadding").value
    var padding = document.getElementById("padding").value
    var positionTop = document.getElementById("positionTop").value
    var positionleft = document.getElementById("positionLeft").value
    var sizePositionTop = document.getElementById("scPositionTop").value

    changdeDiv.style.width = w + sizeWitdh
    changdeDiv.style.height = h + sizeHeight
    changdeDiv.style.background = bgColor
    changdeDiv.style.borderRadius = br + sizeBR
    changdeDiv.style.backgroundImage = bgPhoto
    changdeDiv.style.backgroundSize = "cover" 
    changdeDiv.style.marginLeft = margin + sizeMargin
    changdeDiv.style.paddingLeft = padding + sizePadding
    changdeDiv.style.top = positionTop + sizePositionTop
    changdeDiv.style.left = positionLeft + sizePositionLeft
    
    

}