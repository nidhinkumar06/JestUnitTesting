Installing Jest for first time
-------------------------------
Install jest globally by using the below command
<!-- npm install -g jest-cli -->
Once installed create a directory and create a js file with a functions
Create a test file and add the functions
Both files should be in same name
Add script in package.json
<!-- {
  "scripts": {
    "test": "jest"
  }
} -->
To run use the command: jest
External Links:
https://stackoverflow.com/questions/28725955/how-do-i-test-a-single-file-using-jest
https://github.com/facebook/jest

Matchers
---------
To check value between two numbers we can use
toBe
toBeGreaterThan
toBeGreaterThanOrEqual
toBeLessThanOrEqual
toBeLessThan
toEqual

For floating points we can use

toBeCloseTo
toBe is not used because of rounding value

To check null and zero value we can use matchers like

toBeNull
toBeDefined
not.toBeUndefined
not.toBeTruthy
toBeFalsy

To check a string contains we can use matchers like

toMatch

To check a value contains in an array we can used

toContain

---------------------
