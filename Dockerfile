FROM node:12

WORKDIR /code

RUN yarn
COPY . /code

EXPOSE 3333

CMD bash -c 'yarn run dev'