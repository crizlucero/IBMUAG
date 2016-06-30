# FQL
Ejemplo de busqueda en facebook
Para ejecutar el ejemplo seguir las siguientes instrucciones en linux.

``bash
#command to install npm
sudo apt-get -y install npm

#Command to create a symbolic link from called node pointing to the nodejs binary.
ln -s /usr/bin/nodejs /usr/bin/node

#Command to install bower
npm install bower -g

#If you get the error bower ESUDO Cannot be run with sudo
#Create the ~/.bowerrc file
vim ~/.bowerrc

#copy and paste 
{ "allow_root": true }

# Command to install angular material
bower install angular-material -D

# Command to install angular highlightjs
bower install angular-highlightjs

# Command to install code mirror
bower install angular-ui-codemirror

# Command to install ng slide directive
bower install ng-slide-down

# Command to install angular-loading-spinner
bower install angular-loading-spinner

#Command to install angular-growl-2
bower install angular-growl-v2
```