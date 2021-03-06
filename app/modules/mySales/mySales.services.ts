import {Config} from "../core/config";
import {Injectable} from "@angular/core";
import {DataServices} from "../core/services/data.services";
import {Transaction} from "./mySales.models";

@Injectable()

export class MySalesServices {

    private apiUrl: string;

    constructor(private _dataServices: DataServices) {
        this.apiUrl = "transacciones/ventas/";
    }

    public getMySales(entityId: number): Promise<Array<Transaction>> {
        return this._dataServices.getData(Config.baseUrl + this.apiUrl + entityId).toPromise();
    }

}

