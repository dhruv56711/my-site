#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

// Get current directory
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m'
};

// Test cases
const tests = {
  'Project Structure': {
    check: () => checkFilesExist([
      'package.json',
      'src/App.js',
      'src/index.js',
      'public/index.html'
    ]),
    fix: 'npx create-react-app .'
  },
  // ... rest of your test cases remain the same ...
};

function checkFilesExist(files) {
  return files.every(file => fs.existsSync(path.join(__dirname, file)));
}

async function runTests() {
  console.log('\nRunning React App Setup Verification...\n');
  let allPassed = true;

  for (const [name, test] of Object.entries(tests)) {
    process.stdout.write(`Checking ${name}... `);
    try {
      const result = await test.check();
      if (result) {
        console.log(`${colors.green}✓ Working${colors.reset}`);
      } else {
        console.log(`${colors.red}✗ Not Working${colors.reset}`);
        console.log(`${colors.yellow}Fix: ${test.fix}${colors.reset}`);
        allPassed = false;
      }
    } catch (err) {
      console.log(`${colors.red}✗ Error${colors.reset}`);
      console.log(`${colors.yellow}Error: ${err.message}${colors.reset}`);
      allPassed = false;
    }
  }

  if (allPassed) {
    console.log(`\n${colors.green}All checks passed! You can now run: npm start${colors.reset}`);
  } else {
    console.log(`\n${colors.red}Some checks failed. Please fix the issues above.${colors.reset}`);
  }

  return allPassed;
}

// Run the tests
runTests();