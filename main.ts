let lparrow = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 1 . . . . . . . . . . . 
    . . . 1 . . . . . . . . . . . . 
    . . 1 . . . . . . . . . . . . . 
    . 1 . . . . . . . . . . . . . . 
    1 1 1 1 1 1 1 1 . . . . . . . . 
    . 1 . . . . . . . . . . . . . . 
    . . 1 . . . . . . . . . . . . . 
    . . . 1 . . . . . . . . . . . . 
    . . . . 1 . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let rparrow = sprites.create(assets.image`myImage0`, SpriteKind.Player)
forever(function () {
    lparrow.setPosition(10, 60)
    pause(200)
    rparrow.setPosition(150, 60)
    pause(200)
    lparrow.setPosition(10, 59)
    pause(200)
    rparrow.setPosition(150, 59)
})
