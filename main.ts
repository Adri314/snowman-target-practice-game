namespace SpriteKind {
    export const Target = SpriteKind.create()
}
function createSnowMan () {
    snowMan = sprites.create(img`
        . . . . . f f f f f . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f 2 2 2 2 . . . . . . 
        . . . . . 2 f f f f f f . . . . 
        . . . . f f f 1 1 1 1 . . . . . 
        . . . . f 1 1 1 f 1 f . . . . . 
        . . . . . 1 1 1 1 4 4 4 . . . . 
        . . . . . 2 1 1 1 1 1 1 . . . . 
        . . . . 2 2 2 2 2 2 2 . . . . . 
        . . 2 2 2 1 1 2 1 1 1 1 . . . . 
        . . 2 2 1 1 2 2 1 1 f 1 1 . . . 
        . . . 1 1 1 2 2 1 1 1 1 1 . . . 
        . . . 1 1 1 2 2 1 1 1 f 1 . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 . . . 
        . . . . 1 1 1 1 1 1 f 1 . . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        `, SpriteKind.Player)
    tiles.placeOnTile(snowMan, tiles.getTileLocation(0, 6))
    snowMan.z = 10
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (canThrow && gameOn) {
        throwSnowBall()
    }
})
function startGame () {
    scene.setBackgroundImage(img`
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888668888888888888888888888888888888888888866888888888888888888888888888888888888886688888888888888888888888888888888888888668888888
        8888888888888888888888888888888668888888888888888888888888888888888888866888888888888888888888888888888888888886688888888888888888888888888888888888888668888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888886888888888888888888888886888888888888888688888888888888888888888688888888888888868888888888888888888888868888888888888886888888888888888888888886
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888886888888688888888888888888888888888888888688888868888888888888888888888888888888868888886888888888888888888888888888888886888888688888888
        8888888888888888888888888888886968888888888888888888888888888888888888696888888888888888888888888888888888888869688888888888888888888888888888888888886968888888
        8888888888888888888888888888888688888888888888888888888888888888888888868888888888888888888888888888888888888886888888888888888888888888888888888888888688888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888838888888888888888888888888888888888888883888888888888888888888888888888888888888388888888888888888888888888888888888888838888888888888888888888888888888
        8888888838888888888888888888888888888888888888883888888888888888888888888888888888888888388888888888888888888888888888888888888838888888888888888888888888888888
        8888883333388888888888888888888888888888888888333338888888888888888888888888888888888833333888888888888888888888888888888888883333388888888888888888888888888888
        8888888333888888888888888888888888888888888888833388888888888888888888888888888888888883338888888888888888888888888888888888888333888888888888888888888888888888
        8888888383888888888888888888888888888888888888838388888888888888888888888888888888888883838888888888888888888888888888888888888383888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888886888888888888888888888888888888888888888688888888888888888888888888888888888888868888888888888888888888888888888888888886888888
        8888888888888888888888888888888886888688888888888888888888888888888888888688868888888888888888888888888888888888868886888888888888888888888888888888888886888688
        8888888888888888888d888888888888868888888888888888888888888d888888888888868888888888888888888888888d888888888888868888888888888888888888888d88888888888886888888
        888888888888888888ddd8888888888886888888888888888888888888ddd8888888888886888888888888888888888888ddd8888888888886888888888888888888888888ddd8888888888886888888
        8888888888888888888d888888888888666888888888888888888888888d888888888888666888888888888888888888888d888888888888666888888888888888888888888d88888888888866688888
        8888888888888888888888888888888866888888888888888888888888888888888888886688888888888888888888888888888888888888668888888888888888888888888888888888888866888888
        8888888888888888888888688888888886888888888888888888888888888868888888888688888888888888888888888888886888888888868888888888888888888888888888688888888886888888
        8888886888888888888888688888888666688888888888688888888888888868888888866668888888888868888888888888886888888886666888888888886888888888888888688888888666688888
        8888886688888888888886668888888866688888888888668888888888888666888888886668888888888866888888888888866688888888666888888888886688888888888886668888888866688888
        8888886888888888888888688888866666888888888888688888888888888868888886666688888888888868888888888888886888888666668888888888886888888888888888688888866666888888
        8888866688888888888888666888886666668888888886668888888888888866688888666666888888888666888888888888886668888866666688888888866688888888888888666888886666668888
        8888886668888888888886668888888666668888888888666888888888888666888888866666888888888866688888888888866688888886666688888888886668888888888886668888888666668888
        8888866688888888888866668888866666688888888886668888888888886666888886666668888888888666888888888888666688888666666888888888866688888888888866668888866666688888
        6688886668888888888888666888888666666666668888666888888888888866688888866666666666888866688888888888886668888886666666666688886668888888888888666888888666666666
        6666666888888888888866668888666666666666666666688888888888886666888866666666666666666668888888888888666688886666666666666666666888888888888866668888666666666666
        6666666666688888888886666666666666666666666666666668888888888666666666666666666666666666666888888888866666666666666666666666666666688888888886666666666666666666
        6666666666666688888866666666666666666666666666666666668888886666666666666666666666666666666666888888666666666666666666666666666666666688888866666666666666666666
        6666666666667799999999999999776666666666666666666666779999999999999977666666666666666666666677999999999999997766666666666666666666667799999999999999776666666666
        6666666667799999999999999999999977666666666666666779999999999999999999997766666666666666677999999999999999999999776666666666666667799999999999999999999977666666
        6666666799999999999999999999999999997666666666679999999999999999999999999999766666666667999999999999999999999999999976666666666799999999999999999999999999997666
        6666679999999999999999999999996111199977666667999999999999999999999999611119997766666799999999999999999999999961111999776666679999999999999999999999996111199977
        7779999999996999999999999999996999111997777999999999699999999999999999699911199777799999999969999999999999999969991119977779999999996999999999999999996999111997
        9999999999996999999999999999996699911119999999999999699999999999999999669991111999999999999969999999999999999966999111199999999999996999999999999999996699911119
        1999999999996699999999999999966999999111199999999999669999999999999996699999911119999999999966999999999999999669999991111999999999996699999999999999966999999111
        1119999999966699999999999999996999999991111999999996669999999999999999699999999111199999999666999999999999999969999999911119999999966699999999999999996999999991
        9911119999996999999999999999966669999999991111999999699999999999999996666999999999111199999969999999999999999666699999999911119999996999999999999999966669999999
        9999999999966699999999999999996699999999999999999996669999999999999999669999999999999999999666999999999999999966999999999999999999966699999999999999996699999999
        9999999999996669999999999911166619999999999999999999666999999999991116661999999999999999999966699999999999111666199999999999999999996669999999999911166619999999
        9999999999966999999999911119966669999999999999999996699999999991111996666999999999999999999669999999999111199666699999999999999999966999999999911119966669999999
        9999999999966699999991111999996666999999999999999996669999999111199999666699999999999999999666999999911119999966669999999999999999966699999991111999996666999999
        9999999999666669999111199999666669999999999999999966666999911119999966666999999999999999996666699991111999996666699999999999999999666669999111199999666669999999
        9999999999966699111111999999966666699999999999999996669911111199999996666669999999999999999666991111119999999666666999999999999999966699111111999999966666699999
        1111999996666661111199999999666666999911111199999666666111119999999966666699991111119999966666611111999999996666669999111111999996666661111199999999666666999911
        1111111996666699999999999999996666911111111111199666669999999999999999666691111111111119966666999999999999999966669111111111111996666699999999999999996666911111
        1111111166666666999999999996666691111111111111116666666699999999999666669111111111111111666666669999999999966666911111111111111166666666999999999996666691111111
        1111111111666669999999999999666911111111111111111166666999999999999966691111111111111111116666699999999999996669111111111111111111666669999999999999666911111111
        1111111116666666999999999999691111111111111111111666666699999999999969111111111111111111166666669999999999996911111111111111111116666666999999999999691111111111
        1111111166666666661111199999111111111111111111116666666666111119999911111111111111111111666666666611111999991111111111111111111166666666661111199999111111111111
        1111111666666666661119999111111111111111111111166666666666111999911111111111111111111116666666666611199991111111111111111111111666666666661119999111111111111111
        1111111116666666199999111111111111111111111111111666666619999911111111111111111111111111166666661999991111111111111111111111111116666666199999111111111111111111
        1111111166666666699111111111111111111111111111116666666669911111111111111111111111111111666666666991111111111111111111111111111166666666699111111111111111111111
        1111111666666666661111111111111111111111111111166666666666111111111111111111111111111116666666666611111111111111111111111111111666666666661111111111111111111111
        1111111116666666666111111111111111111111111111111666666666611111111111111111111111111111166666666661111111111111111111111111111116666666666111111111111111111111
        1111111666666666661111111111111111111111111111166666666666111111111111111111111111111116666666666611111111111111111111111111111666666666661111111111111111111111
        1111111166666666611111111111111119999911111111116666666661111111111111111999991111111111666666666111111111111111199999111111111166666666611111111111111119999911
        9111111111666666661111111111111999999999911111111166666666111111111111199999999991111111116666666611111111111119999999999111111111666666661111111111111999999999
        9999111666666666661111111111999999999999999911166666666666111111111199999999999999991116666666666611111111119999999999999999111666666666661111111111999999999999
        9999991166666666666111111199999999999999999999116666666666611111119999999999999999999911666666666661111111999999999999999999991166666666666111111199999999999999
        9999999996666661111111199999999999999999999999999666666111111119999999999999999999999999966666611111111999999999999999999999999996666661111111199999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        `)
    tiles.setTilemap(tilemap`level3`)
    createSnowBall()
    createSnowMan()
    createTarget()
    info.setScore(0)
    info.startCountdown(60)
    gameOn = true
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Target, function (sprite, otherSprite) {
    music.smallCrash.play()
    sprite.destroy(effects.warmRadial, 200)
    info.changeScoreBy(1)
    target.setPosition(randint(20, 150), randint(10, 100))
    createSnowBall()
})
function throwSnowBall () {
    snowBall.throwDart()
    canThrow = false
    music.playTone(131, music.beat(BeatFraction.Half))
}
info.onCountdownEnd(function () {
    game.over(true)
})
function createTarget () {
    target = sprites.create(img`
        . . . . . 2 2 2 2 2 2 2 . . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 1 1 1 1 1 1 1 2 2 2 . 
        . . 2 2 1 1 2 2 2 2 2 1 1 2 2 . 
        . 2 2 1 1 2 2 2 2 2 2 2 1 1 2 2 
        . 2 2 1 2 2 1 1 1 1 1 2 2 1 2 2 
        . 2 2 1 2 2 1 2 2 2 1 2 2 1 2 2 
        . 2 2 1 2 2 1 2 1 2 1 2 2 1 2 2 
        . 2 2 1 2 2 1 2 2 2 1 2 2 1 2 2 
        . 2 2 1 2 2 1 1 1 1 1 2 2 1 2 2 
        . 2 2 1 1 2 2 2 2 2 2 2 1 1 2 2 
        . . 2 2 1 1 2 2 2 2 2 1 1 2 2 . 
        . . 2 2 2 1 1 1 1 1 1 1 2 2 2 . 
        . . . 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . . . . 2 2 2 2 2 2 2 . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Target)
    target.setPosition(randint(20, 150), randint(10, 100))
}
function createSnowBall () {
    snowBall = darts.create(img`
        . . 9 9 . . 
        . 9 1 1 9 . 
        9 1 1 1 1 9 
        9 1 1 1 1 9 
        . 9 1 1 9 . 
        . . 9 9 . . 
        `, SpriteKind.Projectile, 10, 105)
    snowBall.controlWithArrowKeys()
    snowBall.setTrace()
    canThrow = true
}
let snowBall: Dart = null
let target: Sprite = null
let canThrow = false
let snowMan: Sprite = null
let gameOn = false
gameOn = false
scene.setBackgroundColor(8)
game.setDialogCursor(img`
    . . . . 9 f f f f f 9 . . . . . 
    . . . . 9 f f f f f 9 . . . . . 
    . . . . 9 f 2 2 2 2 9 9 . . . . 
    . . . . 9 2 f f f f f f 9 . . . 
    . . . 9 f f f 1 1 1 1 9 . . . . 
    . . . 9 f 1 1 1 f 1 f 9 . . . . 
    . . . . 9 1 1 1 1 4 4 4 9 . . . 
    . . . . 9 2 1 1 1 1 1 1 9 . . . 
    . . 9 9 2 2 2 2 2 2 2 9 . . . . 
    . 9 2 2 2 1 1 2 1 1 1 1 9 . . . 
    . 9 2 2 1 1 2 2 1 1 f 1 1 9 . . 
    . . 9 1 1 1 2 2 1 1 1 1 1 9 . . 
    . . 9 1 1 1 2 2 1 1 1 f 1 9 . . 
    . . 9 1 1 1 1 1 1 1 1 1 1 9 . . 
    . . . 9 1 1 1 1 1 1 f 1 9 . . . 
    . . . . 9 1 1 1 1 1 1 9 . . . . 
    `)
game.setDialogFrame(img`
    ..................................................................
    ....33.......33...........dddd............dddd............aaa.....
    ...a533.....393....ddddddd1111d....ddddddd1111d....3333...a35a....
    ...a553aaa339993.dd1111dd111111dddd1111dd111111dd.39393aaa3553aa..
    ..a355555a3999993d11911111111111dd11911111111111d339993a555555553.
    .a555555333399933119991111111111111999111111111113999993a55555533.
    .a355555333393931111911111115511111191111111551111399933a3555533..
    .aa355555a1333311111111111115511111111111111551111339331a55555a...
    ...a55355a1111111111111111111111111111111111111111133311a55335a...
    ...a5aaaaa1111191111111111111111111111111111111111111111aaa33aa...
    ...aa3311115511111111111111111111111111111111111119111111113333...
    ..3339331115511111111111111111111111111111111111111111551133393...
    ..39999331111111111111111111111111111111111111111111115511399993..
    ..339999311111111111111111111111111111111111111111111111113399993.
    ..399993311111111111111111111111111111111111111111111111113999933.
    ...339331191111111111111111111111111111111111111111111119113393...
    ....3311111111111111111111111111111111111111111111111111111133....
    ...dd11111111111111111111111111111111111111111111111111111111dd...
    ...d1111111111111111111111111111111111111111111111111111111111d...
    ..d111111111111111111111111111111111111111111111111111111111911d..
    .d1111551111111111111111111111111111111111111111111111111119991d..
    .d1111551111111111111111111111111111111111111111111111111111911d..
    .d1111111111111111111111111111111111111111111111111111111111111d..
    .d111111111111111111111111111111111111111111111111111111111111dd..
    ..d11111111111111111111111111111111111111111111111111111111111dd..
    ..dd11111111111111111111111111111111111111111111111111111111111d..
    ..dd111111111111111111111111111111111111111111111111111111111111d.
    ..d1111111111111111111111111111111111111111111111111111111111111d.
    ..d1191111111111111111111111111111111111111111111111111111551111d.
    ..d1999111111111111111111111111111111111111111111111111111551111d.
    ..d119111111111111111111111111111111111111111111111111111111111d..
    ...d1111111111111111111111111111111111111111111111111111111111d...
    ...dd11111111111111111111111111111111111111111111111111111111dd...
    ...dd11111111111111111111111111111111111111111111111111111111dd...
    ...d1111111111111111111111111111111111111111111111111111111111d...
    ..d111111111111111111111111111111111111111111111111111111111911d..
    .d1111551111111111111111111111111111111111111111111111111119991d..
    .d1111551111111111111111111111111111111111111111111111111111911d..
    .d1111111111111111111111111111111111111111111111111111111111111d..
    .d111111111111111111111111111111111111111111111111111111111111dd..
    ..d11111111111111111111111111111111111111111111111111111111111dd..
    ..dd11111111111111111111111111111111111111111111111111111111111d..
    ..dd111111111111111111111111111111111111111111111111111111111111d.
    ..d1111111111111111111111111111111111111111111111111111111111111d.
    ..d1191111111111111111111111111111111111111111111111111111551111d.
    ..d1999111111111111111111111111111111111111111111111111111551111d.
    ..d119111111111111111111111111111111111111111111111111111111111d..
    ...d1111111111111111111111111111111111111111111111111111111111d...
    ...dd11111111111111111111111111111111111111111111111111111111dd...
    ....3311111111111111111111111111111111111111111111111111111133....
    ...393311911111111111111111111111111111111111111111111191133933...
    .339999311111111111111111111111111111111111111111111111113399993..
    .399993311111111111111111111111111111111111111111111111113999933..
    ..39999311551111111111111111111111111111111111111111111113399993..
    ...3933311551111111111111111111111111111111111111111155111339333..
    ...3333111111119111111111111111111111111111111111111155111133aa...
    ...aa33aaa1111111111111111111111111111111111111111911111aaaaa5a...
    ...a53355a1133311111111111111111111111111111111111111111a55355a...
    ...a55555a1339331111551111111111111155111111111111133331a555553aa.
    ..3355553a339993111155111111191111115511111119111139393333555553a.
    .33555555a399999311111111111999111111111111199911339993333555555a.
    .355555555a399933d11111111111911dd11111111111911d3999993a555553a..
    ..aa3553aaa39393.dd111111dd1111dddd111111dd1111dd.399933aaa355a...
    ....a53a...3333....d1111ddddddd....d1111ddddddd....393.....335a...
    .....aaa............dddd............dddd...........33.......33....
    ..................................................................
    `)
game.showLongText("Snowman target practice. -by Adri", DialogLayout.Center)
game.showLongText("Happy Thanksgiving! Howell 2021 Celebration", DialogLayout.Full)
game.showLongText("A - Throw            H arrow keys - Change angle         V arrow keys - Change force", DialogLayout.Full)
startGame()
game.onUpdate(function () {
    for (let value of sprites.allOfKind(SpriteKind.Projectile)) {
        if (value.y > 120) {
            value.destroy()
            createSnowBall()
        }
    }
})
