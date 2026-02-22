namespace SpriteKind {
    export const Misc = SpriteKind.create()
}
// When A pressed
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    // If toggle = 1 turn off if = 0 turn on.
    if (arrowtoggle == 1) {
        // Toggle "Off"
        arrowtoggle = 0
        // Removing right arrow.
        sprites.destroy(rparrow)
        // Removing left arrow
        sprites.destroy(lparrow)
    } else {
        // Toggle "On"
        arrowtoggle = 1
        // Adding back the left arrow.
        lparrow = sprites.create(img`
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
        // Adding back the right arrow.
        rparrow = sprites.create(assets.image`myImage3`, SpriteKind.Player)
    }
})
info.onLifeZero(function () {
    game.gameOver(false)
})
// When turned on.
let rparrow: Sprite = null
let lparrow: Sprite = null
let arrowtoggle = 0
game.setGameOverMessage(false, "Food hurt you!")
info.setLife(10)
// Toggle "On"
arrowtoggle = 1
// All under this comment is Sprites.
lparrow = sprites.create(img`
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
    `, SpriteKind.Misc)
rparrow = sprites.create(assets.image`myImage0`, SpriteKind.Misc)
let ball1 = sprites.create(assets.image`myImage1`, SpriteKind.Player)
let chicken1 = sprites.create(img`
    . . 2 2 b b b b b . . . . . . . 
    . 2 b 4 4 4 4 4 4 b . . . . . . 
    2 2 4 4 4 4 d d 4 4 b . . . . . 
    2 b 4 4 4 4 4 4 d 4 b . . . . . 
    2 b 4 4 4 4 4 4 4 d 4 b . . . . 
    2 b 4 4 4 4 4 4 4 4 4 b . . . . 
    2 b 4 4 4 4 4 4 4 4 4 e . . . . 
    2 2 b 4 4 4 4 4 4 4 b e . . . . 
    . 2 b b b 4 4 4 b b b e . . . . 
    . . e b b b b b b b e e . . . . 
    . . . e e b 4 4 b e e e b . . . 
    . . . . . e e e e e e b d b b . 
    . . . . . . . . . . . b 1 1 1 b 
    . . . . . . . . . . . c 1 d d b 
    . . . . . . . . . . . c 1 b c . 
    . . . . . . . . . . . . c c . . 
    `, SpriteKind.Projectile)
let pizza1 = sprites.create(img`
    . . . . . . b b b b . . . . . . 
    . . . . . . b 4 4 4 b . . . . . 
    . . . . . . b b 4 4 4 b . . . . 
    . . . . . b 4 b b b 4 4 b . . . 
    . . . . b d 5 5 5 4 b 4 4 b . . 
    . . . . b 3 2 3 5 5 4 e 4 4 b . 
    . . . b d 2 2 2 5 7 5 4 e 4 4 e 
    . . . b 5 3 2 3 5 5 5 5 e e e e 
    . . b d 7 5 5 5 3 2 3 5 5 e e e 
    . . b 5 5 5 5 5 2 2 2 5 5 d e e 
    . b 3 2 3 5 7 5 3 2 3 5 d d e 4 
    . b 2 2 2 5 5 5 5 5 5 d d e 4 . 
    b d 3 2 d 5 5 5 d d d 4 4 . . . 
    b 5 5 5 5 d d 4 4 4 4 . . . . . 
    4 d d d 4 4 4 . . . . . . . . . 
    4 4 4 4 . . . . . . . . . . . . 
    `, SpriteKind.Projectile)
let steak1 = sprites.create(img`
    . . . . . . 2 2 2 2 . . . . . . 
    . . . . 2 2 3 3 3 3 2 e . . . . 
    . . . 2 3 d 1 1 d d 3 2 e . . . 
    . . 2 3 1 d 3 3 3 d d 3 e . . . 
    . 2 3 1 3 3 3 3 3 d 1 3 b e . . 
    . 2 1 d 3 3 3 3 d 3 3 1 3 b b . 
    2 3 1 d 3 3 1 1 3 3 3 1 3 4 b b 
    2 d 3 3 d 1 3 1 3 3 3 1 3 4 4 b 
    2 d 3 3 3 1 3 1 3 3 3 1 b 4 4 e 
    2 d 3 3 3 1 1 3 3 3 3 1 b 4 4 e 
    e d 3 3 3 3 d 3 3 3 d d b 4 4 e 
    e d d 3 3 3 d 3 3 3 1 3 b 4 b e 
    e 3 d 3 3 1 d d 3 d 1 b b e e . 
    . e 3 1 1 d d 1 1 1 b b e e e . 
    . . e 3 3 3 3 3 3 b e e e e . . 
    . . . e e e e e e e e e e . . . 
    `, SpriteKind.Projectile)
let cherrys1 = sprites.create(img`
    . . . . . . . . . . . 6 6 6 6 6 
    . . . . . . . . . 6 6 7 7 7 7 8 
    . . . . . . 8 8 8 7 7 8 8 6 8 8 
    . . e e e e c 6 6 8 8 . 8 7 8 . 
    . e 2 5 4 2 e c 8 . . . 6 7 8 . 
    e 2 4 2 2 2 2 2 c . . . 6 7 8 . 
    e 2 2 2 2 2 2 2 c . . . 8 6 8 . 
    e 2 e e 2 2 2 2 e e e e c 6 8 . 
    c 2 e e 2 2 2 2 e 2 5 4 2 c 8 . 
    . c 2 e e e 2 e 2 4 2 2 2 2 c . 
    . . c 2 2 2 e e 2 2 2 2 2 2 2 e 
    . . . e c c e c 2 2 2 2 2 2 2 e 
    . . . . . . . c 2 e e 2 2 e 2 c 
    . . . . . . . c e e e e e e 2 c 
    . . . . . . . . c e 2 2 2 2 c . 
    . . . . . . . . . c c c c c . . 
    `, SpriteKind.Projectile)
let apple1 = sprites.create(img`
    . . . . . . . e c 7 . . . . . . 
    . . . . e e e c 7 7 e e . . . . 
    . . c e e e e c 7 e 2 2 e e . . 
    . c e e e e e c 6 e e 2 2 2 e . 
    . c e e e 2 e c c 2 4 5 4 2 e . 
    c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
    c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
    . e e e 2 2 2 2 2 2 2 2 2 4 e . 
    . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
    . . 2 e e 2 2 2 2 2 4 4 2 e . . 
    . . . 2 2 e e 4 4 4 2 e e . . . 
    . . . . . 2 2 e e e e . . . . . 
    `, SpriteKind.Projectile)
ball1.setStayInScreen(true)
chicken1.setPosition(randint(0, 200), 0)
pizza1.setPosition(randint(0, 200), 0)
steak1.setPosition(randint(0, 200), 0)
cherrys1.setPosition(randint(0, 200), 0)
apple1.setPosition(randint(0, 200), 0)
forever(function () {
    chicken1.setVelocity(15, 70)
    pizza1.setVelocity(15, 100)
    steak1.setVelocity(15, 50)
    cherrys1.setVelocity(30, 30)
    apple1.setVelocity(50, 50)
    pause(2500)
    chicken1.setPosition(randint(0, 200), 0)
    pizza1.setPosition(randint(0, 200), 0)
    steak1.setPosition(randint(0, 200), 0)
    cherrys1.setPosition(randint(0, 200), 0)
    apple1.setPosition(randint(0, 200), 0)
    controller.moveSprite(ball1)
})
forever(function () {
    lparrow.setPosition(10, 60)
    pause(200)
    rparrow.setPosition(150, 60)
    pause(200)
    lparrow.setPosition(10, 59)
    pause(200)
    rparrow.setPosition(150, 59)
})
forever(function () {
    if (ball1.overlapsWith(chicken1)) {
        info.changeLifeBy(-1)
    }
    if (ball1.overlapsWith(steak1)) {
        info.changeLifeBy(-1)
    }
    if (ball1.overlapsWith(cherrys1)) {
        info.changeLifeBy(-1)
    }
    if (ball1.overlapsWith(pizza1)) {
        info.changeLifeBy(-1)
    }
    if (ball1.overlapsWith(apple1)) {
        info.changeLifeBy(-1)
    }
})
