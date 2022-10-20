# Data-innovations-hub
Purpose of the Data-innovations-hub store and publicly share the data.
The app allow users to select some files from their computer and click on an upload button to upload them
The upload process consists of writing the transferred file data to the Downloads folder.

# Implementation
The app is created using Angular as a front-end and the Flask as a backend. To connect client side with backend, 
POST endpoint passes the received file to the downloads folder.
It returns a success or reject response to the users in the front end, from the backend. 


# In summary, the app allow users to do the following:
* Select files to be uploaded
* View a list of files that have been selected
* Clear all selected files
* Resetting the whole system
* Click on an upload button to initiate the upload (send paths of selected files to the Flask
app)
* Write the transferred file data to your local ‘Downloads’ folder (this part is
handled through Flask)
* Inform the user when the upload is completed and show them the response provided by
your upload endpoint
Note:
Both portions (front end and back end) can be run on localhost. In order to run client service on localhost, proxy configuration is needed to set up with the following 
code:
ng serve --proxy-config proxy.conf.json
