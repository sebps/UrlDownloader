module.exports = {
    generateID: function(type) {
        return type+'-' + Math.random().toString(36).substr(2, 9)
    }
}