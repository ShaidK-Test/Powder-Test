//
// File: index.js / Note: Maintain the main entry point for the Snowflake Action  
//

const package_json = require('./package.json');
const core = require('@actions/core');

function getExtensionManifestProperty(arg) {
    console.log("Executing Snowflake Action to extract following Property: ${arg} " + arg)
    if (package_json[arg] == undefined)
        throw new TypeError("Properties '${arg}' doesn't exist within File 'package.json'");

    return package_json[arg]; 
};

async function run() {
    try {
        const package_json_property = core.getInput('require_property');        
        core.setOutput("property_${package_json_property}", getExtensionManifestProperty(package_json_property));
    }
    catch (err) {
        core.setFailed(err.message);
    }
}

exports.getExtensionManifestProperty = getExtensionManifestProperty;
  
run()
