'use strict'

var server = require('server')

server.extend(module.superModule)

server.append('Show', function (req, res, next) {
    const Site = require('dw/system/Site')
    const productLabelsContainerPosition = Site.current.getCustomPreferenceValue('PBLabelsContainerPosition').getValue()

    res.setViewData({
        productLabelsContainerPosition: productLabelsContainerPosition
    })

    next()
})

module.exports = server.exports()