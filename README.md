# Bitly Interview Task

#####   Smoke Test Functionalities 

**QR Code** is most frequently used to generate `URL, Text, Email, Phone & Address`. So I have created the smoke cases to test the generation of QR Code for URL, Text, Email, Phone & Addresses. I have also included the additional customization scenarios as a part of the smoke test scenarios.
 
Areas	| Scenarios
--------|-----------
URL     | 1. Generate QR Code for URL <br> 2. QR Code should not be generated for blank url <br> 3. QR Code should not be generated for incorrect url  <br> 4. Generate QR Code for URL in customized color <br> 5. Generate QR Code for URL with twitter logo image and customized color  <br>  6. Generate QR Code for URL with template <br> 7. Generate QR Code for URL with customized design   
Text    | 1. Generating QR Code for minimum characters(22) as well as maximum characters(400)   <br> 2. No QR Code should be generated for blank text  
Email   | 1. Generate QR Code for Email 
Phone   | 1. Generate QR Code for phone number  
Address | 1. Generate QR Code for Address   

<hr> 

#### Code Design  

- I have followed the page object model. All the common elements & methods are part of CommonPage.js 
- For each of the features such as `URL, Text, Email, Phone & Address` has an individual page( e.g. URLPage.js, TextPage.js, etc) and extends to CommonPage.js 
- I have created the feature-specific Test (e.g., URL-test.spec.js) which holds all the tests. 
- I have used fixtures to adopt data-driven where ever it is useful 
- @zxing/library is used to validate the content of the generated QR Code 
- validateColorOfQRCode, validateImageInsideQRCode methods are used to validate the background, foreground, and brand logo of the generated QR Code. 

<hr>

#### Step to run the script
Steps to run the scripts on the test environment
*    Install the node modules by running ``` npm install ```
*    open another terminal to start the tests: ``` npm run test:e2e:test ```

#### Test Run Status
<p align="center">
<img src="https://github.com/gsumit1/BitlyCaseStudy/blob/master/TestExecutionResult.JPG">
</p>
<hr>

*** Please let me know in case of any query
