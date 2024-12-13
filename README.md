# Next.js 15: 'process is not defined' Error
This repository demonstrates a common error encountered in Next.js 15 applications when attempting to access environment variables within client-side code. The error, 'process is not defined', arises because the 'process' global object is not available in browser environments.

## Bug
The bug is located in `pages/about.js`.  The code attempts to access `process.env.MY_VARIABLE`. Since this is client-side code, the `process` object is undefined leading to the error.

## Solution
The solution involves using the `next/config` module to access environment variables on the server-side and pass them to the client-side as props.  This ensures that the code works correctly both on the server and in the browser. See `pages/aboutSolution.js` for the corrected code.