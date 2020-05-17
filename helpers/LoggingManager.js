class LoggingManager {
    static enabled = false;
    static log(message) {
        if (this.enabled) console.log(message);
    }
    static enableLogging() {
        LoggingManager.enabled = true;
    }
    static disableLogging() {
        LoggingManager.enabled = false;
    }
}

module.exports = LoggingManager;