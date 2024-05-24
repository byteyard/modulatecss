const fs = require('fs');
const csso = require('csso');
const path = require('path');

// List of CSS files to be processed
const files = [
  'src/modulate-base.css',
  'src/modulate-fluid-sizing-basic.css',
  'src/modulate-fluid-sizing-classic.css',
  'src/modulate-fluid-sizing-modern.css',
  'src/modulate-module-grid.css',
  'src/modulate-header.css'
];

// Ensure the dist/css directory exists
const distDir = 'dist/css';

// Delete all files under dist/css
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}

// Recreate the dist/css directory
fs.mkdirSync(distDir, { recursive: true });

// Process each file
files.forEach(file => {
  // Read the unminified content
  const input = fs.readFileSync(file, 'utf8');

  // Write the unminified file to dist/css
  const unminifiedOutputFileName = path.join(distDir, path.basename(file));
  fs.writeFileSync(unminifiedOutputFileName, input, 'utf8');

  // Minify the content
  const output = csso.minify(input).css;

  // Write the minified file to dist/css
  const minifiedOutputFileName = unminifiedOutputFileName.replace('.css', '.min.css');
  fs.writeFileSync(minifiedOutputFileName, output, 'utf8');
});

// Merge and minify all files into one
const mergedInput = files.map(file => fs.readFileSync(file, 'utf8')).join('\n');

// Write the unminified merged file
fs.writeFileSync('dist/css/modulate.css', mergedInput, 'utf8');

// Minify the merged content
const mergedOutput = csso.minify(mergedInput).css;

// Write the minified merged file
fs.writeFileSync('dist/css/modulate.min.css', mergedOutput, 'utf8');

console.log('CSS files have been processed successfully.');
