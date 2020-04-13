import { Observable } from 'rxjs';

export interface IService<T> {

    create(item: T): Observable<T>;
    update(id: number, item: T);
    delete(id: number);
    getAll(): Observable<T[]>;
    getByID(id: number): Observable<T>;
}