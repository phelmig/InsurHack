
export const KEY_ACCOUNT_DATA = "accountData";

export const KEY_POLICY_DATA = "policyData";

export const KEY_ESTIMATION = "estimation";

export const KEY_ADDITIONAL_DATA = "additionalData";

/**
 * Simple interface to the Local Storage
 */
export class LocalStorageService {

    write(key: string, value: any) {
        if (value) {
            value = JSON.stringify(value);
        }
        localStorage.setItem(key, value);
    }

    read<T>(key: string): T {
        let value: string = localStorage.getItem(key);

        if (value && value != "undefined" && value != "null") {
            return <T>JSON.parse(value);
        }

        return null;
    }

    clear() {
        localStorage.clear();
    }

}