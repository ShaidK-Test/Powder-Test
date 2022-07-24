//
// File: index.js / Note: Maintain the main entry point for the Snowflake Action  
//

const package_json = require('./package.json');
const core = require('@actions/core');

async function run() {
    try {
        const package_json_property = core.getInput('require_property');
        core.setOutput("property_${package_json_property}", inputProperty(package_json_property));
    }
    catch (err) {
      core.setFailed(err.message);
    }
}

exports.inputProperty = (arg) => {
    if (package_json[arg] == undefined) {
        throw new TypeError("Properties '${arg}' doesn't exist within File 'package.json'", "index.js", "17")
    }

    return package_json[arg]; 
};
  
run()

