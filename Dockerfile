FROM node:8.11.2

# The base node image sets a very verbose log level.
ENV NPM_CONFIG_LOGLEVEL warn

# Copy all local files into the image.
COPY . .

#RUN npm install
RUN yarn install

# Build for production.
##RUN npm run build --production

# Install `serve` to run the application.
#RUN npm install -g serve

# Set the command to start the node server.
#CMD serve -s build -p 5000
CMD yarn start  -p 5000

# Tell Docker about the port we'll run on.
#EXPOSE 5200
#EXPOSE 5000
