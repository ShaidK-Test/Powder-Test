//
//
//

const core = require('@actions/core');

try {
    const { version } = require("./package.json");
    core.setOutput("package_version", version);
}
catch (err) {
    core.setFailed(error.message);
}
