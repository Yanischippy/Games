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
        lparrow = sprites.create(assets.image`rarrowint`, SpriteKind.Player)
        // Adding back the right arrow.
        rparrow = sprites.create(assets.image`myImage3`, SpriteKind.Player)
    }
})
function Potions () {
    if (ball1.overlapsWith(lifepotion10)) {
        info.changeLifeBy(10)
    }
    if (ball1.overlapsWith(_2xspeedpotion)) {
        chicken1.setVelocity(30, 140)
        pizza1.setVelocity(-30, 200)
        steak1.setVelocity(30, 100)
        cherrys1.setVelocity(60, 60)
        apple1.setVelocity(100, 100)
        strawberry1.setVelocity(0, 300)
        lifepotion10.setVelocity(0, 50)
        _2xspeedpotion.setVelocity(0, 50)
        pause(20000)
        chicken1.setVelocity(15, 70)
        pizza1.setVelocity(-15, 100)
        steak1.setVelocity(15, 50)
        cherrys1.setVelocity(30, 30)
        apple1.setVelocity(50, 50)
        strawberry1.setVelocity(0, 150)
        lifepotion10.setVelocity(0, 100)
        _2xspeedpotion.setVelocity(0, 75)
    }
}
info.onLifeZero(function () {
    game.setGameOverScoringType(game.ScoringType.HighScore)
    game.gameOver(false)
})
// When turned on.
let _2xspeedpotion: Sprite = null
let lifepotion10: Sprite = null
let strawberry1: Sprite = null
let apple1: Sprite = null
let cherrys1: Sprite = null
let steak1: Sprite = null
let pizza1: Sprite = null
let chicken1: Sprite = null
let rparrow: Sprite = null
let lparrow: Sprite = null
let arrowtoggle = 0
let ball1: Sprite = null
info.setScore(0)
ball1 = sprites.create(assets.image`myImage1`, SpriteKind.Player)
controller.moveSprite(ball1)
info.setLife(50)
// Toggle "On"
arrowtoggle = 1
// All under this comment is Sprites.
lparrow = sprites.create(assets.image`larrowint`, SpriteKind.Misc)
rparrow = sprites.create(assets.image`myImage0`, SpriteKind.Misc)
chicken1 = sprites.create(assets.image`chicken🍗`, SpriteKind.Projectile)
pizza1 = sprites.create(assets.image`pizza`, SpriteKind.Projectile)
steak1 = sprites.create(assets.image`Steak`, SpriteKind.Projectile)
cherrys1 = sprites.create(assets.image`cherry`, SpriteKind.Projectile)
apple1 = sprites.create(assets.image`apple`, SpriteKind.Projectile)
strawberry1 = sprites.create(assets.image`strawberry`, SpriteKind.Projectile)
lifepotion10 = sprites.create(assets.image`myImage4`, SpriteKind.Misc)
_2xspeedpotion = sprites.create(assets.image`potion0`, SpriteKind.Player)
ball1.setStayInScreen(true)
chicken1.setPosition(randint(0, 200), 0)
pizza1.setPosition(randint(0, 200), 0)
steak1.setPosition(randint(0, 200), 0)
cherrys1.setPosition(randint(0, 200), 0)
apple1.setPosition(randint(0, 200), 0)
strawberry1.setPosition(randint(0, 200), 0)
_2xspeedpotion.setPosition(randint(0, 400), 0)
lifepotion10.setPosition(randint(0, 300), 0)
chicken1.setVelocity(15, 70)
pizza1.setVelocity(-15, 100)
steak1.setVelocity(15, 50)
cherrys1.setVelocity(30, 30)
apple1.setVelocity(50, 50)
strawberry1.setVelocity(0, 150)
lifepotion10.setVelocity(0, 100)
_2xspeedpotion.setVelocity(0, 75)
forever(function () {
    pause(2500)
    info.changeScoreBy(1)
    chicken1.setPosition(randint(0, 200), 0)
    pizza1.setPosition(randint(0, 200), 0)
    steak1.setPosition(randint(0, 200), 0)
    cherrys1.setPosition(randint(0, 200), 0)
    apple1.setPosition(randint(0, 200), 0)
    strawberry1.setPosition(randint(0, 200), 0)
    lifepotion10.setPosition(randint(0, 300), 0)
    _2xspeedpotion.setPosition(randint(0, 400), 0)
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
        game.setGameOverMessage(false, "Chicken hurt you")
    }
    if (ball1.overlapsWith(steak1)) {
        info.changeLifeBy(-1)
        game.setGameOverMessage(false, "Steak hurt you")
    }
    if (ball1.overlapsWith(cherrys1)) {
        info.changeLifeBy(-1)
        game.setGameOverMessage(false, "Cherry hurt you")
    }
    if (ball1.overlapsWith(pizza1)) {
        info.changeLifeBy(-1)
        game.setGameOverMessage(false, "Pizza hurt you")
    }
    if (ball1.overlapsWith(apple1)) {
        info.changeLifeBy(-1)
        game.setGameOverMessage(false, "Apple hurt you")
    }
    if (ball1.overlapsWith(strawberry1)) {
        info.changeLifeBy(-1)
        game.setGameOverMessage(false, "Strawberry hurt you")
    }
    Potions()
})
