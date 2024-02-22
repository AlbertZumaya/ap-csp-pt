controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(false)) {
    	
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(false)) {
    	
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(false)) {
    	
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(false)) {
    	
    }
})
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
