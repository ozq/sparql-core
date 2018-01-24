/**
 * SparqlClient
 */
export default class SparqlClient {
    /**
     * @param configuration
     */
    constructor(configuration) {
        this.loadConfiguration(configuration);
    }

    /**
     * @param configuration
     */
    loadConfiguration(configuration) {
        if (typeof configuration === 'object') {
            this.configuration = configuration;
            this.requestUrl = this.loadConfigurationItem('requestUrl', '');
            this.graphIri = this.loadConfigurationItem('graphIri', '');
            this.requestType = this.loadConfigurationItem('requestType', '');
            this.requestDataType = this.loadConfigurationItem('requestType', 'json');
            this.debugMode = this.loadConfigurationItem('debugMode', 'no');
            this.responseFormat = this.loadConfigurationItem('responseFormat', 'html')
        } else {
            console.error('Configuration must be instance of Object!');
        }
    }

    /**
     * @param option
     * @param defaultValue
     * @returns {*}
     */
    loadConfigurationItem(option, defaultValue) {
        if (this.configuration.hasOwnProperty(option) && this.configuration[option]) {
            return this.configuration[option];
        } else {
            if (typeof defaultValue !== 'undefined') {
                return defaultValue;
            } else {
                console.error('Option ' + option + ' must be passed and be defined!');
            }
        }
    }

    /**
     * @param query
     * @param successCallback
     * @param errorCallback
     */
    execute(query, successCallback, errorCallback) {
        let data = {
            'query': query,
            'debug': this.debugMode,
            'format': this.responseFormat,
            'default-graph-uri': this.graphIri,
        };

        $.ajax({
            data: data,
            type: this.requestType,
            url: this.requestUrl,
            dataType: this.requestDataType,
            success: function (data) {
                if (successCallback) {
                    successCallback(data);
                }
            },
            error: function (data) {
                if (errorCallback) {
                    errorCallback(data);
                }
            }
        });
    }
}
