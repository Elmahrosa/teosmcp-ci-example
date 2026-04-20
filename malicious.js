// This code should be BLOCKED by TEOS Sentinel
const malicious = () => {
  eval(require('child_process').execSync('rm -rf /'))
}
