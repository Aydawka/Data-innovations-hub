# Data-innovations-hub
Purpose of the Data-innovations-hub is to store and publicly share the data. The app is created using Angular as a front-end and the Flask as a backend. This app allows users to select some files from their computer and click on an upload button to upload them. Once users click on an upload button to initiate the upload, it sends the selected files to the Flask app with POST request. The upload process consists of the writing the transferred file data to the Downloads folder. If data is successfully saved on a local folder, users will be able to see an information message. If users submit a forbidden type of data, they will see the error message and system will prevent them to submit files.

# Features and functionality
The application allows the user to do the following:
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
*	To prevent to upload malicious files to the folder, system validates the types of files. Therefore, client serve will only accept files which have the following file types:
    * images
    * Microsoft documents
    * text documents
* To avoid repetition of the saving files, in case file name and type already exist in the corresponding folder, new file will override the previous one.

# Local build and execution

## Requirements
* Python 3.9
* NodeJS 16

```
# Clone the repository
git clone https://github.com/Aydawka/Data-innovations-hub.git
```

## Server

```
# Change to the server directory from project directory
cd Data-innovations-hub/server

# Install Flask
pip install Flask

# Start the Flask development server on localhost
flask run -h 127.0.0.1 -p 5000
```

## Client

```bash
# Change to the client directory from project directory
cd Data-innovations-hub/client

# Install dependencies
npm install

# Start Angular development server on localhost
# The proxy configuration is needed as the server resides on a different origin
ng serve --host 127.0.0.1 --port 4200 --proxy-config proxy.conf.json --open
```

# System interface
![image](https://user-images.githubusercontent.com/62059163/197043306-1d7ff8d8-8fad-445b-b664-32bd4e97f79d.png)
# Saved files
![image](https://user-images.githubusercontent.com/62059163/197042673-f0a830e2-5577-4d87-832d-4841cd61c499.png)
