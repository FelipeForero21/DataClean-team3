import { Injectable } from '@nestjs/common';

@Injectable()
export class SomeFeatureService {
  private data = [];

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
    