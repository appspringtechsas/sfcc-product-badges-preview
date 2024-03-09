'use strict'

function productLabelColorFormatter(colorStr) {
    const colorRegExpNoHash = /^([0-9a-fA-F]{8}|[0-9a-fA-F]{6})$/
    const colorRegExpWithHash = /^#([0-9a-fA-F]{8}|[0-9a-fA-F]{6})$/
    
    if (colorRegExpNoHash.test(colorStr)) {
        return `#${colorStr}`
    } else if (colorRegExpWithHash.test(colorStr)) {
        return colorStr
    }

    return ''
}

module.exports = productLabelColorFormatter