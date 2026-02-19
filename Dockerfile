FROM node:22-slim

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

ENV PORT 3000

ENV FHIR_URL "https://fosps.gravitatehealth.eu/epi/api/fhir/Bundle?_format=json"

RUN npm ci --only=production

COPY . .

EXPOSE 3000

CMD [ "node", "app.js" ]
