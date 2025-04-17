window.onload = () => {
  window.ui = SwaggerUIBundle({
    url: "CRM-REST-API.yaml",  // Burada CRM-REST-API.yaml faylını göstərirsən
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    layout: "StandaloneLayout"
  });
};
