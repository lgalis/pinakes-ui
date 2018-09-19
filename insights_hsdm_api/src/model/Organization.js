/**
 * Insights Service Catalog API
 * This is a API to fetch and order catalog items from different cloud sources
 *
 * OpenAPI spec version: 1.0.0
 * Contact: you@your-company.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';





/**
* The Organization model module.
* @module model/Organization
* @version 1.0.0
*/
export default class Organization {
    /**
    * Constructs a new <code>Organization</code>.
    * @alias module:model/Organization
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>Organization</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Organization} obj Optional instance to populate.
    * @return {module:model/Organization} The populated <code>Organization</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Organization();

            
            
            

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} id
    */
    id = undefined;








}


