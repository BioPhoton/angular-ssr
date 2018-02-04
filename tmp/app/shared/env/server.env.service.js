var ServerEnvService = (function () {
    function ServerEnvService() {
    }
    Object.defineProperty(ServerEnvService.prototype, "env", {
        get: function () {
            return "Server!";
        },
        enumerable: true,
        configurable: true
    });
    return ServerEnvService;
}());
export { ServerEnvService };
