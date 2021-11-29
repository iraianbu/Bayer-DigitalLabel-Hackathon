# Bayer-Digital-Label-Hackathon

## About the Project
This project involves the implementation of a one-stop solution for all of the farmer's needs. Some of the major problems addressed include the creation of a unique digital identity, enabling a dynamic label that can be used to view detailed information about the product, supply chain visibility, product authenticity, customer support, ease of shopping experience.

## Demo Video
- The entire demo consisting of the entire web application demo followed by the blockchain hyperledger fabric demo, and then the deep learning model to predict the plant disease from the image is present at https://www.youtube.com/watch?v=zjjBaXwKuS0
- For sample demo, while scanning the QR code in the demo website use any QR code in the QR code folder. These QR codes carry the unique ID of the product. 


## Our Solution and Key Features
Our proposed solution basically involves the implementation of 
- A One-Stop Application aiming to improve the farmer’s experience throughout. 
 - A single digital identity for each Bayer product to facilitate supply chain visibility and tracking powered by blockchain technology. 
- A single customized platform/application to purchase/manage all products bought by the Bayer customer.
- Integrated Support Feature with the ability to submit complaints in the form of text/multimedia regarding their problems
- SmartScan Feature that helps diagnose plant diseases which could later be integrated to recommend the right products. 

Our application's key features include the following:
- Dashboard Page
- Blockchain-based supply chain tracking and authenticity checks. 
- Bayer Store with integrated cart and Stripe payment gateway
- Customer Support Page 
- Product Authenticity Page
- Built-in recommendation system to identify frequently bought-together items.
- SmartScan Feature to identify disease from the image of the plant

Each part of the application has been explained detailed in the PowerPoint presentation and the demo video.

## Product Screenshots
## Web App
### Dashboard Page
![Dashboard-1](https://github.com/suriyaa333/Bayer-Digital-Label-Hackathon/blob/master/Bayer-Screenshots/Dashboard.png)
![Dashboard-1](https://github.com/suriyaa333/Bayer-Digital-Label-Hackathon/blob/master/Bayer-Screenshots/Your_products.png)
![Dashboard-1](https://github.com/suriyaa333/Bayer-Digital-Label-Hackathon/blob/master/Bayer-Screenshots/My%20orders.png)

### Store Page
![Dashboard-1](https://github.com/suriyaa333/Bayer-Digital-Label-Hackathon/blob/master/Bayer-Screenshots/Store.png)
![Dashboard-1](https://github.com/suriyaa333/Bayer-Digital-Label-Hackathon/blob/master/Bayer-Screenshots/Productdetail.png)
![Dashboard-1](https://github.com/suriyaa333/Bayer-Digital-Label-Hackathon/blob/master/Bayer-Screenshots/Cart.png)
![Dashboard-1](https://github.com/suriyaa333/Bayer-Digital-Label-Hackathon/blob/master/Bayer-Screenshots/Digital%20Payment.png)
![Dashboard-1](https://github.com/suriyaa333/Bayer-Digital-Label-Hackathon/blob/master/Bayer-Screenshots/Success%20page.png)

### Authenticity Page
![Dashboard-1](https://github.com/suriyaa333/Bayer-Digital-Label-Hackathon/blob/master/Bayer-Screenshots/Authenticity%20with%20qr%20scanning'.jfif)
![Dashboard-1](https://github.com/suriyaa333/Bayer-Digital-Label-Hackathon/blob/master/Bayer-Screenshots/Authenticity.jfif)

### Support Page
![Dashboard-1](https://github.com/suriyaa333/Bayer-Digital-Label-Hackathon/blob/master/Bayer-Screenshots/Support.png)
![Dashboard-1](https://github.com/suriyaa333/Bayer-Digital-Label-Hackathon/blob/master/Bayer-Screenshots/Smart%20scan%20with%20FAQ's.png)

## Blockchain Demo Screenshots
![Dashboard-1](https://github.com/suriyaa333/Bayer-Digital-Label-Hackathon/blob/master/Bayer-Screenshots/docker%201.png)
![Dashboard-1](https://github.com/suriyaa333/Bayer-Digital-Label-Hackathon/blob/master/Bayer-Screenshots/hyperledger%20explorer.png)
![Dashboard-1](https://github.com/suriyaa333/Bayer-Digital-Label-Hackathon/blob/master/Bayer-Screenshots/fabric%20terminal.png)
![Dashboard-1](https://github.com/suriyaa333/Bayer-Digital-Label-Hackathon/blob/master/Bayer-Screenshots/docker.png)
![Dashboard-1](https://github.com/suriyaa333/Bayer-Digital-Label-Hackathon/blob/master/Bayer-Screenshots/block%20hash.png)

## Instructions on running

For running the web app:
- The entire web app has been deployed on Heroku and can be accessed through this link https://bayeridl.herokuapp.com 
- If required to make changes in the deployed web app and re-run, simply clone the public repository and push changes to the remote repository. 

For running hyperledger fabric:
- First download the required dependencies for running hyperledger fabric such as Node JS, Git Bash, and Docker. 
- Once all dependencies have been downloaded successfully, create a new directory in the form of "$HOME/go/src/github.com/<your_github_userid>"
- Download the hyperledger fabric image to your repository by running the following command, "$ curl -sSL https://bit.ly/2ysbOFE | bash -s"
- Once downloaded, go into the fabric samples folder, and then asset transfer basic, and then replace chaincode-javascript folder with the one from the above shared repository.
- Now follow the steps given at the repository and execute the commands to interact with the deployed chaincode. 

For running the deep learning demo:
- Download the ipynb file from the repository
- Run it through Google Colab and attatch the files specified in the Readme file.
- Once done, execute the cells in sequence to use the trained model to make predictions.
