controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(DashMotion)) {
        DashMotion = true
        SpriteSpeed = DashSpeed
        pause(200)
        SpriteSpeed = 150
        DashMotion = false
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(DashMotion)) {
        DashMotion = true
        SpriteSpeed = DashSpeed
        pause(200)
        SpriteSpeed = 150
        DashMotion = false
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
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
