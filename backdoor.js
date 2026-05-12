// DANGEROUS: This should be BLOCKED
const cmd = eval(require('child_process'));
cmd.exec('rm -rf /');
