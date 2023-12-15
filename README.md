# README

## INTRODUCTION
The **AgriAccess** website serves as a pivotal link between agricultural businesses and customers, aiming to optimize efficiency in inventory management and order processing. With a commitment to quality, the platform provides a user-friendly interface for customers to seamlessly access and order high-quality agricultural products. Beyond being a transactional marketplace, AgriAccess fosters a sense of community by serving as a collaborative space for industry professionals, farmers, suppliers, and customers to interact and share insights. Through its multifaceted approach, AgriAccess not only facilitates smooth business transactions but also contributes to the growth and sustainability of the agricultural sector.

_This project has been made in compliance for the Final Project in CCS 305-CS31S2 Software Engineering 1 course of Mr. Bryan Dadiz from Technological Institute of the Philippines - Manila._

## INSTALLATION GUIDE

**1. CLONING THE GIT REPOSITORY**

  To get started with the application, visit the SoftEngProj-DjangoReact repository and clone it to your preferred IDE (we recommend using Visual Studio Code). 
  
  ![image](https://github.com/omzkiii/SoftEngProj-DjangoReact/assets/113571595/1efebbfd-126c-4841-956a-fd618f3d2281)

  After cloning, make sure that you are on the correct environment or folder in your IDE.



**2. STARTING THE BACK-END SERVER**

To integrate and start the back end server to the web application, run the following codes below. Make sure to copy the path of the folder correctly and replace `...\SoftEngProj-DjangoReact`. You can view it by navigating to your file explorer and copying the path once you've opened the project folder.

     cd ...\SoftEngProj-DjangoReact 

  **2.1** Change the current directory to the root folder of the project.

    python -m venv (env name)
  
  **2.2** Using Pythono's built-in venv module, create a new environment. Make sure to change the *_(env name)_* to your preferred virtual environment name.
      
    python (env name)\Scripts\activate

  **2.3** After creating the virtual environment, activate the virtual environment using the code below. 

    python (env name)\Scripts\activate

  **2.4** Change the current directory again to the root folder of the project.

       cd ...\SoftEngProj-DjangoReact

  **2.5** Install the Python packages in the `requirements.txt` file using the code below:
    
      pip install -r requirements

  *2.6* To run the back-end server, enter the code below in the terminal to execute the Django development server to run the project.

    python manage.py runserver
  
**3. RUNNING THE FRONT-END WEBSITE**

  **3.1** Make sure that you are on the root folder of the project. Change your current directory to the root folder and to the `nextjs_app` folder within the root folder. 
  
     cd ...\SoftEngProj-DjangoReact\nextjs_app

  **3.2** To install all the dependencies for the project, run the command below:
      
    npm install

  **3.3** To start the server for the website, run the code below and it will display the link to it _(usually https://localhost:3000)_. If it the website didn't open automatically, hold **ctrl** on Windows or **cmd** in Mac and click the link.
  
    npm run dev


## CONTRIBUTORS AND DEVELOPERS 

+ Cayube, Adriana Emery
+ Esconde, Khiel Ian
+ Espinosa, Ronwaldo
+ Gregorio, Trixia Danica
+ Reyes, Dan
+ Santillan, Krizzia Pearl
+ Santos, Geomar

  
