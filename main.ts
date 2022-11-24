datalogger.onLogFull(function () {
    Logging = false
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
input.onButtonPressed(Button.A, function () {
    Logging = true
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Skull)
    datalogger.deleteLog()
    datalogger.setColumnTitles(
    "temp",
    "lum",
    "son"
    )
})
input.onButtonPressed(Button.B, function () {
    Logging = false
    basic.showIcon(IconNames.No)
})
let Logging = false
Logging = false
basic.showIcon(IconNames.No)
datalogger.setColumnTitles(
"X",
"Y",
"Z"
)
loops.everyInterval(100, function () {
    if (Logging) {
        basic.showIcon(IconNames.Heart)
        datalogger.log(
        datalogger.createCV("X", input.acceleration(Dimension.X)),
        datalogger.createCV("Y", input.acceleration(Dimension.Y)),
        datalogger.createCV("Z", input.acceleration(Dimension.Z))
        )
    }
})
