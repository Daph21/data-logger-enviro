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
    "lum"
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
"temp",
"lum"
)
loops.everyInterval(1000, function () {
    if (Logging) {
        basic.showIcon(IconNames.Heart)
        datalogger.log(
        datalogger.createCV("temp", input.temperature()),
        datalogger.createCV("lum", input.lightLevel())
        )
    }
})
