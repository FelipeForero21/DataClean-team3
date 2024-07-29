import { Injectable } from '@nestjs/common';

@Injectable()
export class SomeFeatureService {
  private data = [
    // Ejemplo de datos
    { id: 1, name: 'John Doe', age: 25 },
    { id: 2, name: 'Jane Smith', age: 30 },
    { id: 3, name: 'Mike Johnson', age: 20 },
  ];

  getData(): any[] {
    return this.data;
  }

  sortData(data: any[], column: string, order: 'asc' | 'desc' = 'asc'): any[] {
    return data.sort((a, b) => {
      if (order === 'asc') {
        return a[column] > b[column] ? 1 : -1;
      } else {
        return a[column] < b[column] ? 1 : -1;
      }
    });
  }
}
    