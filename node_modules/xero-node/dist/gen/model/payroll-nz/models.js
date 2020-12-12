"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("././account"));
__export(require("././accounts"));
__export(require("././address"));
__export(require("././bankAccount"));
__export(require("././benefit"));
__export(require("././deduction"));
__export(require("././deductionLine"));
__export(require("././deductionObject"));
__export(require("././deductions"));
__export(require("././earningsLine"));
__export(require("././earningsOrder"));
__export(require("././earningsOrderObject"));
__export(require("././earningsOrders"));
__export(require("././earningsRate"));
__export(require("././earningsRateObject"));
__export(require("././earningsRates"));
__export(require("././earningsTemplate"));
__export(require("././earningsTemplateObject"));
__export(require("././employee"));
__export(require("././employeeEarningsTemplates"));
__export(require("././employeeLeave"));
__export(require("././employeeLeaveBalance"));
__export(require("././employeeLeaveBalances"));
__export(require("././employeeLeaveObject"));
__export(require("././employeeLeaveSetup"));
__export(require("././employeeLeaveSetupObject"));
__export(require("././employeeLeaveType"));
__export(require("././employeeLeaveTypeObject"));
__export(require("././employeeLeaveTypes"));
__export(require("././employeeLeaves"));
__export(require("././employeeObject"));
__export(require("././employeeOpeningBalance"));
__export(require("././employeeOpeningBalancesObject"));
__export(require("././employeePayTemplate"));
__export(require("././employeePayTemplateObject"));
__export(require("././employeePayTemplates"));
__export(require("././employeeStatutoryLeaveBalance"));
__export(require("././employeeStatutoryLeaveBalanceObject"));
__export(require("././employeeStatutoryLeaveSummary"));
__export(require("././employeeStatutoryLeavesSummaries"));
__export(require("././employeeStatutorySickLeave"));
__export(require("././employeeStatutorySickLeaveObject"));
__export(require("././employeeStatutorySickLeaves"));
__export(require("././employeeTax"));
__export(require("././employeeTaxObject"));
__export(require("././employees"));
__export(require("././employment"));
__export(require("././employmentObject"));
__export(require("././grossEarningsHistory"));
__export(require("././invalidField"));
__export(require("././leaveAccrualLine"));
__export(require("././leaveEarningsLine"));
__export(require("././leavePeriod"));
__export(require("././leavePeriods"));
__export(require("././leaveType"));
__export(require("././leaveTypeObject"));
__export(require("././leaveTypes"));
__export(require("././pagination"));
__export(require("././payRun"));
__export(require("././payRunCalendar"));
__export(require("././payRunCalendarObject"));
__export(require("././payRunCalendars"));
__export(require("././payRunObject"));
__export(require("././payRuns"));
__export(require("././paySlip"));
__export(require("././paySlipObject"));
__export(require("././paySlips"));
__export(require("././paymentLine"));
__export(require("././paymentMethod"));
__export(require("././paymentMethodObject"));
__export(require("././problem"));
__export(require("././reimbursement"));
__export(require("././reimbursementLine"));
__export(require("././reimbursementObject"));
__export(require("././reimbursements"));
__export(require("././salaryAndWage"));
__export(require("././salaryAndWageObject"));
__export(require("././salaryAndWages"));
__export(require("././settings"));
__export(require("././statutoryDeduction"));
__export(require("././statutoryDeductionCategory"));
__export(require("././statutoryDeductionLine"));
__export(require("././statutoryDeductionObject"));
__export(require("././statutoryDeductions"));
__export(require("././superannuationLine"));
__export(require("././superannuationObject"));
__export(require("././superannuations"));
__export(require("././taxCode"));
__export(require("././taxLine"));
__export(require("././taxSettings"));
__export(require("././timesheet"));
__export(require("././timesheetEarningsLine"));
__export(require("././timesheetLine"));
__export(require("././timesheetLineObject"));
__export(require("././timesheetObject"));
__export(require("././timesheets"));
__export(require("././trackingCategories"));
__export(require("././trackingCategory"));
const account_1 = require("././account");
const accounts_1 = require("././accounts");
const address_1 = require("././address");
const bankAccount_1 = require("././bankAccount");
const benefit_1 = require("././benefit");
const deduction_1 = require("././deduction");
const deductionLine_1 = require("././deductionLine");
const deductionObject_1 = require("././deductionObject");
const deductions_1 = require("././deductions");
const earningsLine_1 = require("././earningsLine");
const earningsOrder_1 = require("././earningsOrder");
const earningsOrderObject_1 = require("././earningsOrderObject");
const earningsOrders_1 = require("././earningsOrders");
const earningsRate_1 = require("././earningsRate");
const earningsRateObject_1 = require("././earningsRateObject");
const earningsRates_1 = require("././earningsRates");
const earningsTemplate_1 = require("././earningsTemplate");
const earningsTemplateObject_1 = require("././earningsTemplateObject");
const employee_1 = require("././employee");
const employeeEarningsTemplates_1 = require("././employeeEarningsTemplates");
const employeeLeave_1 = require("././employeeLeave");
const employeeLeaveBalance_1 = require("././employeeLeaveBalance");
const employeeLeaveBalances_1 = require("././employeeLeaveBalances");
const employeeLeaveObject_1 = require("././employeeLeaveObject");
const employeeLeaveSetup_1 = require("././employeeLeaveSetup");
const employeeLeaveSetupObject_1 = require("././employeeLeaveSetupObject");
const employeeLeaveType_1 = require("././employeeLeaveType");
const employeeLeaveTypeObject_1 = require("././employeeLeaveTypeObject");
const employeeLeaveTypes_1 = require("././employeeLeaveTypes");
const employeeLeaves_1 = require("././employeeLeaves");
const employeeObject_1 = require("././employeeObject");
const employeeOpeningBalance_1 = require("././employeeOpeningBalance");
const employeeOpeningBalancesObject_1 = require("././employeeOpeningBalancesObject");
const employeePayTemplate_1 = require("././employeePayTemplate");
const employeePayTemplateObject_1 = require("././employeePayTemplateObject");
const employeePayTemplates_1 = require("././employeePayTemplates");
const employeeStatutoryLeaveBalance_1 = require("././employeeStatutoryLeaveBalance");
const employeeStatutoryLeaveBalanceObject_1 = require("././employeeStatutoryLeaveBalanceObject");
const employeeStatutoryLeaveSummary_1 = require("././employeeStatutoryLeaveSummary");
const employeeStatutoryLeavesSummaries_1 = require("././employeeStatutoryLeavesSummaries");
const employeeStatutorySickLeave_1 = require("././employeeStatutorySickLeave");
const employeeStatutorySickLeaveObject_1 = require("././employeeStatutorySickLeaveObject");
const employeeStatutorySickLeaves_1 = require("././employeeStatutorySickLeaves");
const employeeTax_1 = require("././employeeTax");
const employeeTaxObject_1 = require("././employeeTaxObject");
const employees_1 = require("././employees");
const employment_1 = require("././employment");
const employmentObject_1 = require("././employmentObject");
const grossEarningsHistory_1 = require("././grossEarningsHistory");
const invalidField_1 = require("././invalidField");
const leaveAccrualLine_1 = require("././leaveAccrualLine");
const leaveEarningsLine_1 = require("././leaveEarningsLine");
const leavePeriod_1 = require("././leavePeriod");
const leavePeriods_1 = require("././leavePeriods");
const leaveType_1 = require("././leaveType");
const leaveTypeObject_1 = require("././leaveTypeObject");
const leaveTypes_1 = require("././leaveTypes");
const pagination_1 = require("././pagination");
const payRun_1 = require("././payRun");
const payRunCalendar_1 = require("././payRunCalendar");
const payRunCalendarObject_1 = require("././payRunCalendarObject");
const payRunCalendars_1 = require("././payRunCalendars");
const payRunObject_1 = require("././payRunObject");
const payRuns_1 = require("././payRuns");
const paySlip_1 = require("././paySlip");
const paySlipObject_1 = require("././paySlipObject");
const paySlips_1 = require("././paySlips");
const paymentLine_1 = require("././paymentLine");
const paymentMethod_1 = require("././paymentMethod");
const paymentMethodObject_1 = require("././paymentMethodObject");
const problem_1 = require("././problem");
const reimbursement_1 = require("././reimbursement");
const reimbursementLine_1 = require("././reimbursementLine");
const reimbursementObject_1 = require("././reimbursementObject");
const reimbursements_1 = require("././reimbursements");
const salaryAndWage_1 = require("././salaryAndWage");
const salaryAndWageObject_1 = require("././salaryAndWageObject");
const salaryAndWages_1 = require("././salaryAndWages");
const settings_1 = require("././settings");
const statutoryDeduction_1 = require("././statutoryDeduction");
const statutoryDeductionCategory_1 = require("././statutoryDeductionCategory");
const statutoryDeductionLine_1 = require("././statutoryDeductionLine");
const statutoryDeductionObject_1 = require("././statutoryDeductionObject");
const statutoryDeductions_1 = require("././statutoryDeductions");
const superannuationLine_1 = require("././superannuationLine");
const superannuationObject_1 = require("././superannuationObject");
const superannuations_1 = require("././superannuations");
const taxCode_1 = require("././taxCode");
const taxLine_1 = require("././taxLine");
const taxSettings_1 = require("././taxSettings");
const timesheet_1 = require("././timesheet");
const timesheetEarningsLine_1 = require("././timesheetEarningsLine");
const timesheetLine_1 = require("././timesheetLine");
const timesheetLineObject_1 = require("././timesheetLineObject");
const timesheetObject_1 = require("././timesheetObject");
const timesheets_1 = require("././timesheets");
const trackingCategories_1 = require("././trackingCategories");
const trackingCategory_1 = require("././trackingCategory");
/* tslint:disable:no-unused-variable */
let primitives = [
    "string",
    "boolean",
    "double",
    "integer",
    "long",
    "float",
    "number",
    "any"
];
let enumsMap = {
    "Account.TypeEnum": account_1.Account.TypeEnum,
    "BankAccount.CalculationTypeEnum": bankAccount_1.BankAccount.CalculationTypeEnum,
    "Benefit.CategoryEnum": benefit_1.Benefit.CategoryEnum,
    "Benefit.CalculationTypeNZEnum": benefit_1.Benefit.CalculationTypeNZEnum,
    "Deduction.DeductionCategoryEnum": deduction_1.Deduction.DeductionCategoryEnum,
    "EarningsRate.EarningsTypeEnum": earningsRate_1.EarningsRate.EarningsTypeEnum,
    "EarningsRate.RateTypeEnum": earningsRate_1.EarningsRate.RateTypeEnum,
    "Employee.GenderEnum": employee_1.Employee.GenderEnum,
    "EmployeeLeaveType.ScheduleOfAccrualEnum": employeeLeaveType_1.EmployeeLeaveType.ScheduleOfAccrualEnum,
    "EmployeeStatutoryLeaveBalance.LeaveTypeEnum": employeeStatutoryLeaveBalance_1.EmployeeStatutoryLeaveBalance.LeaveTypeEnum,
    "EmployeeStatutoryLeaveBalance.UnitsEnum": employeeStatutoryLeaveBalance_1.EmployeeStatutoryLeaveBalance.UnitsEnum,
    "EmployeeStatutoryLeaveSummary.TypeEnum": employeeStatutoryLeaveSummary_1.EmployeeStatutoryLeaveSummary.TypeEnum,
    "EmployeeStatutoryLeaveSummary.StatusEnum": employeeStatutoryLeaveSummary_1.EmployeeStatutoryLeaveSummary.StatusEnum,
    "EmployeeStatutorySickLeave.EntitlementFailureReasonsEnum": employeeStatutorySickLeave_1.EmployeeStatutorySickLeave.EntitlementFailureReasonsEnum,
    "EmployeeTax.KiwiSaverContributionsEnum": employeeTax_1.EmployeeTax.KiwiSaverContributionsEnum,
    "LeavePeriod.PeriodStatusEnum": leavePeriod_1.LeavePeriod.PeriodStatusEnum,
    "PayRun.PayRunStatusEnum": payRun_1.PayRun.PayRunStatusEnum,
    "PayRun.PayRunTypeEnum": payRun_1.PayRun.PayRunTypeEnum,
    "PayRun.CalendarTypeEnum": payRun_1.PayRun.CalendarTypeEnum,
    "PayRunCalendar.CalendarTypeEnum": payRunCalendar_1.PayRunCalendar.CalendarTypeEnum,
    "PaySlip.PaymentMethodEnum": paySlip_1.PaySlip.PaymentMethodEnum,
    "PaymentMethod.PaymentMethodEnum": paymentMethod_1.PaymentMethod.PaymentMethodEnum,
    "Reimbursement.ReimbursementCategoryEnum": reimbursement_1.Reimbursement.ReimbursementCategoryEnum,
    "Reimbursement.CalculationTypeEnum": reimbursement_1.Reimbursement.CalculationTypeEnum,
    "Reimbursement.StandardTypeOfUnitsEnum": reimbursement_1.Reimbursement.StandardTypeOfUnitsEnum,
    "SalaryAndWage.StatusEnum": salaryAndWage_1.SalaryAndWage.StatusEnum,
    "SalaryAndWage.PaymentTypeEnum": salaryAndWage_1.SalaryAndWage.PaymentTypeEnum,
    "StatutoryDeductionCategory": statutoryDeductionCategory_1.StatutoryDeductionCategory,
    "TaxCode": taxCode_1.TaxCode,
    "TaxSettings.PeriodTypeEnum": taxSettings_1.TaxSettings.PeriodTypeEnum,
    "Timesheet.StatusEnum": timesheet_1.Timesheet.StatusEnum,
};
let typeMap = {
    "Account": account_1.Account,
    "Accounts": accounts_1.Accounts,
    "Address": address_1.Address,
    "BankAccount": bankAccount_1.BankAccount,
    "Benefit": benefit_1.Benefit,
    "Deduction": deduction_1.Deduction,
    "DeductionLine": deductionLine_1.DeductionLine,
    "DeductionObject": deductionObject_1.DeductionObject,
    "Deductions": deductions_1.Deductions,
    "EarningsLine": earningsLine_1.EarningsLine,
    "EarningsOrder": earningsOrder_1.EarningsOrder,
    "EarningsOrderObject": earningsOrderObject_1.EarningsOrderObject,
    "EarningsOrders": earningsOrders_1.EarningsOrders,
    "EarningsRate": earningsRate_1.EarningsRate,
    "EarningsRateObject": earningsRateObject_1.EarningsRateObject,
    "EarningsRates": earningsRates_1.EarningsRates,
    "EarningsTemplate": earningsTemplate_1.EarningsTemplate,
    "EarningsTemplateObject": earningsTemplateObject_1.EarningsTemplateObject,
    "Employee": employee_1.Employee,
    "EmployeeEarningsTemplates": employeeEarningsTemplates_1.EmployeeEarningsTemplates,
    "EmployeeLeave": employeeLeave_1.EmployeeLeave,
    "EmployeeLeaveBalance": employeeLeaveBalance_1.EmployeeLeaveBalance,
    "EmployeeLeaveBalances": employeeLeaveBalances_1.EmployeeLeaveBalances,
    "EmployeeLeaveObject": employeeLeaveObject_1.EmployeeLeaveObject,
    "EmployeeLeaveSetup": employeeLeaveSetup_1.EmployeeLeaveSetup,
    "EmployeeLeaveSetupObject": employeeLeaveSetupObject_1.EmployeeLeaveSetupObject,
    "EmployeeLeaveType": employeeLeaveType_1.EmployeeLeaveType,
    "EmployeeLeaveTypeObject": employeeLeaveTypeObject_1.EmployeeLeaveTypeObject,
    "EmployeeLeaveTypes": employeeLeaveTypes_1.EmployeeLeaveTypes,
    "EmployeeLeaves": employeeLeaves_1.EmployeeLeaves,
    "EmployeeObject": employeeObject_1.EmployeeObject,
    "EmployeeOpeningBalance": employeeOpeningBalance_1.EmployeeOpeningBalance,
    "EmployeeOpeningBalancesObject": employeeOpeningBalancesObject_1.EmployeeOpeningBalancesObject,
    "EmployeePayTemplate": employeePayTemplate_1.EmployeePayTemplate,
    "EmployeePayTemplateObject": employeePayTemplateObject_1.EmployeePayTemplateObject,
    "EmployeePayTemplates": employeePayTemplates_1.EmployeePayTemplates,
    "EmployeeStatutoryLeaveBalance": employeeStatutoryLeaveBalance_1.EmployeeStatutoryLeaveBalance,
    "EmployeeStatutoryLeaveBalanceObject": employeeStatutoryLeaveBalanceObject_1.EmployeeStatutoryLeaveBalanceObject,
    "EmployeeStatutoryLeaveSummary": employeeStatutoryLeaveSummary_1.EmployeeStatutoryLeaveSummary,
    "EmployeeStatutoryLeavesSummaries": employeeStatutoryLeavesSummaries_1.EmployeeStatutoryLeavesSummaries,
    "EmployeeStatutorySickLeave": employeeStatutorySickLeave_1.EmployeeStatutorySickLeave,
    "EmployeeStatutorySickLeaveObject": employeeStatutorySickLeaveObject_1.EmployeeStatutorySickLeaveObject,
    "EmployeeStatutorySickLeaves": employeeStatutorySickLeaves_1.EmployeeStatutorySickLeaves,
    "EmployeeTax": employeeTax_1.EmployeeTax,
    "EmployeeTaxObject": employeeTaxObject_1.EmployeeTaxObject,
    "Employees": employees_1.Employees,
    "Employment": employment_1.Employment,
    "EmploymentObject": employmentObject_1.EmploymentObject,
    "GrossEarningsHistory": grossEarningsHistory_1.GrossEarningsHistory,
    "InvalidField": invalidField_1.InvalidField,
    "LeaveAccrualLine": leaveAccrualLine_1.LeaveAccrualLine,
    "LeaveEarningsLine": leaveEarningsLine_1.LeaveEarningsLine,
    "LeavePeriod": leavePeriod_1.LeavePeriod,
    "LeavePeriods": leavePeriods_1.LeavePeriods,
    "LeaveType": leaveType_1.LeaveType,
    "LeaveTypeObject": leaveTypeObject_1.LeaveTypeObject,
    "LeaveTypes": leaveTypes_1.LeaveTypes,
    "Pagination": pagination_1.Pagination,
    "PayRun": payRun_1.PayRun,
    "PayRunCalendar": payRunCalendar_1.PayRunCalendar,
    "PayRunCalendarObject": payRunCalendarObject_1.PayRunCalendarObject,
    "PayRunCalendars": payRunCalendars_1.PayRunCalendars,
    "PayRunObject": payRunObject_1.PayRunObject,
    "PayRuns": payRuns_1.PayRuns,
    "PaySlip": paySlip_1.PaySlip,
    "PaySlipObject": paySlipObject_1.PaySlipObject,
    "PaySlips": paySlips_1.PaySlips,
    "PaymentLine": paymentLine_1.PaymentLine,
    "PaymentMethod": paymentMethod_1.PaymentMethod,
    "PaymentMethodObject": paymentMethodObject_1.PaymentMethodObject,
    "Problem": problem_1.Problem,
    "Reimbursement": reimbursement_1.Reimbursement,
    "ReimbursementLine": reimbursementLine_1.ReimbursementLine,
    "ReimbursementObject": reimbursementObject_1.ReimbursementObject,
    "Reimbursements": reimbursements_1.Reimbursements,
    "SalaryAndWage": salaryAndWage_1.SalaryAndWage,
    "SalaryAndWageObject": salaryAndWageObject_1.SalaryAndWageObject,
    "SalaryAndWages": salaryAndWages_1.SalaryAndWages,
    "Settings": settings_1.Settings,
    "StatutoryDeduction": statutoryDeduction_1.StatutoryDeduction,
    "StatutoryDeductionLine": statutoryDeductionLine_1.StatutoryDeductionLine,
    "StatutoryDeductionObject": statutoryDeductionObject_1.StatutoryDeductionObject,
    "StatutoryDeductions": statutoryDeductions_1.StatutoryDeductions,
    "SuperannuationLine": superannuationLine_1.SuperannuationLine,
    "SuperannuationObject": superannuationObject_1.SuperannuationObject,
    "Superannuations": superannuations_1.Superannuations,
    "TaxLine": taxLine_1.TaxLine,
    "TaxSettings": taxSettings_1.TaxSettings,
    "Timesheet": timesheet_1.Timesheet,
    "TimesheetEarningsLine": timesheetEarningsLine_1.TimesheetEarningsLine,
    "TimesheetLine": timesheetLine_1.TimesheetLine,
    "TimesheetLineObject": timesheetLineObject_1.TimesheetLineObject,
    "TimesheetObject": timesheetObject_1.TimesheetObject,
    "Timesheets": timesheets_1.Timesheets,
    "TrackingCategories": trackingCategories_1.TrackingCategories,
    "TrackingCategory": trackingCategory_1.TrackingCategory,
};
class ObjectSerializer {
    static findCorrectType(data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }
            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }
            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            }
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType; // use the type given in the discriminator
                    }
                    else {
                        return expectedType; // discriminator did not map to a type
                    }
                }
                else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }
    static serialize(data, type) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType));
            }
            if (subType === 'string') {
                return transformedData.join(',');
            }
            else {
                return transformedData;
            }
        }
        else if (type === "Date") {
            return data.toISOString();
        }
        else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }
            // Get the actual type of this object
            type = this.findCorrectType(data, type);
            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance = {};
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }
    static deserializeDateFormats(type, data) {
        const isDate = new Date(data);
        if (isNaN(isDate.getTime())) {
            const re = /-?\d+/;
            const m = re.exec(data);
            return new Date(parseInt(m[0], 10));
        }
        else {
            return isDate;
        }
    }
    static deserialize(data, type) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            if (type === "string" && data.toString().substring(0, 6) === "/Date(") {
                return this.deserializeDateFormats(type, data); // For MS dates that are of type 'string'
            }
            else {
                return data;
            }
        }
        else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData = [];
            // Asset API returns string even for Array<Model>
            const dataFormatted = typeof data == 'string' ? JSON.parse(data) : data;
            for (let index in dataFormatted) {
                let currentData = dataFormatted[index];
                transformedData.push(ObjectSerializer.deserialize(currentData, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return this.deserializeDateFormats(type, data);
        }
        else {
            if (enumsMap[type]) { // is Enum
                return data;
            }
            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}
exports.ObjectSerializer = ObjectSerializer;
class HttpBasicAuth {
    constructor() {
        this.username = '';
        this.password = '';
    }
    applyToRequest(requestOptions) {
        requestOptions.auth = {
            username: this.username, password: this.password
        };
    }
}
exports.HttpBasicAuth = HttpBasicAuth;
class ApiKeyAuth {
    constructor(location, paramName) {
        this.location = location;
        this.paramName = paramName;
        this.apiKey = '';
    }
    applyToRequest(requestOptions) {
        if (this.location == "query") {
            requestOptions.qs[this.paramName] = this.apiKey;
        }
        else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        }
    }
}
exports.ApiKeyAuth = ApiKeyAuth;
class OAuth {
    constructor() {
        this.accessToken = '';
    }
    applyToRequest(requestOptions) {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}
exports.OAuth = OAuth;
class VoidAuth {
    constructor() {
        this.username = '';
        this.password = '';
    }
    applyToRequest(_) {
        // Do nothing
    }
}
exports.VoidAuth = VoidAuth;
//# sourceMappingURL=models.js.map