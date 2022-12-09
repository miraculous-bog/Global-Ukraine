{
	"success": true,
		"result": {
		"label": "Organizations",
			"name": "Accounts",
				"createable": true,
					"updateable": true,
						"deleteable": true,
							"retrieveable": true,
								"fields": [
									{
										"name": "accountname",
										"label": "Organization Name",
										"mandatory": true,
										"type": {
											"name": "string"
										},
										"isunique": false,
										"nullable": false,
										"editable": true,
										"default": ""
									},
									{
										"name": "account_no",
										"label": "Organization Number",
										"mandatory": false,
										"type": {
											"name": "string"
										},
										"isunique": false,
										"nullable": false,
										"editable": false,
										"default": ""
									},
									{
										"name": "phone",
										"label": "Primary Phone",
										"mandatory": false,
										"type": {
											"name": "phone"
										},
										"isunique": false,
										"nullable": true,
										"editable": true,
										"default": ""
									},
									{
										"name": "website",
										"label": "Website",
										"mandatory": false,
										"type": {
											"name": "url"
										},
										"isunique": false,
										"nullable": true,
										"editable": true,
										"default": ""
									},
									{
										"name": "email1",
										"label": "Primary Email",
										"mandatory": false,
										"type": {
											"name": "email"
										},
										"isunique": false,
										"nullable": true,
										"editable": true,
										"default": ""
									},
									{
										"name": "industry",
										"label": "Industry",
										"mandatory": false,
										"type": {
											"picklistValues": [
												{
													"label": "Apparel",
													"value": "Apparel",
													"color": null
												},
												{
													"label": "Banking",
													"value": "Banking",
													"color": null
												},
												{
													"label": "Biotechnology",
													"value": "Biotechnology",
													"color": null
												},
												{
													"label": "Chemicals",
													"value": "Chemicals",
													"color": null
												},
												{
													"label": "Communications",
													"value": "Communications",
													"color": null
												},
												{
													"label": "Construction",
													"value": "Construction",
													"color": null
												},
												{
													"label": "Consulting",
													"value": "Consulting",
													"color": null
												},
												{
													"label": "Education",
													"value": "Education",
													"color": null
												},
												{
													"label": "Electronics",
													"value": "Electronics",
													"color": null
												},
												{
													"label": "Energy",
													"value": "Energy",
													"color": null
												},
												{
													"label": "Engineering",
													"value": "Engineering",
													"color": null
												},
												{
													"label": "Entertainment",
													"value": "Entertainment",
													"color": null
												},
												{
													"label": "Environmental",
													"value": "Environmental",
													"color": null
												},
												{
													"label": "Finance",
													"value": "Finance",
													"color": null
												},
												{
													"label": "Food & Beverage",
													"value": "Food & Beverage",
													"color": null
												},
												{
													"label": "Government",
													"value": "Government",
													"color": null
												},
												{
													"label": "Healthcare",
													"value": "Healthcare",
													"color": null
												},
												{
													"label": "Hospitality",
													"value": "Hospitality",
													"color": null
												},
												{
													"label": "Insurance",
													"value": "Insurance",
													"color": null
												},
												{
													"label": "Machinery",
													"value": "Machinery",
													"color": null
												},
												{
													"label": "Manufacturing",
													"value": "Manufacturing",
													"color": null
												},
												{
													"label": "Media",
													"value": "Media",
													"color": null
												},
												{
													"label": "Not For Profit",
													"value": "Not For Profit",
													"color": null
												},
												{
													"label": "Recreation",
													"value": "Recreation",
													"color": null
												},
												{
													"label": "Retail",
													"value": "Retail",
													"color": null
												},
												{
													"label": "Shipping",
													"value": "Shipping",
													"color": null
												},
												{
													"label": "Technology",
													"value": "Technology",
													"color": null
												},
												{
													"label": "Telecommunications",
													"value": "Telecommunications",
													"color": null
												},
												{
													"label": "Transportation",
													"value": "Transportation",
													"color": null
												},
												{
													"label": "Utilities",
													"value": "Utilities",
													"color": null
												},
												{
													"label": "Other",
													"value": "Other",
													"color": null
												}
											],
											"defaultValue": "Apparel",
											"name": "picklist"
										},
										"isunique": false,
										"nullable": true,
										"editable": true,
										"default": ""
									},
									{
										"name": "accounttype",
										"label": "Type",
										"mandatory": false,
										"type": {
											"picklistValues": [
												{
													"label": "Analyst",
													"value": "Analyst",
													"color": null
												},
												{
													"label": "Competitor",
													"value": "Competitor",
													"color": null
												},
												{
													"label": "Customer",
													"value": "Customer",
													"color": null
												},
												{
													"label": "Integrator",
													"value": "Integrator",
													"color": null
												},
												{
													"label": "Investor",
													"value": "Investor",
													"color": null
												},
												{
													"label": "Partner",
													"value": "Partner",
													"color": null
												},
												{
													"label": "Press",
													"value": "Press",
													"color": null
												},
												{
													"label": "Prospect",
													"value": "Prospect",
													"color": null
												},
												{
													"label": "Reseller",
													"value": "Reseller",
													"color": null
												},
												{
													"label": "Other",
													"value": "Other",
													"color": null
												}
											],
											"defaultValue": "Analyst",
											"name": "picklist"
										},
										"isunique": false,
										"nullable": true,
										"editable": true,
										"default": ""
									},
									{
										"name": "emailoptout",
										"label": "Email Opt Out",
										"mandatory": false,
										"type": {
											"name": "boolean"
										},
										"isunique": false,
										"nullable": true,
										"editable": true,
										"default": ""
									},
									{
										"name": "assigned_user_id",
										"label": "Assigned To",
										"mandatory": true,
										"type": {
											"name": "owner"
										},
										"isunique": false,
										"nullable": false,
										"editable": true,
										"default": ""
									},
									{
										"name": "createdtime",
										"label": "Created Time",
										"mandatory": false,
										"type": {
											"name": "datetime"
										},
										"isunique": false,
										"nullable": false,
										"editable": false,
										"default": ""
									},
									{
										"name": "modifiedtime",
										"label": "Modified Time",
										"mandatory": false,
										"type": {
											"name": "datetime"
										},
										"isunique": false,
										"nullable": false,
										"editable": false,
										"default": ""
									},
									{
										"name": "modifiedby",
										"label": "Last Modified By",
										"mandatory": false,
										"type": {
											"refersTo": [
												"Users"
											],
											"name": "reference"
										},
										"isunique": false,
										"nullable": false,
										"editable": true,
										"default": ""
									},
									{
										"name": "bill_street",
										"label": "Billing Address",
										"mandatory": false,
										"type": {
											"name": "text"
										},
										"isunique": false,
										"nullable": true,
										"editable": true,
										"default": ""
									},
									{
										"name": "ship_street",
										"label": "Shipping Address",
										"mandatory": false,
										"type": {
											"name": "text"
										},
										"isunique": false,
										"nullable": true,
										"editable": true,
										"default": ""
									},
									{
										"name": "bill_city",
										"label": "Billing City",
										"mandatory": false,
										"type": {
											"name": "string"
										},
										"isunique": false,
										"nullable": true,
										"editable": true,
										"default": ""
									},
									{
										"name": "ship_city",
										"label": "Shipping City",
										"mandatory": false,
										"type": {
											"name": "string"
										},
										"isunique": false,
										"nullable": true,
										"editable": true,
										"default": ""
									},
									{
										"name": "bill_state",
										"label": "Billing State",
										"mandatory": false,
										"type": {
											"name": "string"
										},
										"isunique": false,
										"nullable": true,
										"editable": true,
										"default": ""
									},
									{
										"name": "ship_state",
										"label": "Shipping State",
										"mandatory": false,
										"type": {
											"name": "string"
										},
										"isunique": false,
										"nullable": true,
										"editable": true,
										"default": ""
									},
									{
										"name": "bill_code",
										"label": "Billing Postal Code",
										"mandatory": false,
										"type": {
											"name": "string"
										},
										"isunique": false,
										"nullable": true,
										"editable": true,
										"default": ""
									},
									{
										"name": "ship_code",
										"label": "Shipping Postal Code",
										"mandatory": false,
										"type": {
											"name": "string"
										},
										"isunique": false,
										"nullable": true,
										"editable": true,
										"default": ""
									},
									{
										"name": "bill_country",
										"label": "Billing Country",
										"mandatory": false,
										"type": {
											"name": "string"
										},
										"isunique": false,
										"nullable": true,
										"editable": true,
										"default": ""
									},
									{
										"name": "ship_country",
										"label": "Shipping Country",
										"mandatory": false,
										"type": {
											"name": "string"
										},
										"isunique": false,
										"nullable": true,
										"editable": true,
										"default": ""
									},
									{
										"name": "bill_pobox",
										"label": "Billing PO Box",
										"mandatory": false,
										"type": {
											"name": "string"
										},
										"isunique": false,
										"nullable": true,
										"editable": true,
										"default": ""
									},
									{
										"name": "ship_pobox",
										"label": "Shipping PO Box",
										"mandatory": false,
										"type": {
											"name": "string"
										},
										"isunique": false,
										"nullable": true,
										"editable": true,
										"default": ""
									},
									{
										"name": "description",
										"label": "Description",
										"mandatory": false,
										"type": {
											"name": "text"
										},
										"isunique": false,
										"nullable": true,
										"editable": true,
										"default": ""
									},
									{
										"name": "isconvertedfromlead",
										"label": "Is Converted From Lead",
										"mandatory": false,
										"type": {
											"name": "boolean"
										},
										"isunique": false,
										"nullable": true,
										"editable": true,
										"default": "no"
									},
									{
										"name": "source",
										"label": "Source",
										"mandatory": false,
										"type": {
											"name": "string"
										},
										"isunique": false,
										"nullable": true,
										"editable": false,
										"default": ""
									},
									{
										"name": "starred",
										"label": "starred",
										"mandatory": false,
										"type": {
											"name": "boolean"
										},
										"isunique": false,
										"nullable": true,
										"editable": true,
										"default": ""
									},
									{
										"name": "tags",
										"label": "tags",
										"mandatory": false,
										"type": {
											"name": "string"
										},
										"isunique": false,
										"nullable": true,
										"editable": true,
										"default": ""
									},
									{
										"name": "mdsacaccountid",
										"label": "Account Number",
										"mandatory": false,
										"type": {
											"refersTo": [
												"MdsAcAccount"
											],
											"name": "reference"
										},
										"isunique": false,
										"nullable": true,
										"editable": true,
										"default": ""
									},
									{
										"name": "mdskeywords",
										"label": "Key words (bank reconciliation ...)",
										"mandatory": false,
										"type": {
											"name": "text"
										},
										"isunique": false,
										"nullable": true,
										"editable": true,
										"default": ""
									},
									{
										"name": "mdspricebookid",
										"label": "Price Book",
										"mandatory": false,
										"type": {
											"refersTo": [
												"MdsPriceBook"
											],
											"name": "reference"
										},
										"isunique": false,
										"nullable": true,
										"editable": true,
										"default": ""
									},
									{
										"name": "mdsoriginalrecordnumber",
										"label": "Original Record Number",
										"mandatory": false,
										"type": {
											"name": "string"
										},
										"isunique": false,
										"nullable": true,
										"editable": true,
										"default": ""
									},
									{
										"name": "mdslegalid",
										"label": "Identification Number (legal)",
										"mandatory": false,
										"type": {
											"name": "string"
										},
										"isunique": false,
										"nullable": true,
										"editable": true,
										"default": ""
									},
									{
										"name": "mdsbuyerreference",
										"label": "Buyer Dpt Ref (Factur-X, ...)",
										"mandatory": false,
										"type": {
											"name": "string"
										},
										"isunique": false,
										"nullable": true,
										"editable": true,
										"default": ""
									},
									{
										"name": "mdsexternalref",
										"label": "External Ref",
										"mandatory": false,
										"type": {
											"name": "string"
										},
										"isunique": false,
										"nullable": true,
										"editable": true,
										"default": ""
									},
									{
										"name": "mds_related_vendor_id",
										"label": "Related Vendor",
										"mandatory": false,
										"type": {
											"refersTo": [
												"Vendors"
											],
											"name": "reference"
										},
										"isunique": false,
										"nullable": true,
										"editable": true,
										"default": ""
									},
									{
										"name": "mdssponsorshipid",
										"label": "Sponsorship",
										"mandatory": false,
										"type": {
											"refersTo": [
												"Contacts"
											],
											"name": "reference"
										},
										"isunique": false,
										"nullable": true,
										"editable": true,
										"default": ""
									},
									{
										"name": "cf_temperature",
										"label": "Temperature",
										"mandatory": false,
										"type": {
											"picklistValues": [
												{
													"label": "Froid",
													"value": "Froid",
													"color": "#297ee6"
												},
												{
													"label": "Tiede",
													"value": "Tiede",
													"color": "#f0c424"
												},
												{
													"label": "Chaud",
													"value": "Chaud",
													"color": "#d63255"
												}
											],
											"defaultValue": "Froid",
											"name": "picklist"
										},
										"isunique": false,
										"nullable": true,
										"editable": true,
										"default": " "
									},
									{
										"name": "cf_nbtransact",
										"label": "Nb Transact",
										"mandatory": false,
										"type": {
											"name": "integer"
										},
										"isunique": false,
										"nullable": true,
										"editable": true,
										"default": ""
									},
									{
										"name": "cf_linkcyid",
										"label": "Linkcy Id",
										"mandatory": true,
										"type": {
											"name": "string"
										},
										"isunique": true,
										"nullable": true,
										"editable": true,
										"default": ""
									},
									{
										"name": "cf_customertype",
										"label": "Customer Type",
										"mandatory": false,
										"type": {
											"picklistValues": [
												{
													"label": "Individual",
													"value": "Individual",
													"color": null
												},
												{
													"label": "FOP",
													"value": "FOP",
													"color": null
												},
												{
													"label": "Organization",
													"value": "Organization",
													"color": null
												}
											],
											"defaultValue": "Individual",
											"name": "picklist"
										},
										"isunique": false,
										"nullable": true,
										"editable": true,
										"default": "Individual"
									},
									{
										"name": "cf_kycstatus",
										"label": "kycStatus",
										"mandatory": false,
										"type": {
											"picklistValues": [
												{
													"label": "NOT_STARTED",
													"value": "NOT_STARTED",
													"color": null
												},
												{
													"label": "CREATED",
													"value": "CREATED",
													"color": null
												},
												{
													"label": "PROCESSING",
													"value": "PROCESSING",
													"color": null
												},
												{
													"label": "PENDING_REVIEW",
													"value": "PENDING_REVIEW",
													"color": null
												},
												{
													"label": "ABORTED",
													"value": "ABORTED",
													"color": null
												},
												{
													"label": "VALIDATED",
													"value": "VALIDATED",
													"color": null
												},
												{
													"label": "DECLINED",
													"value": "DECLINED",
													"color": null
												},
												{
													"label": "NOT_REQUIRED",
													"value": "NOT_REQUIRED",
													"color": null
												}
											],
											"defaultValue": "NOT_STARTED",
											"name": "picklist"
										},
										"isunique": false,
										"nullable": true,
										"editable": true,
										"default": " "
									},
									{
										"name": "id",
										"label": "accountid",
										"mandatory": false,
										"type": {
											"name": "autogenerated"
										},
										"editable": false,
										"nullable": false,
										"default": ""
									}
								],
									"idPrefix": "10",
										"isEntity": true,
											"allowDuplicates": false,
												"labelFields": "accountname"
	}
}