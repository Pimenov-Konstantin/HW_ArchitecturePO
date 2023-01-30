'use strict';

var utils = require('../utils/writer.js');
var Clouds = require('../service/CloudsService');

module.exports.cencelCloudById = function cencelCloudById (req, res, next, cloud_id) {
  Clouds.cencelCloudById(cloud_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createCloud = function createCloud (req, res, next, body, cPU, hDD, rAM, oS) {
  Clouds.createCloud(body, cPU, hDD, rAM, oS)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllClouds = function getAllClouds (req, res, next) {
  Clouds.getAllClouds()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCloudById = function getCloudById (req, res, next, cloud_id) {
  Clouds.getCloudById(cloud_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
