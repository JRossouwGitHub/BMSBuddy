/// <reference path="untyped.d.ts" />
/// <reference types="node" />
import { TokenSet } from 'openid-client';
import * as xero from './gen/api';
import http = require('http');
export interface IXeroClientConfig {
    clientId: string;
    clientSecret: string;
    redirectUris: string[];
    scopes: string[];
    state?: string;
    httpTimeout?: number;
}
export interface XeroIdToken {
    nbf: number;
    exp: number;
    iss: string;
    aud: string;
    iat: number;
    at_hash: string;
    sid: string;
    sub: string;
    auth_time: number;
    idp: string;
    xero_userid: string;
    global_session_id: string;
    preferred_username: string;
    email: string;
    given_name: string;
    family_name: string;
    amr: string[];
}
export interface XeroAccessToken {
    nbf: number;
    exp: number;
    iss: string;
    aud: string;
    client_id: string;
    sub: string;
    auth_time: number;
    idp: string;
    xero_userid: string;
    global_session_id: string;
    jti: string;
    scope: string[];
    amr: string[];
}
export declare class XeroClient {
    readonly config?: IXeroClientConfig;
    constructor(config?: IXeroClientConfig);
    private tokenSet;
    private _tenants;
    readonly accountingApi: xero.AccountingApi;
    readonly assetApi: xero.AssetApi;
    readonly projectApi: xero.ProjectApi;
    readonly payrollAUApi: xero.PayrollAuApi;
    readonly bankFeedsApi: xero.BankFeedsApi;
    readonly payrollUKApi: xero.PayrollUkApi;
    readonly payrollNZApi: xero.PayrollNzApi;
    openIdClient: any;
    get tenants(): any[];
    initialize(): Promise<this>;
    buildConsentUrl(): Promise<any>;
    apiCallback(callbackUrl: string): Promise<TokenSet>;
    disconnect(connectionId: string): Promise<TokenSet>;
    readIdTokenClaims(): import("openid-client").IdTokenClaims;
    readTokenSet(): TokenSet;
    setTokenSet(tokenSet: TokenSet): void;
    refreshToken(): Promise<TokenSet>;
    encodeBody(params: any): any;
    formatMsDate(dateString: string): string;
    refreshWithRefreshToken(clientId: any, clientSecret: any, refreshToken: any): Promise<TokenSet>;
    postWithRefreshToken(clientId: any, clientSecret: any, refreshToken: any): Promise<{
        response: http.IncomingMessage;
        body: string;
    }>;
    updateTenants(fullOrgDetails?: boolean): Promise<{
        id: string;
        tenantId: string;
        tenantName: string;
        tenantType: string;
        orgData: any;
    }[]>;
    queryApi(method: any, uri: any): Promise<{
        response: http.IncomingMessage;
        body: {
            id: string;
            tenantId: string;
            tenantName: string;
            tenantType: string;
            orgData: any;
        }[];
    }>;
    private setAccessToken;
}
