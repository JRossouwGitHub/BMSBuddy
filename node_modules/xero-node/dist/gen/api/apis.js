"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./accountingApi"));
__export(require("./assetApi"));
__export(require("./projectApi"));
__export(require("./payrollAUApi"));
__export(require("./bankfeedsApi"));
__export(require("./payrollUKApi"));
__export(require("./payrollNZApi"));
const accountingApi_1 = require("./accountingApi");
const assetApi_1 = require("./assetApi");
const projectApi_1 = require("./projectApi");
const payrollAUApi_1 = require("./payrollAUApi");
const bankfeedsApi_1 = require("./bankfeedsApi");
const payrollUKApi_1 = require("./payrollUKApi");
const payrollNZApi_1 = require("./payrollNZApi");
exports.APIS = [accountingApi_1.AccountingApi, assetApi_1.AssetApi, projectApi_1.ProjectApi, payrollAUApi_1.PayrollAuApi, bankfeedsApi_1.BankFeedsApi, payrollUKApi_1.PayrollUkApi, payrollNZApi_1.PayrollNzApi];
//# sourceMappingURL=apis.js.map