{
	"success": true,
		"result": {
		"label": "Sales Order",
			"name": "SalesOrder",
				"createable": true,
					"updateable": true,
						"deleteable": true,
							"retrieveable": true,
								"fields": [
									{
										"name": "salesorder_no",
										"label": "Sales Order Number",
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
										"name": "subject",
										"label": "Subject",
										"mandatory": true,
										"type": {
											"name": "string"
										},
										"isunique": false,
										"nullable": true,
										"editable": true,
										"default": ""
									},
									{
										"name": "potential_id",
										"label": "Opportunity Name",
										"mandatory": false,
										"type": {
											"refersTo": [
												"Potentials"
											],
											"name": "reference"
										},
										"isunique": false,
										"nullable": true,
										"editable": true,
										"default": ""
									},
									{
										"name": "quote_id",
										"label": "Quote Name",
										"mandatory": false,
										"type": {
											"refersTo": [
												"Quotes"
											],
											"name": "reference"
										},
										"isunique": false,
										"nullable": true,
										"editable": true,
										"default": ""
									},
									{
										"name": "vtiger_purchaseorder",
										"label": "Purchase Order",
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
										"name": "contact_id",
										"label": "Contact Name",
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
										"name": "duedate",
										"label": "Due Date",
										"mandatory": false,
										"type": {
											"format": "yyyy-mm-dd",
											"name": "date"
										},
										"isunique": false,
										"nullable": true,
										"editable": true,
										"default": ""
									},
									{
										"name": "sostatus",
										"label": "Status",
										"mandatory": true,
										"type": {
											"picklistValues": [
												{
													"label": "Created",
													"value": "Created",
													"color": null
												},
												{
													"label": "Approved",
													"value": "Approved",
													"color": null
												},
												{
													"label": "Delivered",
													"value": "Delivered",
													"color": null
												},
												{
													"label": "Cancelled",
													"value": "Cancelled",
													"color": null
												}
											],
											"defaultValue": "Created",
											"name": "picklist"
										},
										"isunique": false,
										"nullable": true,
										"editable": true,
										"default": ""
									},
									{
										"name": "txtAdjustment",
										"label": "Adjustment",
										"mandatory": false,
										"type": {
											"name": "currency"
										},
										"isunique": false,
										"nullable": true,
										"editable": true,
										"default": ""
									},
									{
										"name": "hdnGrandTotal",
										"label": "Total",
										"mandatory": false,
										"type": {
											"name": "currency"
										},
										"isunique": false,
										"nullable": true,
										"editable": true,
										"default": ""
									},
									{
										"name": "hdnSubTotal",
										"label": "Sub Total",
										"mandatory": false,
										"type": {
											"name": "currency"
										},
										"isunique": false,
										"nullable": true,
										"editable": true,
										"default": ""
									},
									{
										"name": "hdnTaxType",
										"label": "Tax Type",
										"mandatory": false,
										"type": {
											"picklistValues": [
												{
													"label": "Individual",
													"value": "individual"
												},
												{
													"label": "Group",
													"value": "group"
												}
											],
											"defaultValue": "individual",
											"name": "picklist"
										},
										"isunique": false,
										"nullable": true,
										"editable": true,
										"default": ""
									},
									{
										"name": "hdnDiscountPercent",
										"label": "Discount Percent",
										"mandatory": false,
										"type": {
											"name": "double"
										},
										"isunique": false,
										"nullable": true,
										"editable": true,
										"default": ""
									},
									{
										"name": "hdnDiscountAmount",
										"label": "Discount Amount",
										"mandatory": false,
										"type": {
											"name": "currency"
										},
										"isunique": false,
										"nullable": true,
										"editable": true,
										"default": ""
									},
									{
										"name": "hdnS_H_Amount",
										"label": "Charges",
										"mandatory": false,
										"type": {
											"name": "currency"
										},
										"isunique": false,
										"nullable": true,
										"editable": true,
										"default": ""
									},
									{
										"name": "account_id",
										"label": "Organization Name",
										"mandatory": true,
										"type": {
											"refersTo": [
												"Accounts"
											],
											"name": "reference"
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
										"name": "currency_id",
										"label": "Currency",
										"mandatory": false,
										"type": {
											"refersTo": [
												"Currency"
											],
											"name": "reference"
										},
										"isunique": false,
										"nullable": false,
										"editable": true,
										"default": "1"
									},
									{
										"name": "conversion_rate",
										"label": "Conversion Rate",
										"mandatory": false,
										"type": {
											"name": "double"
										},
										"isunique": false,
										"nullable": false,
										"editable": true,
										"default": "1"
									},
									{
										"name": "bill_street",
										"label": "Billing Address",
										"mandatory": true,
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
										"mandatory": true,
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
										"name": "terms_conditions",
										"label": "Terms & Conditions",
										"mandatory": false,
										"type": {
											"name": "text"
										},
										"isunique": false,
										"nullable": true,
										"editable": true,
										"default": "\n - Unless otherwise agreed in writing by the supplier all invoices are payable within thirty (30) days of the date of invoice, in the currency of the invoice, drawn on a bank based in India or by such other method as is agreed in advance by the Supplier.\n\n - All prices are not inclusive of VAT which shall be payable in addition by the Customer at the applicable rate."
									},
									{
										"name": "enable_recurring",
										"label": "Enable Recurring",
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
										"name": "recurring_frequency",
										"label": "Frequency",
										"mandatory": false,
										"type": {
											"picklistValues": [
												{
													"label": "Journalier",
													"value": "Daily",
													"color": null
												},
												{
													"label": "Hebdomadaire",
													"value": "Weekly",
													"color": null
												},
												{
													"label": "Mensuel",
													"value": "Monthly",
													"color": null
												},
												{
													"label": "Trimestriel",
													"value": "Quarterly",
													"color": null
												},
												{
													"label": "Annuel",
													"value": "Yearly",
													"color": null
												}
											],
											"defaultValue": "Daily",
											"name": "picklist"
										},
										"isunique": false,
										"nullable": true,
										"editable": true,
										"default": ""
									},
									{
										"name": "start_period",
										"label": "Start Period",
										"mandatory": false,
										"type": {
											"format": "yyyy-mm-dd",
											"name": "date"
										},
										"isunique": false,
										"nullable": true,
										"editable": true,
										"default": ""
									},
									{
										"name": "end_period",
										"label": "End Period",
										"mandatory": false,
										"type": {
											"format": "yyyy-mm-dd",
											"name": "date"
										},
										"isunique": false,
										"nullable": true,
										"editable": true,
										"default": ""
									},
									{
										"name": "payment_duration",
										"label": "Payment Duration",
										"mandatory": false,
										"type": {
											"picklistValues": [
												{
													"label": "Invoice Date",
													"value": "LBL_MDS_PAYMENT_DURATION_INVOICE_DATE",
													"color": null
												},
												{
													"label": "Net 01 jour",
													"value": "Net 01 day",
													"color": null
												},
												{
													"label": "Net 05 jours",
													"value": "Net 05 days",
													"color": null
												},
												{
													"label": "Net 07 jours",
													"value": "Net 07 days",
													"color": null
												},
												{
													"label": "Net 10 jours",
													"value": "Net 10 days",
													"color": null
												},
												{
													"label": "Net 15 jours",
													"value": "Net 15 days",
													"color": null
												},
												{
													"label": "Net 30 jours",
													"value": "Net 30 days",
													"color": null
												},
												{
													"label": "Net 45 jours",
													"value": "Net 45 days",
													"color": null
												},
												{
													"label": "Net 60 jours",
													"value": "Net 60 days",
													"color": null
												}
											],
											"defaultValue": "LBL_MDS_PAYMENT_DURATION_INVOICE_DATE",
											"name": "picklist"
										},
										"isunique": false,
										"nullable": true,
										"editable": true,
										"default": ""
									},
									{
										"name": "invoicestatus",
										"label": "Invoice Status",
										"mandatory": true,
										"type": {
											"picklistValues": [
												{
													"label": "Auto Created",
													"value": "AutoCreated",
													"color": null
												},
												{
													"label": "Created",
													"value": "Created",
													"color": "#f2d518"
												},
												{
													"label": "Annuler",
													"value": "Cancel",
													"color": null
												},
												{
													"label": "Approved",
													"value": "Approved",
													"color": "#eb34eb"
												},
												{
													"label": "Sent",
													"value": "Sent",
													"color": "#28db39"
												},
												{
													"label": "Credit Invoice",
													"value": "Credit Invoice",
													"color": null
												},
												{
													"label": "Paid",
													"value": "Paid",
													"color": null
												}
											],
											"defaultValue": "AutoCreated",
											"name": "picklist"
										},
										"isunique": false,
										"nullable": true,
										"editable": true,
										"default": ""
									},
									{
										"name": "productid",
										"label": "Item Name",
										"mandatory": true,
										"type": {
											"refersTo": [
												"Products",
												"Services"
											],
											"name": "reference"
										},
										"isunique": false,
										"nullable": true,
										"editable": true,
										"default": ""
									},
									{
										"name": "quantity",
										"label": "Quantity",
										"mandatory": false,
										"type": {
											"name": "double"
										},
										"isunique": false,
										"nullable": true,
										"editable": true,
										"default": ""
									},
									{
										"name": "listprice",
										"label": "Selling Price",
										"mandatory": false,
										"type": {
											"name": "currency"
										},
										"isunique": false,
										"nullable": true,
										"editable": true,
										"default": ""
									},
									{
										"name": "comment",
										"label": "Item Comment",
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
										"name": "discount_amount",
										"label": "Item Discount Amount",
										"mandatory": false,
										"type": {
											"name": "currency"
										},
										"isunique": false,
										"nullable": true,
										"editable": true,
										"default": ""
									},
									{
										"name": "discount_percent",
										"label": "Item Discount Percent",
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
										"name": "tax1",
										"label": "VAT",
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
										"name": "tax2",
										"label": "Sales",
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
										"name": "tax3",
										"label": "Service",
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
										"name": "pre_tax_total",
										"label": "Pre Tax Total",
										"mandatory": false,
										"type": {
											"name": "currency"
										},
										"isunique": false,
										"nullable": true,
										"editable": true,
										"default": ""
									},
									{
										"name": "hdnS_H_Percent",
										"label": "Taxes On Charges",
										"mandatory": false,
										"type": {
											"name": "double"
										},
										"isunique": false,
										"nullable": true,
										"editable": true,
										"default": ""
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
										"name": "region_id",
										"label": "Tax Region",
										"mandatory": false,
										"type": {
											"picklistValues": [

											],
											"defaultValue": null,
											"name": "picklist"
										},
										"isunique": false,
										"nullable": true,
										"editable": true,
										"default": ""
									},
									{
										"name": "last_recurring_date",
										"label": "Next Invoice Date",
										"mandatory": false,
										"type": {
											"format": "yyyy-mm-dd",
											"name": "date"
										},
										"isunique": false,
										"nullable": true,
										"editable": false,
										"default": ""
									},
									{
										"name": "mdsshippingmethodid",
										"label": "Shipping Method",
										"mandatory": false,
										"type": {
											"refersTo": [

											],
											"name": "reference"
										},
										"isunique": false,
										"nullable": true,
										"editable": false,
										"default": ""
									},
									{
										"name": "mdsshippingweight",
										"label": "Total Weight",
										"mandatory": false,
										"type": {
											"name": "currency"
										},
										"isunique": false,
										"nullable": true,
										"editable": false,
										"default": ""
									},
									{
										"name": "mdspermanentlock",
										"label": "Finalized",
										"mandatory": false,
										"type": {
											"name": "boolean"
										},
										"isunique": false,
										"nullable": true,
										"editable": false,
										"default": ""
									},
									{
										"name": "mdsorganizationid",
										"label": "Company",
										"mandatory": false,
										"type": {
											"refersTo": [
												"MdsOrganization"
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
										"name": "mdsorderref",
										"label": "Order Reference",
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
										"name": "mdsinvoiceparentaccount",
										"label": "Invoice parent company",
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
										"name": "mdsexternalref",
										"label": "External Ref",
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
										"name": "mdsdocumentdatepref",
										"label": "Document date preference",
										"mandatory": false,
										"type": {
											"picklistValues": [
												{
													"label": "Date of generation",
													"value": "PREF_DATE_OF_GENERATION",
													"color": null
												},
												{
													"label": "Last day of last period",
													"value": "PREF_LAST_DAY_OF_LAST_PERIOD",
													"color": null
												},
												{
													"label": "First day of current period",
													"value": "PREF_FIRST_DAY_OF_CURRENT_PERIOD",
													"color": null
												},
												{
													"label": "Last day of current period",
													"value": "PREF_LAST_DAY_OF_CURRENT_PERIOD",
													"color": null
												},
												{
													"label": "First day of next period",
													"value": "PREF_FIRST_DAY_OF_NEXT_PERIOD",
													"color": null
												},
												{
													"label": "Last day of next period",
													"value": "PREF_LAST_DAY_OF_NEXT_PERIOD",
													"color": null
												}
											],
											"defaultValue": "PREF_DATE_OF_GENERATION",
											"name": "picklist"
										},
										"isunique": false,
										"nullable": true,
										"editable": true,
										"default": ""
									},
									{
										"name": "mdsitemusagepref",
										"label": "Add Items Usage",
										"mandatory": false,
										"type": {
											"picklistValues": [
												{
													"label": "Do not add",
													"value": "PREF_DO_NOT_ADD_ITEM_USAGE",
													"color": null
												},
												{
													"label": "Period of invoice date",
													"value": "PREF_ADD_ITEM_USAGE_OF_SAME_PERIOD",
													"color": null
												},
												{
													"label": "Period preceding period of invoice date",
													"value": "PREF_ADD_ITEM_USAGE_OF_PREVIOUS_PERIOD",
													"color": null
												}
											],
											"defaultValue": "PREF_DO_NOT_ADD_ITEM_USAGE",
											"name": "picklist"
										},
										"isunique": false,
										"nullable": true,
										"editable": true,
										"default": ""
									},
									{
										"name": "mdsitemusagecvid",
										"label": "Item usage filter",
										"mandatory": false,
										"type": {
											"picklistValues": [

											],
											"defaultValue": null,
											"name": "picklist"
										},
										"isunique": false,
										"nullable": true,
										"editable": true,
										"default": ""
									},
									{
										"name": "mdsitemusagegrouping",
										"label": "Item Usage Grouping",
										"mandatory": false,
										"type": {
											"picklistValues": [
												{
													"label": "By Period",
													"value": "PREF_GROUP_ITEM_USAGE_BY_PERIOD",
													"color": null
												},
												{
													"label": "By Month",
													"value": "PREF_GROUP_ITEM_USAGE_BY_MONTH",
													"color": null
												}
											],
											"defaultValue": "PREF_GROUP_ITEM_USAGE_BY_PERIOD",
											"name": "picklist"
										},
										"isunique": false,
										"nullable": true,
										"editable": true,
										"default": ""
									},
									{
										"name": "mdsrecurrencesubject",
										"label": "Recurring invoicing subject",
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
										"name": "id",
										"label": "salesorderid",
										"mandatory": false,
										"type": {
											"name": "autogenerated"
										},
										"editable": false,
										"nullable": false,
										"default": ""
									},
									{
										"name": "shipping_&_handling",
										"label": "Shipping &amp; Handling",
										"type": {
											"name": "double"
										},
										"mandatory": false,
										"nullable": true,
										"editable": true,
										"default": null
									},
									{
										"name": "shipping_&_handling_shtax1",
										"label": "Shipping &amp; Handling VAT",
										"default": "4.500",
										"type": {
											"name": "double"
										},
										"nullable": true,
										"editable": true,
										"mandatory": false
									},
									{
										"name": "shipping_&_handling_shtax2",
										"label": "Shipping &amp; Handling Sales",
										"default": "10.000",
										"type": {
											"name": "double"
										},
										"nullable": true,
										"editable": true,
										"mandatory": false
									},
									{
										"name": "shipping_&_handling_shtax3",
										"label": "Shipping &amp; Handling Service",
										"default": "12.500",
										"type": {
											"name": "double"
										},
										"nullable": true,
										"editable": true,
										"mandatory": false
									}
								],
									"idPrefix": "5",
										"isEntity": true,
											"allowDuplicates": true,
												"labelFields": "subject"
	}
}