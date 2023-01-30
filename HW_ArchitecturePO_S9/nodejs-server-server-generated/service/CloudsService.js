'use strict';


/**
 * Метод отмены заказа на облако по ID
 *
 * cloud_id String Идентификатор заказа облака
 * no response value expected for this operation
 **/
exports.cencelCloudById = function(cloud_id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Метод создания заказа на облако
 *
 * body Error 
 * cPU String Количество ядер CPU
 * hDD String объем HDD
 * rAM String объем RAM
 * oS String операционная система
 * returns Cloud
 **/
exports.createCloud = function(body,cPU,hDD,rAM,oS) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "OS" : "Windows",
  "id_customer" : "f102b615",
  "CPU" : "24 ядра",
  "PS_id" : "192.165.1.1, 192.165.1.125",
  "HDD" : "150Tb",
  "cloud_id" : "f102b615",
  "RAM" : "128"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Метод получения списка ресурсов на облако
 *
 * returns Cloud
 **/
exports.getAllClouds = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "OS" : "Windows",
  "id_customer" : "f102b615",
  "CPU" : "24 ядра",
  "PS_id" : "192.165.1.1, 192.165.1.125",
  "HDD" : "150Tb",
  "cloud_id" : "f102b615",
  "RAM" : "128"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Метод получения заказа ресурсов на облако по ID
 *
 * cloud_id String Идентификатор заказа облака
 * returns Cloud
 **/
exports.getCloudById = function(cloud_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "OS" : "Windows",
  "id_customer" : "f102b615",
  "CPU" : "24 ядра",
  "PS_id" : "192.165.1.1, 192.165.1.125",
  "HDD" : "150Tb",
  "cloud_id" : "f102b615",
  "RAM" : "128"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

