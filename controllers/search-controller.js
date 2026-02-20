const axios = require('axios')
const searchModule = require('./utils/searchModule')

function searchByTitle(req, res) {
  const title = req.body.medicine;

  axios.get(process.env.FHIR_URL || "http://fhir-server-epi:8080/api/fhir/Bundle?_format=json")
  .then(response => {
    const leaflet = searchModule.searchLeaflet(title,response.data.entry);
    if (leaflet == null) {
      return res.status(404).send({HTTP_err_Code:404, msg: "Resource not found"});
    } else {
      return res.status(200).send(leaflet);
    }
  }).catch(error => {
    return res.status(500).send({err:error});
  });

}

module.exports = {
  searchByTitle
}