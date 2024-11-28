input.onGesture(Gesture.ScreenUp, function () {
    basic.showString("carregando")
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # # . # #
        . # # # .
        . . # . .
        `)
    basic.showString("Roblox")
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    basic.showString("#jazzghost")
})
input.onButtonPressed(Button.B, function () {
    music.play(music.stringPlayable("- - - - - - - - ", 120), music.PlaybackMode.UntilDone)
})
basic.showString("Hola!")
basic.showLeds(`
    . . . # .
    . . # . .
    . # # # .
    . # # . .
    . # # # .
    `)
