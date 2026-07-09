
function launchBrowser(browserName) {
    if(browserName == "chrome"){
        console.log("The browser launched is", browserName);
    }else {
        console.log("The browser launched is not a chrome It is", browserName)
    }
}
launchBrowser("chrome")
launchBrowser("Edge")

function runTests(testType) {
    switch (testType) {
        case "smoke":
            console.log("The test type is smoke")
            break;
        case "sanity" : 
            console.log("The test type is sanity")
            break
        case "regression" :
            console.log("The test type is regression")
        default:
            console.log("The test type is undefined")
            break;
    }
}
runTests("smoke")
runTests("default")