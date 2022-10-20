# Data-innovations-hub
Purpose of the Data-innovations-hub is to store and publicly share the data. The app is created using Angular as a front-end and the Flask as a backend. This app allows users to select some files from their computer and click on an upload button to upload them. Once users click on an upload button to initiate the upload, it sends paths of selected files to the Flask app with POST request. The upload process consists of the writing the transferred file data to the Downloads folder. If data is successfully saved on a local folder, users will be able to see an information message. If users submit a forbidden type of data, they will see the error message and system will prevent them to submit files.

# In summary, the app allows users to do the following:
* Select files to be uploaded
* View a list of files that have been selected
* Reset button to reset whole system 
* Transferred file data to your local ‘Downloads’ folder (this part is
handled through Flask)
* Inform the users when the upload is completed and show them the response provided by
your upload endpoint.
* Inform the users if they uploaded forbidden type of data, and show them the response provided by
your upload endpoint.

# Constraints
*	To prevent to upload malicious files to the folder, system validates the types of files. Therefore, client serve will only accept files which have the following extensions:
.png, .jpeg, .docx, .pdf, .ppt, and .txt.
* To avoid repetition of the saving files, after uploading the file to the local folder, all files will be removed from the list.
*	If user did not submit any file, client side will prevent them to submit empty files. The users will be informed with a proper validation message.

#Proxy
Both portions (front end and back end) can be run on localhost. In order to run client service on localhost, proxy configuration is needed to set up on the proxy.conf.json file and with the following code:
                                                  ``` ng serve --proxy-config proxy.conf.json ```

# System interface
![image](https://user-images.githubusercontent.com/62059163/197043306-1d7ff8d8-8fad-445b-b664-32bd4e97f79d.png)
# Saved files
![image](https://user-images.githubusercontent.com/62059163/197042673-f0a830e2-5577-4d87-832d-4841cd61c499.png)
