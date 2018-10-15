import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Constant } from "../commun/constant";

@Injectable()
export class HomeService{
    

    /**
     * Constructor
     * @param _httpClient
     */
    constructor(private _httpClient: HttpClient) {

    }

    public GET(keywords :string):Observable<any>
    {

        return this._httpClient.get<any>(`${Constant.baseUrl}${Constant.searchByKey}`+'/'+keywords);
    }
}