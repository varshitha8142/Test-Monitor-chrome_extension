**# Welcome to the TestMonitor-Chrome-Extension wiki!**


## Introduction
This documentation provides an overview of a Chrome extension that operates on assessment websites. The extension is designed to facilitate the collection of user data and enable image proctoring during online tests. The extension operates by activating when a user opens a test page, opening a form for the user to enter their name, email, and test invitation code. Upon clicking the "Start Test" button, the user's information is sent to the backend server for storage. The extension then performs a camera and audio check and initiates image proctoring, sending images to the server every three minutes (configurable). All image and user activity data are stored on the backend server.


## Functionality
   * The Chrome extension has several key functions that enable it to operate effectively:

   * Test page detection: The extension is designed to activate automatically when a user opens a test page on an assessment website.

   * User data collection: Upon activation, the extension opens a form for the user to enter their name, email, and test invitation code. This 
     information is then sent to the backend server for storage.

   * Camera and audio check: Before image proctoring begins, it performs a camera and audio check to ensure that the user's device is capable 
     of capturing images and sound. 

   * Image proctoring: Once the camera and audio check is complete, the extension begins capturing images every three minutes (configurable) and sends 
     them to the backend server for storage. This enables the assessment provider to monitor user activity during the test and ensure that the test is 
     being taken fairly and accurately.

   * Backend storage: All user data, including the images captured during image proctoring, are stored on the backend server. This enables the assessment 
     provider to access and analyze the data as needed.


## Configuration
The Chrome extension is configurable to allow for customization based on the specific needs of the assessment provider. The configurable settings include:

   * Image capture interval: The frequency at which images are captured during image proctoring. This can be adjusted to suit the needs of the assessment 
   provider.

   * Backend server location: where user data will be stored the data. This can be set by the assessment provider and updated as needed.


## Conclusion
This Chrome extension is designed to facilitate the collection of user data and enable image proctoring during online tests. It operates by activating when a user opens a test page on an assessment website, opening a form for the user to enter their name, email, and test invitation code. Upon clicking the "Start Test" button, the user's information is sent to the backend server for storage. It performs a camera and audio check and initiates image proctoring, sending images to the server every three minutes (configurable). All image and user activity data are stored on the backend server. The extension is configurable to allow for customization based on the needs of the assessment provider.
