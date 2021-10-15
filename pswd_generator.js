function generatePassword(length = 16, useLowCase = true, useUpperCase = true, useNumbers = true, useSymbols = true) {
    var charset = "",
        charsetLowCase = "abcdefghijklmnopqrstuvwxyz",
        charsetUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        charsetNumbers = "0123456789",
        charsetSymbols = "!@#$%^&*()_+~`|}{[]\:;?><,./-=",
        retVal = "";
    charset += useLowCase ? charsetLowCase : "";
    charset += useUpperCase ? charsetUpperCase : "";
    charset += useNumbers ? charsetNumbers : "";
    charset += useSymbols ? charsetSymbols : "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}