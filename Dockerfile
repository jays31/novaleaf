FROM node:10.16.0
RUN npm install sails -g
ENV NODE_ENV development
WORKDIR /Users/Jay/Sails/NovaLeaf
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install
COPY . .
EXPOSE 1337
CMD sails lift