# Salesforce Commerce Cloud (SFCC) Product Badges for SFRA

Product Badges for Salesforce Commerce Cloud (SFCC) is a comprehensive package that adds essential functionalities for e-commerce. This plugin allows you to establish, manage and assign labels to products, which is particularly useful for businesses that want to add relevant and very specific information to the offered products.

# Installation

1. Run `npm install` to install all of the local dependencies

2. Create `dw.json` file in the root of the project. Providing a [WebDAV access key from BM](https://documentation.b2c.commercecloud.salesforce.com/DOC1/index.jsp?topic=%2Fcom.demandware.dochelp%2Fcontent%2Fb2c_commerce%2Ftopics%2Fadmin%2Fb2c_access_keys_for_business_manager.html) in the `password` field is optional, as you will be prompted if it is not provided.
```json
{
    "hostname": "your-sandbox-hostname.demandware.net",
    "username": "AM username like me.myself@company.com",
    "password": "your_webdav_access_key",
    "code-version": "version_to_upload_to"
}
```
3. Run `npm run build`. This will compile all the JavaScript and CSS needed for the plugin to properly work

4. Run `npm run uploadCartridge`. It will upload `product_badges` cartridge to the sandbox you specified in `dw.json` file

5. Add the `product_badges` cartridge to your cartridge path in _Administration >  Sites >  Manage Sites > RefArch - Settings_. The cartridge must be added _before_ the path for `app_storefront_base`. Your cartridge path should look like this: `product_badges:app_storefront_base`

## Uploading

`npm run uploadCartridge` - Will upload `product_badges` to the server. Requires a valid `dw.json` file at the root that is configured for the sandbox to upload.