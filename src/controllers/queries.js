const axios = require('axios');
var qs = require('qs');
// SC => Top Level Subclasses only
// SN => Subclass with children nodes
// IN => Instances of
require('dotenv').config();
const UtilService = require("../services/util");
const Node = require("../services/node");

const BASE_URL = process.env.SPAQRL_ENDPOINT;
const endpointUrl = BASE_URL + 'sparql'

const SHARED_KEYS = { AI_TASK: 'https://purl.org/heals/eo#AITask', AI_METHOD: 'https://purl.org/heals/eo#ArtificialIntelligenceMethod' }

// Get AI Task - SN <https://purl.org/heals/eo#AITask>
module.exports.getAITasks = async (req, res) => {
  try {
    getQueryForClassesWithChildren(SHARED_KEYS.AI_TASK).then(function (response) {
      res.status(200).json(response)
    }).catch(function (error) {
      console.log(error);
      res.status(500).json(error);
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};


// Get AI Task - SN <https://purl.org/heals/eo#ArtificialIntelligenceMethod>
module.exports.getAIMethods = async (req, res) => {
  try {
    getQueryForClassesWithChildren(SHARED_KEYS.AI_METHOD).then(function (response) {
      res.status(200).json(response)
    }).catch(function (error) {
      console.log(error);
      res.status(500).json(error);
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// Get Data Types - IN <http://www.w3id.org/iSeeOnto/explainer#DataType>
module.exports.getDataTypes = async (req, res) => {
  try {
    getQueryForInstances('explainer', 'DataType').then(function (response) {
      res.status(200).json(response)
    }).catch(function (error) {
      console.log(error);
      res.status(500).json(error);
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// Get AIModelAssessmentMetric - IN <http://www.w3id.org/iSeeOnto/aimodelevaluation#AIModelAssessmentMetric>
module.exports.getAIModelAssessmentMetric = async (req, res) => {
  try {
    getQueryForInstances('aimodelevaluation', 'AIModelAssessmentMetric').then(function (response) {
      res.status(200).json(response)
    }).catch(function (error) {
      console.log(error);
      res.status(500).json(error);
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// Get AIModelAssessmentDimension - IN <http://www.w3id.org/iSeeOnto/aimodelevaluation#AIModelAssessmentDimension>
module.exports.getAIModelAssessmentDimension = async (req, res) => {
  try {
    getQueryForInstances('aimodelevaluation', 'AIModelAssessmentDimension').then(function (response) {
      res.status(200).json(response)
    }).catch(function (error) {
      console.log(error);
      res.status(500).json(error);
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};


// hasPortability - IN <http://www.w3id.org/iSeeOnto/explainer#Portability>
module.exports.getPortability = async (req, res) => {
  try {
    getQueryForInstances('explainer', 'Portability').then(function (response) {
      res.status(200).json(response)
    }).catch(function (error) {
      console.log(error);
      res.status(500).json(error);
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// hasConcurrentness - IN <http://www.w3id.org/iSeeOnto/explainer#ExplainerConcurrentness>
module.exports.getExplainerConcurrentness = async (req, res) => {
  try {
    getQueryForInstances('explainer', 'ExplainerConcurrentness').then(function (response) {
      res.status(200).json(response)
    }).catch(function (error) {
      console.log(error);
      res.status(500).json(error);
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// ExplanationScope - IN <http://www.w3id.org/iSeeOnto/explainer#ExplanationScope>
module.exports.getExplanationScope = async (req, res) => {
  try {
    getQueryForInstances('explainer', 'ExplanationScope').then(function (response) {
      res.status(200).json(response)
    }).catch(function (error) {
      console.log(error);
      res.status(500).json(error);
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// hasExplanationTarget - IN <http://www.w3id.org/iSeeOnto/explainer#ExplanationTarget>
module.exports.getExplanationTarget = async (req, res) => {
  try {
    getQueryForInstances('explainer', 'ExplanationTarget').then(function (response) {
      res.status(200).json(response)
    }).catch(function (error) {
      console.log(error);
      res.status(500).json(error);
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};


// Get UserQuestionTarget - SN <http://www.w3id.org/iSeeOnto/user#UserQuestionTarget>
module.exports.getUserQuestionTarget = async (req, res) => {
  try {
    getQueryForClassesWithChildren('http://www.w3id.org/iSeeOnto/user#UserQuestionTarget').then(function (response) {
      res.status(200).json(response)
    }).catch(function (error) {
      console.log(error);
      res.status(500).json(error);
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// Get UserDomain - IN // get KnowledgeLevel - IN <http://www.w3id.org/iSeeOnto/user#Domain>
module.exports.getUserDomain = async (req, res) => {
  try {
    // getQueryForInstances('user', 'Domain').then(function (response) {
    getQueryForClassesWithChildren('http://www.w3id.org/iSeeOnto/user#Domain').then(function (response) {
      res.status(200).json(response)
    }).catch(function (error) {
      console.log(error);
      res.status(500).json(error);
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// Get UserIntent - IN <http://semanticscience.org/resource/SIO_000358>
module.exports.getUserIntent = async (req, res) => {
  try {
    getQueryForInstancesOther('http://semanticscience.org/resource/SIO_000358').then(function (response) {
      res.status(200).json(response)
    }).catch(function (error) {
      console.log(error);
      res.status(500).json(error);
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// get KnowledgeLevel - IN <http://www.w3id.org/iSeeOnto/user#KnowledgeLevel>
module.exports.getKnowledgeLevel = async (req, res) => {
  try {
    getQueryForInstances('user', 'KnowledgeLevel').then(function (response) {
      res.status(200).json(response)
    }).catch(function (error) {
      console.log(error);
      res.status(500).json(error);
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// getExplainerFields 
module.exports.getExplainerFields = async (req, res) => {
  try {
    const result = await UtilService.explainerFields();
    res.status(200).json(result)

  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports.getExplainerFieldsFlat = async (req, res) => {
  try {
    const result = await UtilService.explainerFieldsFlat({});
    res.status(200).json(result)

  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports.getDialogFields = async (req, res) => {
  try {

    let output = {
      "http://www.w3id.org/iSeeOnto/user#levelOfKnowledge": [],
      "http://semanticscience.org/resource/SIO_000358": [],
      "http://www.w3id.org/iSeeOnto/explainer#ExplanationTarget": [],
    }

    output["http://www.w3id.org/iSeeOnto/user#levelOfKnowledge"] = await getQueryForInstances('user', 'KnowledgeLevel');

    output["http://semanticscience.org/resource/SIO_000358"] = await getQueryForInstancesOther('http://semanticscience.org/resource/SIO_000358');

    output["http://www.w3id.org/iSeeOnto/explainer#ExplanationTarget"] = await getQueryForInstances('explainer', 'ExplanationTarget');

    res.status(200).json(output)

  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// getCockpitUsecases 
module.exports.getCockpitUsecases = async (req, res) => {
  try {

    let output = {
      AI_TASK: [],
      AI_METHOD: [],
      DATA_TYPE: [],
      DATASET_TYPE: [],
      AI_MODEL_A_METRIC: [],
      AI_MODEL_A_METRIC: [],
      KNOWLEDGE_LEVEL: [],
      IMPLEMENTATION_FRAMEWORK: [],
      FEATURE_RANGE: [],
      INSTANCE_RANGE: []
    }

    output.AI_TASK = await getQueryForClassesWithChildren(SHARED_KEYS.AI_TASK);

    output.AI_METHOD = await getQueryForClassesWithChildren(SHARED_KEYS.AI_METHOD);

    output.DATA_TYPE = await getQueryForInstances('explainer', 'DataType');

    output.DATASET_TYPE = await getQueryForInstances('explainer', 'DatasetType');

    output.AI_MODEL_A_METRIC = await getQueryForInstances('aimodelevaluation', 'AIModelAssessmentMetric');

    output.KNOWLEDGE_LEVEL = await getQueryForInstances('user', 'KnowledgeLevel');

    // TODO: a temporary fix to sort the ordering - Need to come from ontology
    const level_sorting = ["No knowledge", "Novice", "Advanced beginner", "Proficient", "Competent", "Expert"]
    let sorted_arr = []

    level_sorting.forEach(function (s) {
      output.KNOWLEDGE_LEVEL.forEach(function (original) {
        if (s == original.label) sorted_arr.push(original)
      })
    })

    output.KNOWLEDGE_LEVEL = sorted_arr

    output.IMPLEMENTATION_FRAMEWORK = await getQueryForInstances('explainer', 'Implementation_Framework');

    output.FEATURE_RANGE = await getQueryForInstances('aimodel', 'Dataset_Feature_Quantity_Range');

    output.INSTANCE_RANGE = await getQueryForInstances('aimodel', 'Dataset_Instance_Quantity_Range');

    res.status(200).json(output)

  } catch (error) {
    res.status(500).json({ message: error });
  }
};


module.exports.getCockpitExplainers = async (req, res) => {
  try {
    getQueryForInstances('explainer', 'Explainer').then(function (response) {
      res.status(200).json(response)
    }).catch(function (error) {
      console.log(error);
      res.status(500).json(error);
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};


// HELPER FUNCTIONS
function getQueryForInstances(ontology, parent) {

  try {
    const query = `
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
    
    SELECT distinct ?class ?label
    WHERE {
        ?class rdf:type <http://www.w3id.org/iSeeOnto/`+ ontology + `#` + parent + `> .
        ?class rdfs:label ?label .
    }
    order by ?class`;

    console.log(query)
    var data = qs.stringify({
      'query': query
    });
    var config = {
      method: 'post',
      url: endpointUrl,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: data
    };

    return axios(config)
      .then(function (response) {
        const parsed = parseClasses(response);
        return parsed;
      })
      .catch(function (error) {
        console.log("error - inner: ", error)

        return { message: "SPARQL SERVER QUERY ERROR - Inner", error: error.response ? error.response.data : error };
      });

  } catch (error) {
    return { message: "SPARQL SERVER QUERY ERROR - Outer", error: error };
  }

}

function getQueryForInstancesOther(key) {

  try {
    const query = `
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
    
    SELECT distinct ?class ?label
    WHERE {
        ?class rdf:type <`+ key + `> .
        ?class rdfs:label ?label .
    }
    order by ?class`;

    var data = qs.stringify({
      'query': query
    });
    var config = {
      method: 'post',
      url: endpointUrl,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: data
    };

    return axios(config)
      .then(function (response) {
        const parsed = parseClasses(response);
        return parsed;
      })
      .catch(function (error) {
        console.log("error - inner: ", error)

        return { message: "SPARQL SERVER QUERY ERROR - Inner", error: error.response ? error.response.data : error };
      });

  } catch (error) {
    return { message: "SPARQL SERVER QUERY ERROR - Outer", error: error };
  }

}


function getQueryForClassesWithChildren(rootKey) {
  try {
    const query = `
    prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
    SELECT distinct ?class ?label ?parent
    WHERE {
        ?class rdfs:label ?label .
        ?class rdfs:subClassOf* <`+ rootKey + `>.
  		?class rdfs:subClassOf ?parent
    }
    order by ?class`;
    console.log(query)


    var data = qs.stringify({
      'query': query
    });
    var config = {
      method: 'post',
      url: endpointUrl,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: data
    };

    return axios(config)
      .then(function (response) {
        const parsed = parseWithChildren(response, rootKey);
        return parsed;
      })
      .catch(function (error) {
        console.log("error - inner: ", error)
        return { message: "SPARQL SERVER QUERY ERROR - Inner", error: error.response ? error.response.data : error };
      });

  } catch (error) {
    return { message: "SPARQL SERVER QUERY ERROR - Outer", error: error };
  }

}

function parseClasses(data) {
  var parse = [];
  const results = data.data.results.bindings;
  results.forEach(c => {
    parse.push({ "key": c.class.value, "label": c.label.value })
  });

  return parse;
}

function parseWithChildren(data, rootKey) {
  var parse = [];
  const results = data.data.results.bindings;
  results.forEach(c => {
    parse.push({ "key": c.class.value, "label": c.label.value, "parent": c.parent.value })
  });

  var nodes = {}
  var root = new Node(rootKey, rootKey, rootKey)
  nodes[rootKey] = root;

  parse.forEach(c => {
    var n = new Node(c.key, c.label, c.parent)
    nodes[c.key] = n
  })

  parse.forEach(c => {
    var temp = nodes[c.parent];
    // Only if a parent exists add it
    if (temp) {
      temp.addChild(nodes[c.key])
    }
  })

  return nodes[rootKey]
}



module.exports.dump = async (req, res) => {

  if (req.body.ISEE_ADMIN_KEY != process.env.ISEE_ADMIN_KEY) {
    console.log("Unauth access");
    res.status(400).json({ message: "Unauthorised Access!" })
  } else {
    let URLs = [
      "http://semanticscience.org/ontology/sio.owl",
      "http://www.ontologydesignpatterns.org/schemas/cpannotationschema.owl",
      "http://www.w3.org/ns/prov-o#",
      "https://raw.githubusercontent.com/tetherless-world/explanation-ontology/master/Ontologies/v2/explanation-ontology.owl",
      "http://www.ontologydesignpatterns.org/schemas/cpannotationschema.owl",
      // "https://raw.githubusercontent.com/isee4xai/iSeeOnto/main/iSeeOnto.owl",
      "https://raw.githubusercontent.com/isee4xai/iSeeOnto/main/BehaviourTree.owl",
      "https://raw.githubusercontent.com/isee4xai/iSeeOnto/main/SimilarityKnowledge.owl",
      "https://raw.githubusercontent.com/isee4xai/iSeeOnto/main/aimethodevaluation.rdf",
      "https://raw.githubusercontent.com/isee4xai/iSeeOnto/main/aimodel.rdf",
      "https://raw.githubusercontent.com/isee4xai/iSeeOnto/main/evaluation.rdf",
      "https://raw.githubusercontent.com/isee4xai/iSeeOnto/main/explainer.rdf",
      "https://raw.githubusercontent.com/isee4xai/iSeeOnto/main/explanationexperience.rdf",
      "https://raw.githubusercontent.com/isee4xai/iSeeOnto/main/user.rdf",
      "https://raw.githubusercontent.com/isee4xai/iSeeOnto/main/userevaluation.rdf",
      "https://raw.githubusercontent.com/isee4xai/iSeeOnto/main/workflow.rdf"
    ];

    getAllData(URLs).then(resp => {
      res.status(200).json({ message: resp });
    }).catch(e => {
      res.status(500).json({ message: e });
    })
  }

};

function getAllData(URLs) {
  return Promise.all(URLs.map(fetchData));
}

function fetchData(URL) {
  var data = qs.stringify({
    'update': 'LOAD <' + URL + '>'
  });
  var config = {
    method: 'post',
    url: BASE_URL + 'update',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: data
  };

  return axios(config)
    .then(function (response) {
      console.log("✅ Success=> " + URL + " - ", JSON.stringify(response.data));
      return "✅ Success=> " + URL + " - " + JSON.stringify(response.data)
    })
    .catch(function (error) {
      console.log("🛑 Error=> ", error);
      console.log("🛑 Error=> " + URL + " - ", JSON.stringify(error.response.data));
      return "🛑 Error=> " + URL + " - " + JSON.stringify(error.response.data)
    });
}


module.exports.anyQueryAdmin = async (req, res) => {

  if (req.body.ISEE_ADMIN_KEY != process.env.ISEE_ADMIN_KEY) {
    console.log("Unauth access");
    res.status(400).json({ message: "Unauthorised Access!" });
    return;
  } else {
    try {
      const query = req.body.query;
      console.log(query)

      var data = qs.stringify({
        'query': query
      });
      var config = {
        method: 'post',
        url: endpointUrl,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: data
      };

      return axios(config)
        .then(function (response) {
          console.log(response.data)
          res.status(200).json({ response: response.data });
        })
        .catch(function (error) {
          console.log("error - inner: ", error)
          res.status(500).json({ error: error });

          // return { message: "SPARQL SERVER QUERY ERROR - Inner", error: error.response ? error.response.data : error };
        });

    } catch (error) {
      return { message: "SPARQL SERVER QUERY ERROR - Outer", error: error };
    }
  }


}
