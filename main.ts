controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(DashMotion)) {
        DashMotion = true
        SpriteSpeed = DashSpeed
        pause(200)
        SpriteSpeed = 150
        DashMotion = false
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(DashMotion)) {
        DashMotion = true
        SpriteSpeed = DashSpeed
        pause(200)
        SpriteSpeed = 150
        DashMotion = false
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(DashMotion)) {
        DashMotion = true
        SpriteSpeed = DashSpeed
        pause(200)
        SpriteSpeed = 150
        DashMotion = false
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(DashMotion)) {
        DashMotion = true
        SpriteSpeed = DashSpeed
        pause(200)
        SpriteSpeed = 150
        DashMotion = false
    }
})
let DashMotion = false
let DashSpeed = 0
let SpriteSpeed = 0
tiles.setCurrentTilemap(tilemap`level2`)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . 3 3 3 3 3 . . . 3 3 . . . . . 
    3 3 . . . 3 3 3 3 3 . 3 . . . . 
    3 . . . . . . . . . . 3 . . . . 
    3 3 3 3 . . . . . . . 3 . . . . 
    . . 3 3 3 3 3 . . . 3 3 . . . . 
    . . . . 3 . . 3 3 3 3 . . . . . 
    . . . . 3 . . . . . 3 . . . . . 
    . . . . 3 . . . . . 3 . . . . . 
    . . . 3 3 . . . . . 3 3 3 . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
SpriteSpeed = 150
DashSpeed = 250
scene.cameraFollowSprite(mySprite)
let Coin = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . 5 5 5 . . . . 
    . . . . . . 5 5 5 . . 5 5 . . . 
    . . . . . 5 5 . . . 5 . 5 5 . . 
    . . . . . 5 . 5 5 5 5 5 5 5 . . 
    . . . . 5 5 5 5 5 5 5 5 5 5 5 . 
    . . . . 5 . 5 5 5 5 5 5 5 5 5 5 
    . . . . 5 . 5 5 . . 5 5 5 5 5 5 
    . . . . . 5 5 5 5 5 5 5 . 5 . 5 
    . . . . . 5 5 5 5 5 5 5 5 . . 5 
    . . . . . . 5 5 5 . 5 5 . . . 5 
    . . . . . . . 5 5 5 5 5 5 5 5 . 
    . . . . . . . . . 5 5 . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
tiles.placeOnRandomTile(Coin, sprites.castle.tilePath5)
game.onUpdate(function () {
    controller.moveSprite(mySprite, SpriteSpeed, 100)
})
