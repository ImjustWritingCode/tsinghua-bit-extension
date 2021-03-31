
/**
 * Use this file to define custom functions and blocks.
 * Read more at https://makecode.microbit.org/blocks/custom
 */

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * Custom blocks
 */
//% weight=75 color=#0fbc11 icon=""
namespace THbit {
    /**
     * Blinks an led in milliseconds
     * @param x x coordinates of blinks
     * @param y y coordinates of blinks
     * @param interval time between blinks in milliseconds
     */
    //% block="Blinks at x $x y $y every $interval ms"
    export function blink(x: number, y: number, interval: number): void {
        let sprite = game.createSprite(x, y)
        sprite.setBlink(interval)
        sprite.blink()
    }
}
