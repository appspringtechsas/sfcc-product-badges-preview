# Salesforce Commerce Cloud (SFCC) Product Badges for PWA Kit

Product Badges for Salesforce Commerce Cloud (SFCC) is a comprehensive package that adds essential functionalities for e-commerce. This plugin allows you to establish, manage and assign labels to products, which is particularly useful for businesses that want to add relevant and very specific information to the offered products.

## Installation

1. The Product Badges for Salesforce Commerce Cloud (SFCC) is also designed to integrate with Salesforce PWA Kit. To use this package, you need to create a local project using the React Retail App template. Run the following command to start a new project:

```
npx @salesforce/pwa-kit-create-app@latest
```

Remember to select the option to use the ***Retail app with your own Commerce Cloud instance*** and choose '**Yes**' when asked if you want to take advantage of template extensibility. For additional information on creating and using the React Retail application, please refer to the documentation page of [Salesforce Developer](https://developer.salesforce.com/docs/commerce/pwa-kit-managed-runtime/guide/getting-started.html)

2. PWA Kit requires you to set up a public SLAS client ID for your PWA Kit application. For this step, follow the instructions in the guide Salesforce Set Up API Access [Set up Salesforce API access](https://developer.salesforce.com/docs/commerce/pwa-kit-managed-runtime/guide/setting-up-api-access.html)

3. SFCC Product Badges creates a SCAPI custom endpoint, so after successfully setting up your public SLAS client ID, make sure to add **c_productLabels_r** to your client ID scopes

4. The modifications in the PWA Kit apply to the extensibility of the template. If you have enabled extensibility, as indicated in the first step of the prerequisites section, your project should be ready to use the base template for this integration. To install the base template, run the following command:

```
npm i @appspringtechsas/sfcc-product-badges
```

5. To make your project extensible from SFCC Product Badges, you need to go to your **package.json** file and there, you will find a section called **ccExtensibility**. Modify the value of the ***extends*** property, replace the value with *@appspringtechsas/sfcc-product-badges* and save the changes.

6. The Routes file also needs modifications, as the routes are imported from Salesforce Retail React App by default. In all imports, replace the parts containing @salesforce/retail-react-app/ with @appspringtechsas/sfcc-product-badges/. This will cause the routes to be imported from SFCC Plugin Geolocated Pricing

7. Execute the commands ``npm i`` and then execute ``npm run build``

8. An SFRA Plugin is also required for the integration package to work. The plugin is located inside the **sfra-codebase/** folder. For more information on how to install the geolocated-pricebooks plugin, please refer to the README file of the cartridge

9. After following the steps, you should be ready to use SFCC Product Badges