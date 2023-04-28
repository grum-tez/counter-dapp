import * as ex from "@completium/experiment-ts";
import * as att from "@completium/archetype-ts-types";
const add_one_arg_to_mich = (): att.Micheline => {
    return att.unit_mich;
}
export class Counter {
    address: string | undefined;
    constructor(address: string | undefined = undefined) {
        this.address = address;
    }
    get_address(): att.Address {
        if (undefined != this.address) {
            return new att.Address(this.address);
        }
        throw new Error("Contract not initialised");
    }
    async get_balance(): Promise<att.Tez> {
        if (null != this.address) {
            return await ex.get_balance(new att.Address(this.address));
        }
        throw new Error("Contract not initialised");
    }
    async deploy(params: Partial<ex.Parameters>) {
        const address = (await ex.deploy("./contracts/counter.arl", {}, params)).address;
        this.address = address;
    }
    async add_one(params: Partial<ex.Parameters>): Promise<att.CallResult> {
        if (this.address != undefined) {
            return await ex.call(this.address, "add_one", add_one_arg_to_mich(), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_add_one_param(params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "add_one", add_one_arg_to_mich(), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_count(): Promise<att.Int> {
        if (this.address != undefined) {
            const storage = await ex.get_raw_storage(this.address);
            return att.Int.from_mich(storage);
        }
        throw new Error("Contract not initialised");
    }
    errors = {};
}
export const counter = new Counter();
