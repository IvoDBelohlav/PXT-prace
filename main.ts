radio.setFrequencyBand(20)
radio.setTransmitPower(5)
radio.setGroup(1)
let num = 1


basic.forever(function () {
console.logValue("light level", input.lightLevel())
console.log("\n\r")
basic.pause(20)

})

radio.onReceivedNumber(function(receivedNumber: number) {
    if(receivedNumber === 1){

        music.playTone(Note.C, music.beat(BeatFraction.Whole))

    }

})





input.onButtonPressed(Button.AB, function () {

    basic.clearScreen()
})