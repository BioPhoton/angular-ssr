var ClientEnvService = (function () {
    function ClientEnvService() {
    }
    Object.defineProperty(ClientEnvService.prototype, "env", {
        get: function () {
            return "Client!";
        },
        enumerable: true,
        configurable: true
    });
    return ClientEnvService;
}());
export { ClientEnvService };
