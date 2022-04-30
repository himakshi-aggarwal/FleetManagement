# FleetManagement

Web based Fleet management system with micro front end implementation using Webpack's Module Federatin plugin together with the Angular CLI.

## Part 1: Install Node.js, npm and Angular CLI

1. To install Node.js for Windows, you can download the installer from https://nodejs.org/en/ and run the installer.
   
   Follow the prompts to select an install path and ensure the npm package manager feature is included along with the Node.js runtime. This should be the default      configuration. Restart your system once the installation is complete.
   
   If you installed under the default configuration, Node.js should now be added to your PATH. Run command prompt or powershell and input the following to test it:
   
   ```
   node -v
   ```
   The console should respond with a version string. Repeat the process for npm:
   
   ```
   npm -v
   ```
   
   If both commands work, your installation was a success, and you can start using Node.js!
   
2. To install the Angular CLI, open a terminal window and run the following command:

   ```
   npm install -g @angular/cli
   ```
   
   You can run the following command to check the angular version installed.
   
   ```
   ng --version
   ```

## Part 2: Clone and Inspect the Project

In this part you will clone the project and inspect the various micro front end applications.

1. Clone the projects:

    ```
    git clone https://github.com/himakshi-aggarwal/FleetManagement.git
    ```

2. Move into the project directory and install the dependencies **with npm**:

    ```
    cd FleetManagement
    npm i
    ```
  
3. Start the ``shell`` using the following command:

    ```
    ng serve shell -o
    ```

4. Do the same for the microfrontends. In this project we have three microfronts namely,   ``Dashboard`` (Microfrontend 1) , ``Fleet`` (Microfrontend 2),   ``Analytics`` (Microfrontend 3). 

    You can start the apps with the following commands:
  
    ```
  
      ng serve dashboard -o
  
      ng serve fleet -o
  
      ng serve analytics -o
  
    ```
    
    **Hint:** You might use three terminals for this
    
5. After a browser window with the shell opened (``http://localhost:5000``), you will observe the ``Dashboard`` microfrontend is loaded in the shell. You can also try to click on ``Fleet``. This should load the fleet microfrontend into the shell:
    
