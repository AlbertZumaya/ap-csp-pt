controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(DashMotion)) {
        DashMotion = true
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(DashMotion)) {
        DashMotion = true
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(DashMotion)) {
        DashMotion = true
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(DashMotion)) {
        DashMotion = true
    }
})
let DashMotion = false
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
let SpriteSpeed = 150
let DashSpeed = 250
