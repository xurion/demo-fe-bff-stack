FROM node
WORKDIR /api
COPY package.json /api/
COPY yarn.lock /api/
RUN yarn install
COPY . /api/
EXPOSE 3000
CMD ["yarn", "start"]
